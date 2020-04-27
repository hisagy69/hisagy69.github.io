<?php
$queryUrl = 'https://sumka-v-roddom.bitrix24.ru/rest/1/v8fuqmhx25sh8orz/crm.lead.add.json';
$queryData = http_build_query(array(
    'fields' => array(
        'TITLE' => 'Заявка с сайта', 
        'NAME' => $_POST["userName1"],
        'PHONE' => array(
            array(
                "VALUE" => $_POST["userPhone1"], 
                "VALUE_TYPE" => "MOBILE"
            )
        )
    ),
    'params' => array("REGISTER_SONET_EVENT" => "Y")
)); 
$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_SSL_VERIFYPEER => 0,
    CURLOPT_POST => 1,
    CURLOPT_HEADER => 0,
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => $queryUrl,
    CURLOPT_POSTFIELDS => $queryData,
));
$result = curl_exec($curl);
curl_close($curl);
?>