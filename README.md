#Sinopsis
An organized JS way to create events for Google Analytics. I created an array of objects containing the information needed for each event, and a class that creates the Event for each one.

#Usage
I.E. If I want to track clicks in an <a> element with ID "trackLogo" like this one:
```html
<a id="trackLogo" href="http://www.example.com/" class="Example a elem">Example</a>
```
I should add this element into the object like this:

```javascript
{
 	  'ID': 'trackLogo',
 	  'tipo': 'menu',
 	  'nombre': 'logo',
 	  'tipo_url': 'href_go',
 	  'crear': crearEvento
}
```
"crear" is a method I can call to execute the function crearEvento, which uses the information contained in the class for creating the event and sending that info in an event like this one:

```javascript
ga('send', 'event', 'menu', 'logo', 'http://www.example.com/');
```
If I didn't want to send the href value of the <a> element, but the current location, I could set the "tipo_url" value to "href_current" instead of "href_go".