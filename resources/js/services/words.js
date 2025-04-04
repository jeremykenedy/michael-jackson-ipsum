/**
 * https://github.com/f/loremjs
 * Lorem.js Dummy Text generator
 *
 *  2p = 2 paragraphs
 *  5s = 5 sentences
 *  6w = 6 words
 *  1-6w = between 1 and 6 words
 */
// Create a class named Lorem and constructor
var Lorem = function () {
  // Default values.
  this.type = null;
  this.query = null;
  this.data = null;
};
// Static variables
Lorem.IMAGE = 1;
Lorem.TEXT = 2;
Lorem.TYPE = {
  PARAGRAPH: 1,
  SENTENCE: 2,
  WORD: 3,
};
// Words to create lorem ipsum text.
Lorem.WORDS = [
  'he',
  'hee',
  'heee',
  'heeeee',
  'hey-ey',
  'hoo',
  'no-no',
  'hee-hee-hee',
  'Wanna',
  'Be',
  'Startin',
  'Somethin',
  'Just',
  'remember',
  'to',
  'always',
  'think',
  'twice',
  'People',
  'always',
  'told me',
  'Be',
  'careful',
  'of',
  'what',
  'you',
  'Billie',
  'Jean',
  'is',
  'not',
  'my',
  'lover',
  'She',
  'was',
  'more',
  'like',
  'a',
  'beauty',
  'queen',
  'from',
  'a',
  'movie',
  'scene',
  'Who',
  'will',
  'dance',
  'on',
  'the',
  'floor',
  'in',
  'the',
  'round',
  'She',
  'said',
  'I',
  'am',
  'the',
  'one',
  'She',
  'told',
  'me',
  'her',
  'name',
  'was',
  'Billie',
  'Jean',
  'as',
  'she',
  'caused',
  'a',
  'scene',
  'She',
  'says',
  'I',
  'am',
  'the',
  'one',
  'Billie',
  'Jean',
  'is',
  'not',
  'my',
  'lover',
  'Annie,',
  'are',
  'you',
  'okay',
  'So,',
  'Annie,',
  'are',
  'you',
  'okay',
  'Are',
  'you',
  'okay,',
  'Annie',
  'Just',
  'beat',
  'it',
  'Just',
  'beat',
  'it',
  'Showin',
  'how',
  'funky',
  'and',
  'strong',
  'is',
  'your',
  'fight',
  'It',
  'doesnt',
  'matter',
  'whos',
  'wrong',
  'or',
  'right',
  'Its',
  'close',
  'to',
  'midnight',
  'Something',
  'evils',
  'lurking',
  'in',
  'the',
  'dark',
  'Darkness',
  'falls',
  'across',
  'the',
  'land',
  'The',
  'midnight',
  'hour',
  'is',
  'close',
  'at',
  'hand',
  'Cause',
  'this',
  'is',
  'thriller',
  'thriller',
  'night',
  'There',
  'aint',
  'no',
  'second',
  'chance',
  'against',
  'the',
  'thing',
  'with',
  '40',
  'eyes',
  'girl',
  'Thriller',
  'thriller',
  'night',
  'Dirty',
  'Diana',
  'nah',
  'Dirty',
  'Diana',
  'no',
  'Dirty',
  'Diana',
  'Youve',
  'been',
  'hit',
  'by',
  'youve',
  'been',
  'struck',
  'by',
  'a',
  'smooth',
  'criminal',
  'Im',
  'starting',
  'with',
  'the',
  'man',
  'in',
  'the',
  'mirror',
  'Im',
  'asking',
  'him',
  'to',
  'change',
  'his',
  'ways',
];
// random integer method.
Lorem.prototype.randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
// text creator method with parameters: how many, what
Lorem.prototype.createText = function (count, type) {
  switch (type) {
    // paragraphs are loads of sentences.
    case Lorem.TYPE.PARAGRAPH:
      var paragraphs = [];
      for (var i = 0; i < count; i++) {
        var paragraphLength = this.randomInt(10, 20);
        var paragraph = this.createText(paragraphLength, Lorem.TYPE.SENTENCE);
        paragraphs.push('<p>' + paragraph + '</p>');
      }
      return paragraphs.join('\n');
      break;
    // sentences are loads of words.
    case Lorem.TYPE.SENTENCE:
      var sentences = [];
      for (var i = 0; i < count; i++) {
        var sentenceLength = this.randomInt(5, 10);
        var words = this.createText(sentenceLength, Lorem.TYPE.WORD).split(' ');
        words[0] = words[0].substr(0, 1).toUpperCase() + words[0].substr(1);
        var sentence = words.join(' ');

        sentences.push(sentence);
      }
      return (sentences.join('. ') + '.').replace(/(\.\,|\,\.)/g, '.');
      break;
    // words are words
    case Lorem.TYPE.WORD:
      var wordIndex = this.randomInt(0, Lorem.WORDS.length - count - 1);

      return Lorem.WORDS.slice(wordIndex, wordIndex + count)
        .join(' ')
        .replace(/\.|\,/g, '');
      break;
  }
};

Lorem.prototype.createLorem = function (element) {
  var lorem = [];
  var count;

  if (/\d+-\d+[psw]/.test(this.query)) {
    var range = this.query.replace(/[a-z]/, '').split('-');
    count = Math.floor(Math.random() * parseInt(range[1])) + parseInt(range[0]);
  } else {
    count = parseInt(this.query);
  }

  if (/\d+p/.test(this.query)) {
    var type = Lorem.TYPE.PARAGRAPH;
  } else if (/\d+s/.test(this.query)) {
    var type = Lorem.TYPE.SENTENCE;
  } else if (/\d+w/.test(this.query)) {
    var type = Lorem.TYPE.WORD;
  }

  lorem.push(this.createText(count, type));
  lorem = lorem.join(' ');

  if (element) {
    if (this.type == Lorem.TEXT) {
      element.innerHTML += lorem;
    } else if (this.type == Lorem.IMAGE) {
      // TODO: for now, using lorempixum.
      var path = '';
      var options = this.query.split(' ');
      if (options[0] == 'gray') {
        path += '/g';
        options[0] = '';
      }
      if (element.getAttribute('width')) path += '/' + element.getAttribute('width');

      if (element.getAttribute('height')) path += '/' + element.getAttribute('height');

      path += '/' + options.join(' ').replace(/(^\s+|\s+$)/, '');
      element.src = 'http://lorempixum.com' + path.replace(/\/\//, '/');
    }
  }

  if (element == null) return lorem;
};

export default Lorem;
