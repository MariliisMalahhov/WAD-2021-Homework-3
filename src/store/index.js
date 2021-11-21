import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [
      {
        id: 1,
        author: {
          avatar:
            "https://www.writeups.org/wp-content/uploads/Gordon-Freeman-Half-Life-Portrait-1.jpg",
          name: "Gordon Freeman",
        },
        create_time: "Sep 21, 2021 13:28",
        media: {
          type: "jpg",
          url: "https://c.stocksy.com/a/Qh5300/z9/736896.jpg",
        },
        post_text: "Feels like it is going to rain soon",
        like_icon: {
          url: "https://cdn-icons-png.flaticon.com/512/25/25297.png",
          icon_text: 0,
        },
      },
      {
        id: 2,
        author: {
          avatar:
            "https://cdn.dribbble.com/users/323571/screenshots/5412611/batman_4x.jpg",
          name: "Batman",
        },
        create_time: "Sep 22, 2021 11:28",
        media: {
          type: "jpg",
          url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-keep-ducks-call-ducks-1615457181.jpg",
        },
        post_text:
          "Which weighs more, a pound of feathers or a pound of bricks?\nA pound of feathers because you have to carry the feathers and \nthe weight of what you did to those poor birds",
        like_icon: {
          url: "https://cdn-icons-png.flaticon.com/512/25/25297.png",
          icon_text: 0,
        },
      },
      {
        id: 3,
        author: {
          avatar:
            "https://cdn.dribbble.com/users/323571/screenshots/5412611/batman_4x.jpg",
          name: "Batman",
        },
        create_time: "Sep 22, 2021 15:38",
        media: {
          type: "jpg",
          url: "https://www.giantfreakinrobot.com/wp-content/uploads/2021/06/ben-affleck-batman.jpg",
        },
        post_text: "Felt cute, might delete later",
        like_icon: {
          url: "https://cdn-icons-png.flaticon.com/512/25/25297.png",
          icon_text: 0,
        },
      },
      {
        id: 4,
        author: {
          avatar:
            "https://cdn.dribbble.com/users/323571/screenshots/5412611/batman_4x.jpg",
          name: "Batman",
        },
        create_time: "Sep 24, 2021 15:38",
        media: {
          type: "jpg",
          url: "https://www.petmd.com/sites/default/files/styles/article_image/public/kitten-playing-yarn.jpg?itok=Xl7D1DhW",
        },
        post_text:
          "My new kitten just can't stop playing, where does all of this energy come from?",
        like_icon: {
          url: "https://cdn-icons-png.flaticon.com/512/25/25297.png",
          icon_text: 0,
        },
      },
      {
        id: 5,
        author: {
          avatar:
            "https://upload.wikimedia.org/wikipedia/commons/2/2b/Jessica_Ennis_%28May_2010%29_cropped.jpg",
          name: "Katie Smith",
        },
        create_time: "Sep 25, 2021 21:18",
        media: {
          type: "jpg",
          url: "https://www.brown.edu/sites/g/files/dprerj316/files/styles/wide_lrg/public/2019-04/textbooks_0.jpg?h=a195ebb2&itok=VQSZrlca",
        },
        post_text:
          "Anyone else feeling nervous about tomorrow's test? Feels like I've studied for ages.",
        like_icon: {
          url: "https://cdn-icons-png.flaticon.com/512/25/25297.png",
          icon_text: 0,
        },
      },
      {
        id: 6,
        author: {
          avatar:
            "https://upload.wikimedia.org/wikipedia/commons/2/2b/Jessica_Ennis_%28May_2010%29_cropped.jpg",
          name: "Katie Smith",
        },
        create_time: "Sep 26, 2021 13:18",
        media: {
          type: "jpg",
          url: "https://image.freepik.com/free-vector/birthday-cap-with-confetti-serpentine-explosion_1017-17924.jpg",
        },
        post_text:
          "Well, that test was easier than I thought. Anyone up for celebrating tonight?",
        like_icon: {
          url: "https://cdn-icons-png.flaticon.com/512/25/25297.png",
          icon_text: 0,
        },
      },
      {
        id: 7,
        author: {
          avatar:
            "https://upload.wikimedia.org/wikipedia/commons/2/2b/Jessica_Ennis_%28May_2010%29_cropped.jpg",
          name: "Katie Smith",
        },
        create_time: "Sep 27, 2021 11:18",
        media: {
          type: "png",
          url: "https://craigies.co.uk/wp-content/uploads/2020/06/Birthday-Cake-e1612181292233-900x1024.png",
        },
        post_text: "Happy Birthday, Annie! Thanks for all the lovely memories!",
        like_icon: {
          url: "https://cdn-icons-png.flaticon.com/512/25/25297.png",
          icon_text: 0,
        },
      },
      {
        id: 8,
        author: {
          avatar:
            "https://upload.wikimedia.org/wikipedia/commons/2/2b/Jessica_Ennis_%28May_2010%29_cropped.jpg",
          name: "Katie Smith",
        },
        create_time: "Sep 28, 2021 20:20",
        media: {
          type: "jpg",
          url: "https://images.immediate.co.uk/production/volatile/sites/4/2013/04/GettyImages-640318118-c83a508.jpg",
        },
        post_text: "Caught this beautiful sunset tonight",
        like_icon: {
          url: "https://cdn-icons-png.flaticon.com/512/25/25297.png",
          icon_text: 0,
        },
      },
      {
        id: 9,
        author: {
          avatar:
            "https://cdn.dribbble.com/users/323571/screenshots/5412611/batman_4x.jpg",
          name: "Batman",
        },
        create_time: "Sep 29, 2021 15:20",
        media: {
          type: "jpeg",
          url: "https://market-dev.edcwallet.io/wp-content/uploads/2020/04/pasta-1.jpeg",
        },
        post_text:
          "What are your favourite comfort foods you fall back to during stressful times? \nMine will always be a bowl of pasta with shredded cheese.",
        like_icon: {
          url: "https://cdn-icons-png.flaticon.com/512/25/25297.png",
          icon_text: 0,
        },
      },
      {
        id: 10,
        author: {
          avatar:
            "https://cdn.dribbble.com/users/323571/screenshots/5412611/batman_4x.jpg",
          name: "Batman",
        },
        create_time: "Oct 01, 2021 14:20",
        media: {
          type: "jpg",
          url: "https://www.gardeningknowhow.com/wp-content/uploads/2018/06/fall-leaves.jpg",
        },
        post_text:
          "First day of October! What are your favourite things about autumn?",
        like_icon: {
          url: "https://cdn-icons-png.flaticon.com/512/25/25297.png",
          icon_text: 0,
        },
      },
    ],
    contacts: [
      {
        id: 1,
        name: "Mariliis Malahhov",
        email: "malahhov@ut.ee",
        phone: "55555555",
      },
      {
        id: 2,
        name: "Hanna Brit Jõgis",
        email: "hanna.brit.jogis@ut.ee",
        phone: "56565656",
      },
      {
        id: 3,
        name: "Bjarne Lamczak",
        email: "bjarne.lamczak@ut.ee",
        phone: "57575757",
      },
    ],
  },
  mutations: {
    IncreaseLikeNumber: state => {
      state.posts.forEach(post => {
        post.like_icon.icon_text += 1;
      })
    },
    ResetLikeNumber: (state) => {
      state.posts.forEach((post) => {
        post.like_icon.icon_text = 0;
      });
    },
  },
  actions: {},
  modules: {},
});
