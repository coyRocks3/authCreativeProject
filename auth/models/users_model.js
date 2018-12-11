var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: { type: String, unique: true },
    email: String,
    color: String,
    hashed_password: String,
    user_images: { type : Array , "default" : [] }
    //contain object with 3 strings: title, description, imageURL
});
mongoose.model('User', UserSchema);