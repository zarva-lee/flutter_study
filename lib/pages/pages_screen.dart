import 'package:flutter/material.dart';
import 'package:flutter_webview_plugin/flutter_webview_plugin.dart';
class PagesScreen extends StatelessWidget {
  const PagesScreen({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // return Scaffold(
    //   appBar: new AppBar(
    //     title: Text('成功案例'),
    //   ),
    //   body: Center(
    //     child: Text('成功案例'),
    //   ),
    // );
    return new MaterialApp(
      title: '成功案例',
      routes: {
        '/': (_) => new WebviewScaffold(
          url: 'https://tb.mocentre.cn/Wap/PolyPage/index?keymark=HdzqName&Cid=0478C8570C0CFF5ECC49BAEB2E9E7DD58456BC7354ADB78E95AF51E9664C3055C7FAF1DF4740A63AC5FD13B15317F39B6B1C72928E87925F200632D84BF4AEDE87D320C095EC3EAC77AB3F8CA325B5E4C7F48586D10BA444A10C6C7652EB6785D09EF81A6F642257DB1D4075',
          appBar: new AppBar(
            title: const Text('凤凰嘉年华'),
          ),
          withZoom: true,
          withLocalStorage: true,
          hidden: true,
          initialChild: Container(
            child: const Center(
              child: Text('Waiting.....'),
            ),
          ),
        ),
      },
    );
  }
}