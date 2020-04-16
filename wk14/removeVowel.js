function removeVowel(string) {

        var characs = string.split("");
        return characs.map(function (charac) {
          if (/[AEIOUYaeiouy]/.test(charac)) {
            charac = "";
          } else {
            return charac;
          }
        }).join("");
      }
   
  

  module.exports = removeVowel;