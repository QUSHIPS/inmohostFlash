_FILE_UTIL_MEN// JavaScript Document

// declaracion de variables utiles

// pageSize.windowHeight . pageSize.windowWidth



// acceso al id de la ventana en foco alert(Windows.focusedWindow.getId());
// cerrr ventana en foco Windows.close(Windows.focusedWindow.getId());

var WinNews;
var WinPropiedad;
var WinPropiedadListado;
var WinPropiedadMedios;
var WinInformes;
var WinGraficos;
var WinRedInmo;
var WinEditor;
var WinListados;
var WinPanelControl;
var WinAgendaCitas;
var WinAgendaResumen;
var WinPrpPublicaciones;
var WinActualizador;
var WinAltaTasacion;
var WinEdicionSimple;
var WinVarios;
var WinUrlExterna;
var WinExportar;
var WinMail;
var WinDemandas;
var WinCoincidencia;
var WinFichaFoto;
var WinFichaImp;
var WinAltUsr;
var WinNovedades;
var WinBarPriv;
var WinPanelBackup;
var Win1
var Win2
var Win3
var Win4
var Win5
var Win6
var Win7
var Win8
var Win9
var Win10



function ventana(tipo, query, url, titulo){
	pageSize = WindowUtilities.getPageSize();
	
	var className;
	var title;
	var windows;
	var width;
	var heidth;
	var top = 0;
	var left = 0;
	var resizable = true;
	var closable = true;
	var minimizable = true;
	var maximizable = true;
	var draggable = true;
	var url;
	var WinTemp;
	var multi = false;
	var zIndex;
	var hReusable=480;
	var wReusable=650;
	var classNameReusable="inmohost";
	
			
	
	
	
	switch(tipo){

		case "news":
			WinTemp = "WinNews";
			windows = "news";
			className = "neutra";
			title = "<img src='interfaz/inmohost/images/iconos/rss.png' border='0' align='left' width='15' height='15' hspace='5' alt='Canal informaci�n RSS'/>Noticias";
			width = 210;
			height = 300;
			top = 75;
			left = pageSize.windowWidth - 240;
			resizable = false;
			closable = false;
			minimizable = false;
			maximizable = false;
			//draggable = false;
			url = "system/rss.php?"+query;
		break;
		case "prp_agregar":
		case "prp_modificar":
		case "prp_ficha":
			WinTemp = "WinPropiedad";
			windows = "propiedad";
			className = "inmohost";
			title = titulo;
			width = 650;
			height = 480;
			url = url+"?"+query;
			multi = true;
		break;
		case "prp_listado":
			WinTemp = "WinPropiedadListado";
			windows = "listadoPropiedades";
			className = "inmohost";
			title = titulo;
			width = 670;
			height = 450;
			url = url+"?"+query;
			multi = true;
		break;
		case "prp_medios":
			WinTemp = "WinPropiedadMedios";
			windows = "propiedadMedios";
			className = "inmohost";
			title = titulo;
			width = 750;
			height = 450;
			url = url+"?"+query;
			multi = true;
		break;
		case "inf_listado":
			WinTemp = "WinInformes";
			windows = "listadoInformes";
			className = "inmohost";
			title = titulo;
			width = 750;
			height = 400;
			url = url+"?"+query;
			multi = true;
		break;
		case "graficos":
			WinTemp = "WinGraficos";
			windows = "graficosInformes";
			className = "inmohost";
			title = titulo;
			width = 570;
			height = 420;
			resizable = false;
			minimizable = false;
			maximizable = false;
			url = url+"?"+query;
			multi = true;
		break;
		case "red_inmobiliarios":
			WinTemp = "WinRedInmo";
			windows = "red_inmobiliarios";
			className = "inmohost";
			title = titulo;
			width = 750;
			height = 475;
			resizable = false;
			minimizable = false;
			maximizable = false;
			url = url+"?"+query;
		break;
		case "editor":
			WinTemp = "WinEditor";
			windows = "editor";
			className = "inmohost";
			title = titulo;
			width = 650;
			height = 430;
			url = url+"?"+query;
			
		break;
		case "generico_listado":
			WinTemp = "WinListados";
			windows = "generico_listado";
			className = "inmohost";
			title = titulo;
			width = 750;
			height = 450;
			url = url+"?"+query;
			multi = true;
		break;
		case "panel_control":
			WinTemp = "WinPanelControl";
			windows = "panel_control";
			className = "inmohost";
			title = titulo;
			width = 700;
			height = 400;
			url = url+"?"+query;
		break;
		case "agenda_citas":
			WinTemp = "WinAgendaCitas";
			windows = "agenda_citas";
			className = "inmohost";
			title = titulo;
			width = 750;
			height = 420;
			url = url+"?"+query;
		break;
		case "agenda_resumen":
			WinTemp = "WinAgendaResumen";
			windows = "agenda_resumen";
			className = "neutra";
			title = titulo;
			width = 520;
			height = 230;
			top = 100;
			left = 5;
			resizable = false;
			minimizable = false;
			maximizable = false;
			url = url+"?"+query;
			zIndex=0;
		break;
		case "prp_publicaciones":
			WinTemp = "WinPrpPublicaciones";
			windows = "WinPrpPublicaciones";
			className = "inmohost";
			title = titulo;
			width = 600;
			height = 350;
			url = url+"?"+query;
		break;
		case "edicionSimple":
			WinTemp = "WinEdicionSimple";
			windows = "edicionSimple";
			className = "inmohost";
			title = titulo;
			width = 450;
			height = 300;
			url = url+"?"+query;
		break;
		case "alta_tasacion":
			WinTemp = "WinAltaTasacion";
			windows = "alta_tasacion";
			className = "inmohost";
			title = titulo;
			width = 450;
			height = 350;
			url = url+"?"+query;
		break;
		case "actualizador":
			WinTemp = "WinActualizador";
			windows = "win_actualizador";
			className = "neutra";
			title = titulo;
			width = 350;
			height = 65;
			top = 1;
			left = (pageSize.windowWidth-350)/2;
			minimizable = false;
			maximizable = false;
			closable = false;
			url = url+"?"+query;
		break;
		case "exportar":
			WinTemp = "WinExportar";
			windows = "WinExportar";
			className = "neutra";
			title = titulo;
			width = 400;
			height = 200;
			minimizable = false;
			maximizable = false;
			url = url+"?"+query;
		break;
		case "varios":
			WinTemp = "WinVarios";
			windows = "WinVarios";
			className = "inmohost";
			title = titulo;
			width = 600;
			height = 430;
			url = url+"?"+query;
			multi = true;
		break;
		case "env_mail":
			WinTemp = "WinMail";
			windows = "env_mail";
			className = "inmohost";
			title = titulo;
			width = 650;
			height = 450;
			url = url+"?"+query;
			multi = true;
		break;
		case "alt_dem":
			WinTemp = "WinDemandas";
			windows = "alt_dem";
			className = "inmohost";
			title = titulo;
			width = 650;
			height = 470;
			url = url+"?"+query;
			multi = true;
		break;
		case "dem_coin":
			WinTemp = "WinCoincidencia";
			windows = "dem_coin";
			className = "inmohost";
			title = titulo;
			width = 400;
			height = 250;
			url = url+"?"+query;
			multi = true;
		break;
		case "ficha_foto":
			WinTemp = "WinFichaFoto";
			windows = "ficha_foto";
			className = "inmohost";
			title = titulo;
			width = 400;
			height = 250;
			url = url+"?"+query;
			multi = true;
		break;
		case "ficha_imp":
			WinTemp = "WinFichaImp";
			windows = "ficha_imp";
			className = "inmohost";
			title = titulo;
			width = 450;
			height = 400;
			url = url+"?"+query;
			multi = true;
		break;
		case "imagen":
			WinTemp = "WinImagen";
			windows = "imagen";
			className = "alert";
			title = '';
			width = 700;
			height = 500;
			if(url.indexOf('.gif', 0) != -1 || url.indexOf('.jpg', 0) != -1 || url.indexOf('.png', 0) != -1){
				url = rutaAbsolutaFichaFoto+"system/imagen.php?img="+url+"&"+query;
			} else {
				url = url+"?"+query;
			}
		break;
		case "alt_nov":
			WinTemp = "WinNovedades";
			windows = "alt_nov";
			className = "inmohost";
			title = titulo;
			width = 350;
			height = 300;
			url = url+"?"+query+"&win="+windows;
			multi = true;
		break;
		case "alt_usr":
			WinTemp = "WinAltUsr";
			windows = "alt_usr";
			className = "inmohost";
			title = titulo;
			width = 400;
			height = 300;
			url = url+"?"+query;
			multi = true;
		break;
		default:
			//alert(tipo)
			WinTemp = "WinUrlExterna";
			windows = "urlExterna";
			className = "inmohost";
			title = titulo;
			width = 780;
			height = 450;
			url = url+"?"+query;
			multi = true;
		break;
		case "bar_priv":
			WinTemp = "WinBarPriv";
			windows = "bar_priv";
			className = "inmohost";
			title = titulo;
			width = 600;
			height =450;
			url = url+"?"+query;
		break;
		case "panel_backup":
			WinTemp = "WinPanelBackup";
			windows = "panel_backup";
			className = "inmohost";
			title = titulo;
			width = 600;
			height = 200;
			url = url+"?"+query;
		break;
		
		//*****************************************************
		//ventanas reusables **********************************
		//*****************************************************
		
		
		
		case "win1":
			WinTemp = "Win1";
			windows = "win1";
			className = classNameReusable;
			title = titulo;
			width = wReusable;
			height = hReusable;
			url = url+"?"+query;
			multi = true;
		break;
		case "win2":
			WinTemp = "Win2";
			windows = "win2";
			className = classNameReusable;
			title = titulo;
			width = wReusable;
			height = hReusable;
			url = url+"?"+query;
			multi = true;
		break;
		case "win3":
			WinTemp = "Win3";
			windows = "win3";
			className = classNameReusable;
			title = titulo;
			width = wReusable;
			height = hReusable;
			url = url+"?"+query;
			multi = true;
		break;
		case "win4":
			WinTemp = "Win4";
			windows = "win4";
			className = classNameReusable;
			title = titulo;
			width = wReusable;
			height = hReusable;
			url = url+"?"+query;
			multi = true;
		break;
		case "win5":
			WinTemp = "Win5";
			windows = "win5";
			className = classNameReusable;
			title = titulo;
			width = wReusable;
			height = hReusable;
			url = url+"?"+query;
			multi = true;
		break;
		case "win6":
			WinTemp = "Win6";
			windows = "win6";
			className = classNameReusable;
			title = titulo;
			width = wReusable;
			height = hReusable;
			url = url+"?"+query;
			multi = true;
		break;
		case "win7":
			WinTemp = "Win7";
			windows = "win7";
			className = classNameReusable;
			title = titulo;
			width = wReusable;
			height = hReusable;
			url = url+"?"+query;
			multi = true;
		break;
		case "win8":
			WinTemp = "Win8";
			windows = "win8";
			className = classNameReusable;
			title = titulo;
			width = wReusable;
			height = hReusable;
			url = url+"?"+query;
			multi = true;
		break;
		case "win9":
			WinTemp = "Win9";
			windows = "win9";
			className = classNameReusable;
			title = titulo;
			width = wReusable;
			height = hReusable;
			url = url+"?"+query;
			multi = true;
		break;
		case "win10":
			WinTemp = "Win10";
			windows = "win10";
			className = classNameReusable;
			title = titulo;
			width = wReusable;
			height = hReusable;
			url = url+"?"+query;
			multi = true;
		break;
		//------------------------------------/
		case "win11":
			WinTemp = "Win1";
			windows = "win1";
			className = classNameReusable;
			title = titulo;
			width = wReusable;
			height = hReusable;
			url = url+"?"+query;
			multi = true;
		break;
		case "win12":
			WinTemp = "Win2";
			windows = "win2";
			className = classNameReusable;
			title = titulo;
			width = wReusable;
			height = hReusable;
			url = url+"?"+query;
			multi = true;
		break;
		case "win13":
			WinTemp = "Win3";
			windows = "win3";
			className = classNameReusable;
			title = titulo;
			width = wReusable;
			height = hReusable;
			url = url+"?"+query;
			multi = true;
		break;
		case "win14":
			WinTemp = "Win4";
			windows = "win4";
			className = classNameReusable;
			title = titulo;
			width = wReusable;
			height = hReusable;
			url = url+"?"+query;
			multi = true;
		break;
		case "win15":
			WinTemp = "Win5";
			windows = "win5";
			className = classNameReusable;
			title = titulo;
			width = wReusable;
			height = hReusable;
			url = url+"?"+query;
			multi = true;
		break;
		case "win16":
			WinTemp = "Win6";
			windows = "win6";
			className = classNameReusable;
			title = titulo;
			width = wReusable;
			height = hReusable;
			url = url+"?"+query;
			multi = true;
		break;
		case "win17":
			WinTemp = "Win7";
			windows = "win7";
			className = classNameReusable;
			title = titulo;
			width = wReusable;
			height = hReusable;
			url = url+"?"+query;
			multi = true;
		break;
		case "win18":
			WinTemp = "Win8";
			windows = "win8";
			className = classNameReusable;
			title = titulo;
			width = wReusable;
			height = hReusable;
			url = url+"?"+query;
			multi = true;
		break;
		case "win19":
			WinTemp = "Win9";
			windows = "win9";
			className = classNameReusable;
			title = titulo;
			width = wReusable;
			height = hReusable;
			url = url+"?"+query;
			multi = true;
		break;
		case "win20":
			WinTemp = "Win10";
			windows = "win10";
			className = classNameReusable;
			title = titulo;
			width = wReusable;
			height = hReusable;
			url = url+"?"+query;
			multi = true;
		break;
		//------------------------------------/
		
		case "win101":
			WinTemp = "Win1";
			windows = "win1";
			className = classNameReusable;
			title = titulo;
			width = wReusable;
			height = hReusable;
			url = url+"?"+query;
			multi = true;
		break;
		case "win102":
			WinTemp = "Win2";
			windows = "win2";
			className = classNameReusable;
			title = titulo;
			width = wReusable;
			height = hReusable;
			url = url+"?"+query;
			multi = true;
		break;
		case "win103":
			WinTemp = "Win3";
			windows = "win3";
			className = classNameReusable;
			title = titulo;
			width = wReusable;
			height = hReusable;
			url = url+"?"+query;
			multi = true;
		break;
		case "win104":
			WinTemp = "Win4";
			windows = "win4";
			className = classNameReusable;
			title = titulo;
			width = wReusable;
			height = hReusable;
			url = url+"?"+query;
			multi = true;
		break;
		case "win105":
			WinTemp = "Win5";
			windows = "win5";
			className = classNameReusable;
			title = titulo;
			width = wReusable;
			height = hReusable;
			url = url+"?"+query;
			multi = true;
		break;
		case "win106":
			WinTemp = "Win6";
			windows = "win6";
			className = classNameReusable;
			title = titulo;
			width = wReusable;
			height = hReusable;
			url = url+"?"+query;
			multi = true;
		break;
		case "win107":
			WinTemp = "Win7";
			windows = "win7";
			className = classNameReusable;
			title = titulo;
			width = wReusable;
			height = hReusable;
			url = url+"?"+query;
			multi = true;
		break;
		case "win108":
			WinTemp = "Win8";
			windows = "win8";
			className = classNameReusable;
			title = titulo;
			width = wReusable;
			height = hReusable;
			url = url+"?"+query;
			multi = true;
		break;
		case "win109":
			WinTemp = "Win9";
			windows = "win9";
			className = classNameReusable;
			title = titulo;
			width = wReusable;
			height = hReusable;
			url = url+"?"+query;
			multi = true;
		break;
		case "win110":
			WinTemp = "Win10";
			windows = "win10";
			className = classNameReusable;
			title = titulo;
			width = wReusable;
			height = hReusable;
			url = url+"?"+query;
			multi = true;
		break;
		
		
	}
			
	///////////////////////////////////////////
	//				armador 				//
	///////////////////////////////////////////

		if (this[WinTemp]) {
					//alert(this[WinTemp].getId());
					this[WinTemp].destroy();
		}
		
		if(!zIndex){
			zIndex=100;
		}
			
		this[WinTemp] = new Window(windows, {className: className, title: title, 
								width:width, height:height, top:top,
								left:left,
								resizable:resizable, closable:closable, minimizable:minimizable, maximizable:maximizable, draggable:draggable, 
								url: url, wiredDrag: true, zIndex: zIndex});

		//this[WinTemp].setDestroyOnClose();
		//win.getContent().innerHTML="";
		
		if(top == 0 && left == 0){
				this[WinTemp].showCenter();
		} else {
				this[WinTemp].show();
			if(this[WinTemp].getId()=="agenda_resumen"){
					this[WinTemp].updateZIndex(50);
					//this[WinTemp].zIndex=0;
			}	
		}
			this[WinTemp].toFront();

			if(WinTemp == "WinUrlExterna"){
				this[WinTemp].maximize();
			}
	

// Set up a windows observer, check ou debug window to get messages 
//onStartResize(), onEndResize(), onStartMove(), onEndMove(), onClose(), onDestroy(), onMinimize(), onMaximize(), onHide(), onShow(), onFocus()
		
		myObserver0 = { 
		onDestroy: function(eventName, win)
				{ 
					//alert(win);
				} 
		}

		Windows.addObserver(myObserver0); 

		myObserver1 = { // aca hay que ver el nombre de la ventana
		onClose: function(eventName, win)
				{ 
					
				} 
		}
		Windows.addObserver(myObserver1); 

		
}

