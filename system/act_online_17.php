<?
						extract($_GET); 
						include "../parametros.php";
					    include "../include/funciones/funciones.php";
						mysql_query("start transaction");
mysql_query("update propiedades set fotos='15',loc_id=6,pro_id=21,prp_bar='',prp_dom='Sarmiento 1900',pai_id='1',con_id='1',tip_id='1',prp_pre=0,prp_desc='COCUCCI INMOBILIARIA VENDE: CASA  + DEPARTAMENTO bien ubicada, a unas cuadras de la Plaza de Las Heras, ubicada en Calle Sarmiento 1900, entre Burgos y Paso de Los Andes, Las Heras.<br />
<br />
Superficie de Terreno: 351,50 m2.<br />
Superficie Cubierta: 200 m2<br />
Antigüedad: 1986 aprox.<br />
<br />
<br />
La Casa se encuentra desarrollada en una sola planta: consta de living comedor, cocina con pequeño estar diario equipado con amoblamiento de alacena y bajo mesada, tres habitaciones, un baño completo, patio embaldosado, lavadero, depósito y churrasquera. Cochera pasante para 2 vehículos.<br />
Departamento:Cuenta con living comedor, cocina integrada con amoblamientos de alacena y bajo mesada, un baño completo, dos dormitorios.<br />
<br />
<br />
DETALLES CONSTRUCTIVOS:<br />
La propiedad se encuentra en buen estado de conservación. Posee techos de loza , pisos cerámicos, carpintería metálica y rejas de hierro.   <br />
<br />
No apta para crédito hipotecario.<br />
       ',prp_nota='        ',prp_mod='2021-01-06',ori_id=4,prp_pub='        ',prp_pre_dol='50000',prp_llave='0',prp_cartel='1',prp_referente='121',prp_tas='10349',prp_aut='1',pre_inmo='0',pre_prop='0',pre_trans='0',prp_insc_dom='',publica=1,prp_visibilidad='',prp_servicios='        ',prp_mostrar=1,mos_por_1=1,mos_por_2=1,mos_por_3=1,mos_por_4=0,prp_anonimo=0,prp_vip='1',prp_lat='-32.8420011', prp_lng='-68.8337505', prp_plano='entre calle Burgos y Paso de Los Andes', bar_priv_id=0 where prp_id=16886 and (usr_id=17 or usr_id=0)") or $error="Consulta: update insert 16886 - 17".mysql_error();
mysql_query("delete from fotos where prp_id=16886 and usr_id=17") or $error="Consulta: delete from fotos where prp_id=16886 and usr_id=17".mysql_error();
mysql_query("insert into fotos (fo_enl,prp_id,usr_id,fo_nro,fo_desc) values('16886-17-1.gif',16886,17,1,'')") or $error="Consulta: insert into fotos (fo_enl,prp_id,usr_id,fo_nro,fo_desc) values('16886-17-1.gif',16886,17,1,'')".mysql_error();
mysql_query("insert into fotos (fo_enl,prp_id,usr_id,fo_nro,fo_desc) values('16886-17-2.gif',16886,17,2,'')") or $error="Consulta: insert into fotos (fo_enl,prp_id,usr_id,fo_nro,fo_desc) values('16886-17-2.gif',16886,17,2,'')".mysql_error();
mysql_query("insert into fotos (fo_enl,prp_id,usr_id,fo_nro,fo_desc) values('16886-17-3.gif',16886,17,3,'')") or $error="Consulta: insert into fotos (fo_enl,prp_id,usr_id,fo_nro,fo_desc) values('16886-17-3.gif',16886,17,3,'')".mysql_error();
mysql_query("insert into fotos (fo_enl,prp_id,usr_id,fo_nro,fo_desc) values('16886-17-4.gif',16886,17,4,'')") or $error="Consulta: insert into fotos (fo_enl,prp_id,usr_id,fo_nro,fo_desc) values('16886-17-4.gif',16886,17,4,'')".mysql_error();
mysql_query("insert into fotos (fo_enl,prp_id,usr_id,fo_nro,fo_desc) values('16886-17-5.gif',16886,17,5,'')") or $error="Consulta: insert into fotos (fo_enl,prp_id,usr_id,fo_nro,fo_desc) values('16886-17-5.gif',16886,17,5,'')".mysql_error();
mysql_query("insert into fotos (fo_enl,prp_id,usr_id,fo_nro,fo_desc) values('16886-17-6.gif',16886,17,6,'')") or $error="Consulta: insert into fotos (fo_enl,prp_id,usr_id,fo_nro,fo_desc) values('16886-17-6.gif',16886,17,6,'')".mysql_error();
mysql_query("insert into fotos (fo_enl,prp_id,usr_id,fo_nro,fo_desc) values('16886-17-7.gif',16886,17,7,'')") or $error="Consulta: insert into fotos (fo_enl,prp_id,usr_id,fo_nro,fo_desc) values('16886-17-7.gif',16886,17,7,'')".mysql_error();
mysql_query("insert into fotos (fo_enl,prp_id,usr_id,fo_nro,fo_desc) values('16886-17-8.gif',16886,17,8,'')") or $error="Consulta: insert into fotos (fo_enl,prp_id,usr_id,fo_nro,fo_desc) values('16886-17-8.gif',16886,17,8,'')".mysql_error();
mysql_query("insert into fotos (fo_enl,prp_id,usr_id,fo_nro,fo_desc) values('16886-17-9.gif',16886,17,9,'')") or $error="Consulta: insert into fotos (fo_enl,prp_id,usr_id,fo_nro,fo_desc) values('16886-17-9.gif',16886,17,9,'')".mysql_error();
mysql_query("insert into fotos (fo_enl,prp_id,usr_id,fo_nro,fo_desc) values('16886-17-10.gif',16886,17,10,'')") or $error="Consulta: insert into fotos (fo_enl,prp_id,usr_id,fo_nro,fo_desc) values('16886-17-10.gif',16886,17,10,'')".mysql_error();
mysql_query("insert into fotos (fo_enl,prp_id,usr_id,fo_nro,fo_desc) values('16886-17-11.gif',16886,17,11,'')") or $error="Consulta: insert into fotos (fo_enl,prp_id,usr_id,fo_nro,fo_desc) values('16886-17-11.gif',16886,17,11,'')".mysql_error();
mysql_query("insert into fotos (fo_enl,prp_id,usr_id,fo_nro,fo_desc) values('16886-17-12.gif',16886,17,12,'')") or $error="Consulta: insert into fotos (fo_enl,prp_id,usr_id,fo_nro,fo_desc) values('16886-17-12.gif',16886,17,12,'')".mysql_error();
mysql_query("insert into fotos (fo_enl,prp_id,usr_id,fo_nro,fo_desc) values('16886-17-13.gif',16886,17,13,'')") or $error="Consulta: insert into fotos (fo_enl,prp_id,usr_id,fo_nro,fo_desc) values('16886-17-13.gif',16886,17,13,'')".mysql_error();
mysql_query("insert into fotos (fo_enl,prp_id,usr_id,fo_nro,fo_desc) values('16886-17-14.gif',16886,17,14,'')") or $error="Consulta: insert into fotos (fo_enl,prp_id,usr_id,fo_nro,fo_desc) values('16886-17-14.gif',16886,17,14,'')".mysql_error();
mysql_query("insert into fotos (fo_enl,prp_id,usr_id,fo_nro,fo_desc) values('16886-17-15.gif',16886,17,15,'')") or $error="Consulta: insert into fotos (fo_enl,prp_id,usr_id,fo_nro,fo_desc) values('16886-17-15.gif',16886,17,15,'')".mysql_error();
mysql_query("delete from ser_x_prp_ihost where prp_id=16886 and usr_id=17") or $error="Consulta: delete from ser_x_prp_ihost where prp_id=16886 and usr_id=17".mysql_error();
mysql_query("insert into ser_x_prp_ihost (prp_id,ser_id,valor,usr_id) values('16886',2,'351,50m2',17)") or $error="Consulta: insert into ser_x_prp_ihost (prp_id,ser_id,valor,usr_id) values('16886',2,'351,50m2',17)".mysql_error();
mysql_query("insert into ser_x_prp_ihost (prp_id,ser_id,valor,usr_id) values('16886',3,'',17)") or $error="Consulta: insert into ser_x_prp_ihost (prp_id,ser_id,valor,usr_id) values('16886',3,'',17)".mysql_error();
mysql_query("insert into ser_x_prp_ihost (prp_id,ser_id,valor,usr_id) values('16886',4,'Cochera Pasante',17)") or $error="Consulta: insert into ser_x_prp_ihost (prp_id,ser_id,valor,usr_id) values('16886',4,'Cochera Pasante',17)".mysql_error();
mysql_query("insert into ser_x_prp_ihost (prp_id,ser_id,valor,usr_id) values('16886',7,'200 m2',17)") or $error="Consulta: insert into ser_x_prp_ihost (prp_id,ser_id,valor,usr_id) values('16886',7,'200 m2',17)".mysql_error();
mysql_query("insert into ser_x_prp_ihost (prp_id,ser_id,valor,usr_id) values('16886',8,'',17)") or $error="Consulta: insert into ser_x_prp_ihost (prp_id,ser_id,valor,usr_id) values('16886',8,'',17)".mysql_error();
mysql_query("insert into ser_x_prp_ihost (prp_id,ser_id,valor,usr_id) values('16886',9,'No',17)") or $error="Consulta: insert into ser_x_prp_ihost (prp_id,ser_id,valor,usr_id) values('16886',9,'No',17)".mysql_error();
mysql_query("insert into ser_x_prp_ihost (prp_id,ser_id,valor,usr_id) values('16886',10,'No',17)") or $error="Consulta: insert into ser_x_prp_ihost (prp_id,ser_id,valor,usr_id) values('16886',10,'No',17)".mysql_error();
mysql_query("insert into ser_x_prp_ihost (prp_id,ser_id,valor,usr_id) values('16886',12,'Si',17)") or $error="Consulta: insert into ser_x_prp_ihost (prp_id,ser_id,valor,usr_id) values('16886',12,'Si',17)".mysql_error();
mysql_query("insert into ser_x_prp_ihost (prp_id,ser_id,valor,usr_id) values('16886',13,'1',17)") or $error="Consulta: insert into ser_x_prp_ihost (prp_id,ser_id,valor,usr_id) values('16886',13,'1',17)".mysql_error();
mysql_query("insert into ser_x_prp_ihost (prp_id,ser_id,valor,usr_id) values('16886',14,'Si',17)") or $error="Consulta: insert into ser_x_prp_ihost (prp_id,ser_id,valor,usr_id) values('16886',14,'Si',17)".mysql_error();
mysql_query("insert into ser_x_prp_ihost (prp_id,ser_id,valor,usr_id) values('16886',15,'Si',17)") or $error="Consulta: insert into ser_x_prp_ihost (prp_id,ser_id,valor,usr_id) values('16886',15,'Si',17)".mysql_error();
mysql_query("insert into ser_x_prp_ihost (prp_id,ser_id,valor,usr_id) values('16886',17,'1968',17)") or $error="Consulta: insert into ser_x_prp_ihost (prp_id,ser_id,valor,usr_id) values('16886',17,'1968',17)".mysql_error();
mysql_query("insert into ser_x_prp_ihost (prp_id,ser_id,valor,usr_id) values('16886',18,'Si',17)") or $error="Consulta: insert into ser_x_prp_ihost (prp_id,ser_id,valor,usr_id) values('16886',18,'Si',17)".mysql_error();
mysql_query("insert into ser_x_prp_ihost (prp_id,ser_id,valor,usr_id) values('16886',22,'Indistinto',17)") or $error="Consulta: insert into ser_x_prp_ihost (prp_id,ser_id,valor,usr_id) values('16886',22,'Indistinto',17)".mysql_error();
mysql_query("insert into ser_x_prp_ihost (prp_id,ser_id,valor,usr_id) values('16886',23,'Si',17)") or $error="Consulta: insert into ser_x_prp_ihost (prp_id,ser_id,valor,usr_id) values('16886',23,'Si',17)".mysql_error();
mysql_query("insert into ser_x_prp_ihost (prp_id,ser_id,valor,usr_id) values('16886',24,'No',17)") or $error="Consulta: insert into ser_x_prp_ihost (prp_id,ser_id,valor,usr_id) values('16886',24,'No',17)".mysql_error();
mysql_query("insert into ser_x_prp_ihost (prp_id,ser_id,valor,usr_id) values('16886',25,'Indistinto',17)") or $error="Consulta: insert into ser_x_prp_ihost (prp_id,ser_id,valor,usr_id) values('16886',25,'Indistinto',17)".mysql_error();


				//		$command="chmod -R 777 ./fotos/*";
				//		exec($command);
						

								
				$cad1="select usr_cim,usr_raz from usuarios where usr_id=$usr_id";
				$usr_cim=mysql_result(mysql_query($cad1),0,0);
				$usr_raz=mysql_result(mysql_query($cad1),0,1);


					if($error){
						mysql_query("rollback");
						$e=1;
						?>
							<link rel=stylesheet href="inmoclick.css" type=text/css>
							<div id=tabla1 class=celda_2 style='position:absolute;left:25%;top:20%;'>
								<table align=center border=0 width=60% cellspacing=0 style="border-top:1px solid #990000;border-bottom:1px solid #990000;border-left:1px solid #990000;border-right:1px solid #990000;">
									<tr>
										<td style="font-family:verdana;font-size:11px;font-color:#DDDDDD;" colspan=6><b>Ocurrio un error en la consulta. La actualizaciï¿½n no se pudo llevar a cabo. <?print $error?></b></td>
									</tr>
									<tr>
										<td style="font-family:verdana;font-size:11px;font-color:#DDDDDD;" colspan=6><b><? 
											mail("aldo@cocucci.com.ar","Informe de error usuario $usr_raz ($usr_id) ","El usuario $usr_raz ($usr_id) no ha podido actualizar sus inmuebles en internet:
 $error 
 ");	
											
										?>Se ha enviado un informe de error.</b></b></td>
									</tr>
								</table>		
							</div>
							
							<?
					}else{
							
							mysql_query("commit");
							$e=0;
					 }		
						
						?>
							<script language="javascript">
								location.href="../act_inmohost.php?usr_id=17&ip=192.168.0.22&e=<?print $e?>";
							</script>
						
						<?
					
					
					?>
				