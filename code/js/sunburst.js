// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

var data = [{
    name: '1067',
    itemStyle: {
        color: '#ff785d'
    },
    children: [{
        name: '1013',
        itemStyle: {
            color: '#92d050'
        },
        children: [{
            name: '1104',
            value: 1,
            itemStyle: {
                color: '#669900'
            }
        }, {
            name: '1110',
            value: 1,
            itemStyle: {
                color: '#99CC00'
            }
        }, {
            name: '1118',
            value: 1,
            itemStyle: {
                color: '#009933'
            }
        }, {
            name: '1149',
            value: 1,
            itemStyle: {
                color: '#CCFF00'
            }
        }, {
            name: '1165',
            value: 1,
            itemStyle: {
                color: '#33CC99'
            }
        }, {
            name: '1184',
            value: 1,
            itemStyle: {
                color: '#CCFF99'
            }
        }, {
            name: '1249',
            value: 1,
            itemStyle: {
                color: '#009966'
            }
        }, {
            name: '1251',
            value: 1,
            itemStyle: {
                color: '#99FF99'
            }
        }, {
            name: '1295',
            value: 1,
            itemStyle: {
                color: '#33CC66'
            }
        }, {
            name: '1300',
            value: 1,
            itemStyle: {
                color: '#99FF66'
            }
        }, {
            name: '1312',
            value: 1,
            itemStyle: {
                color: '#33FF99'
            }
        }, {
            name: '1363',
            value: 1,
            itemStyle: {
                color: '#CCFF99'
            }
        }, {
            name: '1371',
            value: 1,
            itemStyle: {
                color: '#99FF33'
            }
        }, {
            name: '1378',
            value: 1,
            itemStyle: {
                color: '#00FF99'
            }
        }, {
            name: '1433',
            value: 1,
            itemStyle: {
                color: '#00CC66'
            }
        }, {
            name: '1473',
            value: 1,
            itemStyle: {
                color: '#33CC66'
            }
        }, {
            name: '1499',
            value: 1,
            itemStyle: {
                color: '#99CC66'
            }
        }]
    }, {
        name: '1041',
        itemStyle: {
            color: '#ffbc2e'
        },
        children: [{
            name: '1108',
            value: 1,
            itemStyle: {
                color: '#FFCC00'
            }
        }, {
            name: '1124',
            value: 1,
            itemStyle: {
                color: '#FFCC66'
            }
        }, {
            name: '1137',
            value: 1,
            itemStyle: {
                color: '#FF9900'
            }
        }, {
            name: '1180',
            value: 1,
            itemStyle: {
                color: '#FF9966'
            }
        }, {
            name: '1186',
            value: 1,
            itemStyle: {
                color: '#FF9933'
            }
        }, {
            name: '1213',
            value: 1,
            itemStyle: {
                color: '#FF6600'
            }
        }, {
            name: '1226',
            value: 1,
            itemStyle: {
                color: '#FF3300'
            }
        }, {
            name: '1248',
            value: 1,
            itemStyle: {
                color: '#FFCC99'
            }
        }, {
            name: '1253',
            value: 1,
            itemStyle: {
                color: '#FFFF99'
            }
        }, {
            name: '1255',
            value: 1,
            itemStyle: {
                color: '#FFFF33'
            }
        }, {
            name: '1293',
            value: 1,
            itemStyle: {
                color: '#FF0000'
            }
        }, {
            name: '1327',
            value: 1,
            itemStyle: {
                color: '#CC6633'
            }
        }, {
            name: '1342',
            value: 1,
            itemStyle: {
                color: '#CC3300'
            }
        }, {
            name: '1346',
            value: 1,
            itemStyle: {
                color: '#CC0000'
            }
        }, {
            name: '1347',
            value: 1,
            itemStyle: {
                color: '#CC6666'
            }
        }, {
            name: '1368',
            value: 1,
            itemStyle: {
                color: '#CC3333'
            }
        }, {
            name: '1369',
            value: 1,
            itemStyle: {
                color: '#FFCC33'
            }
        }, {
            name: '1370',
            value: 1,
            itemStyle: {
                color: '#990000'
            }
        }, {
            name: '1431',
            value: 1,
            itemStyle: {
                color: '#CC9999'
            }
        }, {
            name: '1439',
            value: 1,
            itemStyle: {
                color: '#663333'
            }
        }, {
            name: '1451',
            value: 1,
            itemStyle: {
                color: '#660000'
            }
        }, {
            name: '1467',
            value: 1,
            itemStyle: {
                color: '#993300'
            }
        }, {
            name: '1498',
            value: 1,
            itemStyle: {
                color: '#993333'
            }
        }]

    }, {
        name: '1007',
        itemStyle: {
            color: '#53abff'
        },
        children: [{
            name: '1087',
            itemStyle: {
                color: '#576bff'
            },
            children: [{
                name: '1286',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1151',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }, {
                name: '1220',
                value: 1,
                itemStyle: {
                    color: '#99CCFF'
                }
            }, {
                name: '1141',
                value: 1,
                itemStyle: {
                    color: '#CCCCFF'
                }
            }, {
                name: '1494',
                value: 1,
                itemStyle: {
                    color: '#3366FF'
                }
            }, {
                name: '1373',
                value: 1,
                itemStyle: {
                    color: '#6699CC'
                }
            }]
        }, {
            name: '1092',
            itemStyle: {
                color: '#576bff'
            },
            children: [{
                name: '1270',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1344',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }, {
                name: '1112',
                value: 1,
                itemStyle: {
                    color: '#99CCFF'
                }
            }, {
                name: '1308',
                value: 1,
                itemStyle: {
                    color: '#CCCCFF'
                }
            }, {
                name: '1301',
                value: 1,
                itemStyle: {
                    color: '#3366FF'
                }
            }]
        }, {
            name: '1115',
            itemStyle: {
                color: '#576bff'
            },
            children: [{
                name: '1169',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1233',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }, {
                name: '1423',
                value: 1,
                itemStyle: {
                    color: '#99CCFF'
                }
            }, {
                name: '1471',
                value: 1,
                itemStyle: {
                    color: '#CCCCFF'
                }
            }, {
                name: '1243',
                value: 1,
                itemStyle: {
                    color: '#3366FF'
                }
            }, {
                name: '1491',
                value: 1,
                itemStyle: {
                    color: '#6699CC'
                }
            }, {
                name: '1464',
                value: 1,
                itemStyle: {
                    color: '#9966FF'
                }
            }, {
                name: '1408',
                value: 1,
                itemStyle: {
                    color: '#660099'
                }
            }, {
                name: '1183',
                value: 1,
                itemStyle: {
                    color: '#0099FF'
                }
            }, {
                name: '1425',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1357',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }, {
                name: '1459',
                value: 1,
                itemStyle: {
                    color: '#99CCFF'
                }
            }, {
                name: '1455',
                value: 1,
                itemStyle: {
                    color: '#CCCCFF'
                }
            }]
        }, {
            name: '1125',
            itemStyle: {
                color: '#576bff'
            },
            children: [{
                name: '1398',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1307',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }, {
                name: '1113',
                value: 1,
                itemStyle: {
                    color: '#99CCFF'
                }
            }]
        }, {
            name: '1172',
            itemStyle: {
                color: '#576bff'
            },
            children: [{
                name: '1257',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1490',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }, {
                name: '1246',
                value: 1,
                itemStyle: {
                    color: '#99CCFF'
                }
            }, {
                name: '1466',
                value: 1,
                itemStyle: {
                    color: '#CCCCFF'
                }
            }, {
                name: '1475',
                value: 1,
                itemStyle: {
                    color: '#3366FF'
                }
            }, {
                name: '1314',
                value: 1,
                itemStyle: {
                    color: '#6699CC'
                }
            }, {
                name: '1397',
                value: 1,
                itemStyle: {
                    color: '#9966FF'
                }
            }, {
                name: '1436',
                value: 1,
                itemStyle: {
                    color: '#660099'
                }
            }, {
                name: '1480',
                value: 1,
                itemStyle: {
                    color: '#0099FF'
                }
            }, {
                name: '1345',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1477',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }, {
                name: '1132',
                value: 1,
                itemStyle: {
                    color: '#99CCFF'
                }
            }]
        }, {
            name: '1192',
            itemStyle: {
                color: '#576bff'
            },
            children: [{
                name: '1403',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1282',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }, {
                name: '1303',
                value: 1,
                itemStyle: {
                    color: '#99CCFF'
                }
            }, {
                name: '1210',
                value: 1,
                itemStyle: {
                    color: '#CCCCFF'
                }
            }, {
                name: '1340',
                value: 1,
                itemStyle: {
                    color: '#3366FF'
                }
            }, {
                name: '1484',
                value: 1,
                itemStyle: {
                    color: '#6699CC'
                }
            }, {
                name: '1140',
                value: 1,
                itemStyle: {
                    color: '#9966FF'
                }
            }]
        }, {
            name: '1199',
            itemStyle: {
                color: '#576bff'
            },
            children: [{
                name: '1348',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1391',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }, {
                name: '1278',
                value: 1,
                itemStyle: {
                    color: '#99CCFF'
                }
            }, {
                name: '1486',
                value: 1,
                itemStyle: {
                    color: '#CCCCFF'
                }
            }, {
                name: '1197',
                value: 1,
                itemStyle: {
                    color: '#3366FF'
                }
            }]
        }, {
            name: '1224',
            itemStyle: {
                color: '#576bff'
            },
            children: [{
                name: '1195',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1102',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }, {
                name: '1134',
                value: 1,
                itemStyle: {
                    color: '#99CCFF'
                }
            }, {
                name: '1106',
                value: 1,
                itemStyle: {
                    color: '#CCCCFF'
                }
            }, {
                name: '1417',
                value: 1,
                itemStyle: {
                    color: '#3366FF'
                }
            }, {
                name: '1281',
                value: 1,
                itemStyle: {
                    color: '#6699CC'
                }
            }, {
                name: '1275',
                value: 1,
                itemStyle: {
                    color: '#9966FF'
                }
            }, {
                name: '1406',
                value: 1,
                itemStyle: {
                    color: '#660099'
                }
            }, {
                name: '1323',
                value: 1,
                itemStyle: {
                    color: '#0099FF'
                }
            }, {
                name: '1299',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1326',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }, {
                name: '1416',
                value: 1,
                itemStyle: {
                    color: '#99CCFF'
                }
            }, {
                name: '1495',
                value: 1,
                itemStyle: {
                    color: '#CCCCFF'
                }
            }, {
                name: '1393',
                value: 1,
                itemStyle: {
                    color: '#3366FF'
                }
            }, {
                name: '1429',
                value: 1,
                itemStyle: {
                    color: '#6699CC'
                }
            }, {
                name: '1351',
                value: 1,
                itemStyle: {
                    color: '#9966FF'
                }
            }, {
                name: '1205',
                value: 1,
                itemStyle: {
                    color: '#660099'
                }
            }, {
                name: '1221',
                value: 1,
                itemStyle: {
                    color: '#0099FF'
                }
            }, {
                name: '1007',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }]
        }, {
            name: '1230',
            itemStyle: {
                color: '#576bff'
            },
            children: [{
                name: '1223',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1167',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }, {
                name: '1182',
                value: 1,
                itemStyle: {
                    color: '#99CCFF'
                }
            }, {
                name: '1129',
                value: 1,
                itemStyle: {
                    color: '#CCCCFF'
                }
            }, {
                name: '1200',
                value: 1,
                itemStyle: {
                    color: '#3366FF'
                }
            }, {
                name: '1404',
                value: 1,
                itemStyle: {
                    color: '#6699CC'
                }
            }, {
                name: '1354',
                value: 1,
                itemStyle: {
                    color: '#9966FF'
                }
            }, {
                name: '1265',
                value: 1,
                itemStyle: {
                    color: '#660099'
                }
            }, {
                name: '1252',
                value: 1,
                itemStyle: {
                    color: '#0099FF'
                }
            }]
        }, {
            name: '1281',
            itemStyle: {
                color: '#576bff'
            },
            children: [{
                name: '1224',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }]
        }]
    }, {
        name: '1059',
        itemStyle: {
            color: '#53abff'
        },
        children: [{
            name: '1057',
            itemStyle: {
                color: '#576bff'
            },
            children: [{
                name: '1361',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1173',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }, {
                name: '1374',
                value: 1,
                itemStyle: {
                    color: '#99CCFF'
                }
            }, {
                name: '1410',
                value: 1,
                itemStyle: {
                    color: '#CCCCFF'
                }
            }, {
                name: '1150',
                value: 1,
                itemStyle: {
                    color: '#3366FF'
                }
            }, {
                name: '1142',
                value: 1,
                itemStyle: {
                    color: '#6699CC'
                }
            }]
        }, {
            name: '1058',
            itemStyle: {
                color: '#576bff'
            },
            children: [{
                name: '1489',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1261',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }, {
                name: '1171',
                value: 1,
                itemStyle: {
                    color: '#99CCFF'
                }
            }, {
                name: '1333',
                value: 1,
                itemStyle: {
                    color: '#CCCCFF'
                }
            }, {
                name: '1424',
                value: 1,
                itemStyle: {
                    color: '#3366FF'
                }
            }, {
                name: '1445',
                value: 1,
                itemStyle: {
                    color: '#6699CC'
                }
            }, {
                name: '1450',
                value: 1,
                itemStyle: {
                    color: '#9966FF'
                }
            }, {
                name: '1202',
                value: 1,
                itemStyle: {
                    color: '#660099'
                }
            }, {
                name: '1130',
                value: 1,
                itemStyle: {
                    color: '#0099FF'
                }
            }, {
                name: '1383',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1245',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }]
        }, {
            name: '1079',
            itemStyle: {
                color: '#576bff'
            },
            children: [{
                name: '1219',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1262',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }, {
                name: '1395',
                value: 1,
                itemStyle: {
                    color: '#99CCFF'
                }
            }, {
                name: '1482',
                value: 1,
                itemStyle: {
                    color: '#CCCCFF'
                }
            }]
        }, {
            name: '1080',
            itemStyle: {
                color: '#576bff'
            },
            children: [{
                name: '1193',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1376',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }, {
                name: '1364',
                value: 1,
                itemStyle: {
                    color: '#99CCFF'
                }
            }, {
                name: '1449',
                value: 1,
                itemStyle: {
                    color: '#CCCCFF'
                }
            }, {
                name: '1311',
                value: 1,
                itemStyle: {
                    color: '#3366FF'
                }
            }, {
                name: '1422',
                value: 1,
                itemStyle: {
                    color: '#6699CC'
                }
            }, {
                name: '1194',
                value: 1,
                itemStyle: {
                    color: '#9966FF'
                }
            }, {
                name: '1297',
                value: 1,
                itemStyle: {
                    color: '#660099'
                }
            }, {
                name: '1384',
                value: 1,
                itemStyle: {
                    color: '#0099FF'
                }
            }]
        }, {
            name: '1096',
            itemStyle: {
                color: '#576bff'
            },
            children: [{
                name: '1059',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1254',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }, {
                name: '1402',
                value: 1,
                itemStyle: {
                    color: '#99CCFF'
                }
            }, {
                name: '1478',
                value: 1,
                itemStyle: {
                    color: '#CCCCFF'
                }
            }, {
                name: '1239',
                value: 1,
                itemStyle: {
                    color: '#3366FF'
                }
            }, {
                name: '1500',
                value: 1,
                itemStyle: {
                    color: '#6699CC'
                }
            }]
        }, {
            name: '1101',
            itemStyle: {
                color: '#576bff'
            },
            children: [{
                name: '1241',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1356',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }, {
                name: '1461',
                value: 1,
                itemStyle: {
                    color: '#99CCFF'
                }
            }, {
                name: '1313',
                value: 1,
                itemStyle: {
                    color: '#CCCCFF'
                }
            }, {
                name: '1352',
                value: 1,
                itemStyle: {
                    color: '#3366FF'
                }
            }, {
                name: '1175',
                value: 1,
                itemStyle: {
                    color: '#6699CC'
                }
            }, {
                name: '1350',
                value: 1,
                itemStyle: {
                    color: '#9966FF'
                }
            }, {
                name: '1179',
                value: 1,
                itemStyle: {
                    color: '#660099'
                }
            }, {

                name: '1338',
                value: 1,
                itemStyle: {
                    color: '#0099FF'
                }
            }, {
                name: '1325',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }]
        }, {
            name: '1119',
            itemStyle: {
                color: '#576bff'
            },
            children: [{
                name: '1360',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1135',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }, {
                name: '1238',
                value: 1,
                itemStyle: {
                    color: '#99CCFF'
                }
            }, {
                name: '1244',
                value: 1,
                itemStyle: {
                    color: '#CCCCFF'
                }
            }, {
                name: '1268',
                value: 1,
                itemStyle: {
                    color: '#3366FF'
                }
            }, {
                name: '1401',
                value: 1,
                itemStyle: {
                    color: '#6699CC'
                }
            }, {
                name: '1148',
                value: 1,
                itemStyle: {
                    color: '#9966FF'
                }
            }, {
                name: '1274',
                value: 1,
                itemStyle: {
                    color: '#660099'
                }
            }, {
                name: '1390',
                value: 1,
                itemStyle: {
                    color: '#0099FF'
                }
            }, {
                name: '1291',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }]
        }, {
            name: '1143',
            itemStyle: {
                color: '#576bff'
            },
            children: [{
                name: '1438',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1434',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }, {
                name: '1380',
                value: 1,
                itemStyle: {
                    color: '#99CCFF'
                }
            }, {
                name: '1367',
                value: 1,
                itemStyle: {
                    color: '#CCCCFF'
                }
            }, {
                name: '1355',
                value: 1,
                itemStyle: {
                    color: '#3366FF'
                }
            }, {
                name: '1279',
                value: 1,
                itemStyle: {
                    color: '#6699CC'
                }
            }, {
                name: '1163',
                value: 1,
                itemStyle: {
                    color: '#9966FF'
                }
            }, {
                name: '1324',
                value: 1,
                itemStyle: {
                    color: '#660099'
                }
            }, {
                name: '1304',
                value: 1,
                itemStyle: {
                    color: '#0099FF'
                }
            }, {
                name: '1381',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1217',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }]
        }, {
            name: '1155',
            itemStyle: {

                color: '#576bff'
            },
            children: [{
                name: '1409',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1421',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }, {
                name: '1216',
                value: 1,
                itemStyle: {
                    color: '#99CCFF'
                }
            }, {
                name: '1470',
                value: 1,
                itemStyle: {
                    color: '#CCCCFF'
                }
            }, {
                name: '1462',
                value: 1,
                itemStyle: {
                    color: '#3366FF'
                }
            }, {
                name: '1444',
                value: 1,
                itemStyle: {
                    color: '#6699CC'
                }
            }, {
                name: '1332',
                value: 1,
                itemStyle: {
                    color: '#9966FF'
                }
            }, {
                name: '1206',
                value: 1,
                itemStyle: {
                    color: '#660099'
                }
            }, {
                name: '1283',
                value: 1,
                itemStyle: {
                    color: '#0099FF'
                }
            }, {
                name: '1389',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1267',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }]
        }, {
            name: '1211',
            itemStyle: {
                color: '#576bff'
            },
            children: [{
                name: '1365',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1411',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }, {
                name: '1287',
                value: 1,
                itemStyle: {
                    color: '#99CCFF'
                }
            }, {
                name: '1382',
                value: 1,
                itemStyle: {
                    color: '#CCCCFF'
                }
            }, {
                name: '1231',
                value: 1,
                itemStyle: {
                    color: '#3366FF'
                }
            }, {
                name: '1284',
                value: 1,
                itemStyle: {
                    color: '#6699CC'
                }
            }, {
                name: '1497',
                value: 1,
                itemStyle: {
                    color: '#9966FF'
                }
            }, {
                name: '1164',
                value: 1,
                itemStyle: {
                    color: '#660099'
                }
            }]
        }, {
            name: '1228',
            itemStyle: {
                color: '#576bff'
            },
            children: [{
                name: '1487',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1290',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }, {
                name: '1178',
                value: 1,
                itemStyle: {
                    color: '#99CCFF'
                }
            }, {
                name: '1177',
                value: 1,
                itemStyle: {
                    color: '#CCCCFF'
                }
            }, {
                name: '1174',
                value: 1,
                itemStyle: {
                    color: '#3366FF'
                }
            }]
        }, {
            name: '1376',
            itemStyle: {
                color: '#576bff'
            },
            children: [{
                name: '1080',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1181',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }]
        }, {
            name: '1487',
            itemStyle: {
                color: '#576bff'
            },
            children: [{
                name: '1394',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1228',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }, {
                name: '1465',
                value: 1,
                itemStyle: {
                    color: '#99CCFF'
                }
            }, {
                name: '1273',
                value: 1,
                itemStyle: {
                    color: '#CCCCFF'
                }
            }]
        }]
    }, {
        name: '1068',
        itemStyle: {
            color: '#53abff'
        },
        children: [{
            name: '1060',
            itemStyle: {
                color: '#576bff'
            },
            children: [{
                name: '1359',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1457',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }, {
                name: '1328',
                value: 1,
                itemStyle: {
                    color: '#99CCFF'
                }
            }, {
                name: '1145',
                value: 1,
                itemStyle: {
                    color: '#CCCCFF'
                }
            }, {
                name: '1306',
                value: 1,
                itemStyle: {
                    color: '#3366FF'
                }
            }, {
                name: '1440',
                value: 1,
                itemStyle: {
                    color: '#6699CC'
                }
            }, {
                name: '1396',
                value: 1,
                itemStyle: {
                    color: '#9966FF'
                }
            }, {
                name: '1446',
                value: 1,
                itemStyle: {
                    color: '#660099'
                }
            }, {
                name: '1336',
                value: 1,
                itemStyle: {
                    color: '#0099FF'
                }
            }]
        }, {
            name: '1098',
            itemStyle: {
                color: '#576bff'
            },
            children: [{
                name: '1127',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1343',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }, {
                name: '1496',
                value: 1,
                itemStyle: {
                    color: '#99CCFF'
                }
            }, {
                name: '1277',
                value: 1,
                itemStyle: {
                    color: '#CCCCFF'
                }
            }, {
                name: '1334',
                value: 1,
                itemStyle: {
                    color: '#3366FF'
                }
            }]
        }, {
            name: '1100',
            itemStyle: {
                color: '#576bff'
            },
            children: [{
                name: '1305',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1139',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }, {
                name: '1481',
                value: 1,
                itemStyle: {
                    color: '#99CCFF'
                }
            }, {
                name: '1385',
                value: 1,
                itemStyle: {
                    color: '#CCCCFF'
                }
            }, {
                name: '1147',
                value: 1,
                itemStyle: {
                    color: '#3366FF'
                }
            }, {
                name: '1321',
                value: 1,
                itemStyle: {
                    color: '#6699CC'
                }
            }, {
                name: '1493',
                value: 1,
                itemStyle: {
                    color: '#9966FF'
                }
            }, {
                name: '1458',
                value: 1,
                itemStyle: {
                    color: '#660099'
                }
            }, {
                name: '1170',
                value: 1,
                itemStyle: {
                    color: '#0099FF'
                }
            }, {
                name: '1379',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1234',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }, {
                name: '1362',
                value: 1,
                itemStyle: {
                    color: '#99CCFF'
                }
            }, {
                name: '1405',
                value: 1,
                itemStyle: {
                    color: '#CCCCFF'
                }
            }, {
                name: '1159',
                value: 1,
                itemStyle: {
                    color: '#3366FF'
                }
            }, {
                name: '1474',
                value: 1,
                itemStyle: {
                    color: '#6699CC'
                }
            }]
        }, {
            name: '1154',
            itemStyle: {
                color: '#576bff'
            },
            children: [{
                name: '1068',
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1176',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }, {
                name: '1315',
                value: 1,
                itemStyle: {
                    color: '#99CCFF'
                }
            }, {
                name: '1420',
                value: 1,
                itemStyle: {
                    color: '#CCCCFF'
                }
            }, {
                name: '1152',
                value: 1,
                itemStyle: {
                    color: '#3366FF'
                }
            }]
        }, {
            name: '1191',
            itemStyle: {
                color: '#576bff'
            },
            children: [{
                name: '1456',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1428',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }, {
                name: '1483',
                value: 1,
                itemStyle: {
                    color: '#99CCFF'
                }
            }, {
                name: '1469',
                value: 1,
                itemStyle: {
                    color: '#CCCCFF'
                }
            }, {
                name: '1204',
                value: 1,
                itemStyle: {
                    color: '#3366FF'
                }
            }, {
                name: '1435',
                value: 1,
                itemStyle: {
                    color: '#6699CC'
                }
            }, {
                name: '1156',
                value: 1,
                itemStyle: {
                    color: '#9966FF'
                }
            }]
        }, {
            name: '1207',
            itemStyle: {
                color: '#576bff'
            },
            children: [{
                name: '1103',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1319',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }, {
                name: '1330',
                value: 1,
                itemStyle: {
                    color: '#99CCFF'
                }
            }, {
                name: '1296',
                value: 1,
                itemStyle: {
                    color: '#CCCCFF'
                }
            }, {
                name: '1399',
                value: 1,
                itemStyle: {
                    color: '#3366FF'
                }
            }, {
                name: '1263',
                value: 1,
                itemStyle: {
                    color: '#6699CC'
                }
            }, {
                name: '1189',
                value: 1,
                itemStyle: {
                    color: '#9966FF'
                }
            }]
        }, {
            name: '1209',
            itemStyle: {
                color: '#576bff'
            },
            children: [{
                name: '1388',
                value: 1,
                itemStyle: {
                    color: '#6699FF'
                }
            }, {
                name: '1460',
                value: 1,
                itemStyle: {
                    color: '#006699'
                }
            }, {
                name: '1322',
                value: 1,
                itemStyle: {
                    color: '#99CCFF'
                }
            }, {
                name: '1339',
                value: 1,
                itemStyle: {
                    color: '#CCCCFF'
                }
            }, {
                name: '1349',
                value: 1,
                itemStyle: {
                    color: '#3366FF'
                }
            }, {
                name: '1126',
                value: 1,
                itemStyle: {
                    color: '#6699CC'
                }
            }, {
                name: '1153',
                value: 1,
                itemStyle: {
                    color: '#9966FF'
                }
            }]
        }]
    }]
}];

var option = {
	color:['#ff785d','#ffbc2e','#92d050','#53abff'],
    legend: {
        data:['公司主管','财务部','人力部','研发部'],
        left:'center',
        bottom:'5%',
        itemWidth:30,//图例的宽度
        itemHeight:10,//图例的高度
        textStyle:{//图例文字的样式
            color:'#FFFFFF',
            fontSize:16
        },
		tooltip:{
        	show:true
    	}
    },
    // title: {
    //     text: 'HighTec Stuff Structure',
    //     textStyle: {
    //         fontSize: 14,
    //         align: 'center'
    //     },
    //     sublink: 'https://worldcoffeeresearch.org/work/sensory-lexicon/'
    // },
    series: {
        type: 'sunburst',
        highlightPolicy: 'ancestor',
        data: data,
        radius: [0, '80%'],
        sort: null,
        levels: [{}, {
            r0: '15%',
            r: '35%',
            itemStyle: {
                borderWidth: 2
            },
            label: {
                rotate: 'tangential'
            }
        }, {
            r0: '35%',
            r: '50%',
            label: {
                align: 'right'
            }
        }, {
            r0: '50%',
            r: '60%',
            label: {
 				align: 'right'
            },
            itemStyle: {
                borderWidth: 1
            }
        },{
            r0: '60%',
            r: '70%',
            label: {
                position: 'outside',
                padding: 3,
                silent: false
            },
            itemStyle: {
                borderWidth: 3
            }
        }]
    }
};


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);// JavaScript Document
