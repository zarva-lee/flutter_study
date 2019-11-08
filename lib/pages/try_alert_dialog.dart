import 'package:flutter/material.dart';

class TryAlertDialog extends StatelessWidget {
  const TryAlertDialog({Key key}) : super(key: key);


  @override
  Widget build(BuildContext context) {
    return Center(
      child: Container(
        width: 100,
        height: 100,
        child: Text('申请试用'),
      ),
    );
  }
}