function contenidoMenu(archivo){

	document.getElementById("contenidoMenuActual").innerHTML = archivo;
	
}


function dialogos(tipo, query, url, titulo){

	switch(tipo){		
		case "cerrarSesion":
			Dialog.confirm($(url).innerHTML, {
					 windowParameters: {className:"alert", width:350, height:120}, 
					 okLabel: "Cerrar Sesi�n", 
					 cancelLabel: "Cancelar", 
					 cancel: function(win){ cambiarInterfaz(''); },
					 ok:function(win){ window.location.href=rutaAbsoluta+"login.php"; return false;}
					 });
		break;
		case "destruirSesion":
			Dialog.confirm($(url).innerHTML, {
					 windowParameters: {className:"alert", width:350, height:175}, 
					 okLabel: "Cerrar Sesi�n", 
					 cancelLabel: "Ingresar", 					 
					 ok: function(win){ window.location.href=rutaAbsoluta+"login.php"; },
					 cancel:function(win){ renovarSesion(); }
					 });
		break;
		default:
			Dialog.alert({url: url+"?"+query, options: {method: 'get'}}, {windowParameters: {className: "alert", width:300, height:200}, okLabel: "Cerrar"});
		break;
	}
	
}

/*
var timeout; 

function openInfoDialog() { 
	Dialog.info("Alert que se cierra a los  3s ...", 
				{windowParameters: {width:250, height:100}, 
				showProgress: true}); 
	timeout=3; setTimeout(infoTimeout, 1000) 
} 

function infoTimeout() { 
	timeout--; if (timeout >0) { 
		Dialog.setInfoMessage("Alert que se cierra a los  " + timeout + "s ...") 
		setTimeout(infoTimeout, 1000) 
		} else Dialog.closeInfo() 
}
*/