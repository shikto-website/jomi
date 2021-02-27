function sideM(id, bgCol){
    return (
        Container({
            padding:5
        },[
            Row([                
                BigText({textColor:bgCol, textStyle:"bold", text:id}),
                Container({size:[10,10]}),

                TextBox({id:"textBox1_" + id, size:[40,100], backgroundColor:"#E0E0E0"}),                
                Container({size:[5,5]}),
                Text({textColor:bgCol, textStyle:"bold", text:"ফুট"}),
    
                Container({size:[10,10]}),
    
                TextBox({id:"textBox2_" + id, size:[40,100], backgroundColor:"#E0E0E0", value:"0"}),                
                Container({size:[5,5]}),
                Text({textColor:bgCol, textStyle:"bold", text:"ইঞ্চি"})
            ])
        ])
    )
}

var mainLayout = [
    HugeText({textStyle:"bold", text:"জমির ক্ষেত্রফল"}),
    Container({size:[10,10]}),
    Container({size:[250,250]},[
        Image({src:"./asset/image/jomi_1.png"})
    ]),
    Paper([
        Column({
            crossAlign:"end"
        },[
            sideM("A", Colors.green),
            sideM("B & C", Colors.blue),
            sideM("D", Colors.orange)
        ])
    ]),
    Button({id:"calc", size:[50,200], text:""},[BigText({textStyle:"bold", text:"Calculate"})]),
    Paper([
        Column({
            textStyle:"bold"
        },[
            BigText({text:"মোট জমির ক্ষেত্রফল:"}),
            Column([
                Row([
                    BigText({id:"result1", text:"---"}),
                    Container({size:[10,10]}),
                    BigText({textStyle:"italic", text:"বর্গফুট"})
                ]),
                Row([
                    BigText({id:"result2", text:"---"}),
                    Container({size:[10,10]}),
                    BigText({textStyle:"italic", text:"শতক"})
                ])
            ])
        ])
    ])
]