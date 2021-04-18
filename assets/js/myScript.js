var templateNum = 0;
var templateTitle = "";
function findTemplate() {
  templateNum =
    (document.getElementById("userInfo1").value.length +
      document.getElementById("userInfo2").value.length +
      document.getElementById("userInfo3").value.length +
      document.getElementById("userInfo4").value.length +
      document.getElementById("userInfo5").value.length +
      document.getElementById("userInfo6").value.length) %
    5;

  if (templateNum == 0) {
    templateTitle = "Hacked in a Jiffy!";
    document.getElementById("blank0").placeholder = "Something You Can Look At";
    document.getElementById("blank1").placeholder = "Name of a Messaging App";
    document.getElementById("blank2").placeholder = "Noun";
    document.getElementById("blank3").placeholder = "Verb";
    document.getElementById("blank4").placeholder = "Name of a Country";
    document.getElementById("blank5").placeholder = "Verb with -ing";
    document.getElementById("blank6").placeholder = "Body Part";
    document.getElementById("blank7").placeholder = "Number";
    document.getElementById("blank8").placeholder = "Unit of Time";
    document.getElementById("blank9").placeholder = "Media Forum";
  } else if (templateNum == 1) {
    templateTitle = "Think about it.";
    document.getElementById("blank0").placeholder = "Something in Your Room";
    document.getElementById("blank1").placeholder = "Famous Person";
    document.getElementById("blank2").placeholder = "Person of a Certain Occupation";
    document.getElementById("blank3").placeholder = "Name of a Country";
    document.getElementById("blank4").placeholder = "Noun";
    document.getElementById("blank5").placeholder = "Another Noun";
    document.getElementById("blank6").placeholder = "Verb";
    document.getElementById("blank7").placeholder = "Piece of Modern Technology";
    document.getElementById("blank8").placeholder = "Noun";
    document.getElementById("blank9").placeholder = "Another noun";
  } else if (templateNum == 2) {
    templateTitle = "Have you heard about this new app?";
    document.getElementById("blank0").placeholder = "Name of a Country";
    document.getElementById("blank1").placeholder = "Name of a Mobile App";
    document.getElementById("blank2").placeholder = "A Robot's Name";
    document.getElementById("blank3").placeholder = "Of Another Country (-ish, -ese -an, etc.)";
    document.getElementById("blank4").placeholder = "Adjective";
    document.getElementById("blank5").placeholder = "Popular Website";
    document.getElementById("blank6").placeholder = "Another Adjective";
    document.getElementById("blank7").placeholder = "Another Adjective";
    document.getElementById("blank8").placeholder = "Another Adjective";
    document.getElementById("blank9").placeholder = "Plural Noun";
} else if (templateNum == 3) {
    templateTitle = "Psst. Dangerous Things. Pass it on.";
    document.getElementById("blank0").placeholder = "News Source";
    document.getElementById("blank1").placeholder = "Name of a Messaging App";
    document.getElementById("blank2").placeholder = "Celebrity Last Name";
    document.getElementById("blank3").placeholder = "Verb";
    document.getElementById("blank4").placeholder = "Noun";
    document.getElementById("blank5").placeholder = "Verb with -s";
    document.getElementById("blank6").placeholder = "Noun";
    document.getElementById("blank7").placeholder = "Adjective";
    document.getElementById("blank8").placeholder = "Celebrity";
    document.getElementById("blank9").placeholder = "Another News Source";
  } else if (templateNum == 4) {
    templateTitle = "Get rid of all your gifs, immediately!";
    document.getElementById("blank0").placeholder = "Noun";
    document.getElementById("blank1").placeholder = "Another Noun";
    document.getElementById("blank2").placeholder = "Category (plural form)";
    document.getElementById("blank3").placeholder = "Celebrity";
    document.getElementById("blank4").placeholder = "News Source";
    document.getElementById("blank5").placeholder = "Name of Country";
    document.getElementById("blank6").placeholder = "Something Personal (Noun)";
    document.getElementById("blank7").placeholder = "Number";
    document.getElementById("blank8").placeholder = "Figure of Speech or Saying";
    document.getElementById("blank9").placeholder = "Verb with an Object";
  }

  document.getElementById("TemplateTitle1").innerHTML = templateTitle;
}

