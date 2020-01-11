import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    Widget buttonSection = Container(
        child: Column(
      children: <Widget>[
        // Row(
        //   mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        //   children: <Widget>[
        _buildButtonColumn('images/feature1.png', '数据采集', '支持多种平台，无埋点，全数据采集'),
        _buildButtonColumn('images/feature2.png', '标签画像', '支持群体用户，画像，标签模糊查询功能'),
        _buildButtonColumn(
            'images/feature3.png', '数据管理', '涵盖全链路数据，血缘，数据计量，影响分析'),
        //   ],
        // ),
        // Row(
        //   mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        //   children: <Widget>[
        _buildButtonColumn(
            'images/feature4.png', '数据开发', '易用，安全，稳定，高性能的大数据开发引擎'),
        _buildButtonColumn('images/feature5.png', '数据清洗', '基于关键字段有效过滤，增加客户购买率'),
        _buildButtonColumn(
            'images/feature6.png', '数据脱敏', '通过脱敏进行数据变形，实现隐私数据的可靠保护'),
        //   ],
        // ),
        // Row(
        //   mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        //   children: <Widget>[
        _buildButtonColumn(
            'images/feature7.png', '数据可视化', '专精于业务数据与地理信息融合的大数据可视化'),
        _buildButtonColumn(
            'images/feature8.png', '数据分析', '支持SQL交互多维分析，便捷的数据搜索与挖掘'),
        //   ],
        // ),
      ],
    ));

    Widget bottomInfo = Container(
      padding: EdgeInsets.fromLTRB(40, 20, 40, 20),
      color: Colors.black12,
      child: Column(
        children: <Widget>[
          _buildBottomInfo('数据仓库',
              '数据仓库支持分级使用和管理，数据根据来源动态或批量更新，实时可用，提供持续的运营维护服务，并不断对数据进行丰富完善。支持PB级海量数据实时计算上千种行业模型和案例分析解决了数据处理速度慢。'),
          _buildBottomInfo(
              '用户行为', '用户画像分析，了解用户全面行为属性，详细分析用户行为，提高用户活跃度，提升产品体验。'),
          _buildBottomInfo('简单专业',
              '简单专业智能解析用户转化原因，提高转化率。预测客户流失，复杂数据挖掘模型支持客户成功。让数据化运营为客户创造无限商业价值。'),
          _buildBottomInfo(
              '安全高效', '第一方数据属于第一方加密处理验证，保护用户数据安全。实时监控移动运营状况，最大限度发挥数据运营效率。'),
        ],
      ),
    );

    Widget bottomImages = Container(
      child: Column(
        children: <Widget>[
          _buildImages('images/blank1.png', 'images/blank2.png'),
          _buildImages('images/blank3.png', 'images/blank5.png'),
          _buildImages('images/blank8.png', 'images/blank9.png'),
          _buildImages('images/blank.png', 'images/hezuo1.png'),
          _buildImages('images/hezuo2.png', 'images/hezuo7.png'),
        ],
      ),
    );
    return Scaffold(
      appBar: AppBar(
        title: Text('营销摩方'),
      ),
      body: Stack(
        children: <Widget>[
          Scaffold(
            body: ListView(
              children: [
                Image.asset(
                  'images/bgbg.png',
                  width: 600,
                  height: 240,
                  fit: BoxFit.cover,
                ),
                _buildTitle('特色功能'),
                // titleSection,
                buttonSection,
                bottomInfo,
                _buildTitle('合作伙伴'),
                bottomImages,
                // textSection,
              ],
            ),
          ),
        ],
      ),
    );
  }

  Column _buildButtonColumn(String img, String label, String text) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Container(
          margin: const EdgeInsets.fromLTRB(0, 0, 0, 15),
          child: Column(
            children: <Widget>[
              Image.asset(
                img,
                fit: BoxFit.cover,
              ),
              Text(
                label,
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
              Text(
                text,
                softWrap: true,
              ),
            ],
          ),
        ),
      ],
    );
  }

  Container _buildBottomInfo(String title, String info) {
    return Container(
      padding: EdgeInsets.only(bottom: 12),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(title,
              style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 22.0,
                  color: Colors.blue[400],
                  height: 1.5)),
          Text(
            info,
            style: TextStyle(fontSize: 18.0),
            softWrap: true,
          ),
        ],
      ),
    );
  }

  Container _buildTitle(String title) {
    return Container(
      margin: EdgeInsets.fromLTRB(50, 20, 50, 20),
      decoration: BoxDecoration(
        image: DecorationImage(
            image: AssetImage("images/h1bg.png"),
            fit: BoxFit.contain,
            repeat: ImageRepeat.repeatX),
      ),
      child: Text(
        title,
        textAlign: TextAlign.center,
        style: TextStyle(
          fontSize: 28.0,
          fontWeight: FontWeight.bold,
          backgroundColor: Colors.white,
        ),
      ),
    );
  }

  Container _buildImages(String src1, String src2) {
    return Container(
      margin: EdgeInsets.only(left: 20, right: 20),
      padding: EdgeInsets.all(10),
      child: Row(
        children: <Widget>[
          Expanded(
            child: Image.asset(
              src1,
              fit: BoxFit.cover,
            ),
          ),
          Expanded(
            child: Image.asset(
              src2,
              fit: BoxFit.cover,
            ),
          ),
        ],
      ),
    );
  }
}
