// Используя https://www.aviasales.ru/API , найдите самый дешевый билет из Москвы в Ниццу на осень 2018.

const iata = "NCE"; //https://www.travelpayouts.com/widgets_suggest_params?q=Из%20Москвы%20в%20Ниццу



function reqListener () {
    console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "http://min-prices.aviasales.ru/calendar_preload?origin=MOW&destination=NCE&one_way=true&depart_date=2018-10-19", true);
oReq.send();




//http://min-prices.aviasales.ru/calendar_preload&

//http://api.travelpayouts.com/v2/prices/latest?currency=rub&period_type=year&page=1&limit=30&show_to_affiliates=true&sorting=price&token=РазместитеЗдесьВашТокен