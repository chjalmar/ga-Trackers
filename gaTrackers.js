function getEventos() {
  var eventos = [
  	{
  	  'ID': 'trackLogo',
  	  'tipo': 'menu',
  	  'nombre': 'logo',
  	  'tipo_url': 'href_current',
  	  'crear': crearEvento
  	},
  	{
  		'ID': 'trackBurger',
  	  'tipo': 'menu',
  	  'nombre': 'hamburger',
  	  'tipo_url': 'href_current',
  	  'crear': crearEvento
  	},
    {
    	'ID': 'trackReadmore',
  	  'tipo': 'page',
  	  'nombre': 'readmore',
  	  'tipo_url': 'href_current',
  	  'crear': crearEvento
  	},
  	{
  		'ID': 'trackShareFb',
  	  'tipo': 'page',
  	  'nombre': 'Facebook',
  	  'tipo_url': 'href_go',
  	  'crear': crearEvento
  	},
  	{
  		'ID': 'trackShareTw',
  	  'tipo': 'page',
  	  'nombre': 'Twitter',
  	  'tipo_url': 'href_go',
  	  'crear': crearEvento
  	},
  	{
  		'ID': 'trackShareWa',
  	  'tipo': 'page',
  	  'nombre': 'Whatsapp',
  	  'tipo_url': 'href_go',
  	  'crear': crearEvento
  	},
  	{
  		'ID': 'trackShareMail',
  	  'tipo': 'page',
  	  'nombre': 'Email',
  	  'tipo_url': 'href_go',
  	  'crear': crearEvento
  	},
  	{ //OJO Wildcard todas las rel-
  		'ID': 'rel-',
  	  'tipo': 'page',
  	  'nombre': 'recomendada',
  	  'tipo_url': 'href_go',
  	  'crear': crearEvento
  	}  	
  ];
  return eventos;	
}

function crearEvento() {
    var theUrl = "";
    var evento = this;
  	if (evento.nombre !== "recomendada") {
  		$("#" + evento.ID).click(function(e, i) {
  			var theUrl = "";
        if (evento.tipo_url == "href_current") {
        	theUrl = e.currentTarget.href;
        } else {
        	theUrl = $(this).attr("href");
        }
        
        ga('send', 'event', evento.tipo, evento.nombre, theUrl);
      });
  	} else if (evento.nombre == "recomendada") {
  		$("[id^=rel-] a").click(function(e) {
        var theUrl = $(this).attr("href");
        ga('send', 'event', evento.tipo, evento.nombre, theUrl);
      });
  	}	
}

$(document).ready(function() {
  var eventos = getEventos();
  for (var i = 0; i < eventos.length; i++) {
  	eventos[i].crear();
  }
});


