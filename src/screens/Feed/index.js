import React from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

import options from '../../../assets/options.png';
import like from '../../../assets/like.png';
import comment from '../../../assets/comment.png';
import send from '../../../assets/send.png';
import save from '../../../assets/save.png';

export default function Feed() {

  const posts = [
    {
      id: '1',
      author: 'filmes_imperdiveis',
      picture_url: 'https://conteudo.imguol.com.br/c/entretenimento/08/2019/09/17/cartaz-de-minha-mae-e-uma-peca-3-1568770747573_v2_1306x1920.jpg',
      likes: 2.312,
      description: 'SUPER LANÇAMENTO MINHA MAE É UMA PECA',
      hashtags: '#cine #movie #minhamaeumapeca',
      place: 'Patos, Paraiba'
    },
    {
      id: '2',
      author: 'filmes_imperdiveis',
      picture_url: 'https://upload.wikimedia.org/wikipedia/pt/thumb/1/1a/P%C3%B4ster_Se_Eu_Fosse_Voc%C3%AA.jpg/230px-P%C3%B4ster_Se_Eu_Fosse_Voc%C3%AA.jpg',
      likes: 3.876,
      description: 'SUPER LANÇAMENTO SE EU FOSSE VOCÊ 2',
      hashtags: '#cine #movie #seeufossevc2',
      place: 'Patos, Paraiba'
    },
    {
      id: '3',
      author: 'filmes_imperdiveis',
      picture_url: 'https://scontent-ort2-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/92637847_1711269555663478_4505844227791430843_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_cat=110&_nc_ohc=n-3RtODhLNAAX85oa_a&oh=470729b86fab70a907b2c56d6fcb2544&oe=5EE9EAF7',
      likes: 4.531,
      description: 'SUPER LANÇAMENTO COMO EU ERA ANTES DE VOCE',
      hashtags: '#cine #movie #mebeforeyou',
      place: 'Patos, Paraiba'
    },
  ];

  function renderItem({ item: post }) {
    return (
      <View style={styles.post}>

        <View style={styles.postHeader}>
          <View style={styles.userInfo}>
            <Text style={styles.author}>{post.author}</Text>
            <Text style={styles.place}>{post.place}</Text>
          </View>

          <View style={styles.postOptions}>
            <TouchableOpacity>
              <Image source={options} />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Image
            style={styles.picture_url}
            source={{ uri: post.picture_url }}
          />
        </View>

        <View style={styles.footer}>
          <View style={styles.actions}>
            <View style={styles.leftActions}>
              <TouchableOpacity style={styles.action}>
                <Image source={like} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.action}>
                <Image source={comment} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={send} />
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                <Image source={save} />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={styles.likes}>{post.likes} likes</Text>
            <Text style={styles.hashtags}>{post.hashtags}</Text>
            <Text style={styles.description}>{post.description}</Text>
          </View>
        </View>

      </View>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  post: {
    marginVertical: 15
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom: 15
  },
  postOptions: {},
  userInfo: {},
  author: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold'
  },
  place: {
    fontSize: 12,
    color: '#666'
  },
  picture_url: {
    width: '100%',
    height: 400
  },
  footer: {
    paddingHorizontal: 15
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15
  },
  action: {
    marginRight: 8
  },
  leftActions: {
    flexDirection: 'row'
  },
  likes: {
    fontWeight: 'bold',
    fontSize: 12
  },
  hashtags: {
    color: '#002D5E'
  },
  description: {
    color: '#000',
    lineHeight: 18
  }
});