const author1 = 'Lucas Tose';
const author2 = 'Abner Schubert';
const author3 = 'Igor Santos';

const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada purus justo, quis eleifend massa dapibus vulputate. Pellentesque posuere dolor vel luctus pharetra. Phasellus laoreet, erat eu vulputate finibus, elit ipsum aliquam quam, rutrum consectetur neque quam sit amet metus. Fusce malesuada consectetur ligula sed sodales. Donec viverra dignissim tellus.';

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat, felis non mattis viverra, mauris leo sagittis lacus, in pharetra arcu enim a mi. Maecenas in imperdiet eros, suscipit iaculis augue. Curabitur vitae odio id lectus auctor iaculis. Etiam neque dolor, dictum vitae eleifend nec, auctor at velit. Aenean et lorem sit amet lorem suscipit consequat. Maecenas faucibus imperdiet dui quis tincidunt. In ultricies leo justo, ac mattis risus venenatis vel. Aenean at enim nisl. Nulla vulputate volutpat mauris ut viverra. Aliquam orci quam, luctus sit amet laoreet ut, fringilla et risus. Mauris ac turpis id sem ultricies venenatis vitae eu dui.';

const contentText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo lacus quis varius rutrum. Donec mi libero, blandit id fermentum in, semper pretium nisl. Curabitur pellentesque, orci ac convallis aliquet, mi libero commodo erat, in consectetur augue risus ut nulla. Mauris id diam euismod, auctor purus quis, dapibus nulla. Nullam porttitor nec eros tincidunt accumsan. Aenean aliquam ante lobortis imperdiet placerat. Morbi vulputate semper dolor, sit amet sodales massa euismod eu. Duis vitae mi eget enim feugiat porta. Nulla posuere ultrices ultricies. Cras a nulla at massa molestie cursus. Mauris sit amet sem et nunc egestas gravida. Fusce at eleifend enim. Donec eget eros ullamcorper, pulvinar magna nec, volutpat purus. Cras accumsan laoreet risus a ultricies.
Etiam et ipsum a eros vestibulum pretium. Integer euismod leo et nisl venenatis dapibus. Nulla sapien nisi, dignissim eu facilisis in, mattis sed mauris. Sed tincidunt nisl nec ipsum varius, accumsan elementum turpis convallis. Sed rutrum ullamcorper augue, vel consequat turpis consectetur tincidunt. In ac felis sit amet enim varius malesuada. Quisque ligula ligula, tincidunt sed mauris sit amet, semper ultrices ligula.
Cras pretium odio ac sapien tempor, non suscipit libero pretium. Quisque eget egestas ligula, sit amet tempor nisl. Maecenas justo elit, facilisis a convallis quis, condimentum in sem. Proin sed ullamcorper nibh. Sed dignissim nisi sit amet faucibus bibendum. In bibendum sem nunc, eu consequat risus pellentesque ut. Donec ligula turpis, lacinia sit amet dolor non, ultricies euismod nunc.`;


export const fakeData = {
  mainCard: [
    {
      id: 1,
      author: 'Anna Tukhfatullina',
      title: 'Recipes for you to enjoy the Autumn',
      description,
      image255: '',
      image825: 'https://raw.githubusercontent.com/SilmarNascimento/angular-blog/main/src/app/images/main-card/punpkin-825x645.png',
      image1800: 'https://raw.githubusercontent.com/SilmarNascimento/angular-blog/main/src/app/images/carousel/punpkin-1800x755.png',
      contentText,
      hash: ['Autumn', 'Food', 'Pumpkin', 'Halloween', 'Samhain'],
      comments: [
        {
          id: 1,
          author: author1,
          date: '',
          content,
        },{
          id: 2,
          author: author2,
          date: '',
          content,
        },
      ]
    },{
      id: 2,
      author: 'Craig Adderley',
      title: 'Tips for traveling in rainy days',
      description,
      image255: '',
      image825: 'https://raw.githubusercontent.com/SilmarNascimento/angular-blog/main/src/app/images/main-card/road-825x645.png',
      image1800: 'https://raw.githubusercontent.com/SilmarNascimento/angular-blog/main/src/app/images/carousel/road-1800x755.jpg',
      contentText,
      hash: ['Rain', 'Trip', 'Tips', 'Season', 'Weather'],
      comments: [
        {
          id: 3,
          author: author2,
          date: '',
          content,
        },{
          id: 4,
          author: author3,
          date: '',
          content,
        },
      ]
    },{
      id: 3,
      author: 'Tobias Bjorkli',
      title: 'What are the northern lights?',
      description,
      image255: '',
      image825: 'https://raw.githubusercontent.com/SilmarNascimento/angular-blog/main/src/app/images/main-card/aurora-825x645.png',
      image1800: 'https://raw.githubusercontent.com/SilmarNascimento/angular-blog/main/src/app/images/carousel/aurora-1800x755.jpg',
      contentText,
      hash: ['Aurora Borealis', 'Winter', 'Wonder'],
      comments: [
        {
          id: 5,
          author: author3,
          date: '',
          content,
        },{
          id: 6,
          author: author1,
          date: '',
          content,
        },
      ]
    }
  ],
  sideCard: [
    {
      id: 1,
      author: 'Askar Abayev',
      title: 'Blueberry recipes for this season',
      description,
      image255: 'https://raw.githubusercontent.com/SilmarNascimento/angular-blog/main/src/app/images/side-card/food-255x288.png',
      image825: 'https://raw.githubusercontent.com/SilmarNascimento/angular-blog/main/src/app/images/main-card/food-825x645.png',
      image1800: '',
      contentText,
      hash: ['Blueberry', 'Autumn', 'Recipes', 'Food'],
      comments: [
        {
          id: 7,
          author: author1,
          date: '',
          content,
        },{
          id: 8,
          author: author2,
          date: '',
          content,
        },
      ]
    },{
      id: 2,
      author: 'Brady Knoll',
      title: 'Places for hiking and camping',
      description,
      image255: 'https://raw.githubusercontent.com/SilmarNascimento/angular-blog/main/src/app/images/side-card/chilling-255x288.png',
      image825: 'https://raw.githubusercontent.com/SilmarNascimento/angular-blog/main/src/app/images/main-card/chilling-825x645.png',
      image1800: '',
      contentText,
      hash: ['Hiking', 'Camping', 'Wilderness', 'Trip'],
      comments: [
        {
          id: 9,
          author: author2,
          date: '',
          content,
        },{
          id: 10,
          author: author3,
          date: '',
          content,
        },
      ]
    },{
      id: 3,
      author: 'Nick Kwan',
      title: 'Wilderness places for sightseeing',
      description,
      image255: 'https://raw.githubusercontent.com/SilmarNascimento/angular-blog/main/src/app/images/side-card/landscape-255x288.png',
      image825: 'https://raw.githubusercontent.com/SilmarNascimento/angular-blog/main/src/app/images/main-card/landscape-825x645.png',
      image1800: '',
      contentText,
      hash: ['Travel', 'Pictures', 'Wilderness', 'Nature'],
      comments: [
        {
          id: 11,
          author: author3,
          date: '',
          content,
        },{
          id: 12,
          author: author1,
          date: '',
          content,
        },
      ]
    },
  ]
};
