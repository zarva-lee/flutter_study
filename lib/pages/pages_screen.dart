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
          url: 'xxx.baidu.com', 
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
