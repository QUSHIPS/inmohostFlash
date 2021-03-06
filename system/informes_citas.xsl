<?xml version="1.0" encoding="iso-8859-1"?><!-- DWXMLSource="http://localhost/inmohostV2.0/system/datos/informes.xml.php?tipo_inf=citas" --><!DOCTYPE xsl:stylesheet  [
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
<xsl:output method="html" encoding="iso-8859-1" doctype-public="-//W3C//DTD XHTML 1.0 Transitional//EN" doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"/>

<xsl:param name="fileCalendario"/>
<xsl:param name="destino1"/>
<xsl:param name="titulo"/>
<xsl:param name="url"/>
<xsl:param name="parametros"/>
<xsl:param name="acc_internet"/>



<xsl:template match="/">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/></head>

<body>

<table width="100%" border="0" class="tableOscura" cellspacing="1" cellpadding="3">
  <tr class="tableClara">
    <td colspan="2"><strong>Datos de la cita </strong></td>
  </tr>
  <tr class="tableClara">
    <td width="24%">Monitor:</td>
    <td width="37%"><select name="emp_id" class="inputForm">
      <xsl:for-each select="informes/referente/option">
        <option value="{@value}"><xsl:value-of select="." disable-output-escaping="yes"/></option>
      </xsl:for-each>
    </select></td>
  </tr>
  <tr class="tableClara">
    <td>Desde:</td>
    <td><input name="desdeMos" type="text" id="desdeMos" value="00-00-0000" class="inputFecha" size="9" readonly="readonly"/>
			<input id="desdeMosDia" type="hidden" name="desdeMosDia" value="00" />
			<input id="desdeMosMes" type="hidden" name="desdeMosMes" value="00" />
			<input id="desdeMosAno" type="hidden" name="desdeMosAno" value="0000" />
            <a href="javascript:;" title="seleccionar fecha" class="menu" onclick="position(event); toolTip('{$fileCalendario}&amp;destino=desdeMos&amp;acc_internet={$acc_internet}',this)" tabindex="2"><img src="../interfaz/inmohost/images/iconos/calendario.gif" width="16" height="15" border="0" align="absmiddle" /></a></td>
  </tr>
  <tr class="tableClara">
    <td>Hasta:</td>
    <td><input name="hastaMos" type="text" id="hastaMos" value="00-00-0000" class="inputFecha" size="9" readonly="readonly"/>
			<input id="hastaMosDia" type="hidden" name="hastaMosDia" value="00" />
			<input id="hastaMosMes" type="hidden" name="hastaMosMes" value="00" />
			<input id="hastaMosAno" type="hidden" name="hastaMosAno" value="0000" />
            <a href="javascript:;" title="seleccionar fecha" class="menu" onclick="position(event); toolTip('{$fileCalendario}&amp;destino=hastaMos&amp;acc_internet={$acc_internet}',this)" tabindex="2"><img src="../interfaz/inmohost/images/iconos/calendario.gif" width="16" height="15" border="0" align="absmiddle" /></a></td>
  </tr>
  <tr class="tableClara">
    <td>Inmu id: </td>
    <td><input type="text" size="10px" name="prp_id"  class="inputForm"/></td>
  </tr>
  <tr class="tableClara">
    <td>Estado:</td>
    <td><select name="est_mos"  class="inputForm">
      <option value="0"> Todos </option>
      <option value="1">  Mostradas </option>
      <option value="2"> A mostrar </option>
      <option value="3"> Canceladas </option>
    </select></td>
  </tr>
  
  <tr class="tableClara">
    <td colspan="2"><div align="center">
      <input name="button" type="button" class="botonForm" value="Ver Informe" onclick="chequeaForm('informesPrp', '{$destino1}', '{$titulo}', '{$url}', '{$parametros}');"/>
    </div></td>
    </tr>
</table>

</body>
</html>

</xsl:template>
</xsl:stylesheet>