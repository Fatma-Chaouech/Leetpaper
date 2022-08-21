
import 'dart:convert';
import 'dart:convert' show utf8, base64;
import 'dart:io';
import 'package:flutter/cupertino.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import '../widgets/leetpaper_bar.dart';

class DisplayPage extends StatefulWidget {
  const DisplayPage({Key? key}) : super(key: key);
  @override
  State<DisplayPage> createState() => _MyDisplayPage();
}

class _MyDisplayPage extends State<DisplayPage> {


  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size ;
    return SafeArea(child:
      Scaffold(
          appBar: AppBar(
            backgroundColor: Colors.white,
            title: leetBar(size),
          ),
          body: Center(
            child: FutureBuilder(
                future: getPage(),
                builder: (BuildContext context, AsyncSnapshot snapshot) {
                  if(snapshot.hasData){
                    if(snapshot.data.length==0){
                      return Text('no data',style:TextStyle(fontSize: 20));
                    }
                    else {
                      return Container(
                        height:300,
                        child: ListView.builder(
                          itemCount: snapshot.data.length,
                          itemBuilder: (context, index) {
                            // remove <![D[
                            var uri = snapshot.data[0]['content'].split('<![D[')[1];
                            return Text("Some text here...") ;
                          },
                        ),
                      );
                    }}
                  else {
                    if (kDebugMode) {
                      print("Nothing!");
                    }
                    return const CircularProgressIndicator();
                  }
                }
            ),
          )
      )
    );
  }

  Future<List> getPage() async{
    final response =
    await http.get(Uri.parse('http://10.0.2.2:3000/bookmarklet/paper?id=11'));

    if (response.statusCode == 200) {
      List<dynamic> paper = <dynamic>[];
      paper.add(json.decode(response.body));
      return paper;
    } else {
      throw Exception('Failed to load recommendations');
    }
  }

  String decodeUriComponent(String encodedComponent) {
    return Uri.decodeComponent(encodedComponent);
  }

} 