function generateSpam() {
  document.getElementById("TemplateTitle2").innerHTML = templateTitle;
    var blank0 = document.getElementById("blank0").value;
    var blank1 = document.getElementById("blank1").value;
    var blank2 = document.getElementById("blank2").value;
    var blank3 = document.getElementById("blank3").value;
    var blank4 = document.getElementById("blank4").value;
    var blank5 = document.getElementById("blank5").value;
    var blank6 = document.getElementById("blank6").value;
    var blank7 = document.getElementById("blank7").value;
    var blank8 = document.getElementById("blank8").value;
    var blank9 = document.getElementById("blank9").value;
    var spam = "";
  if (templateNum == 0) {

    spam = "They are going to start circulating a " + blank0 + " on " + blank1 
    + " that shows how the " + blank2 + " is " + blank3 + " in " + blank4 
    + ". The " + blank0 + " is called '" + blank4 + " is " + blank5 
    + " it', do not open it or see it, it hacks your " + blank6 + " in " + blank7 + " " 
    + blank8 + " and it cannot be stopped in any way. <br\>"
    + "Pass the information on to your family and friends. <br\> Now they also said it on " + blank9;

  } else if (templateNum == 1) {

    spam = "When anything is free, your " + blank0 + " is the price. " + blank1 
    + " once said: When " + blank2 + " came to " + blank3 + ", they had the " + blank4 
    + " and we had the " + blank5 + ". They said let us " + blank6 
    + ". We closed or eyes. When we opened them, we had the " + blank4 
    + " and they had the " + blank5 + ". Like wise, when " + blank7 
    + " came, they had " + blank8 + " and " + blank9 + ", and we had the " + blank0 
    + ". They said it's free. We closed our eyes. When we opened them, we had " + blank8 
    + " and " + blank9 + ", and they had our "+ blank0 + "."
    + "<br/> When anything is free, your " + blank0 + " is the price. "
    + "<br/> <br/> Think about it. ";
    
  } else if (templateNum == 2) {

    templateTitle = "Have you heard about this new app?";
    spam = blank0 + " has come up with its own version of " + blank1 
    + " by the name " + blank2 + ". Let’s make it a hit by installing it and uninstalling " + blank3 
    + " app " + blank1 + ". Together we can make it a truly " + blank4 
    + " App. Please forward it to others as well. "
    + "<br/>....................... <br/>"
    + "Say bye bye to " + blank5 + ". Our " + blank6 + " App is available  It's really " + blank7 
    + " and very " + blank8 + ". no need to create any " + blank9 + " also...";

  } else if (templateNum == 3) {

    spam = "From " + blank0 + " this morning : If you know anyone using " + blank1 
    + ", you might pass on this. Be advised that a video comes out tomorrow from " + blank1 
    + " called " + blank2 + ". Do not open it - it hacks your phone and nothing will fix it. Spread the word. " 
    + "Also, if you receive a message to update the " + blank1 + " to " + blank1 + " Gold, do not click !!!!! "
    + "Please inform all contacts from your list not to open a video called the '" + blank3 
    + " of the " + blank4 + "'. It is a virus that " + blank5 + " your " + blank6 
    + ". Beware it is very " + blank7 + ". " + blank8 + " announced it today on " + blank9 
    + ". <br/>Fwd this msg to as many as you can!";

  } else if (templateNum == 4) {
    document.getElementById("spamMessage").style.fontSize = "16px";
    document.getElementById("spamMessageContent").style.padding = "2em";
    document.getElementById("three").style.lineHeight = "85%";
    spam = "Starting tomorrow, do not send network pictures, look at the following article to understand. "
    + "Please delete all photos and videos of" + blank0 + ", " + blank1 + " and other " + blank2 + " as soon as possible. "
    + "Read the following article carefully and you will understand why. "
    + "Read all! Please send this message urgently to as many friends as possible to prevent illegal intrusion. "
    + "<br/>Warning from " + blank3 + " lawyer: <br/> "
    + "attention! For those who like to send " + blank2 + "! " + blank0 + "! " + blank1 + "! "
    + "Picture people, please do not send these good messages. "
    + "Today, " + blank4 + " sent out SOS to all subscribers (this is the third reminder), "
    + "and experts advise: Do not send pictures and videos of " + blank0 + ", " + blank1 + ", etc. "
    + "The report shows that hackers who attacked " + blank5 + " designed these images, "
    + "and these images and videos are beautiful, But there is a hidden phishing code, "
    + "and when everyone sends these messages, hackers use your device to steal personal information, "
    + "such as " + blank6 + " information and data, and break into your phone. "
    + "It is reported that more than "+ blank7 + " victims have been defrauded. "
    + "If you want to say hello to others, please write your own " + blank2 + " and "
    + "send your own pictures and videos so that you can protect yourself and your family and friends. "
    + "Important ！ To be safe, please be sure to delete all foreign " + blank2 + " and pictures on your phone. "
    + "If someone has sent you such images, remove them from your device immediately. "
    + "Malicious code takes some time to deploy, so if you take action immediately, there will be no harm done. "
    + "Tell all your friends to prevent being hacked. "
    + "Say " + blank8 + " in your own words and only send your own created images and videos to " + blank9 + " you, "
    + "which is completely safe for yourself, your family and friends. Please understand what i mean! "
    + "Everyone has " + blank6 + " attached to their mobile phone, and everyones mobile phone has many contacts. "
    + "This hack creates a threat not only to yourself, but to your phone, friends and acquaintances as well! "
    + "This is a brutal <br/> "
    + "This is a new technique used by terrorists to visit your mobile phone SIM card, "
    + "so that you become their accomplice!!!<br/> "
    + "* * * Send this message to as many of your relatives and friends "
    + "as possible to stop any unauthorised intrusions!!!";
  }
  document.getElementById("spamMessage").innerHTML = spam;
}
