#include "argon2/include/argon2.h"

#ifdef __pnacl__

#include <ppapi/cpp/instance.h>
#include <ppapi/cpp/module.h>
#include <ppapi/cpp/var.h>
#include <ppapi/cpp/var_dictionary.h>

class Argon2Instance : public pp::Instance {
 public:
  explicit Argon2Instance(PP_Instance instance)
      : pp::Instance(instance) {}
  virtual ~Argon2Instance() {}

  virtual void HandleMessage(const pp::Var& msg) {
    if (!msg.is_dictionary())
      return;
    pp::VarDictionary req(msg);
    if(req.HasKey(pp::Var("method")))
      {
        if(req.Get(pp::Var("method")).AsString() =="argon2_hash")
          Handle_argon2_hash(msg);
        if(req.Get(pp::Var("method")).AsString() =="argon2_verify")
          Handle_argon2_verify(msg);
      }
    else //backward compatibility
      {
          Handle_argon2_hash(msg);
      }

  }

  virtual void Handle_argon2_hash(const pp::Var& msg) {
    if (!msg.is_dictionary())
      return;
   
    pp::VarDictionary req(msg);

    int t_cost = req.Get(pp::Var("time")).AsInt();
    int m_cost = req.Get(pp::Var("mem")).AsInt();
    int parallelism = req.Get(pp::Var("parallelism")).AsInt();
    auto passStr = req.Get(pp::Var("pass")).AsString();
    int pwdlen = passStr.length();
    const char* pwd = passStr.c_str();
    auto saltStr = req.Get(pp::Var("salt")).AsString();
    int saltlen = saltStr.length();
    const char* salt = saltStr.c_str();
    int hashlen = req.Get(pp::Var("hashLen")).AsInt();
    unsigned char hash[10240];
    int encodedlen = 10240;
    char encoded[encodedlen];
    int argon2_type = req.Get(pp::Var("type")).AsInt();
    int version = ARGON2_VERSION_13;

    int res = argon2_hash(t_cost, m_cost, parallelism, pwd, pwdlen, salt, saltlen,
                    hash, hashlen, encoded, encodedlen,
                    argon2_type == 1 ? Argon2_i : Argon2_d, version);
    pp::VarDictionary reply;
    reply.Set(pp::Var("res"), res);
    if (res == 0) {
        char hashHex[hashlen * 2 + 1];
        for (int i = 0; i < hashlen; i++) {
            sprintf(&hashHex[i * 2], "%02x", hash[i]);
        }
        reply.Set(pp::Var("hash"), hashHex);
        reply.Set(pp::Var("encoded"), encoded);
    } else {
        reply.Set(pp::Var("error"), argon2_error_message(res));
    }
    PostMessage(reply);
  }
  virtual void Handle_argon2_verify(const pp::Var& msg) {
    if (!msg.is_dictionary())
      return;
   
    pp::VarDictionary req(msg);

    auto passStr = req.Get(pp::Var("pass")).AsString();
    int pwdlen = passStr.length();
    const char* pwd = passStr.c_str();
    auto encodedStr = req.Get(pp::Var("encodedString")).AsString();
    //int encodedlen = encodedStr.length();
    const char* encoded = encodedStr.c_str();
    int argon2_type = req.Get(pp::Var("type")).AsInt();

    int res = argon2_verify(encoded, pwd, pwdlen,
                    argon2_type == 1 ? Argon2_i : Argon2_d);
    pp::VarDictionary reply;
    reply.Set(pp::Var("res"), res==0);
    reply.Set(pp::Var("message"), argon2_error_message(res));
 
    PostMessage(reply);
  }
};

class Argon2Module : public pp::Module {
 public:
  Argon2Module() : pp::Module() {}
  virtual ~Argon2Module() {}

  virtual pp::Instance* CreateInstance(PP_Instance instance) {
    return new Argon2Instance(instance);
  }
};

namespace pp {

Module* CreateModule() {
  return new Argon2Module();
}

}

#endif
