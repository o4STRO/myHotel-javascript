
//O hotel

(function(){
    var hotel = {
        nome: 'Yume',
        valor: 240,
        desconto: 15,
        valorOferta: function(){
            var oferta = this.valor * ((100 - this.desconto) / 100);
            return oferta;
        }
    }



//Exibe as características do hotel
var nomeHotel,valor,valorDesconto;

nomeHotel = document.getElementById('hotelHtml');
valor = document.getElementById('valorHtml');
valorDesconto = document.getElementById('valorDescontoHtml');

nomeHotel.textContent = hotel.nome + ' Hotel';
valor.textContent = 'R$' + hotel.valor.toFixed(2);
valorDesconto.textContent = 'R$' + hotel.valorOferta();

}());