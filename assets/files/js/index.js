var self;
var conVue = new Vue({
    el: '.wrapBox',
    data: {
        // dataList: [
        //     {
        //         "id":
        //             "277",
        //         "type":
        //             "1",
        //         "title":
        //             "国安特色商品(供马甲关联)---推送(白短袖～折扇)",
        //         "content":
        //             [{"desc": "", "content_data": "95", "smallimg_url": ""}],
        //         "suspension_data":
        //             [{
        //                 "tabsValue": "card",
        //                 "suspension_name": "换个系列",
        //                 "content_type": "template",
        //                 "content_data": "278",
        //                 "postback": "postback158408129236165913",
        //                 "msg": "请填写回复内容",
        //                 "bol": false,
        //                 "type": 1,
        //                 "content": [{
        //                     "desc": "",
        //                     "content_data": "",
        //                     "card_info": null,
        //                     "card_type": null,
        //                     "smallimg_url": ""
        //                 }],
        //                 "conf_id": "274",
        //                 "reply_id": "174"
        //             }, {
        //                 "tabsValue": "card",
        //                 "suspension_name": "返回主页",
        //                 "content_type": "template",
        //                 "content_data": "274",
        //                 "postback": "postback158408139856584005",
        //                 "msg": "请填写回复内容",
        //                 "bol": false,
        //                 "type": 1,
        //                 "content": [{"desc": "", "content_data": "", "card_type": null, "card_info": null}],
        //                 "conf_id": "274",
        //                 "reply_id": "175"
        //             }],
        //         "cardInfo":
        //             [
        //                 {
        //                     "card_face": "https://img.mocentre.cn/mocentre_cloud/material/5e6b17ddc9e1b.png",
        //                     "smallimg_url": "https://img.mocentre.cn/mocentre_cloud/material/2469761c9a4ada7d01a17f7c902a9f39.png",
        //                     "card_face_type": "img",
        //                     "card_title": "北京中赫国安时尚主题T恤",
        //                     "car_sort": "1",
        //                     "card_main_word": "",
        //                     "is_open_within": "1",
        //                     "upload_type": 1,
        //                     "card_button": [
        //                         {
        //                             "tabsValue": "card",
        //                             "card_button_word": "查看详情",
        //                             "card_button_type": "jump",
        //                             "card_button_info": "https://mt.mocentre.com/index.php?m=Wap&c=GiftExchange&a=giftInfo&oid=352&keymark=111111111&test=test",
        //                             "postback": "postback158407853408996167",
        //                             "msg": "",
        //                             "bol": true,
        //                             "type": 1,
        //                             "content": [
        //                                 {
        //                                     "desc": "",
        //                                     "content_data": "",
        //                                     "card_info": [],
        //                                     "card_type": "",
        //                                     "smallimg_url": ""
        //                                 }
        //                             ]
        //                         }
        //                     ],
        //                     "card_type": 9
        //                 },
        //                 {
        //                     "delConfArr": [],
        //                     "card_face": "https://img.mocentre.cn/mocentre_cloud/material/5e6b17e149b1a.png",
        //                     "card_face_type": "img",
        //                     "smallimg_url": "https://img.mocentre.cn/mocentre_cloud/material/707afb42b6bd6a30a7b39a7be6615ba7.png",
        //                     "card_title": "中赫国安时尚主题折扇",
        //                     "car_sort": "1",
        //                     "card_main_word": "",
        //                     "is_open_within": "1",
        //                     "upload_type": 1,
        //                     "card_button": [
        //                         {
        //                             "tabsValue": "card",
        //                             "card_button_word": "查看详情",
        //                             "card_button_type": "jump",
        //                             "card_button_info": "https://mt.mocentre.com/index.php?m=Wap&c=GiftExchange&a=giftInfo&oid=353&keymark=111111111&test=test",
        //                             "postback": "postback158407868670994433",
        //                             "msg": "",
        //                             "bol": true,
        //                             "type": 1,
        //                             "content": [
        //                                 {
        //                                     "desc": "",
        //                                     "content_data": "",
        //                                     "card_info": [],
        //                                     "card_type": "",
        //                                     "smallimg_url": ""
        //                                 }
        //                             ]
        //                         }
        //                     ],
        //                     "card_type": 9
        //                 },
        //                 {
        //                     "delConfArr": [],
        //                     "card_face": "https://img.mocentre.cn/mocentre_cloud/material/5e6b17e59eab6.png",
        //                     "card_face_type": "img",
        //                     "smallimg_url": "https://img.mocentre.cn/mocentre_cloud/material/b13b88ee62518dc36f017b0923033788.png",
        //                     "card_title": "中赫国安时尚主题速写本",
        //                     "car_sort": "1",
        //                     "card_main_word": "",
        //                     "is_open_within": "1",
        //                     "upload_type": 1,
        //                     "card_button": [
        //                         {
        //                             "tabsValue": "card",
        //                             "card_button_word": "查看详情",
        //                             "card_button_type": "jump",
        //                             "card_button_info": "https://mt.mocentre.com/index.php?m=Wap&c=GiftExchange&a=giftInfo&oid=354&keymark=111111111&test=test",
        //                             "postback": "postback158407875345230187",
        //                             "msg": "",
        //                             "bol": true,
        //                             "type": 1,
        //                             "content": [
        //                                 {
        //                                     "desc": "",
        //                                     "content_data": "",
        //                                     "card_info": [],
        //                                     "card_type": "",
        //                                     "smallimg_url": ""
        //                                 }
        //                             ]
        //                         }
        //                     ],
        //                     "card_type": 9
        //                 }
        //             ],
        //         "cardType":
        //             "more"
        //     },
        //     {
        //         "id": "278",
        //         "type": "1",
        //         "title": "国安特色商品(供折扇关联)---推送(马甲~手机壳)",
        //         "suspension_data": [{
        //             "tabsValue": "card",
        //             "suspension_name": "换个系列1",
        //             "content_type": "template",
        //             "content_data": "277",
        //             "postback": "postback15840814470847699",
        //             "msg": "请填写回复内容",
        //             "bol": false,
        //             "type": 1,
        //             "content": [{"desc": "", "content_data": "", "card_info": [], "card_type": "", "smallimg_url": ""}],
        //             "conf_id": "277",
        //             "reply_id": "176"
        //         }, {
        //             "tabsValue": "card",
        //             "suspension_name": "返回主页2",
        //             "content_type": "template",
        //             "content_data": "274",
        //             "postback": "postback158408157170092267",
        //             "msg": "请填写回复内容",
        //             "bol": false,
        //             "type": 1,
        //             "content": [{"desc": "", "content_data": ""}],
        //             "conf_id": "274",
        //             "reply_id": "177"
        //         }],
        //         "cardInfo": [
        //             {
        //                 "card_face": "https://img.mocentre.cn/mocentre_cloud/material/5e6b17e909cdf.png",
        //                 "smallimg_url": "https://img.mocentre.cn/mocentre_cloud/material/16c1310194e5334dae89e177e80df91b.png",
        //                 "card_face_type": "img",
        //                 "card_title": "1992主题棉坎肩",
        //                 "car_sort": "1",
        //                 "card_main_word": "",
        //                 "is_open_within": "1",
        //                 "upload_type": 1,
        //                 "card_button": [
        //                     {
        //                         "tabsValue": "card",
        //                         "card_button_word": "查看详情",
        //                         "card_button_type": "jump",
        //                         "card_button_info": "https://mt.mocentre.com/index.php?m=Wap&c=GiftExchange&a=giftInfo&oid=346&keymark=111111111&test=test",
        //                         "postback": "postback158407883449643671",
        //                         "msg": "",
        //                         "bol": true,
        //                         "type": 1,
        //                         "content": [
        //                             {
        //                                 "desc": "",
        //                                 "content_data": "",
        //                                 "card_info": [],
        //                                 "card_type": "",
        //                                 "smallimg_url": ""
        //                             }
        //                         ]
        //                     }
        //                 ],
        //                 "card_type": 9
        //             },
        //             {
        //                 "delConfArr": [],
        //                 "card_face": "https://img.mocentre.cn/mocentre_cloud/material/5e6b17efec653.png",
        //                 "card_face_type": "img",
        //                 "smallimg_url": "https://img.mocentre.cn/mocentre_cloud/material/a62453d12e366ae3996842f0f5efbd16.png",
        //                 "card_title": "“往门里踢”时尚手机壳",
        //                 "car_sort": "1",
        //                 "card_main_word": "",
        //                 "is_open_within": "1",
        //                 "upload_type": 1,
        //                 "card_button": [
        //                     {
        //                         "tabsValue": "card",
        //                         "card_button_word": "查看详情",
        //                         "card_button_type": "jump",
        //                         "card_button_info": "https://mt.mocentre.com/index.php?m=Wap&c=GiftExchange&a=giftInfo&oid=347&keymark=111111111&test=test",
        //                         "postback": "postback158407897472295824",
        //                         "msg": "",
        //                         "bol": true,
        //                         "type": 1,
        //                         "content": [
        //                             {
        //                                 "desc": "",
        //                                 "content_data": "",
        //                                 "card_info": [],
        //                                 "card_type": "",
        //                                 "smallimg_url": ""
        //                             }
        //                         ]
        //                     }
        //                 ],
        //                 "card_type": 9
        //             },
        //             {
        //                 "delConfArr": [],
        //                 "card_face": "https://img.mocentre.cn/mocentre_cloud/material/5e6b17ec46f96.png",
        //                 "card_face_type": "img",
        //                 "smallimg_url": "https://img.mocentre.cn/mocentre_cloud/material/90bfc826a8b1f18bd3bc4dd742c3f4be.png",
        //                 "card_title": "“往门里踢”时尚毛衫卫衣",
        //                 "car_sort": "1",
        //                 "card_main_word": "",
        //                 "is_open_within": "1",
        //                 "upload_type": 1,
        //                 "card_button": [
        //                     {
        //                         "tabsValue": "card",
        //                         "card_button_word": "查看详情",
        //                         "card_button_type": "jump",
        //                         "card_button_info": "https://mt.mocentre.com/index.php?m=Wap&c=GiftExchange&a=giftInfo&oid=348&keymark=111111111&test=test",
        //                         "postback": "postback158407897522591900",
        //                         "msg": "",
        //                         "bol": true,
        //                         "type": 1,
        //                         "content": [
        //                             {
        //                                 "desc": "",
        //                                 "content_data": "",
        //                                 "card_info": [],
        //                                 "card_type": "",
        //                                 "smallimg_url": ""
        //                             }
        //                         ]
        //                     }
        //                 ],
        //                 "card_type": 9
        //             }
        //         ],
        //         "cardType": "more"
        //     }
        // ],
        dataList:[
            {
                "id": "451",
                "uid": "765",
                "cuid": "765",
                "chatbot_id": "23",
                "type": "1",
                "title": "浙江去哪儿---你好（推送）",
                "content": "[{\"desc\":\"\",\"content_data\":\"220\",\"smallimg_url\":\"\"}]",
                "suspension_data": [
                    {
                        "suspension_name": "快速预定",
                        "content_type": "template",
                        "content_data": "448",
                        "template_name": "浙江去哪儿--快速预定（推送）",
                        "postback": "postback158694619289874535",
                        "msg": "",
                        "modol_title": "",
                        "bol": true,
                        "conf_id": "448",
                        "reply_id": "476"
                    },
                    {
                        "modol_title": "",
                        "suspension_name": "低价秒杀",
                        "content_type": "template",
                        "content_data": "449",
                        "template_name": "浙江去哪儿----低价秒杀（推送）",
                        "postback": "postback15869462916614389",
                        "msg": "",
                        "bol": true,
                        "conf_id": "449",
                        "reply_id": "477"
                    },
                    {
                        "modol_title": "",
                        "suspension_name": "贴心服务",
                        "content_type": "template",
                        "content_data": "450",
                        "template_name": "浙江去哪儿----贴心服务（推送）",
                        "postback": "postback158694629212444279",
                        "msg": "",
                        "bol": true,
                        "conf_id": "450",
                        "reply_id": "478"
                    }
                ],
                "cardInfo": [
                    {
                        "card_face": "https://img.mocentre.cn/mocentre_cloud/material/5e9d5a13810fc.png",
                        "smallimg_url": "https://img.mocentre.cn/mocentre_cloud/material/7cad03a8b80c78828752793076f6fe12.jpg",
                        "card_face_type": "img",
                        "card_title": "最新活动",
                        "car_sort": "1",
                        "card_main_word": "",
                        "card_cover_type": "0",
                        "is_open_within": "1",
                        "upload_type": 1,
                        "card_button": [
                            {
                                "tabsValue": "card",
                                "card_button_word": "去哪儿重逢",
                                "card_button_type": "jump",
                                "card_button_info": "https://event.qunar.com/qm/meetWorldAgain/index.htm?bd_source=pr",
                                "card_button_name": "",
                                "postback": "postback158694227348375960",
                                "msg": "",
                                "bol": false,
                                "type": 1,
                                "content": [
                                    {
                                        "desc": "",
                                        "content_data": "",
                                        "card_info": [],
                                        "card_type": "",
                                        "smallimg_url": ""
                                    }
                                ]
                            },
                            {
                                "tabsValue": "card",
                                "card_button_word": "海外入境政策查询",
                                "card_button_type": "jump",
                                "card_button_info": "http://touch.qunar.com/intl/web/epidemic-info?scene=126&clicktime=1585541817&from=singlemessage&isappinstalled=0",
                                "card_button_name": "",
                                "postback": "postback158694248567385386",
                                "msg": "",
                                "bol": false,
                                "type": 1,
                                "content": [
                                    {
                                        "desc": "",
                                        "content_data": "",
                                        "card_info": [],
                                        "card_type": "",
                                        "smallimg_url": ""
                                    }
                                ]
                            },
                            {
                                "tabsValue": "card",
                                "card_button_word": "确诊患者同行查询",
                                "card_button_type": "jump",
                                "card_button_info": "https://wxapp.qunar.com/site/feiyansearch/index.html?scene=126&clicktime=1586585142#/?_k=chy7kv",
                                "card_button_name": "",
                                "postback": "postback158694258274750181",
                                "msg": "",
                                "bol": false,
                                "type": 1,
                                "content": [
                                    {
                                        "desc": "",
                                        "content_data": "",
                                        "card_info": [],
                                        "card_type": "",
                                        "smallimg_url": ""
                                    }
                                ]
                            },
                            {
                                "tabsValue": "card",
                                "card_button_word": "智能咨询",
                                "card_button_type": "template",
                                "card_button_info": "454",
                                "card_button_name": "智能咨询",
                                "postback": "postback158694258326045973",
                                "msg": "",
                                "bol": false,
                                "type": 1,
                                "content": [
                                    {
                                        "desc": "",
                                        "content_data": "",
                                        "card_info": [],
                                        "card_type": "",
                                        "smallimg_url": ""
                                    }
                                ],
                                "conf_id": "454",
                                "reply_id": "481"
                            }
                        ],
                        "card_type": 7
                    }
                ],
                "cardType": "one"
            },
            {
           "id": "452",
           "uid": "765",
           "cuid": "765",
           "chatbot_id": "23",
           "type": "1",
           "title": "预订问题----推送",
           "content": "[{\"desc\":\"\",\"content_data\":\"226\",\"smallimg_url\":\"\"}]",

           "suspension_data": [
               {
                   "suspension_name": "",
                   "content_type": "url",
                   "content_data": "",
                   "template_name": "",
                   "postback": "postback158700554295848100",
                   "msg": "",
                   "modol_title": "",
                   "bol": false
               }
           ],

           "cardInfo": [
               {
                   "card_face": "https://img.mocentre.cn/mocentre_cloud/material/5ea8070f0e193.png",
                   "smallimg_url": "https://img.mocentre.cn/mocentre_cloud/material/05df655fbfd3a7b5cb2d9febec2706a2.jpg",
                   "card_face_type": "img",
                   "card_title": "预订问题",
                   "car_sort": "1",
                   "card_main_word": "",
                   "card_cover_type": "0",
                   "is_open_within": "1",
                   "upload_type": 1,
                   "card_button": [
                       {
                           "tabsValue": "card",
                           "card_button_word": "如何购买机票",
                           "card_button_type": "jump",
                           "card_button_info": "https://complain.qunar.com/faq/answer.htm?businessType=flight&id=43&type=faq&name=如何购买机票&source=complain.kefu&categoryName=预订问题",
                           "card_button_name": "",
                           "postback": "postback158700538785037475",
                           "msg": "",
                           "bol": false,
                           "type": 1,
                           "content": [
                               {
                                   "desc": "",
                                   "content_data": "",
                                   "card_info": [],
                                   "card_type": "",
                                   "smallimg_url": ""
                               }
                           ],
                           "btnTabArr": [
                               {
                                   "type": 1,
                                   "disabled": false,
                                   "class": "el-icon-c-scale-to-original",
                                   "text": "卡片",
                                   "name": "card",
                                   "content": "卡片内容",
                                   "desc": "",
                                   "content_data": "",
                                   "card_info": [],
                                   "card_type": "",
                                   "smallimg_url": ""
                               },
                               {
                                   "type": 2,
                                   "disabled": false,
                                   "class": "el-icon-document",
                                   "text": "文字",
                                   "name": "text",
                                   "content": "文字内容",
                                   "desc": "",
                                   "content_data": "",
                                   "smallimg_url": ""
                               },
                               {
                                   "type": 3,
                                   "disabled": false,
                                   "class": "el-icon-picture",
                                   "text": "图片",
                                   "name": "image",
                                   "content": "图片内容",
                                   "desc": "图片描述",
                                   "content_data": "",
                                   "smallimg_url": ""
                               },
                               {
                                   "type": 4,
                                   "disabled": false,
                                   "class": "el-icon-microphone",
                                   "text": "音频",
                                   "name": "audio",
                                   "content": "音频内容",
                                   "desc": "",
                                   "content_data": "",
                                   "smallimg_url": ""
                               },
                               {
                                   "type": 5,
                                   "disabled": false,
                                   "class": "el-icon-video-camera",
                                   "text": "视频",
                                   "name": "video",
                                   "content": "视频内容",
                                   "desc": "",
                                   "content_data": "",
                                   "smallimg_url": ""
                               }
                           ]
                       },
                       {
                           "tabsValue": "card",
                           "card_button_word": "如何购买儿童机票",
                           "card_button_type": "jump",
                           "card_button_info": "https://complain.qunar.com/faq/answer.htm?businessType=flight&id=41&type=faq&name=机票如何购买儿童票&source=complain.kefu&categoryName=预订问题",
                           "card_button_name": "",
                           "postback": "postback158700544053872511",
                           "msg": "",
                           "bol": false,
                           "type": 1,
                           "content": [
                               {
                                   "desc": "",
                                   "content_data": "",
                                   "card_info": [],
                                   "card_type": "",
                                   "smallimg_url": ""
                               }
                           ],
                       },
                       {
                           "tabsValue": "card",
                           "card_button_word": "登机手续需要什么",
                           "card_button_type": "jump",
                           "card_button_info": "https://complain.qunar.com/faq/answer.htm?businessType=flight&id=196&type=faq&name=用哪些证件可以办理登机手续&source=complain.kefu&categoryName=预订问题",
                           "card_button_name": "",
                           "postback": "postback158700544163492636",
                           "msg": "",
                           "bol": false,
                           "type": 1,
                           "content": [
                               {
                                   "desc": "",
                                   "content_data": "",
                                   "card_info": [],
                                   "card_type": "",
                                   "smallimg_url": ""
                               }
                           ],

                       },
                       {
                           "tabsValue": "card",
                           "card_button_word": "更多问题",
                           "card_button_type": "jump",
                           "card_button_info": "https://complain.qunar.com/app/kf.htm?from=singlemessage&isappinstalled=0#questionList?dataIndex=0&businessType=flight&uid=#",
                           "card_button_name": "",
                           "postback": "postback158700544221899692",
                           "msg": "",
                           "bol": false,
                           "type": 1,
                           "content": [
                               {
                                   "desc": "",
                                   "content_data": "",
                                   "card_info": [],
                                   "card_type": "",
                                   "smallimg_url": ""
                               }
                           ],

                       }
                   ],
                   "card_type": 7
               }
           ],
           "cardType": "one"
        },
           {
               "id": "448",
               "uid": "765",
               "cuid": "765",
               "chatbot_id": "23",
               "type": "1",
               "title": "浙江去哪儿--快速预定（推送）",
               "content": "[{\"desc\":\"\",\"content_data\":\"221\",\"smallimg_url\":\"\"}]",
               "suspension_data": [
                   {
                       "suspension_name": "返回主页",
                       "content_type": "template",
                       "content_data": "451",
                       "template_name": "浙江去哪儿---你好（推送）",
                       "postback": "postback158694574151429640",
                       "msg": "",
                       "modol_title": "",
                       "bol": true,
                       "url": "https://www.baidu.com/",
                       "reply_id": "473",
                       "conf_id": "999"
                   }
               ],
               "template_id": "20200428pM11g25w",
               "cardInfo": [
                   {
                       "card_face": "https://img.mocentre.cn/mocentre_cloud/material/5ea8071231f3f.png",
                       "smallimg_url": "https://img.mocentre.cn/mocentre_cloud/material/2c6b919084d8ee1cab02d64c9b763d8b.jpg",
                       "card_face_type": "img",
                       "card_title": "早预定早省心",
                       "car_sort": "1",
                       "card_main_word": "",
                       "card_cover_type": "0",
                       "is_open_within": "1",
                       "upload_type": 1,
                       "card_button": [
                           {
                               "tabsValue": "card",
                               "card_button_word": "机票预订",
                               "card_button_type": "jump",
                               "card_button_info": "https://flight.qunar.com/",
                               "card_button_name": "",
                               "postback": "postback158694279101564301",
                               "msg": "",
                               "bol": false,
                               "type": 1,
                               "content": [
                                   {
                                       "desc": "",
                                       "content_data": "",
                                       "card_info": [],
                                       "card_type": "",
                                       "smallimg_url": ""
                                   }
                               ]
                           }
                       ],
                       "card_type": 9
                   },
                   {
                       "card_face": "https://img.mocentre.cn/mocentre_cloud/material/5ea8070f91f39.png",
                       "smallimg_url": "https://img.mocentre.cn/mocentre_cloud/material/f9b1e2a726be1f55ee739701cc7ce910.jpg",
                       "card_face_type": "img",
                       "card_title": "火车票查询更快捷",
                       "car_sort": "1",
                       "card_main_word": "",
                       "card_cover_type": "0",
                       "is_open_within": "1",
                       "upload_type": 1,
                       "card_button": [
                           {
                               "tabsValue": "card",
                               "card_button_word": "火车票预订",
                               "card_button_type": "jump",
                               "card_button_info": "https://train.qunar.com/",
                               "card_button_name": "",
                               "postback": "postback158694279101588183",
                               "msg": "",
                               "bol": false,
                               "type": 1,
                               "content": [
                                   {
                                       "desc": "",
                                       "content_data": "",
                                       "card_info": [],
                                       "card_type": "",
                                       "smallimg_url": ""
                                   }
                               ]
                           }
                       ],
                       "card_type": 9
                   },
                   {
                       "delConfArr": [],
                       "card_face": "https://img.mocentre.cn/mocentre_cloud/material/5ea80710a9b27.png",
                       "card_face_type": "img",
                       "smallimg_url": "https://img.mocentre.cn/mocentre_cloud/material/e71f07aa382a18d9a8c053a00d3e0060.jpg",
                       "card_title": "长短途汽车票",
                       "car_sort": "1",
                       "card_main_word": "",
                       "card_cover_type": "0",
                       "is_open_within": "1",
                       "upload_type": 1,
                       "card_button": [
                           {
                               "tabsValue": "card",
                               "card_button_word": "汽车票预订",
                               "card_button_type": "jump",
                               "card_button_info": "https://touch.qunar.com/h5/bus?bd_source=",
                               "card_button_name": "",
                               "postback": "postback158694294278336053",
                               "msg": "",
                               "bol": false,
                               "type": 1,
                               "content": [
                                   {
                                       "desc": "",
                                       "content_data": "",
                                       "card_info": [],
                                       "card_type": "",
                                       "smallimg_url": ""
                                   }
                               ]
                           }
                       ],
                       "card_type": 9
                   },
                   {
                       "delConfArr": [],
                       "card_face": "https://img.mocentre.cn/mocentre_cloud/material/5ea8071053338.png",
                       "card_face_type": "img",
                       "smallimg_url": "https://img.mocentre.cn/mocentre_cloud/material/d27f2eff9e61b85f0ff1a2526e1231aa.jpg",
                       "card_title": "超性价比酒店精选",
                       "car_sort": "1",
                       "card_main_word": "",
                       "card_cover_type": "0",
                       "is_open_within": "1",
                       "upload_type": 1,
                       "card_button": [
                           {
                               "tabsValue": "card",
                               "card_button_word": "酒店预订",
                               "card_button_type": "jump",
                               "card_button_info": "http://hotel.qunar.com/",
                               "card_button_name": "",
                               "postback": "postback158694294581525332",
                               "msg": "",
                               "bol": false,
                               "type": 1,
                               "content": [
                                   {
                                       "desc": "",
                                       "content_data": "",
                                       "card_info": [],
                                       "card_type": "",
                                       "smallimg_url": ""
                                   }
                               ]
                           }
                       ],
                       "card_type": 9
                   },
                   {
                       "delConfArr": [],
                       "card_face": "https://img.mocentre.cn/mocentre_cloud/material/5ea80711d08a9.png",
                       "card_face_type": "img",
                       "smallimg_url": "https://img.mocentre.cn/mocentre_cloud/material/eb67ca64400c06519518f418df6487f0.jpg",
                       "card_title": "多地门票提前预订",
                       "car_sort": "1",
                       "card_main_word": "",
                       "card_cover_type": "0",
                       "is_open_within": "1",
                       "upload_type": 1,
                       "card_button": [
                           {
                               "tabsValue": "card",
                               "card_button_word": "门票预订",
                               "card_button_type": "jump",
                               "card_button_info": "https://piao.qunar.com/",
                               "card_button_name": "",
                               "postback": "postback158694294616695382",
                               "msg": "",
                               "bol": false,
                               "type": 1,
                               "content": [
                                   {
                                       "desc": "",
                                       "content_data": "",
                                       "card_info": [],
                                       "card_type": "",
                                       "smallimg_url": ""
                                   }
                               ]
                           }
                       ],
                       "card_type": 9
                   }
               ],
               "cardType": "more"
           },
           {
               "id": "449",
               "uid": "765",
               "cuid": "765",
               "chatbot_id": "23",
               "type": "1",
               "title": "浙江去哪儿----低价秒杀（推送）",
               "content": "[{\"desc\":\"\",\"content_data\":\"222\",\"smallimg_url\":\"\"}]",
               "suspension_data": [
                   {
                       "suspension_name": "返回主页",
                       "content_type": "template",
                       "content_data": "451",
                       "template_name": "浙江去哪儿---你好（推送）",
                       "postback": "postback158694592239720705",
                       "msg": "",
                       "modol_title": "",
                       "bol": true,
                       "conf_id": "448",
                       "reply_id": "474"
                   }
               ],
               "cardInfo": [
                   {
                       "card_face": "https://img.mocentre.cn/mocentre_cloud/material/5e96d10c6fd76.png",
                       "smallimg_url": "https://img.mocentre.cn/mocentre_cloud/material/9693f9b9f7c93ca7c1e27823c5e8733f.jpg",
                       "card_face_type": "img",
                       "card_title": "学生特惠专享",
                       "car_sort": "1",
                       "card_main_word": "",
                       "card_cover_type": "0",
                       "is_open_within": "1",
                       "upload_type": 1,
                       "card_button": [
                           {
                               "tabsValue": "card",
                               "card_button_word": "点击查看",
                               "card_button_type": "jump",
                               "card_button_info": "https://m.flight.qunar.com/hd/active/newStudent?type=app&bd_source=qunartjjpgzh&scene=126&clicktime=1586586634",
                               "card_button_name": "",
                               "postback": "postback158694319896477752",
                               "msg": "",
                               "bol": false,
                               "type": 1,
                               "content": [
                                   {
                                       "desc": "",
                                       "content_data": "",
                                       "card_info": [],
                                       "card_type": "",
                                       "smallimg_url": ""
                                   }
                               ]
                           }
                       ],
                       "card_type": 9
                   },
                   {
                       "card_face": "https://img.mocentre.cn/mocentre_cloud/material/5e96d0fda5b82.png",
                       "smallimg_url": "https://img.mocentre.cn/mocentre_cloud/material/c7b701c37d9fa6f77427c2896ff6dbb9.jpg",
                       "card_face_type": "img",
                       "card_title": "特惠机票",
                       "car_sort": "1",
                       "card_main_word": "",
                       "card_cover_type": "0",
                       "is_open_within": "1",
                       "upload_type": 1,
                       "card_button": [
                           {
                               "tabsValue": "card",
                               "card_button_word": "点击查看",
                               "card_button_type": "jump",
                               "card_button_info": "https://touch.qunar.com/lowFlight/index?cat=touchhome&from=touchhome",
                               "card_button_name": "",
                               "postback": "postback158694319896493132",
                               "msg": "",
                               "bol": false,
                               "type": 1,
                               "content": [
                                   {
                                       "desc": "",
                                       "content_data": "",
                                       "card_info": [],
                                       "card_type": "",
                                       "smallimg_url": ""
                                   }
                               ]
                           }
                       ],
                       "card_type": 9
                   },
                   {
                       "delConfArr": [],
                       "card_face": "https://img.mocentre.cn/mocentre_cloud/material/5e9d5a9718480.png",
                       "card_face_type": "img",
                       "smallimg_url": "https://img.mocentre.cn/mocentre_cloud/material/a68fd1fc96e19a5122a6673bcd6e67d2.jpg",
                       "card_title": "优质特惠酒店",
                       "car_sort": "1",
                       "card_main_word": "",
                       "card_cover_type": "0",
                       "is_open_within": "1",
                       "upload_type": 1,
                       "card_button": [
                           {
                               "tabsValue": "card",
                               "card_button_word": "点击查看",
                               "card_button_type": "jump",
                               "card_button_info": "https://touch.qunar.com/ymir/activity/activities?activityId=722210125350&bd_source=zthd_815431",
                               "card_button_name": "",
                               "postback": "postback158694327820812594",
                               "msg": "",
                               "bol": false,
                               "type": 1,
                               "content": [
                                   {
                                       "desc": "",
                                       "content_data": "",
                                       "card_info": [],
                                       "card_type": "",
                                       "smallimg_url": ""
                                   }
                               ]
                           }
                       ],
                       "card_type": 9
                   },
                   {
                       "delConfArr": [],
                       "card_face": "https://img.mocentre.cn/mocentre_cloud/material/5e9d5a967487e.png",
                       "card_face_type": "img",
                       "smallimg_url": "https://img.mocentre.cn/mocentre_cloud/material/6d48c034b642c963eb109b68f32364be.jpg",
                       "card_title": "新人大礼包",
                       "car_sort": "1",
                       "card_main_word": "",
                       "card_cover_type": "0",
                       "is_open_within": "1",
                       "upload_type": 1,
                       "card_button": [
                           {
                               "tabsValue": "card",
                               "card_button_word": "点击查看",
                               "card_button_type": "jump",
                               "card_button_info": "https://event.qunar.com/newcustomer/index.htm",
                               "card_button_name": "",
                               "postback": "postback158694327900029729",
                               "msg": "",
                               "bol": false,
                               "type": 1,
                               "content": [
                                   {
                                       "desc": "",
                                       "content_data": "",
                                       "card_info": [],
                                       "card_type": "",
                                       "smallimg_url": ""
                                   }
                               ]
                           }
                       ],
                       "card_type": 9
                   },
                   {
                       "delConfArr": [],
                       "card_face": "https://img.mocentre.cn/mocentre_cloud/material/5e96d0fcb8618.png",
                       "card_face_type": "img",
                       "smallimg_url": "https://img.mocentre.cn/mocentre_cloud/material/a879917b5ff9c9d7103b367ae7d29b1a.jpg",
                       "card_title": "会员特惠",
                       "car_sort": "1",
                       "card_main_word": "",
                       "card_cover_type": "0",
                       "is_open_within": "1",
                       "upload_type": 1,
                       "card_button": [
                           {
                               "tabsValue": "card",
                               "card_button_word": "点击抢购",
                               "card_button_type": "jump",
                               "card_button_info": "https://qunarstar.qunar.com/webapp/index.html?scene=126&clicktime=1586588064#/?bd_source=weixin&_k=ogkdrb",
                               "card_button_name": "",
                               "postback": "postback158694327959235922",
                               "msg": "",
                               "bol": false,
                               "type": 1,
                               "content": [
                                   {
                                       "desc": "",
                                       "content_data": "",
                                       "card_info": [],
                                       "card_type": "",
                                       "smallimg_url": ""
                                   }
                               ]
                           }
                       ],
                       "card_type": 9
                   }
               ],
               "cardType": "more"
           },
           {
               "id": "450",
               "uid": "765",
               "cuid": "765",
               "chatbot_id": "23",
               "type": "1",
               "title": "浙江去哪儿----贴心服务（推送）",
               "content": "[{\"desc\":\"\",\"content_data\":\"223\",\"smallimg_url\":\"\"}]",
               "suspension_data": [
                   {
                       "suspension_name": "返回主页",
                       "content_type": "template",
                       "content_data": "451",
                       "template_name": "浙江去哪儿---你好（推送）",
                       "postback": "postback158694609804147444",
                       "msg": "",
                       "modol_title": "",
                       "bol": true,
                       "conf_id": "448",
                       "reply_id": "475"
                   }
               ],
               "cardInfo": [
                   {
                       "card_face": "https://img.mocentre.cn/mocentre_cloud/material/5e96d10bdb8b9.png",
                       "smallimg_url": "https://img.mocentre.cn/mocentre_cloud/material/5f48ad668f620de7b77818ffc151b376.jpg",
                       "card_face_type": "img",
                       "card_title": "个人帮助中心",
                       "car_sort": "1",
                       "card_main_word": "",
                       "card_cover_type": "0",
                       "is_open_within": "1",
                       "upload_type": 1,
                       "card_button": [
                           {
                               "tabsValue": "card",
                               "card_button_word": "我的主页",
                               "card_button_type": "jump",
                               "card_button_info": "https://pay.qunar.com/mobile/h5/personalcenter/myaccount/index.htm?hybridid=mob_uc",
                               "card_button_name": "",
                               "postback": "postback15869435146106257",
                               "msg": "",
                               "bol": false,
                               "type": 1,
                               "content": [
                                   {
                                       "desc": "",
                                       "content_data": "",
                                       "card_info": [],
                                       "card_type": "",
                                       "smallimg_url": ""
                                   }
                               ]
                           },
                           {
                               "tabsValue": "card",
                               "card_button_word": "客服中心",
                               "card_button_type": "jump",
                               "card_button_info": "https://complain.qunar.com/app/kf.htm?from=singlemessage&isappinstalled=0",
                               "card_button_name": "",
                               "postback": "postback158694356549977897",
                               "msg": "",
                               "bol": false,
                               "type": 1,
                               "content": [
                                   {
                                       "desc": "",
                                       "content_data": "",
                                       "card_info": [],
                                       "card_type": "",
                                       "smallimg_url": ""
                                   }
                               ]
                           }
                       ],
                       "card_type": 9
                   },
                   {
                       "card_face": "https://img.mocentre.cn/mocentre_cloud/material/5e96d103d2680.png",
                       "smallimg_url": "https://img.mocentre.cn/mocentre_cloud/material/f4455a58c25de87875afb54a8a8bfb0d.jpg",
                       "card_face_type": "img",
                       "card_title": "旅游攻略",
                       "car_sort": "1",
                       "card_main_word": "",
                       "card_cover_type": "0",
                       "is_open_within": "1",
                       "upload_type": 1,
                       "card_button": [
                           {
                               "tabsValue": "card",
                               "card_button_word": "查攻略",
                               "card_button_type": "jump",
                               "card_button_info": "https://touch.go.qunar.com/?from_url=http://travel.qunar.com/travelbook/index?from=header&scene=126&clicktime=1586590907",
                               "card_button_name": "",
                               "postback": "postback158694351461157610",
                               "msg": "",
                               "bol": false,
                               "type": 1,
                               "content": [
                                   {
                                       "desc": "",
                                       "content_data": "",
                                       "card_info": [],
                                       "card_type": "",
                                       "smallimg_url": ""
                                   }
                               ]
                           },
                           {
                               "tabsValue": "card",
                               "card_button_word": "旅游榜单",
                               "card_button_type": "jump",
                               "card_button_info": "https://touch.go.qunar.com/smartlist?from=mobile",
                               "card_button_name": "",
                               "postback": "postback158694371256935563",
                               "msg": "",
                               "bol": false,
                               "type": 1,
                               "content": [
                                   {
                                       "desc": "",
                                       "content_data": "",
                                       "card_info": [],
                                       "card_type": "",
                                       "smallimg_url": ""
                                   }
                               ]
                           }
                       ],
                       "card_type": 9
                   },
                   {
                       "delConfArr": [],
                       "card_face": "https://img.mocentre.cn/mocentre_cloud/material/5e96d10cbae10.png",
                       "card_face_type": "img",
                       "smallimg_url": "https://img.mocentre.cn/mocentre_cloud/material/08244681ecab86e747ae94ea7084e004.jpg",
                       "card_title": "专属服务",
                       "car_sort": "1",
                       "card_main_word": "",
                       "card_cover_type": "0",
                       "is_open_within": "1",
                       "upload_type": 1,
                       "card_button": [
                           {
                               "tabsValue": "card",
                               "card_button_word": "接送服务",
                               "card_button_type": "jump",
                               "card_button_info": "http://car.qunar.com/?from=186",
                               "card_button_name": "",
                               "postback": "postback158694352996335842",
                               "msg": "",
                               "bol": false,
                               "type": 1,
                               "content": [
                                   {
                                       "desc": "",
                                       "content_data": "",
                                       "card_info": [],
                                       "card_type": "",
                                       "smallimg_url": ""
                                   }
                               ]
                           },
                           {
                               "tabsValue": "card",
                               "card_button_word": "签证",
                               "card_button_type": "jump",
                               "card_button_info": "https://touch.dujia.qunar.com/visaWifi.qunar?it=n_index_visa&dep=北京",
                               "card_button_name": "",
                               "postback": "postback158694379702098530",
                               "msg": "",
                               "bol": false,
                               "type": 1,
                               "content": [
                                   {
                                       "desc": "",
                                       "content_data": "",
                                       "card_info": [],
                                       "card_type": "",
                                       "smallimg_url": ""
                                   }
                               ]
                           }
                       ],
                       "card_type": 9
                   }
               ],
               "cardType": "more"
           },

           {
               "id": "453",
               "uid": "765",
               "cuid": "765",
               "chatbot_id": "23",
               "type": "1",
               "title": "机票问题-----推送",
               "content": "[{\"desc\":\"\",\"content_data\":\"225\",\"smallimg_url\":\"\"}]",
               "suspension_data": [
                   {
                       "suspension_name": "预定问题",
                       "content_type": "template",
                       "content_data": "452",
                       "template_name": "预定问题----推送",
                       "postback": "postback158700558677513251",
                       "msg": "",
                       "modol_title": "",
                       "bol": true,
                       "conf_id": "452",
                       "reply_id": "479"
                   }
               ],
               "cardInfo": [
                   {
                       "card_face": "https://img.mocentre.cn/mocentre_cloud/material/5ea7c13f98e2d.png",
                       "smallimg_url": "https://img.mocentre.cn/mocentre_cloud/material/59c06695fdab577ed5022605407a16d3.jpg",
                       "card_face_type": "img",
                       "card_title": "机票问题",
                       "car_sort": "1",
                       "card_main_word": "",
                       "card_cover_type": "0",
                       "is_open_within": "1",
                       "upload_type": 1,
                       "card_button": [
                           {
                               "tabsValue": "card",
                               "card_button_word": "预订问题",
                               "card_button_type": "jump",
                               "card_button_info": "https://complain.qunar.com/app/kf.htm?from=singlemessage&isappinstalled=0#questionList?dataIndex=0&businessType=flight&uid=#",
                               "card_button_name": "",
                               "postback": "postback158700513224727325",
                               "msg": "",
                               "bol": false,
                               "type": 1,
                               "content": [
                                   {
                                       "desc": "",
                                       "content_data": "",
                                       "card_info": [],
                                       "card_type": "",
                                       "smallimg_url": ""
                                   }
                               ]
                           },
                           {
                               "tabsValue": "card",
                               "card_button_word": "改签问题",
                               "card_button_type": "jump",
                               "card_button_info": "https://complain.qunar.com/app/kf.htm?from=singlemessage&isappinstalled=0#questionList?dataIndex=1&businessType=flight&uid=#",
                               "card_button_name": "",
                               "postback": "postback158700521225978947",
                               "msg": "",
                               "bol": false,
                               "type": 1,
                               "content": [
                                   {
                                       "desc": "",
                                       "content_data": "",
                                       "card_info": [],
                                       "card_type": "",
                                       "smallimg_url": ""
                                   }
                               ]
                           },
                           {
                               "tabsValue": "card",
                               "card_button_word": "退票退款问题",
                               "card_button_type": "jump",
                               "card_button_info": "https://complain.qunar.com/app/kf.htm?from=singlemessage&isappinstalled=0#questionList?dataIndex=6&businessType=flight&uid=#",
                               "card_button_name": "",
                               "postback": "postback158700531687074799",
                               "msg": "",
                               "bol": false,
                               "type": 1,
                               "content": [
                                   {
                                       "desc": "",
                                       "content_data": "",
                                       "card_info": [],
                                       "card_type": "",
                                       "smallimg_url": ""
                                   }
                               ]
                           },
                           {
                               "tabsValue": "card",
                               "card_button_word": "其他问题",
                               "card_button_type": "jump",
                               "card_button_info": "https://complain.qunar.com/app/kf.htm?from=singlemessage&isappinstalled=0#businessType?title=机票问题&businessType=flight&uid=#",
                               "card_button_name": "",
                               "postback": "postback158700534189746396",
                               "msg": "",
                               "bol": false,
                               "type": 1,
                               "content": [
                                   {
                                       "desc": "",
                                       "content_data": "",
                                       "card_info": [],
                                       "card_type": "",
                                       "smallimg_url": ""
                                   }
                               ]
                           }
                       ],
                       "card_type": 7
                   }
               ],
               "cardType": "one"
           },
           {
               "id": "454",
               "uid": "765",
               "cuid": "765",
               "chatbot_id": "23",
               "type": "2",
               "title": "智能咨询",
               "content": "[{\"desc\":\"\",\"content_data\":\"请问您想咨询什么问题？\",\"smallimg_url\":\"\"}]",
               "suspension_data": [
                   {
                       "suspension_name": "机票问题",
                       "content_type": "template",
                       "content_data": "453",
                       "template_name": "机票问题-----推送",
                       "postback": "postback158700563915886063",
                       "msg": "",
                       "modol_title": "",
                       "bol": true,
                       "conf_id": "453",
                       "reply_id": "480"
                   }
               ]
           }
        ],
        confData: [],
        btnArr:[],
        tabIndex: 0,
        showData:true,
        inputVal:'',
        titleName:'',
        iframeUrl:'',
        iframeShow:false,
        menuShow:false,
        chatHeight:'468px',
        dataId:1,
        tipsContentData:[
            {
                img:'./images/head.png',
                name:'去哪网去哪网',
                text:'去哪网去哪网去哪网去哪网去哪网去哪网去哪网去哪网',
            },
            {
                img:'./images/head.png',
                name:'手机营业厅手机营业厅',
                text:'手机营业厅手机营业厅手机营业厅手机营业厅手机营业厅',
            },
            {
                img:'./images/head.png',
                name:'浙江爱奇艺浙江爱奇艺',
                text:'浙江爱奇艺浙江爱奇艺浙江爱奇艺浙江爱奇艺浙江爱奇艺',
            },
            {
                img:'./images/head.png',
                name:'浙江农信浙江农信',
                text:'浙江农信浙江农信浙江农信浙江农信浙江农信浙江农信',
            },
        ]
    },
    created: function () {
        self = this;
        self.dataList=[];
        if(self.getUrlParam('id')==0){
            self.dataList=qunawangData;
        }else if(self.getUrlParam('id')==1){
            self.dataList=phoneData;
        }else if(self.getUrlParam('id')==2){
            self.dataList=aiqiyiData;
        }else if(self.getUrlParam('id')==3){
            self.dataList=ruralCreditData;
        }
    },
    mounted: function () {
        $('.wrapBox').show();
        self.confData.push(self.dataList[0]);
        self.titleName=self.confData[0].title;
        self.btnArr=JSON.parse(JSON.stringify(self.confData));

        self.chatHeight=window.innerHeight-170+'px';
    },
    methods: {
        menuFn:function(){
            self.menuShow=!self.menuShow
        },
        menuFns:function(){
            self.menuShow=false;
        },
         getUrlParam:function (name) {
            var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return decodeURIComponent(r[2]); return null;
        },
        scrollTopFn:function(num){
            setTimeout(function(){
                $('.dialog-container ul').scrollTop(200*$('.dialog-container ul li').length)
            },num)
        },
        clickInput:function(){
            self.confData.push({
                type: 'msgText',
                text: self.inputVal
            });
            self.scrollTopFn(400);
            // setTimeout(function(){
            //     if(self.inputVal=='你好'){
            //         self.confData.push({
            //             type: 'msgTextAi',
            //             text: '你也好，谢谢。'
            //         });
            //     }
            //     console.log(self.dataId,333);
            //         self.dataList.forEach(function(item,index){
            //             console.log(item,88);
            //                 if(item.title==self.inputVal){
            //                     self.confData.push(item);
            //                     self.btnArr=[];
            //                     self.btnArr.push(item);
            //                     console.log(item,self.confData);
            //                 }
            //
            //         })
            //
            //     setTimeout(function(){
            //         $(".wrap").scrollLeft(1);
            //     },1000)
            //
            //     self.scrollTopFn(200);
            // },600)

        },
        clickTab: function (obj, index, indexs) {
           // self.tabIndex = index + 'sub' + indexs;
            self.menuShow=!self.menuShow
            console.log(obj, 88);
            self.confData.push({
                type: 'msgText',
                text: obj.suspension_name
            });
            self.dataId=obj.content_data;
            setTimeout(function(){
                console.log(obj.content_data,234);
                if(obj.content_data){
                    self.dataList.forEach(function(item,index){
                        if(item.id==obj.content_data){
                            self.confData.push(item);
                            self.btnArr=[];
                            self.btnArr.push(item);
                            console.log(item,self.confData);
                        }
                    });
                    setTimeout(function(){
                        $(".wrap").scrollLeft(1);
                    },1000)
                }
            },350)
            self.scrollTopFn();
            self.scrollTopFn(500);
            // var n = parseInt(obj.content_data);
            // if (!isNaN(n))
            // {
            //     if(obj){
            //         self.confData.push({
            //             type: 'msgText',
            //             text: obj.suspension_name
            //         });
            //     }
            //     self.dataList.forEach(function(item,index){
            //         if(item.id==obj.content_data){
            //             console.log(item,234234);
            //             self.confData.push(item);
            //             self.btnArr=[];
            //             self.btnArr.push(item);
            //             self.scrollTopFn(500);
            //         }
            //     });
            // }else{
            //     self.confData.push({
            //         type: 'msgText',
            //         text: obj.suspension_name
            //     });
            //     setTimeout(function(){
            //         if(obj.content_data){
            //             self.dataList.forEach(function(item,index){
            //                 if(item.id==obj.content_data){
            //                     self.confData.push(item);
            //                     self.btnArr=[];
            //                     self.btnArr.push(item);
            //                 }
            //             });
            //         }
            //     },350)
            //     self.scrollTopFn();
            //     self.scrollTopFn(500);
            // }
        },
        videoFn:function(e){
            console.log(e,883);
            e.target.style.zIndex='-1';
            e.target.nextElementSibling.play()
        },
        timeWeek: function () {
            var now = new Date();
            var year = now.getFullYear();       //年
            var month = now.getMonth() + 1;     //月
            var day = now.getDate();            //日

            var hh = now.getHours(); //时
            var mm = (now.getMinutes()) % 60;  //分
            if ((now.getMinutes()) / 60 > 1) {
                hh += Math.floor((now.getMinutes()) / 60);
            }

            var clock='';


            if (hh < 10) {
                clock += "0";
            }
            clock += hh + ":";
            if (mm < 10) clock += '0';
            clock += mm;
            var week = now.getDay(); //星期
            //判断星期几
            var weeks = ["日", "一", "二", "三", "四", "五", "六"];
            var getWeek = "星期" + weeks[week];
            var str = getWeek + " " + clock;
            return str
        },
        timeFn: function () {
            var now = new Date();


            var hh = now.getHours(); //时
            var mm = (now.getMinutes()) % 60;  //分
            if ((now.getMinutes()) / 60 > 1) {
                hh += Math.floor((now.getMinutes()) / 60);
            }
            var clock='';
            if (hh < 10) {
                clock += "0";
            }
            clock += hh + ":";
            if (mm < 10) clock += '0';
            clock += mm;
            return clock
        },
        clickGo: function (url,btnItem) {
            console.log(url,btnItem);
            if(url==10086){
                window.location.href = 'tel://' + 10086;
                return false;
            }
            if(url==4008896596){
                window.location.href = 'tel://' + 4008896596;
                return false;
            }
            var n = parseInt(url);
            if (!isNaN(n))
            {
                if(btnItem){
                    self.confData.push({
                        type: 'msgText',
                        text: btnItem.card_button_name
                    });
                }
                self.dataList.forEach(function(item,index){
                    if(item.id==url){
                        console.log(item);
                        self.confData.push(item);
                        self.btnArr=[];
                        self.btnArr.push(item);
                        self.scrollTopFn(500);
                    }
                });
            }else{
                console.log(url);
               // self.iframeShow=true;
               // self.iframeUrl=url;
                window.open(url);
            }
        },
        backFn:function(){
            if (self.iframeShow) {
               // self.iframeShow = false;
            } else {
                window.location.href = './tipsContent.html';
            }
        }

    },
})
