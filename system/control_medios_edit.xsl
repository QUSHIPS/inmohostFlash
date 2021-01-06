<?xml version="1.0" encoding="iso-8859-1"?><!-- DWXMLSource="http://atilio/inmohostV2.0/system/datos/control_medios_edit.xml.php?rec_id=10" -->
<!DOCTYPE xsl:stylesheet  [
  <!ENTITY nbsp   "&#160;">
  <!ENTITY copy   "&#169;">
  <!ENTITY reg    "&#174;">
  <!ENTITY trade  "&#8482;">
  <!ENTITY mdash  "&#8212;">
  <!ENTITY ldquo  "&#8220;">
  <!ENTITY rdquo  "&#8221;"> 
  <!ENTITY pound  "&#163;">
  <!ENTITY yen    "&#165;">
  <!ENTITY euro   "&#8364;">
  <!ENTITY aacute "&#225;">
  <!ENTITY Aacute "&#193;">
  <!ENTITY eacute "&#233;">
  <!ENTITY Eacute "&#201;">
  <!ENTITY iacute "&#237;">
  <!ENTITY Iacute "&#205;">
  <!ENTITY oacute "&#243;">
  <!ENTITY Oacute "&#211;">
  <!ENTITY uacute "&#250;">
  <!ENTITY Uacute "&#218;">
  <!ENTITY ntilde "&#242;">
  <!ENTITY Ntilde "&#209;">
]>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" encoding="iso-8859-1"/>
<xsl:param name="usr_id" />
<xsl:template match="/">
	<input type="hidden" name="mod_tip" value="edit" />
	<input type="hidden" name="rec_id" value="{medio/rec_id}" />
<table width="100%" height="100%" border="0" align="center" cellpadding="3" cellspacing="1" class="tableOscura">
    <tr class="tableClara">
      <td align="center" colspan="2"><h1>Editar Medio</h1></td>
    </tr>
	<tr class="tableClara">
   <td align="center"><div align="right" id="med_raz_div">Razon Social:</div></td>
		<td><input type="text" name="med_raz" value="{medio/med_raz}"/></td>    
    </tr>
    <tr class="tableClara">
	<td align="center"><div align="right" id="nombre_div">Nombre Receptor:</div></td>
		<td><input type="text" name="nombre" value="{medio/nombre}"/></td>    
    </tr>
    <tr class="tableClara">
    <td align="center"><div align="right" id="apellido_div">Apellido Receptor:</div></td>
		<td><input type="text" name="apellido" value="{medio/apellido}"/></td>    
    </tr>
     <tr class="tableClara">
    <td align="center"><div align="right" id="mail_div">E-mail Receptor:</div></td>
		<td><input type="text" name="mail" value="{medio/mail}"/></td>    
    </tr>
    <tr class="tableClara">
    <td align="center"><div align="right" id="mailcc_div">E-mail CC Receptor:</div></td>
		<td><input type="text" name="mailcc" value="{medio/mailcc}"/></td>    
    </tr>
    <tr class="tableClara" >
      <td colspan="2" align="center"><input name="Cerrar" type="button" class="botonForm" id="cerrar" onclick="parent.Windows.close('edicionSimple')" value="cerrar" />
        &nbsp;&nbsp;
        <input name="Agregar" type="button" class="botonForm" id="agregar" onclick="if(verif('med_raz,1,Razon Social,nombre,1,Nombre,mail,1,E-Mail','agendaMediosEditar'))document.agendaMediosEditar.submit();" value="Editar" />
        </td>
    </tr>
  </table>
</xsl:template>
</xsl:stylesheet>