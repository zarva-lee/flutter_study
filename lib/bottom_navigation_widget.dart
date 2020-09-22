import 'package:flutter/material.dart';

import 'pages/home_screen.dart';
import 'pages/email_screen.dart';
import 'pages/pages_screen.dart';
import 'pages/airplay_screen.dart';
// import 'pages/try_alert_dialog.dart';

class BottomNavigationWidget extends StatefulWidget {
  BottomNavigationWidget({Key key}) : super(key: key);

  _BottomNavigationWidgetState createState() => _BottomNavigationWidgetState();
}

class _BottomNavigationWidgetState extends State<BottomNavigationWidget> {
  final _bottomNavigationColor = Colors.blue;
  int _curIndex = 0;
  List<Widget> list = List();
  final _formKey = GlobalKey<FormState>();
  cretaAlertDialog(BuildContext context) {
    return showDialog(
        context: context,
        barrierDismissible: false, // 设为true则点击对话框外时也会关闭对话框
        builder: (BuildContext context) {
          return AlertDialog(
            title: Text('申请试用'),
            content: SingleChildScrollView(
              child: ListBody(
                children: <Widget>[
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      TextFormField(
                        decoration: InputDecoration(
                          icon: Icon(Icons.person),
                          labelText: '姓名',
                          hintText: '姓名',
                        ),
                        validator: (value) {
                          if (value.isEmpty) {
                            return '请输入您的姓名';
                          }
                          return null;
                        },
                      ),
                      TextFormField(
                        decoration: InputDecoration(
                          icon: Icon(Icons.phone),
                          labelText: '手机号码',
                          hintText: '手机号码',
                        ),
                        validator: (value) {
                          RegExp reg = new RegExp(r'^\d{11}$');
                          if (!reg.hasMatch(value)) {
                            return '请输入11位手机号码';
                          }
                          return null;
                        },
                      ),
                      TextFormField(
                        decoration: InputDecoration(
                          labelText: '公司名称',
                          icon: Icon(Icons.account_balance ),
                          hintText: '公司名称',
                        ),
                        validator: (value) {
                          if (value.isEmpty) {
                            return '请输入您的公司名称';
                          }
                          return null;
                        },
                      ),
                    ],
                  ),
                ],
              ),
            ),
            actions: <Widget>[
              MaterialButton(
                elevation: 5.0,
                child: Text('提交'),
                onPressed: () {
                  if (_formKey.currentState.validate()) {
                    // Process data.
                    print('提交成功');
                  }
                },
              ),
              MaterialButton(
                elevation: 5.0,
                child: Text('取消'),
                onPressed: () {
                  Navigator.of(context).pop();
                },
              ),
            ],
          );
        });
  }

  @override
  void initState() {
    list
      ..add(HomeScreen())
      ..add(EmailScreen())
      ..add(PagesScreen())
      ..add(AirplayScreen());
    super.initState();
  }

  Widget build(BuildContext context) {
    return Scaffold(
      //脚手架
      body: list[_curIndex],
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          print(new DateTime.now());
          cretaAlertDialog(context);
        },
        child: Icon(
          Icons.blur_on,
          color: Colors.white,
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: [
          BottomNavigationBarItem(
              icon: Icon(
                Icons.home,
                color: _bottomNavigationColor,
              ),
              title: Text(
                '首页',
                style: TextStyle(color: _bottomNavigationColor),
              )),
          BottomNavigationBarItem(
              icon: Icon(
                Icons.security,
                color: _bottomNavigationColor,
              ),
              title: Text(
                '服务',
                style: TextStyle(color: _bottomNavigationColor),
              )),
          BottomNavigationBarItem(
              icon: Icon(
                Icons.pages,
                color: _bottomNavigationColor,
              ),
              title: Text(
                '案例',
                style: TextStyle(color: _bottomNavigationColor),
              )),
          BottomNavigationBarItem(
              icon: Icon(
                Icons.people,
                color: _bottomNavigationColor,
              ),
              title: Text(
                '关于',
                style: TextStyle(color: _bottomNavigationColor),
              )),
        ],
        currentIndex: _curIndex,
        onTap: (int index) {
          setState(() {
            _curIndex = index;
          });
        },
      ),
    );
  }
}
