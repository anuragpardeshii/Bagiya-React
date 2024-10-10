const { model } = require("mongoose");

const { UserSchema }= require('../Schema/UserSchema');

const UserModel = new model("user", UserSchema);
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
  });
  
module.exportss={ UserModel };