
import React, {useState, useEffect} from "react";
import axios from 'axios'

import { Button, View, Text } from "react-native";

export default function AboutScreen({ navigation }) {
  const [data, setData] = useState([]);

  const fetch = () => {
    console.log('sami')
    axios.get('http://127.0.0.1:8000/stud/list-create')
    .then((res) => setData(res.data))
    .catch(err => console.log(err))
  }
  useEffect(() => {
    fetch()
  },[])

  const des = (id) => {
    axios.delete(`http://127.0.0.1:8000/stud/update-delete/${id}`)
    fetch()
  }

  return (
    <View style={{ flex: 1, alignItems: "center", fontsize: 30, justifyContent: "center",backgroundColor: '#C7D5D8' }}>
      <Text>Student Screen</Text>
      {data.map((item) => { 
        return (
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text>{item.id}</Text>
            <Text>{item.fName}</Text>
            
            <Button 
            title="Delete"
             onPress={() => des(item.id)}
            />
          </View>
        )
      })}
      <Button
        title="Go to Teacher"
        onPress={() => navigation.navigate("Teacher")}
      />
      <Button
        title="Go to Employee"
        onPress={() => navigation.navigate("Employee")}
      />
    </View>
  );
}