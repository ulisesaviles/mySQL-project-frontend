(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{120:function(e,a,t){"use strict";t.r(a);var n=t(4),s=t.n(n),o=t(15),c=t.n(o),r=(t(51),t(10)),i=t.p+"static/media/logo.045b4c32.png",d=[{type:"dates",description:"Mostrar la informacion del cliente con mayor frecuencia en reparaciones que se le hayan atendido en un periodo de tiempo."},{type:"dates",description:"Mostrar la informacion de las promociones aplicadas en el departamento mecanico en un periodo de fechas especifico."},{type:null,description:"Mostrar la informacion del inventario de refacciones que tiene cada producto registrado."},{type:null,description:"Mostrar las ventas obtenidas con respecto al serivicio de solo diagnosticos."},{type:"dates",description:"Mostrar entre  el periodo de rango de fechas el numero de atenciones para cada departamento del taller."},{type:"both",description:"Mostrar las ganacias obtenidas en un rango de fechas especifico en base a un despartamento en particular."},{type:"dates",description:"Mostrar el empleado que mayor ganancia obtuvo en un rango de fechas especifico."},{type:"departments",description:"Mostrar e listado de supervisores y sus supervisados en base a un departamento especifico."},{type:null,description:"Mostrar el listado de clientes registrados junto con los automoviles que tiene registrados en sistema."},{type:"departments",description:"Mostrar las reparaciones mas concurrentes en base a un departamento especifico."},{type:"dates",description:"Mostrar el departamento que presenta el mayor consumo de refacciones en un periodo de fecha determinado y muestr el numero de refacciones utilizadas."},{type:"dates",description:"Mostrar las promociones vigentes por un rango de fechas determinado."},{type:"dates",description:"Mostrar las garantias que se han presentado en los servicios y que costo ha generado por un rango de fechas especifico."},{type:"dates",description:"Mostrar el departameto con mayor afluencia de reparaciones en un rango de fechas determinado."},{type:"dates",description:"Mostrar el departameto con menor afluencia de reparaciones por un rango de fecha determinado."},{type:null,description:"Mostrar el consumo de refacciones clasificado por departamento."},{type:"dates",description:"Mostrar las ganacias obtenidas del taller por un rango de fechas determinado."},{type:null,description:"Mostrar el listado de empleados clasificado por departamentos."},{type:"dates",description:"Mostrar el las caracteristicas de los automoviles registrado en un periodo de tiempo determinado."},{type:"dates",description:"Mostrar los clientes que solo realizaron servicios de diagnostico en un periodo de fecha determinado."},{type:null,description:"Mostrar el cliente con el mayor gasto en reparaciones realizado."},{type:"dates",description:"Mostrar el automovil con el mayor gasto realizado en un periodo de tiempo determinado."},{type:null,description:"Mostrar cual es la refaccion mas vendida del departamento de refacciones y cuanto genera de ganancia."},{type:null,description:"Mostrar el departamento con mayor numero de garantias aplicadas y cuanto suma de gasto debido a dichas garantias."},{type:"dates",description:"Mostrar el cliente con mayor tiempo de no visitar el taller en base a un rango de fechas determiando."},{type:"dates",description:"Mostrar la promocion mas aplicada en un rango de fechas determinado."},{type:"dates",description:"Mostrar el numero de promociones vencidas en un rango de fechas determinado."},{type:null,description:"Mostrar los datos del trabajador con mayor garantias aplicadas de los servicio que realizo."},{type:"dates",description:"Mostrar el nombre de cliente y el nombre del automovil que haya presentado el mayor numero de servicios aplicados en un periodo de fechas determinado."},{type:"dates",description:"Mostrar los servicios con menores ganacias obtenidas en un periodo de fechas determiando."}],l=(t(33),t(3)),p=function(e){return e.headers?Object(l.jsxs)("div",{className:"table",children:[Object(l.jsx)("div",{className:"tableRow",children:e.headers.map((function(e){return Object(l.jsx)("div",{className:"cell cellHeader",children:Object(l.jsx)("p",{className:"cellText cellTextHeader",children:e})})}))}),e.data.map((function(a){return Object(l.jsx)("div",{className:"tableRow",children:e.headers.map((function(t){return Object(l.jsx)("div",{className:"cell cell".concat(e.data.indexOf(a)%2),children:Object(l.jsx)("p",{className:"cellText",children:a[t]})})}))})}))]}):null},u={rows:[{ticketId:1,dateTicket:"2021-06-03T07:00:00.000Z",total:4500,warrantiesExpired:0,clientId:1,carId:"2CNALBEW3A6342602",serviceEmployeeId:9,diagnoseEmployeeId:11,magnitude:2}],columns:["ticketId","dateTicket","total","warrantiesExpired","clientId","carId","serviceEmployeeId","diagnoseEmployeeId","magnitude"]},m=t(42),j=t.n(m),b=t(32),h=t.n(b),g=(t(71),function(){var e=Object(n.useState)(0),a=Object(r.a)(e,2),t=a[0],s=a[1],o=Object(n.useState)(!1),c=Object(r.a)(o,2),m=c[0],b=c[1],g=Object(n.useState)(new Date),f=Object(r.a)(g,2),O=f[0],y=f[1],x=Object(n.useState)(new Date),v=Object(r.a)(x,2),N=v[0],M=v[1],C=Object(n.useState)(!1),I=Object(r.a)(C,2),S=I[0],q=I[1],D=Object(n.useState)(""),T=Object(r.a)(D,2),w=T[0],k=T[1],B=Object(n.useState)(u),E=Object(r.a)(B,2),F=E[0],z=E[1],R=Object(n.useState)("Realiza la consulta para obtener un resultado"),L=Object(r.a)(R,2),A=L[0],H=L[1];return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)("header",{children:Object(l.jsx)("img",{src:i,className:"logo",alt:"logo"})}),Object(l.jsx)("nav",{children:d.map((function(e){return Object(l.jsxs)("div",{onClick:function(){var a;a=d.indexOf(e),H("Realiza la consulta para obtener un resultado"),s(a),b(!1),k("")},className:d.indexOf(e)===t?"navBtn navBtnSelected":"navBtn",children:["Consulta ",d.indexOf(e)+1]})}))}),Object(l.jsx)("div",{className:"content",children:Object(l.jsxs)("div",{className:"contentContainer",children:[Object(l.jsxs)("div",{className:"contentHeader",children:[Object(l.jsxs)("h1",{className:"contentTitle",children:["Consulta ",t+1]}),Object(l.jsx)("h2",{className:"descriptionTitle",children:"Descripci\xf3n de la consulta:"}),Object(l.jsx)("p",{className:"description",children:d[t].description})]}),Object(l.jsxs)("div",{className:"queriesContainer",children:[Object(l.jsxs)("div",{className:"contentSubsection contentSubsection1",children:[Object(l.jsx)("h1",{className:"subContainerTitle queryTitle",children:"Consulta"}),Object(l.jsxs)("div",{className:"inputsContainer",children:["dates"===d[t].type||"both"===d[t].type?Object(l.jsxs)("div",{className:"inputContainer",children:[Object(l.jsx)("h3",{className:"inputTitle",children:"Selecciona el rango de fechas"}),Object(l.jsxs)("div",{className:"datesContainer",children:[Object(l.jsx)(h.a,{selected:O,onChange:function(e){return y(e)},className:"dateInput"}),Object(l.jsx)("p",{className:"a",children:"a"}),Object(l.jsx)(h.a,{selected:N,onChange:function(e){return M(e)},className:"dateInput"})]})]}):Object(l.jsx)(l.Fragment,{}),"departments"===d[t].type||"both"===d[t].type?Object(l.jsxs)("div",{className:"inputContainer",children:[Object(l.jsx)("h3",{className:"inputTitle",children:"Ingresa informaci\xf3n sobre el departamento que buscas"}),Object(l.jsx)("p",{className:"searchBy",children:"Buscar por:"}),Object(l.jsxs)("div",{className:"toggleContainer",children:[Object(l.jsx)("div",{onClick:function(){q(!1),k("")},className:"toggleItem".concat(S?"":" toggleItemSelected"),children:"Nombre"}),Object(l.jsx)("div",{onClick:function(){q(!0),k("")},className:"toggleItem".concat(S?" toggleItemSelected":""),children:"ID"})]}),Object(l.jsx)("input",{onChange:function(e){var a;S?function(e){(""===e||/^[1-7\b]+$/.test(e))&&k(e.charAt(e.length-1))}(e.target.value):(a=e.target.value,/^[a-zA-Z ]*$/.test(a)?k(a):k(a.substr(0,a.length-1)))},placeholder:"Ingresa el ".concat(S?"ID":"nombre"," del departamento"),className:"input",id:"input",value:w}),S?Object(l.jsx)("p",{className:"reminder",children:"(Recuerda s\xf3lo ingresar un d\xedgito del 1 al 7)"}):Object(l.jsx)("p",{className:"reminder",children:"(Recuerda s\xf3lo ingresar letras sin acentos y espacios)"})]}):Object(l.jsx)(l.Fragment,{}),null===d[t].type?Object(l.jsxs)("p",{className:"noInputRequired",children:["La consulta ",t+1," no requiere input"]}):Object(l.jsx)(l.Fragment,{})]}),Object(l.jsx)("div",{className:"submitBtn",onClick:function(){!function(){H("Cargando...");var e={},a=!0;if("departments"!==d[t].type&&"both"!==d[t].type||(""===w?a=!1:(e.departmentName=S?"":w.trim(),e.departmentId=S?w:0)),"dates"===d[t].type||"both"===d[t].type){var n=new Date(O),s=new Date(N);n>=s?a=!1:(e.startDate="".concat(n.getFullYear(),"-").concat(n.getMonth()+1<10?"0".concat(n.getMonth()+1):n.getMonth()+1,"-").concat(n.getDate()<10?"0".concat(n.getDate()):n.getDate()),e.endDate="".concat(s.getFullYear(),"-").concat(s.getMonth()+1<10?"0".concat(s.getMonth()+1):s.getMonth()+1,"-").concat(s.getDate()<10?"0".concat(s.getDate()):s.getDate()))}console.log(e),a?j()({method:"post",url:"http://localhost:3000/api/query".concat(t+1),data:{data:e}}).then((function(e){z(e.data.data),b(!0)})).catch((function(e){console.log(e),H("Error de conexi\xf3n")})):H("La informaci\xf3n ingresada no es v\xe1lida")}()},children:"Hacer consulta"})]}),Object(l.jsxs)("div",{className:"contentSubsection contentSubsection2",children:[Object(l.jsx)("h1",{className:"subContainerTitle",children:"Respuesta"}),Object(l.jsx)("div",{className:"tableContainer",children:m?Object(l.jsx)(p,{headers:F.columns,data:F.rows}):Object(l.jsx)("p",{children:A})})]})]})]})})]})}),f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,127)).then((function(a){var t=a.getCLS,n=a.getFID,s=a.getFCP,o=a.getLCP,c=a.getTTFB;t(e),n(e),s(e),o(e),c(e)}))};c.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),f()},33:function(e,a,t){},51:function(e,a,t){}},[[120,1,2]]]);
//# sourceMappingURL=main.821eac16.chunk.js.map