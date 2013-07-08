orangutan
=========

Prototype for under-the-covers OpenPGP encryption through a browser extension.  The core concept here is that you can select text in a text area, choose "Encrypt" and choose participants to encrypt a message for.  The message will be in the form of a URI, which can be shared on sites, such as Facebook.  When other browsers with the Chrome extension installed see an "encrypted"-URI in a text-node on a page, they will run a decode algorithm on the message to seamlessly decrypt the message.  The idea is that you could share your public key through Facebook or other social networks, and paste encrpyted messages as URIs or photographs with specific EXIF.

# TODO

* Get OpenPGP.js properly decoding encrpyted-URIs
* Consider methods for key management (e.g. through a special Facebook photo)
* Consider if encrypted-URI is too long, in which case using bit.ly or other link shorteners as a message-holder
* Consider using simple photographs instead of encrypted-URIs
* Consider ways to re-key messages if "friends" request access
* Consider other security flaws
* Consider UX for encrypted (hot-key? choosing "friends"?)