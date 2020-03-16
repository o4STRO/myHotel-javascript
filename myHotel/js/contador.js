//Nessa etapa é calculado e exibido o tempo para o fim da oferta

var msgPrincipal;
var hoje;
var elFimOferta;

function ofertaExpira(hoje){

    var semanaHoje, dia, data, mes, ano, diaNome, mesNome;
    //Adiciona 7 dias a data/hora atual (adicionado em milissegundos)
    semanaHoje = new Date(hoje.getTime() + 7 * 24 * 60 * 60 * 1000);
    diaNome = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
    mesNome = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

   //Coletor de datas
   dia = diaNome[semanaHoje.getDay()];
   data = semanaHoje.getDate();
   mes = mesNome[semanaHoje.getMonth()];
   ano = semanaHoje.getFullYear();

   //Mensagem 

   msgPrincipal = 'Oferta expira em: ';
   msgPrincipal += dia + '<br/>(' + data + ' ' + mes + ' ' + ano + ' )';

   return msgPrincipal;
}

    hoje = new Date();
    elFimOferta = document.getElementById('fimOfertaHtml');
    elFimOferta.innerHTML = ofertaExpira(hoje);


