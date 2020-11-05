// import 'dart:convert';

// import 'package:flutter/material.dart';
// import 'package:flutter/services.dart';
// import 'package:webview_flutter/webview_flutter.dart';


// class EmailScreen extends StatefulWidget {
//   @override
//   EmailScreenState createState() {
//     return EmailScreenState();
//   }
// }

// class EmailScreenState extends State<EmailScreen> {
//   WebViewController _controller;

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(title: Text('5g101')),
//       body: WebView(
//         initialUrl: 'about:blank',
//         onWebViewCreated: (WebViewController webViewController) {
//           _controller = webViewController;
//           _loadHtmlFromAssets();
//         },
//       ),
//     );
//   }

//   _loadHtmlFromAssets() async {
//     String fileText = await rootBundle.loadString('assets/system/index.html');
//     _controller.loadUrl( Uri.dataFromString(
//         fileText,
//         mimeType: 'text/html',
//         encoding: Encoding.getByName('utf-8')
//     ).toString());
//   }
// }


import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';
import 'package:jaguar/jaguar.dart';
import 'package:jaguar_flutter_asset/jaguar_flutter_asset.dart';
 
class EmailScreen extends StatefulWidget {
  @override
  _EmailScreenState createState() => _EmailScreenState();
}
 
class _EmailScreenState extends State<EmailScreen> {

  var _controller;

  @override
  void initState() {
    super.initState();
    _startService();
  }

  _startService() async {
    final server = Jaguar(address: "127.0.0.1", port: 8008);
    server.addRoute(serveFlutterAssets());
    await server.serve(logRequests: true);
  }
  @override
  Widget build(BuildContext context) {
    // Object _controller;
    return Scaffold(
        appBar: AppBar(title: Text('5G消息案例'),
        leading: new IconButton(
          icon: Icon(Icons.arrow_back),
          onPressed: () => {
              _controller.canGoBack().then((value) {
                if (value) {
                  _controller.goBack();
                } else {
                  return Navigator.pop(context);
                }
              })
          },
        ),
      ),
      body: WebView(
        // http://127.0.0.1:8008/files/index.html
        initialUrl: "http://127.0.0.1:8008/files/index.html",
        javascriptMode: JavascriptMode.unrestricted,
        onPageFinished: (String value) {},
        onWebViewCreated: (WebViewController webViewController) {
		        _controller = WebViewController;
        },
      ),
    );
  }
}
