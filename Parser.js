const htmlparser = require("htmlparser2");

let config = {
  // onopentag: function (name, attribs){
  //   if(name === "div"){
  //     console.log('found div')
  //   }
  // },
  _EmailMessageBody: [],
  ontext: function (text){
    console.log("-->", text);
    this._EmailMessageBody.push(text)
  },
  onend: function () {
  	console.log(this._EmailMessageBody.join('\n'))
  	this._EmailMessageBody = []
  }
  // onclosetag: function (tagname){
  //   if(tagname === "div"){
  //     console.log("closing tag");
  //   }
  // }
}

// parsing service for email bodies
var MessageParser = new htmlparser.Parser( config, {decodeEntities: true});

module.exports = MessageParser;