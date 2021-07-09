/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  
  attributes: {
    name:{
      type : "string",
      required: true  
  },
  title:{
      type:"string"
  },
  email:{
      type:"string",
      required:true,
      email:true,
      unique:true
  },
  encryptedPassword:{
      type:"string"
  },
   
  toJSON: function() {
    var obj = this.toObject();
    delete obj.password;
    delete obj.confirmation;
    delete obj.encryptedPassword;
    delete obj._csrf;
    return obj;
  },

  }
};

