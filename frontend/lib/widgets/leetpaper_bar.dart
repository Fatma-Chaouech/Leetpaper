import 'package:flutter/material.dart';


Widget leetBar(size){
  return Container(
    child: Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Icon(Icons.menu,
        color: Colors.black
        ),
        Image.asset(
        "assets/logo-02.png",
        width: size.width * 0.20,
        ),
      ],
    ),
  );
}
