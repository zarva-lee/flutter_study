import 'package:flutter/material.dart';
import 'package:flutter_webview_plugin/flutter_webview_plugin.dart';
class PagesScreen extends StatelessWidget {
  const PagesScreen({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(
        title: Text('凤凰嘉年华'),
      ),
      body: SafeArea(
        child: WebviewScaffold(
          url: 'https://tb.mocentre.cn/Wap/PolyPage/index?keymark=HdzqName&Cid=04E71ADB18CA006F2A3C2211673CC4C14F1C628F08368CC7EC3F27544510F3C99A11D51751BE9D9FD35D9A42434C91D769B8502A4923BF317E4F9E28E8F162060AEC7AF327F3BCB2B634F2F46DCD41350BA45F9C6820FECE7AB825C5D0AF1F163364D55F36DB4F2FAFD17771',
          withZoom: false,  // 允许网页缩放
          withLocalStorage: true, // 允许LocalStorage
          withJavascript: true, // 允许执行js代码
          initialChild: Container(
            child: const Center(
              child: Text('Waiting.....'),
            ),
          ),
        ),
        bottom: true,
        left: true,
        right: true,
        top: true,
      ),
    );
  }
}