import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from './src/store/features/counter/counter-slice';
import {getPosts} from './src/store/features/posts/posts-slice';

const App = () => {
  const dispatch = useDispatch();

  const count = useSelector(state => state.counter.value);
  const {posts, status} = useSelector(state => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  useEffect(() => {
    console.log({posts});
  }, [posts]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{count}</Text>
      <TouchableOpacity onPress={() => dispatch(increment())}>
        <Text>+</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(decrement())}>
        <Text>-</Text>
      </TouchableOpacity>
      <Text>{status}</Text>
      <ScrollView style={{flex: 1, width: '100%'}}>
        {posts && posts.map(q => <Text key={q.id}>{q.title}</Text>)}
      </ScrollView>
    </View>
  );
};

export default App;
