#!/bin/bash

link=("https://company-atk.herokuapp.com" "https://company-atk.herokuapp.com/list" "https://company-atk.herokuapp.com/2258ie4t68jv" "https://account-atk.herokuapp.com/list" "https://account-atk.herokuapp.com/1c0x0mzp83t" "https://activity-atk.herokuapp.com/list" "https://activity-atk.herokuapp.com/2dra7wqcyup")
json=("company-home.json" "company-list.json" "company-record.json" "account-list.json" "account-record.json" "activity-list.json" "activity-record.json")

for i in $(seq 0 6); do
    echo "URL: ${link[$i]}"
    echo "File name: ${json[$i]}"
    curl "${link[$i]}" > "servicios/${json[$i]}"
done