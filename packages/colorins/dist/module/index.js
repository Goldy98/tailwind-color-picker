parcelRequire = (function (e, r, t, n) {
  var i,
    o = 'function' == typeof parcelRequire && parcelRequire,
    u = 'function' == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = 'function' == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && 'string' == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = 'MODULE_NOT_FOUND'), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = l)
      : 'function' == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    cLff: [function (require, module, exports) {}, {}],
    wxgJ: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.getLineInfo = N),
          (exports.isIdentifierChar = l),
          (exports.isIdentifierStart = u),
          (exports.isNewLine = b),
          (exports.parse = te),
          (exports.parseExpressionAt = ee),
          (exports.tokenizer = ie),
          (exports.version = exports.tokTypes = exports.tokContexts = exports.nonASCIIwhitespace = exports.lineBreakG = exports.lineBreak = exports.keywordTypes = exports.defaultOptions = exports.TokenType = exports.Token = exports.TokContext = exports.SourceLocation = exports.Position = exports.Parser = exports.Node = void 0);
        var t = {
            3: 'abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile',
            5: 'class enum extends super const export import',
            6: 'enum',
            strict:
              'implements interface let package private protected public static yield',
            strictBind: 'eval arguments',
          },
          e =
            'break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this',
          i = {
            5: e,
            '5module': e + ' export import',
            6: e + ' const class extends export import super',
          },
          s = /^in(stanceof)?$/,
          r =
            'ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿯ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-Ᶎꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭧꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ',
          a =
            '‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ංඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿',
          n = new RegExp('[' + r + ']'),
          o = new RegExp('[' + r + a + ']');
        r = a = null;
        var h = [
            0,
            11,
            2,
            25,
            2,
            18,
            2,
            1,
            2,
            14,
            3,
            13,
            35,
            122,
            70,
            52,
            268,
            28,
            4,
            48,
            48,
            31,
            14,
            29,
            6,
            37,
            11,
            29,
            3,
            35,
            5,
            7,
            2,
            4,
            43,
            157,
            19,
            35,
            5,
            35,
            5,
            39,
            9,
            51,
            157,
            310,
            10,
            21,
            11,
            7,
            153,
            5,
            3,
            0,
            2,
            43,
            2,
            1,
            4,
            0,
            3,
            22,
            11,
            22,
            10,
            30,
            66,
            18,
            2,
            1,
            11,
            21,
            11,
            25,
            71,
            55,
            7,
            1,
            65,
            0,
            16,
            3,
            2,
            2,
            2,
            28,
            43,
            28,
            4,
            28,
            36,
            7,
            2,
            27,
            28,
            53,
            11,
            21,
            11,
            18,
            14,
            17,
            111,
            72,
            56,
            50,
            14,
            50,
            14,
            35,
            477,
            28,
            11,
            0,
            9,
            21,
            155,
            22,
            13,
            52,
            76,
            44,
            33,
            24,
            27,
            35,
            30,
            0,
            12,
            34,
            4,
            0,
            13,
            47,
            15,
            3,
            22,
            0,
            2,
            0,
            36,
            17,
            2,
            24,
            85,
            6,
            2,
            0,
            2,
            3,
            2,
            14,
            2,
            9,
            8,
            46,
            39,
            7,
            3,
            1,
            3,
            21,
            2,
            6,
            2,
            1,
            2,
            4,
            4,
            0,
            19,
            0,
            13,
            4,
            159,
            52,
            19,
            3,
            21,
            0,
            33,
            47,
            21,
            1,
            2,
            0,
            185,
            46,
            42,
            3,
            37,
            47,
            21,
            0,
            60,
            42,
            14,
            0,
            72,
            26,
            230,
            43,
            117,
            63,
            32,
            0,
            161,
            7,
            3,
            38,
            17,
            0,
            2,
            0,
            29,
            0,
            11,
            39,
            8,
            0,
            22,
            0,
            12,
            45,
            20,
            0,
            35,
            56,
            264,
            8,
            2,
            36,
            18,
            0,
            50,
            29,
            113,
            6,
            2,
            1,
            2,
            37,
            22,
            0,
            26,
            5,
            2,
            1,
            2,
            31,
            15,
            0,
            328,
            18,
            270,
            921,
            103,
            110,
            18,
            195,
            2749,
            1070,
            4050,
            582,
            8634,
            568,
            8,
            30,
            114,
            29,
            19,
            47,
            17,
            3,
            32,
            20,
            6,
            18,
            689,
            63,
            129,
            74,
            6,
            0,
            67,
            12,
            65,
            1,
            2,
            0,
            29,
            6135,
            9,
            754,
            9486,
            286,
            50,
            2,
            18,
            3,
            9,
            395,
            2309,
            106,
            6,
            12,
            4,
            8,
            8,
            9,
            5991,
            84,
            2,
            70,
            2,
            1,
            3,
            0,
            3,
            1,
            3,
            3,
            2,
            11,
            2,
            0,
            2,
            6,
            2,
            64,
            2,
            3,
            3,
            7,
            2,
            6,
            2,
            27,
            2,
            3,
            2,
            4,
            2,
            0,
            4,
            6,
            2,
            339,
            3,
            24,
            2,
            24,
            2,
            30,
            2,
            24,
            2,
            30,
            2,
            24,
            2,
            30,
            2,
            24,
            2,
            30,
            2,
            24,
            2,
            7,
            2357,
            44,
            11,
            6,
            17,
            0,
            370,
            43,
            1301,
            196,
            60,
            67,
            8,
            0,
            1205,
            3,
            2,
            26,
            2,
            1,
            2,
            0,
            3,
            0,
            2,
            9,
            2,
            3,
            2,
            0,
            2,
            0,
            7,
            0,
            5,
            0,
            2,
            0,
            2,
            0,
            2,
            2,
            2,
            1,
            2,
            0,
            3,
            0,
            2,
            0,
            2,
            0,
            2,
            0,
            2,
            0,
            2,
            1,
            2,
            0,
            3,
            3,
            2,
            6,
            2,
            3,
            2,
            3,
            2,
            0,
            2,
            9,
            2,
            16,
            6,
            2,
            2,
            4,
            2,
            16,
            4421,
            42710,
            42,
            4148,
            12,
            221,
            3,
            5761,
            15,
            7472,
            3104,
            541,
          ],
          p = [
            509,
            0,
            227,
            0,
            150,
            4,
            294,
            9,
            1368,
            2,
            2,
            1,
            6,
            3,
            41,
            2,
            5,
            0,
            166,
            1,
            574,
            3,
            9,
            9,
            525,
            10,
            176,
            2,
            54,
            14,
            32,
            9,
            16,
            3,
            46,
            10,
            54,
            9,
            7,
            2,
            37,
            13,
            2,
            9,
            6,
            1,
            45,
            0,
            13,
            2,
            49,
            13,
            9,
            3,
            4,
            9,
            83,
            11,
            7,
            0,
            161,
            11,
            6,
            9,
            7,
            3,
            56,
            1,
            2,
            6,
            3,
            1,
            3,
            2,
            10,
            0,
            11,
            1,
            3,
            6,
            4,
            4,
            193,
            17,
            10,
            9,
            5,
            0,
            82,
            19,
            13,
            9,
            214,
            6,
            3,
            8,
            28,
            1,
            83,
            16,
            16,
            9,
            82,
            12,
            9,
            9,
            84,
            14,
            5,
            9,
            243,
            14,
            166,
            9,
            232,
            6,
            3,
            6,
            4,
            0,
            29,
            9,
            41,
            6,
            2,
            3,
            9,
            0,
            10,
            10,
            47,
            15,
            406,
            7,
            2,
            7,
            17,
            9,
            57,
            21,
            2,
            13,
            123,
            5,
            4,
            0,
            2,
            1,
            2,
            6,
            2,
            0,
            9,
            9,
            49,
            4,
            2,
            1,
            2,
            4,
            9,
            9,
            330,
            3,
            19306,
            9,
            135,
            4,
            60,
            6,
            26,
            9,
            1014,
            0,
            2,
            54,
            8,
            3,
            19723,
            1,
            5319,
            4,
            4,
            5,
            9,
            7,
            3,
            6,
            31,
            3,
            149,
            2,
            1418,
            49,
            513,
            54,
            5,
            49,
            9,
            0,
            15,
            0,
            23,
            4,
            2,
            14,
            1361,
            6,
            2,
            16,
            3,
            6,
            2,
            1,
            2,
            4,
            262,
            6,
            10,
            9,
            419,
            13,
            1495,
            6,
            110,
            6,
            6,
            9,
            792487,
            239,
          ];
        function c(t, e) {
          for (var i = 65536, s = 0; s < e.length; s += 2) {
            if ((i += e[s]) > t) return !1;
            if ((i += e[s + 1]) >= t) return !0;
          }
        }
        function u(t, e) {
          return t < 65
            ? 36 === t
            : t < 91 ||
                (t < 97
                  ? 95 === t
                  : t < 123 ||
                    (t <= 65535
                      ? t >= 170 && n.test(String.fromCharCode(t))
                      : !1 !== e && c(t, h)));
        }
        function l(t, e) {
          return t < 48
            ? 36 === t
            : t < 58 ||
                (!(t < 65) &&
                  (t < 91 ||
                    (t < 97
                      ? 95 === t
                      : t < 123 ||
                        (t <= 65535
                          ? t >= 170 && o.test(String.fromCharCode(t))
                          : !1 !== e && (c(t, h) || c(t, p))))));
        }
        var d = function (t, e) {
          void 0 === e && (e = {}),
            (this.label = t),
            (this.keyword = e.keyword),
            (this.beforeExpr = !!e.beforeExpr),
            (this.startsExpr = !!e.startsExpr),
            (this.isLoop = !!e.isLoop),
            (this.isAssign = !!e.isAssign),
            (this.prefix = !!e.prefix),
            (this.postfix = !!e.postfix),
            (this.binop = e.binop || null),
            (this.updateContext = null);
        };
        function f(t, e) {
          return new d(t, { beforeExpr: !0, binop: e });
        }
        exports.TokenType = d;
        var m = { beforeExpr: !0 },
          x = { startsExpr: !0 },
          g = {};
        function v(t, e) {
          return (
            void 0 === e && (e = {}), (e.keyword = t), (g[t] = new d(t, e))
          );
        }
        exports.keywordTypes = g;
        var y = {
          num: new d('num', x),
          regexp: new d('regexp', x),
          string: new d('string', x),
          name: new d('name', x),
          eof: new d('eof'),
          bracketL: new d('[', { beforeExpr: !0, startsExpr: !0 }),
          bracketR: new d(']'),
          braceL: new d('{', { beforeExpr: !0, startsExpr: !0 }),
          braceR: new d('}'),
          parenL: new d('(', { beforeExpr: !0, startsExpr: !0 }),
          parenR: new d(')'),
          comma: new d(',', m),
          semi: new d(';', m),
          colon: new d(':', m),
          dot: new d('.'),
          question: new d('?', m),
          arrow: new d('=>', m),
          template: new d('template'),
          invalidTemplate: new d('invalidTemplate'),
          ellipsis: new d('...', m),
          backQuote: new d('`', x),
          dollarBraceL: new d('${', { beforeExpr: !0, startsExpr: !0 }),
          eq: new d('=', { beforeExpr: !0, isAssign: !0 }),
          assign: new d('_=', { beforeExpr: !0, isAssign: !0 }),
          incDec: new d('++/--', { prefix: !0, postfix: !0, startsExpr: !0 }),
          prefix: new d('!/~', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
          logicalOR: f('||', 1),
          logicalAND: f('&&', 2),
          bitwiseOR: f('|', 3),
          bitwiseXOR: f('^', 4),
          bitwiseAND: f('&', 5),
          equality: f('==/!=/===/!==', 6),
          relational: f('</>/<=/>=', 7),
          bitShift: f('<</>>/>>>', 8),
          plusMin: new d('+/-', {
            beforeExpr: !0,
            binop: 9,
            prefix: !0,
            startsExpr: !0,
          }),
          modulo: f('%', 10),
          star: f('*', 10),
          slash: f('/', 10),
          starstar: new d('**', { beforeExpr: !0 }),
          _break: v('break'),
          _case: v('case', m),
          _catch: v('catch'),
          _continue: v('continue'),
          _debugger: v('debugger'),
          _default: v('default', m),
          _do: v('do', { isLoop: !0, beforeExpr: !0 }),
          _else: v('else', m),
          _finally: v('finally'),
          _for: v('for', { isLoop: !0 }),
          _function: v('function', x),
          _if: v('if'),
          _return: v('return', m),
          _switch: v('switch'),
          _throw: v('throw', m),
          _try: v('try'),
          _var: v('var'),
          _const: v('const'),
          _while: v('while', { isLoop: !0 }),
          _with: v('with'),
          _new: v('new', { beforeExpr: !0, startsExpr: !0 }),
          _this: v('this', x),
          _super: v('super', x),
          _class: v('class', x),
          _extends: v('extends', m),
          _export: v('export'),
          _import: v('import', x),
          _null: v('null', x),
          _true: v('true', x),
          _false: v('false', x),
          _in: v('in', { beforeExpr: !0, binop: 7 }),
          _instanceof: v('instanceof', { beforeExpr: !0, binop: 7 }),
          _typeof: v('typeof', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
          _void: v('void', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
          _delete: v('delete', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
        };
        exports.tokTypes = y;
        var k = /\r\n?|\n|\u2028|\u2029/;
        exports.lineBreak = k;
        var _ = new RegExp(k.source, 'g');
        function b(t, e) {
          return 10 === t || 13 === t || (!e && (8232 === t || 8233 === t));
        }
        exports.lineBreakG = _;
        var S = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/;
        exports.nonASCIIwhitespace = S;
        var w = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
          C = Object.prototype,
          E = C.hasOwnProperty,
          A = C.toString;
        function I(t, e) {
          return E.call(t, e);
        }
        var P =
          Array.isArray ||
          function (t) {
            return '[object Array]' === A.call(t);
          };
        function T(t) {
          return new RegExp('^(?:' + t.replace(/ /g, '|') + ')$');
        }
        var L = function (t, e) {
          (this.line = t), (this.column = e);
        };
        (exports.Position = L),
          (L.prototype.offset = function (t) {
            return new L(this.line, this.column + t);
          });
        var V = function (t, e, i) {
          (this.start = e),
            (this.end = i),
            null !== t.sourceFile && (this.source = t.sourceFile);
        };
        function N(t, e) {
          for (var i = 1, s = 0; ; ) {
            _.lastIndex = s;
            var r = _.exec(t);
            if (!(r && r.index < e)) return new L(i, e - s);
            ++i, (s = r.index + r[0].length);
          }
        }
        exports.SourceLocation = V;
        var R = {
          ecmaVersion: 10,
          sourceType: 'script',
          onInsertedSemicolon: null,
          onTrailingComma: null,
          allowReserved: null,
          allowReturnOutsideFunction: !1,
          allowImportExportEverywhere: !1,
          allowAwaitOutsideFunction: !1,
          allowHashBang: !1,
          locations: !1,
          onToken: null,
          onComment: null,
          ranges: !1,
          program: null,
          sourceFile: null,
          directSourceFile: null,
          preserveParens: !1,
        };
        function B(t) {
          var e = {};
          for (var i in R) e[i] = t && I(t, i) ? t[i] : R[i];
          if (
            (e.ecmaVersion >= 2015 && (e.ecmaVersion -= 2009),
            null == e.allowReserved && (e.allowReserved = e.ecmaVersion < 5),
            P(e.onToken))
          ) {
            var s = e.onToken;
            e.onToken = function (t) {
              return s.push(t);
            };
          }
          return P(e.onComment) && (e.onComment = O(e, e.onComment)), e;
        }
        function O(t, e) {
          return function (i, s, r, a, n, o) {
            var h = { type: i ? 'Block' : 'Line', value: s, start: r, end: a };
            t.locations && (h.loc = new V(this, n, o)),
              t.ranges && (h.range = [r, a]),
              e.push(h);
          };
        }
        exports.defaultOptions = R;
        var M = 1,
          D = 2,
          F = M | D,
          U = 4,
          q = 8,
          G = 16,
          H = 32,
          j = 64,
          W = 128;
        function z(t, e) {
          return D | (t ? U : 0) | (e ? q : 0);
        }
        var Q = 0,
          K = 1,
          X = 2,
          Y = 3,
          Z = 4,
          $ = 5,
          J = function (e, s, r) {
            (this.options = e = B(e)),
              (this.sourceFile = e.sourceFile),
              (this.keywords = T(
                i[
                  e.ecmaVersion >= 6
                    ? 6
                    : 'module' === e.sourceType
                    ? '5module'
                    : 5
                ],
              ));
            var a = '';
            if (!0 !== e.allowReserved) {
              for (var n = e.ecmaVersion; !(a = t[n]); n--);
              'module' === e.sourceType && (a += ' await');
            }
            this.reservedWords = T(a);
            var o = (a ? a + ' ' : '') + t.strict;
            (this.reservedWordsStrict = T(o)),
              (this.reservedWordsStrictBind = T(o + ' ' + t.strictBind)),
              (this.input = String(s)),
              (this.containsEsc = !1),
              r
                ? ((this.pos = r),
                  (this.lineStart = this.input.lastIndexOf('\n', r - 1) + 1),
                  (this.curLine = this.input
                    .slice(0, this.lineStart)
                    .split(k).length))
                : ((this.pos = this.lineStart = 0), (this.curLine = 1)),
              (this.type = y.eof),
              (this.value = null),
              (this.start = this.end = this.pos),
              (this.startLoc = this.endLoc = this.curPosition()),
              (this.lastTokEndLoc = this.lastTokStartLoc = null),
              (this.lastTokStart = this.lastTokEnd = this.pos),
              (this.context = this.initialContext()),
              (this.exprAllowed = !0),
              (this.inModule = 'module' === e.sourceType),
              (this.strict = this.inModule || this.strictDirective(this.pos)),
              (this.potentialArrowAt = -1),
              (this.yieldPos = this.awaitPos = this.awaitIdentPos = 0),
              (this.labels = []),
              (this.undefinedExports = {}),
              0 === this.pos &&
                e.allowHashBang &&
                '#!' === this.input.slice(0, 2) &&
                this.skipLineComment(2),
              (this.scopeStack = []),
              this.enterScope(M),
              (this.regexpState = null);
          };
        exports.Parser = J;
        var tt = {
          inFunction: { configurable: !0 },
          inGenerator: { configurable: !0 },
          inAsync: { configurable: !0 },
          allowSuper: { configurable: !0 },
          allowDirectSuper: { configurable: !0 },
          treatFunctionsAsVar: { configurable: !0 },
        };
        (J.prototype.parse = function () {
          var t = this.options.program || this.startNode();
          return this.nextToken(), this.parseTopLevel(t);
        }),
          (tt.inFunction.get = function () {
            return (this.currentVarScope().flags & D) > 0;
          }),
          (tt.inGenerator.get = function () {
            return (this.currentVarScope().flags & q) > 0;
          }),
          (tt.inAsync.get = function () {
            return (this.currentVarScope().flags & U) > 0;
          }),
          (tt.allowSuper.get = function () {
            return (this.currentThisScope().flags & j) > 0;
          }),
          (tt.allowDirectSuper.get = function () {
            return (this.currentThisScope().flags & W) > 0;
          }),
          (tt.treatFunctionsAsVar.get = function () {
            return this.treatFunctionsAsVarInScope(this.currentScope());
          }),
          (J.prototype.inNonArrowFunction = function () {
            return (this.currentThisScope().flags & D) > 0;
          }),
          (J.extend = function () {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            for (var i = this, s = 0; s < t.length; s++) i = t[s](i);
            return i;
          }),
          (J.parse = function (t, e) {
            return new this(e, t).parse();
          }),
          (J.parseExpressionAt = function (t, e, i) {
            var s = new this(i, t, e);
            return s.nextToken(), s.parseExpression();
          }),
          (J.tokenizer = function (t, e) {
            return new this(e, t);
          }),
          Object.defineProperties(J.prototype, tt);
        var et = J.prototype,
          it = /^(?:'((?:\\.|[^'])*?)'|"((?:\\.|[^"])*?)")/;
        function st() {
          this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
        }
        (et.strictDirective = function (t) {
          for (;;) {
            (w.lastIndex = t), (t += w.exec(this.input)[0].length);
            var e = it.exec(this.input.slice(t));
            if (!e) return !1;
            if ('use strict' === (e[1] || e[2])) return !0;
            (t += e[0].length),
              (w.lastIndex = t),
              (t += w.exec(this.input)[0].length),
              ';' === this.input[t] && t++;
          }
        }),
          (et.eat = function (t) {
            return this.type === t && (this.next(), !0);
          }),
          (et.isContextual = function (t) {
            return (
              this.type === y.name && this.value === t && !this.containsEsc
            );
          }),
          (et.eatContextual = function (t) {
            return !!this.isContextual(t) && (this.next(), !0);
          }),
          (et.expectContextual = function (t) {
            this.eatContextual(t) || this.unexpected();
          }),
          (et.canInsertSemicolon = function () {
            return (
              this.type === y.eof ||
              this.type === y.braceR ||
              k.test(this.input.slice(this.lastTokEnd, this.start))
            );
          }),
          (et.insertSemicolon = function () {
            if (this.canInsertSemicolon())
              return (
                this.options.onInsertedSemicolon &&
                  this.options.onInsertedSemicolon(
                    this.lastTokEnd,
                    this.lastTokEndLoc,
                  ),
                !0
              );
          }),
          (et.semicolon = function () {
            this.eat(y.semi) || this.insertSemicolon() || this.unexpected();
          }),
          (et.afterTrailingComma = function (t, e) {
            if (this.type === t)
              return (
                this.options.onTrailingComma &&
                  this.options.onTrailingComma(
                    this.lastTokStart,
                    this.lastTokStartLoc,
                  ),
                e || this.next(),
                !0
              );
          }),
          (et.expect = function (t) {
            this.eat(t) || this.unexpected();
          }),
          (et.unexpected = function (t) {
            this.raise(null != t ? t : this.start, 'Unexpected token');
          }),
          (et.checkPatternErrors = function (t, e) {
            if (t) {
              t.trailingComma > -1 &&
                this.raiseRecoverable(
                  t.trailingComma,
                  'Comma is not permitted after the rest element',
                );
              var i = e ? t.parenthesizedAssign : t.parenthesizedBind;
              i > -1 && this.raiseRecoverable(i, 'Parenthesized pattern');
            }
          }),
          (et.checkExpressionErrors = function (t, e) {
            if (!t) return !1;
            var i = t.shorthandAssign,
              s = t.doubleProto;
            if (!e) return i >= 0 || s >= 0;
            i >= 0 &&
              this.raise(
                i,
                'Shorthand property assignments are valid only in destructuring patterns',
              ),
              s >= 0 &&
                this.raiseRecoverable(s, 'Redefinition of __proto__ property');
          }),
          (et.checkYieldAwaitInDefaultParams = function () {
            this.yieldPos &&
              (!this.awaitPos || this.yieldPos < this.awaitPos) &&
              this.raise(
                this.yieldPos,
                'Yield expression cannot be a default value',
              ),
              this.awaitPos &&
                this.raise(
                  this.awaitPos,
                  'Await expression cannot be a default value',
                );
          }),
          (et.isSimpleAssignTarget = function (t) {
            return 'ParenthesizedExpression' === t.type
              ? this.isSimpleAssignTarget(t.expression)
              : 'Identifier' === t.type || 'MemberExpression' === t.type;
          });
        var rt = J.prototype;
        rt.parseTopLevel = function (t) {
          var e = {};
          for (t.body || (t.body = []); this.type !== y.eof; ) {
            var i = this.parseStatement(null, !0, e);
            t.body.push(i);
          }
          if (this.inModule)
            for (
              var s = 0, r = Object.keys(this.undefinedExports);
              s < r.length;
              s += 1
            ) {
              var a = r[s];
              this.raiseRecoverable(
                this.undefinedExports[a].start,
                "Export '" + a + "' is not defined",
              );
            }
          return (
            this.adaptDirectivePrologue(t.body),
            this.next(),
            (t.sourceType = this.options.sourceType),
            this.finishNode(t, 'Program')
          );
        };
        var at = { kind: 'loop' },
          nt = { kind: 'switch' };
        (rt.isLet = function (t) {
          if (this.options.ecmaVersion < 6 || !this.isContextual('let'))
            return !1;
          w.lastIndex = this.pos;
          var e = w.exec(this.input),
            i = this.pos + e[0].length,
            r = this.input.charCodeAt(i);
          if (91 === r) return !0;
          if (t) return !1;
          if (123 === r) return !0;
          if (u(r, !0)) {
            for (var a = i + 1; l(this.input.charCodeAt(a), !0); ) ++a;
            var n = this.input.slice(i, a);
            if (!s.test(n)) return !0;
          }
          return !1;
        }),
          (rt.isAsyncFunction = function () {
            if (this.options.ecmaVersion < 8 || !this.isContextual('async'))
              return !1;
            w.lastIndex = this.pos;
            var t = w.exec(this.input),
              e = this.pos + t[0].length;
            return !(
              k.test(this.input.slice(this.pos, e)) ||
              'function' !== this.input.slice(e, e + 8) ||
              (e + 8 !== this.input.length && l(this.input.charAt(e + 8)))
            );
          }),
          (rt.parseStatement = function (t, e, i) {
            var s,
              r = this.type,
              a = this.startNode();
            switch ((this.isLet(t) && ((r = y._var), (s = 'let')), r)) {
              case y._break:
              case y._continue:
                return this.parseBreakContinueStatement(a, r.keyword);
              case y._debugger:
                return this.parseDebuggerStatement(a);
              case y._do:
                return this.parseDoStatement(a);
              case y._for:
                return this.parseForStatement(a);
              case y._function:
                return (
                  t &&
                    (this.strict || ('if' !== t && 'label' !== t)) &&
                    this.options.ecmaVersion >= 6 &&
                    this.unexpected(),
                  this.parseFunctionStatement(a, !1, !t)
                );
              case y._class:
                return t && this.unexpected(), this.parseClass(a, !0);
              case y._if:
                return this.parseIfStatement(a);
              case y._return:
                return this.parseReturnStatement(a);
              case y._switch:
                return this.parseSwitchStatement(a);
              case y._throw:
                return this.parseThrowStatement(a);
              case y._try:
                return this.parseTryStatement(a);
              case y._const:
              case y._var:
                return (
                  (s = s || this.value),
                  t && 'var' !== s && this.unexpected(),
                  this.parseVarStatement(a, s)
                );
              case y._while:
                return this.parseWhileStatement(a);
              case y._with:
                return this.parseWithStatement(a);
              case y.braceL:
                return this.parseBlock(!0, a);
              case y.semi:
                return this.parseEmptyStatement(a);
              case y._export:
              case y._import:
                if (this.options.ecmaVersion > 10 && r === y._import) {
                  w.lastIndex = this.pos;
                  var n = w.exec(this.input),
                    o = this.pos + n[0].length;
                  if (40 === this.input.charCodeAt(o))
                    return this.parseExpressionStatement(
                      a,
                      this.parseExpression(),
                    );
                }
                return (
                  this.options.allowImportExportEverywhere ||
                    (e ||
                      this.raise(
                        this.start,
                        "'import' and 'export' may only appear at the top level",
                      ),
                    this.inModule ||
                      this.raise(
                        this.start,
                        "'import' and 'export' may appear only with 'sourceType: module'",
                      )),
                  r === y._import ? this.parseImport(a) : this.parseExport(a, i)
                );
              default:
                if (this.isAsyncFunction())
                  return (
                    t && this.unexpected(),
                    this.next(),
                    this.parseFunctionStatement(a, !0, !t)
                  );
                var h = this.value,
                  p = this.parseExpression();
                return r === y.name &&
                  'Identifier' === p.type &&
                  this.eat(y.colon)
                  ? this.parseLabeledStatement(a, h, p, t)
                  : this.parseExpressionStatement(a, p);
            }
          }),
          (rt.parseBreakContinueStatement = function (t, e) {
            var i = 'break' === e;
            this.next(),
              this.eat(y.semi) || this.insertSemicolon()
                ? (t.label = null)
                : this.type !== y.name
                ? this.unexpected()
                : ((t.label = this.parseIdent()), this.semicolon());
            for (var s = 0; s < this.labels.length; ++s) {
              var r = this.labels[s];
              if (null == t.label || r.name === t.label.name) {
                if (null != r.kind && (i || 'loop' === r.kind)) break;
                if (t.label && i) break;
              }
            }
            return (
              s === this.labels.length &&
                this.raise(t.start, 'Unsyntactic ' + e),
              this.finishNode(t, i ? 'BreakStatement' : 'ContinueStatement')
            );
          }),
          (rt.parseDebuggerStatement = function (t) {
            return (
              this.next(),
              this.semicolon(),
              this.finishNode(t, 'DebuggerStatement')
            );
          }),
          (rt.parseDoStatement = function (t) {
            return (
              this.next(),
              this.labels.push(at),
              (t.body = this.parseStatement('do')),
              this.labels.pop(),
              this.expect(y._while),
              (t.test = this.parseParenExpression()),
              this.options.ecmaVersion >= 6
                ? this.eat(y.semi)
                : this.semicolon(),
              this.finishNode(t, 'DoWhileStatement')
            );
          }),
          (rt.parseForStatement = function (t) {
            this.next();
            var e =
              this.options.ecmaVersion >= 9 &&
              (this.inAsync ||
                (!this.inFunction && this.options.allowAwaitOutsideFunction)) &&
              this.eatContextual('await')
                ? this.lastTokStart
                : -1;
            if (
              (this.labels.push(at),
              this.enterScope(0),
              this.expect(y.parenL),
              this.type === y.semi)
            )
              return e > -1 && this.unexpected(e), this.parseFor(t, null);
            var i = this.isLet();
            if (this.type === y._var || this.type === y._const || i) {
              var s = this.startNode(),
                r = i ? 'let' : this.value;
              return (
                this.next(),
                this.parseVar(s, !0, r),
                this.finishNode(s, 'VariableDeclaration'),
                (this.type === y._in ||
                  (this.options.ecmaVersion >= 6 && this.isContextual('of'))) &&
                1 === s.declarations.length
                  ? (this.options.ecmaVersion >= 9 &&
                      (this.type === y._in
                        ? e > -1 && this.unexpected(e)
                        : (t.await = e > -1)),
                    this.parseForIn(t, s))
                  : (e > -1 && this.unexpected(e), this.parseFor(t, s))
              );
            }
            var a = new st(),
              n = this.parseExpression(!0, a);
            return this.type === y._in ||
              (this.options.ecmaVersion >= 6 && this.isContextual('of'))
              ? (this.options.ecmaVersion >= 9 &&
                  (this.type === y._in
                    ? e > -1 && this.unexpected(e)
                    : (t.await = e > -1)),
                this.toAssignable(n, !1, a),
                this.checkLVal(n),
                this.parseForIn(t, n))
              : (this.checkExpressionErrors(a, !0),
                e > -1 && this.unexpected(e),
                this.parseFor(t, n));
          }),
          (rt.parseFunctionStatement = function (t, e, i) {
            return this.next(), this.parseFunction(t, ht | (i ? 0 : pt), !1, e);
          }),
          (rt.parseIfStatement = function (t) {
            return (
              this.next(),
              (t.test = this.parseParenExpression()),
              (t.consequent = this.parseStatement('if')),
              (t.alternate = this.eat(y._else)
                ? this.parseStatement('if')
                : null),
              this.finishNode(t, 'IfStatement')
            );
          }),
          (rt.parseReturnStatement = function (t) {
            return (
              this.inFunction ||
                this.options.allowReturnOutsideFunction ||
                this.raise(this.start, "'return' outside of function"),
              this.next(),
              this.eat(y.semi) || this.insertSemicolon()
                ? (t.argument = null)
                : ((t.argument = this.parseExpression()), this.semicolon()),
              this.finishNode(t, 'ReturnStatement')
            );
          }),
          (rt.parseSwitchStatement = function (t) {
            var e;
            this.next(),
              (t.discriminant = this.parseParenExpression()),
              (t.cases = []),
              this.expect(y.braceL),
              this.labels.push(nt),
              this.enterScope(0);
            for (var i = !1; this.type !== y.braceR; )
              if (this.type === y._case || this.type === y._default) {
                var s = this.type === y._case;
                e && this.finishNode(e, 'SwitchCase'),
                  t.cases.push((e = this.startNode())),
                  (e.consequent = []),
                  this.next(),
                  s
                    ? (e.test = this.parseExpression())
                    : (i &&
                        this.raiseRecoverable(
                          this.lastTokStart,
                          'Multiple default clauses',
                        ),
                      (i = !0),
                      (e.test = null)),
                  this.expect(y.colon);
              } else
                e || this.unexpected(),
                  e.consequent.push(this.parseStatement(null));
            return (
              this.exitScope(),
              e && this.finishNode(e, 'SwitchCase'),
              this.next(),
              this.labels.pop(),
              this.finishNode(t, 'SwitchStatement')
            );
          }),
          (rt.parseThrowStatement = function (t) {
            return (
              this.next(),
              k.test(this.input.slice(this.lastTokEnd, this.start)) &&
                this.raise(this.lastTokEnd, 'Illegal newline after throw'),
              (t.argument = this.parseExpression()),
              this.semicolon(),
              this.finishNode(t, 'ThrowStatement')
            );
          });
        var ot = [];
        (rt.parseTryStatement = function (t) {
          if (
            (this.next(),
            (t.block = this.parseBlock()),
            (t.handler = null),
            this.type === y._catch)
          ) {
            var e = this.startNode();
            if ((this.next(), this.eat(y.parenL))) {
              e.param = this.parseBindingAtom();
              var i = 'Identifier' === e.param.type;
              this.enterScope(i ? H : 0),
                this.checkLVal(e.param, i ? Z : X),
                this.expect(y.parenR);
            } else
              this.options.ecmaVersion < 10 && this.unexpected(),
                (e.param = null),
                this.enterScope(0);
            (e.body = this.parseBlock(!1)),
              this.exitScope(),
              (t.handler = this.finishNode(e, 'CatchClause'));
          }
          return (
            (t.finalizer = this.eat(y._finally) ? this.parseBlock() : null),
            t.handler ||
              t.finalizer ||
              this.raise(t.start, 'Missing catch or finally clause'),
            this.finishNode(t, 'TryStatement')
          );
        }),
          (rt.parseVarStatement = function (t, e) {
            return (
              this.next(),
              this.parseVar(t, !1, e),
              this.semicolon(),
              this.finishNode(t, 'VariableDeclaration')
            );
          }),
          (rt.parseWhileStatement = function (t) {
            return (
              this.next(),
              (t.test = this.parseParenExpression()),
              this.labels.push(at),
              (t.body = this.parseStatement('while')),
              this.labels.pop(),
              this.finishNode(t, 'WhileStatement')
            );
          }),
          (rt.parseWithStatement = function (t) {
            return (
              this.strict && this.raise(this.start, "'with' in strict mode"),
              this.next(),
              (t.object = this.parseParenExpression()),
              (t.body = this.parseStatement('with')),
              this.finishNode(t, 'WithStatement')
            );
          }),
          (rt.parseEmptyStatement = function (t) {
            return this.next(), this.finishNode(t, 'EmptyStatement');
          }),
          (rt.parseLabeledStatement = function (t, e, i, s) {
            for (var r = 0, a = this.labels; r < a.length; r += 1) {
              a[r].name === e &&
                this.raise(i.start, "Label '" + e + "' is already declared");
            }
            for (
              var n = this.type.isLoop
                  ? 'loop'
                  : this.type === y._switch
                  ? 'switch'
                  : null,
                o = this.labels.length - 1;
              o >= 0;
              o--
            ) {
              var h = this.labels[o];
              if (h.statementStart !== t.start) break;
              (h.statementStart = this.start), (h.kind = n);
            }
            return (
              this.labels.push({
                name: e,
                kind: n,
                statementStart: this.start,
              }),
              (t.body = this.parseStatement(
                s ? (-1 === s.indexOf('label') ? s + 'label' : s) : 'label',
              )),
              this.labels.pop(),
              (t.label = i),
              this.finishNode(t, 'LabeledStatement')
            );
          }),
          (rt.parseExpressionStatement = function (t, e) {
            return (
              (t.expression = e),
              this.semicolon(),
              this.finishNode(t, 'ExpressionStatement')
            );
          }),
          (rt.parseBlock = function (t, e) {
            for (
              void 0 === t && (t = !0),
                void 0 === e && (e = this.startNode()),
                e.body = [],
                this.expect(y.braceL),
                t && this.enterScope(0);
              !this.eat(y.braceR);

            ) {
              var i = this.parseStatement(null);
              e.body.push(i);
            }
            return t && this.exitScope(), this.finishNode(e, 'BlockStatement');
          }),
          (rt.parseFor = function (t, e) {
            return (
              (t.init = e),
              this.expect(y.semi),
              (t.test = this.type === y.semi ? null : this.parseExpression()),
              this.expect(y.semi),
              (t.update =
                this.type === y.parenR ? null : this.parseExpression()),
              this.expect(y.parenR),
              (t.body = this.parseStatement('for')),
              this.exitScope(),
              this.labels.pop(),
              this.finishNode(t, 'ForStatement')
            );
          }),
          (rt.parseForIn = function (t, e) {
            var i = this.type === y._in;
            return (
              this.next(),
              'VariableDeclaration' === e.type &&
              null != e.declarations[0].init &&
              (!i ||
                this.options.ecmaVersion < 8 ||
                this.strict ||
                'var' !== e.kind ||
                'Identifier' !== e.declarations[0].id.type)
                ? this.raise(
                    e.start,
                    (i ? 'for-in' : 'for-of') +
                      ' loop variable declaration may not have an initializer',
                  )
                : 'AssignmentPattern' === e.type &&
                  this.raise(e.start, 'Invalid left-hand side in for-loop'),
              (t.left = e),
              (t.right = i ? this.parseExpression() : this.parseMaybeAssign()),
              this.expect(y.parenR),
              (t.body = this.parseStatement('for')),
              this.exitScope(),
              this.labels.pop(),
              this.finishNode(t, i ? 'ForInStatement' : 'ForOfStatement')
            );
          }),
          (rt.parseVar = function (t, e, i) {
            for (t.declarations = [], t.kind = i; ; ) {
              var s = this.startNode();
              if (
                (this.parseVarId(s, i),
                this.eat(y.eq)
                  ? (s.init = this.parseMaybeAssign(e))
                  : 'const' !== i ||
                    this.type === y._in ||
                    (this.options.ecmaVersion >= 6 && this.isContextual('of'))
                  ? 'Identifier' === s.id.type ||
                    (e && (this.type === y._in || this.isContextual('of')))
                    ? (s.init = null)
                    : this.raise(
                        this.lastTokEnd,
                        'Complex binding patterns require an initialization value',
                      )
                  : this.unexpected(),
                t.declarations.push(this.finishNode(s, 'VariableDeclarator')),
                !this.eat(y.comma))
              )
                break;
            }
            return t;
          }),
          (rt.parseVarId = function (t, e) {
            (t.id = this.parseBindingAtom()),
              this.checkLVal(t.id, 'var' === e ? K : X, !1);
          });
        var ht = 1,
          pt = 2,
          ct = 4;
        (rt.parseFunction = function (t, e, i, s) {
          this.initFunction(t),
            (this.options.ecmaVersion >= 9 ||
              (this.options.ecmaVersion >= 6 && !s)) &&
              (this.type === y.star && e & pt && this.unexpected(),
              (t.generator = this.eat(y.star))),
            this.options.ecmaVersion >= 8 && (t.async = !!s),
            e & ht &&
              ((t.id =
                e & ct && this.type !== y.name ? null : this.parseIdent()),
              !t.id ||
                e & pt ||
                this.checkLVal(
                  t.id,
                  this.strict || t.generator || t.async
                    ? this.treatFunctionsAsVar
                      ? K
                      : X
                    : Y,
                ));
          var r = this.yieldPos,
            a = this.awaitPos,
            n = this.awaitIdentPos;
          return (
            (this.yieldPos = 0),
            (this.awaitPos = 0),
            (this.awaitIdentPos = 0),
            this.enterScope(z(t.async, t.generator)),
            e & ht || (t.id = this.type === y.name ? this.parseIdent() : null),
            this.parseFunctionParams(t),
            this.parseFunctionBody(t, i, !1),
            (this.yieldPos = r),
            (this.awaitPos = a),
            (this.awaitIdentPos = n),
            this.finishNode(
              t,
              e & ht ? 'FunctionDeclaration' : 'FunctionExpression',
            )
          );
        }),
          (rt.parseFunctionParams = function (t) {
            this.expect(y.parenL),
              (t.params = this.parseBindingList(
                y.parenR,
                !1,
                this.options.ecmaVersion >= 8,
              )),
              this.checkYieldAwaitInDefaultParams();
          }),
          (rt.parseClass = function (t, e) {
            this.next();
            var i = this.strict;
            (this.strict = !0),
              this.parseClassId(t, e),
              this.parseClassSuper(t);
            var s = this.startNode(),
              r = !1;
            for (s.body = [], this.expect(y.braceL); !this.eat(y.braceR); ) {
              var a = this.parseClassElement(null !== t.superClass);
              a &&
                (s.body.push(a),
                'MethodDefinition' === a.type &&
                  'constructor' === a.kind &&
                  (r &&
                    this.raise(
                      a.start,
                      'Duplicate constructor in the same class',
                    ),
                  (r = !0)));
            }
            return (
              (t.body = this.finishNode(s, 'ClassBody')),
              (this.strict = i),
              this.finishNode(t, e ? 'ClassDeclaration' : 'ClassExpression')
            );
          }),
          (rt.parseClassElement = function (t) {
            var e = this;
            if (this.eat(y.semi)) return null;
            var i = this.startNode(),
              s = function (t, s) {
                void 0 === s && (s = !1);
                var r = e.start,
                  a = e.startLoc;
                return (
                  !!e.eatContextual(t) &&
                  (!(e.type === y.parenL || (s && e.canInsertSemicolon())) ||
                    (i.key && e.unexpected(),
                    (i.computed = !1),
                    (i.key = e.startNodeAt(r, a)),
                    (i.key.name = t),
                    e.finishNode(i.key, 'Identifier'),
                    !1))
                );
              };
            (i.kind = 'method'), (i.static = s('static'));
            var r = this.eat(y.star),
              a = !1;
            r ||
              (this.options.ecmaVersion >= 8 && s('async', !0)
                ? ((a = !0),
                  (r = this.options.ecmaVersion >= 9 && this.eat(y.star)))
                : s('get')
                ? (i.kind = 'get')
                : s('set') && (i.kind = 'set')),
              i.key || this.parsePropertyName(i);
            var n = i.key,
              o = !1;
            return (
              i.computed ||
              i.static ||
              !(
                ('Identifier' === n.type && 'constructor' === n.name) ||
                ('Literal' === n.type && 'constructor' === n.value)
              )
                ? i.static &&
                  'Identifier' === n.type &&
                  'prototype' === n.name &&
                  this.raise(
                    n.start,
                    'Classes may not have a static property named prototype',
                  )
                : ('method' !== i.kind &&
                    this.raise(
                      n.start,
                      "Constructor can't have get/set modifier",
                    ),
                  r && this.raise(n.start, "Constructor can't be a generator"),
                  a &&
                    this.raise(n.start, "Constructor can't be an async method"),
                  (i.kind = 'constructor'),
                  (o = t)),
              this.parseClassMethod(i, r, a, o),
              'get' === i.kind &&
                0 !== i.value.params.length &&
                this.raiseRecoverable(
                  i.value.start,
                  'getter should have no params',
                ),
              'set' === i.kind &&
                1 !== i.value.params.length &&
                this.raiseRecoverable(
                  i.value.start,
                  'setter should have exactly one param',
                ),
              'set' === i.kind &&
                'RestElement' === i.value.params[0].type &&
                this.raiseRecoverable(
                  i.value.params[0].start,
                  'Setter cannot use rest params',
                ),
              i
            );
          }),
          (rt.parseClassMethod = function (t, e, i, s) {
            return (
              (t.value = this.parseMethod(e, i, s)),
              this.finishNode(t, 'MethodDefinition')
            );
          }),
          (rt.parseClassId = function (t, e) {
            this.type === y.name
              ? ((t.id = this.parseIdent()), e && this.checkLVal(t.id, X, !1))
              : (!0 === e && this.unexpected(), (t.id = null));
          }),
          (rt.parseClassSuper = function (t) {
            t.superClass = this.eat(y._extends)
              ? this.parseExprSubscripts()
              : null;
          }),
          (rt.parseExport = function (t, e) {
            if ((this.next(), this.eat(y.star)))
              return (
                this.expectContextual('from'),
                this.type !== y.string && this.unexpected(),
                (t.source = this.parseExprAtom()),
                this.semicolon(),
                this.finishNode(t, 'ExportAllDeclaration')
              );
            if (this.eat(y._default)) {
              var i;
              if (
                (this.checkExport(e, 'default', this.lastTokStart),
                this.type === y._function || (i = this.isAsyncFunction()))
              ) {
                var s = this.startNode();
                this.next(),
                  i && this.next(),
                  (t.declaration = this.parseFunction(s, ht | ct, !1, i));
              } else if (this.type === y._class) {
                var r = this.startNode();
                t.declaration = this.parseClass(r, 'nullableID');
              } else
                (t.declaration = this.parseMaybeAssign()), this.semicolon();
              return this.finishNode(t, 'ExportDefaultDeclaration');
            }
            if (this.shouldParseExportStatement())
              (t.declaration = this.parseStatement(null)),
                'VariableDeclaration' === t.declaration.type
                  ? this.checkVariableExport(e, t.declaration.declarations)
                  : this.checkExport(
                      e,
                      t.declaration.id.name,
                      t.declaration.id.start,
                    ),
                (t.specifiers = []),
                (t.source = null);
            else {
              if (
                ((t.declaration = null),
                (t.specifiers = this.parseExportSpecifiers(e)),
                this.eatContextual('from'))
              )
                this.type !== y.string && this.unexpected(),
                  (t.source = this.parseExprAtom());
              else {
                for (var a = 0, n = t.specifiers; a < n.length; a += 1) {
                  var o = n[a];
                  this.checkUnreserved(o.local), this.checkLocalExport(o.local);
                }
                t.source = null;
              }
              this.semicolon();
            }
            return this.finishNode(t, 'ExportNamedDeclaration');
          }),
          (rt.checkExport = function (t, e, i) {
            t &&
              (I(t, e) &&
                this.raiseRecoverable(i, "Duplicate export '" + e + "'"),
              (t[e] = !0));
          }),
          (rt.checkPatternExport = function (t, e) {
            var i = e.type;
            if ('Identifier' === i) this.checkExport(t, e.name, e.start);
            else if ('ObjectPattern' === i)
              for (var s = 0, r = e.properties; s < r.length; s += 1) {
                var a = r[s];
                this.checkPatternExport(t, a);
              }
            else if ('ArrayPattern' === i)
              for (var n = 0, o = e.elements; n < o.length; n += 1) {
                var h = o[n];
                h && this.checkPatternExport(t, h);
              }
            else
              'Property' === i
                ? this.checkPatternExport(t, e.value)
                : 'AssignmentPattern' === i
                ? this.checkPatternExport(t, e.left)
                : 'RestElement' === i
                ? this.checkPatternExport(t, e.argument)
                : 'ParenthesizedExpression' === i &&
                  this.checkPatternExport(t, e.expression);
          }),
          (rt.checkVariableExport = function (t, e) {
            if (t)
              for (var i = 0, s = e; i < s.length; i += 1) {
                var r = s[i];
                this.checkPatternExport(t, r.id);
              }
          }),
          (rt.shouldParseExportStatement = function () {
            return (
              'var' === this.type.keyword ||
              'const' === this.type.keyword ||
              'class' === this.type.keyword ||
              'function' === this.type.keyword ||
              this.isLet() ||
              this.isAsyncFunction()
            );
          }),
          (rt.parseExportSpecifiers = function (t) {
            var e = [],
              i = !0;
            for (this.expect(y.braceL); !this.eat(y.braceR); ) {
              if (i) i = !1;
              else if (
                (this.expect(y.comma), this.afterTrailingComma(y.braceR))
              )
                break;
              var s = this.startNode();
              (s.local = this.parseIdent(!0)),
                (s.exported = this.eatContextual('as')
                  ? this.parseIdent(!0)
                  : s.local),
                this.checkExport(t, s.exported.name, s.exported.start),
                e.push(this.finishNode(s, 'ExportSpecifier'));
            }
            return e;
          }),
          (rt.parseImport = function (t) {
            return (
              this.next(),
              this.type === y.string
                ? ((t.specifiers = ot), (t.source = this.parseExprAtom()))
                : ((t.specifiers = this.parseImportSpecifiers()),
                  this.expectContextual('from'),
                  (t.source =
                    this.type === y.string
                      ? this.parseExprAtom()
                      : this.unexpected())),
              this.semicolon(),
              this.finishNode(t, 'ImportDeclaration')
            );
          }),
          (rt.parseImportSpecifiers = function () {
            var t = [],
              e = !0;
            if (this.type === y.name) {
              var i = this.startNode();
              if (
                ((i.local = this.parseIdent()),
                this.checkLVal(i.local, X),
                t.push(this.finishNode(i, 'ImportDefaultSpecifier')),
                !this.eat(y.comma))
              )
                return t;
            }
            if (this.type === y.star) {
              var s = this.startNode();
              return (
                this.next(),
                this.expectContextual('as'),
                (s.local = this.parseIdent()),
                this.checkLVal(s.local, X),
                t.push(this.finishNode(s, 'ImportNamespaceSpecifier')),
                t
              );
            }
            for (this.expect(y.braceL); !this.eat(y.braceR); ) {
              if (e) e = !1;
              else if (
                (this.expect(y.comma), this.afterTrailingComma(y.braceR))
              )
                break;
              var r = this.startNode();
              (r.imported = this.parseIdent(!0)),
                this.eatContextual('as')
                  ? (r.local = this.parseIdent())
                  : (this.checkUnreserved(r.imported), (r.local = r.imported)),
                this.checkLVal(r.local, X),
                t.push(this.finishNode(r, 'ImportSpecifier'));
            }
            return t;
          }),
          (rt.adaptDirectivePrologue = function (t) {
            for (
              var e = 0;
              e < t.length && this.isDirectiveCandidate(t[e]);
              ++e
            )
              t[e].directive = t[e].expression.raw.slice(1, -1);
          }),
          (rt.isDirectiveCandidate = function (t) {
            return (
              'ExpressionStatement' === t.type &&
              'Literal' === t.expression.type &&
              'string' == typeof t.expression.value &&
              ('"' === this.input[t.start] || "'" === this.input[t.start])
            );
          });
        var ut = J.prototype;
        (ut.toAssignable = function (t, e, i) {
          if (this.options.ecmaVersion >= 6 && t)
            switch (t.type) {
              case 'Identifier':
                this.inAsync &&
                  'await' === t.name &&
                  this.raise(
                    t.start,
                    "Cannot use 'await' as identifier inside an async function",
                  );
                break;
              case 'ObjectPattern':
              case 'ArrayPattern':
              case 'RestElement':
                break;
              case 'ObjectExpression':
                (t.type = 'ObjectPattern'), i && this.checkPatternErrors(i, !0);
                for (var s = 0, r = t.properties; s < r.length; s += 1) {
                  var a = r[s];
                  this.toAssignable(a, e),
                    'RestElement' !== a.type ||
                      ('ArrayPattern' !== a.argument.type &&
                        'ObjectPattern' !== a.argument.type) ||
                      this.raise(a.argument.start, 'Unexpected token');
                }
                break;
              case 'Property':
                'init' !== t.kind &&
                  this.raise(
                    t.key.start,
                    "Object pattern can't contain getter or setter",
                  ),
                  this.toAssignable(t.value, e);
                break;
              case 'ArrayExpression':
                (t.type = 'ArrayPattern'),
                  i && this.checkPatternErrors(i, !0),
                  this.toAssignableList(t.elements, e);
                break;
              case 'SpreadElement':
                (t.type = 'RestElement'),
                  this.toAssignable(t.argument, e),
                  'AssignmentPattern' === t.argument.type &&
                    this.raise(
                      t.argument.start,
                      'Rest elements cannot have a default value',
                    );
                break;
              case 'AssignmentExpression':
                '=' !== t.operator &&
                  this.raise(
                    t.left.end,
                    "Only '=' operator can be used for specifying default value.",
                  ),
                  (t.type = 'AssignmentPattern'),
                  delete t.operator,
                  this.toAssignable(t.left, e);
              case 'AssignmentPattern':
                break;
              case 'ParenthesizedExpression':
                this.toAssignable(t.expression, e, i);
                break;
              case 'MemberExpression':
                if (!e) break;
              default:
                this.raise(t.start, 'Assigning to rvalue');
            }
          else i && this.checkPatternErrors(i, !0);
          return t;
        }),
          (ut.toAssignableList = function (t, e) {
            for (var i = t.length, s = 0; s < i; s++) {
              var r = t[s];
              r && this.toAssignable(r, e);
            }
            if (i) {
              var a = t[i - 1];
              6 === this.options.ecmaVersion &&
                e &&
                a &&
                'RestElement' === a.type &&
                'Identifier' !== a.argument.type &&
                this.unexpected(a.argument.start);
            }
            return t;
          }),
          (ut.parseSpread = function (t) {
            var e = this.startNode();
            return (
              this.next(),
              (e.argument = this.parseMaybeAssign(!1, t)),
              this.finishNode(e, 'SpreadElement')
            );
          }),
          (ut.parseRestBinding = function () {
            var t = this.startNode();
            return (
              this.next(),
              6 === this.options.ecmaVersion &&
                this.type !== y.name &&
                this.unexpected(),
              (t.argument = this.parseBindingAtom()),
              this.finishNode(t, 'RestElement')
            );
          }),
          (ut.parseBindingAtom = function () {
            if (this.options.ecmaVersion >= 6)
              switch (this.type) {
                case y.bracketL:
                  var t = this.startNode();
                  return (
                    this.next(),
                    (t.elements = this.parseBindingList(y.bracketR, !0, !0)),
                    this.finishNode(t, 'ArrayPattern')
                  );
                case y.braceL:
                  return this.parseObj(!0);
              }
            return this.parseIdent();
          }),
          (ut.parseBindingList = function (t, e, i) {
            for (var s = [], r = !0; !this.eat(t); )
              if (
                (r ? (r = !1) : this.expect(y.comma),
                e && this.type === y.comma)
              )
                s.push(null);
              else {
                if (i && this.afterTrailingComma(t)) break;
                if (this.type === y.ellipsis) {
                  var a = this.parseRestBinding();
                  this.parseBindingListItem(a),
                    s.push(a),
                    this.type === y.comma &&
                      this.raise(
                        this.start,
                        'Comma is not permitted after the rest element',
                      ),
                    this.expect(t);
                  break;
                }
                var n = this.parseMaybeDefault(this.start, this.startLoc);
                this.parseBindingListItem(n), s.push(n);
              }
            return s;
          }),
          (ut.parseBindingListItem = function (t) {
            return t;
          }),
          (ut.parseMaybeDefault = function (t, e, i) {
            if (
              ((i = i || this.parseBindingAtom()),
              this.options.ecmaVersion < 6 || !this.eat(y.eq))
            )
              return i;
            var s = this.startNodeAt(t, e);
            return (
              (s.left = i),
              (s.right = this.parseMaybeAssign()),
              this.finishNode(s, 'AssignmentPattern')
            );
          }),
          (ut.checkLVal = function (t, e, i) {
            switch ((void 0 === e && (e = Q), t.type)) {
              case 'Identifier':
                e === X &&
                  'let' === t.name &&
                  this.raiseRecoverable(
                    t.start,
                    'let is disallowed as a lexically bound name',
                  ),
                  this.strict &&
                    this.reservedWordsStrictBind.test(t.name) &&
                    this.raiseRecoverable(
                      t.start,
                      (e ? 'Binding ' : 'Assigning to ') +
                        t.name +
                        ' in strict mode',
                    ),
                  i &&
                    (I(i, t.name) &&
                      this.raiseRecoverable(t.start, 'Argument name clash'),
                    (i[t.name] = !0)),
                  e !== Q && e !== $ && this.declareName(t.name, e, t.start);
                break;
              case 'MemberExpression':
                e &&
                  this.raiseRecoverable(t.start, 'Binding member expression');
                break;
              case 'ObjectPattern':
                for (var s = 0, r = t.properties; s < r.length; s += 1) {
                  var a = r[s];
                  this.checkLVal(a, e, i);
                }
                break;
              case 'Property':
                this.checkLVal(t.value, e, i);
                break;
              case 'ArrayPattern':
                for (var n = 0, o = t.elements; n < o.length; n += 1) {
                  var h = o[n];
                  h && this.checkLVal(h, e, i);
                }
                break;
              case 'AssignmentPattern':
                this.checkLVal(t.left, e, i);
                break;
              case 'RestElement':
                this.checkLVal(t.argument, e, i);
                break;
              case 'ParenthesizedExpression':
                this.checkLVal(t.expression, e, i);
                break;
              default:
                this.raise(
                  t.start,
                  (e ? 'Binding' : 'Assigning to') + ' rvalue',
                );
            }
          });
        var lt = J.prototype;
        (lt.checkPropClash = function (t, e, i) {
          if (
            !(
              (this.options.ecmaVersion >= 9 && 'SpreadElement' === t.type) ||
              (this.options.ecmaVersion >= 6 &&
                (t.computed || t.method || t.shorthand))
            )
          ) {
            var s,
              r = t.key;
            switch (r.type) {
              case 'Identifier':
                s = r.name;
                break;
              case 'Literal':
                s = String(r.value);
                break;
              default:
                return;
            }
            var a = t.kind;
            if (this.options.ecmaVersion >= 6)
              '__proto__' === s &&
                'init' === a &&
                (e.proto &&
                  (i
                    ? i.doubleProto < 0 && (i.doubleProto = r.start)
                    : this.raiseRecoverable(
                        r.start,
                        'Redefinition of __proto__ property',
                      )),
                (e.proto = !0));
            else {
              var n = e[(s = '$' + s)];
              if (n)
                ('init' === a
                  ? (this.strict && n.init) || n.get || n.set
                  : n.init || n[a]) &&
                  this.raiseRecoverable(r.start, 'Redefinition of property');
              else n = e[s] = { init: !1, get: !1, set: !1 };
              n[a] = !0;
            }
          }
        }),
          (lt.parseExpression = function (t, e) {
            var i = this.start,
              s = this.startLoc,
              r = this.parseMaybeAssign(t, e);
            if (this.type === y.comma) {
              var a = this.startNodeAt(i, s);
              for (a.expressions = [r]; this.eat(y.comma); )
                a.expressions.push(this.parseMaybeAssign(t, e));
              return this.finishNode(a, 'SequenceExpression');
            }
            return r;
          }),
          (lt.parseMaybeAssign = function (t, e, i) {
            if (this.isContextual('yield')) {
              if (this.inGenerator) return this.parseYield(t);
              this.exprAllowed = !1;
            }
            var s = !1,
              r = -1,
              a = -1;
            e
              ? ((r = e.parenthesizedAssign),
                (a = e.trailingComma),
                (e.parenthesizedAssign = e.trailingComma = -1))
              : ((e = new st()), (s = !0));
            var n = this.start,
              o = this.startLoc;
            (this.type !== y.parenL && this.type !== y.name) ||
              (this.potentialArrowAt = this.start);
            var h = this.parseMaybeConditional(t, e);
            if ((i && (h = i.call(this, h, n, o)), this.type.isAssign)) {
              var p = this.startNodeAt(n, o);
              return (
                (p.operator = this.value),
                (p.left = this.type === y.eq ? this.toAssignable(h, !1, e) : h),
                s ||
                  (e.parenthesizedAssign = e.trailingComma = e.doubleProto = -1),
                e.shorthandAssign >= p.left.start && (e.shorthandAssign = -1),
                this.checkLVal(h),
                this.next(),
                (p.right = this.parseMaybeAssign(t)),
                this.finishNode(p, 'AssignmentExpression')
              );
            }
            return (
              s && this.checkExpressionErrors(e, !0),
              r > -1 && (e.parenthesizedAssign = r),
              a > -1 && (e.trailingComma = a),
              h
            );
          }),
          (lt.parseMaybeConditional = function (t, e) {
            var i = this.start,
              s = this.startLoc,
              r = this.parseExprOps(t, e);
            if (this.checkExpressionErrors(e)) return r;
            if (this.eat(y.question)) {
              var a = this.startNodeAt(i, s);
              return (
                (a.test = r),
                (a.consequent = this.parseMaybeAssign()),
                this.expect(y.colon),
                (a.alternate = this.parseMaybeAssign(t)),
                this.finishNode(a, 'ConditionalExpression')
              );
            }
            return r;
          }),
          (lt.parseExprOps = function (t, e) {
            var i = this.start,
              s = this.startLoc,
              r = this.parseMaybeUnary(e, !1);
            return this.checkExpressionErrors(e)
              ? r
              : r.start === i && 'ArrowFunctionExpression' === r.type
              ? r
              : this.parseExprOp(r, i, s, -1, t);
          }),
          (lt.parseExprOp = function (t, e, i, s, r) {
            var a = this.type.binop;
            if (null != a && (!r || this.type !== y._in) && a > s) {
              var n = this.type === y.logicalOR || this.type === y.logicalAND,
                o = this.value;
              this.next();
              var h = this.start,
                p = this.startLoc,
                c = this.parseExprOp(
                  this.parseMaybeUnary(null, !1),
                  h,
                  p,
                  a,
                  r,
                ),
                u = this.buildBinary(e, i, t, c, o, n);
              return this.parseExprOp(u, e, i, s, r);
            }
            return t;
          }),
          (lt.buildBinary = function (t, e, i, s, r, a) {
            var n = this.startNodeAt(t, e);
            return (
              (n.left = i),
              (n.operator = r),
              (n.right = s),
              this.finishNode(n, a ? 'LogicalExpression' : 'BinaryExpression')
            );
          }),
          (lt.parseMaybeUnary = function (t, e) {
            var i,
              s = this.start,
              r = this.startLoc;
            if (
              this.isContextual('await') &&
              (this.inAsync ||
                (!this.inFunction && this.options.allowAwaitOutsideFunction))
            )
              (i = this.parseAwait()), (e = !0);
            else if (this.type.prefix) {
              var a = this.startNode(),
                n = this.type === y.incDec;
              (a.operator = this.value),
                (a.prefix = !0),
                this.next(),
                (a.argument = this.parseMaybeUnary(null, !0)),
                this.checkExpressionErrors(t, !0),
                n
                  ? this.checkLVal(a.argument)
                  : this.strict &&
                    'delete' === a.operator &&
                    'Identifier' === a.argument.type
                  ? this.raiseRecoverable(
                      a.start,
                      'Deleting local variable in strict mode',
                    )
                  : (e = !0),
                (i = this.finishNode(
                  a,
                  n ? 'UpdateExpression' : 'UnaryExpression',
                ));
            } else {
              if (
                ((i = this.parseExprSubscripts(t)),
                this.checkExpressionErrors(t))
              )
                return i;
              for (; this.type.postfix && !this.canInsertSemicolon(); ) {
                var o = this.startNodeAt(s, r);
                (o.operator = this.value),
                  (o.prefix = !1),
                  (o.argument = i),
                  this.checkLVal(i),
                  this.next(),
                  (i = this.finishNode(o, 'UpdateExpression'));
              }
            }
            return !e && this.eat(y.starstar)
              ? this.buildBinary(
                  s,
                  r,
                  i,
                  this.parseMaybeUnary(null, !1),
                  '**',
                  !1,
                )
              : i;
          }),
          (lt.parseExprSubscripts = function (t) {
            var e = this.start,
              i = this.startLoc,
              s = this.parseExprAtom(t);
            if (
              'ArrowFunctionExpression' === s.type &&
              ')' !== this.input.slice(this.lastTokStart, this.lastTokEnd)
            )
              return s;
            var r = this.parseSubscripts(s, e, i);
            return (
              t &&
                'MemberExpression' === r.type &&
                (t.parenthesizedAssign >= r.start &&
                  (t.parenthesizedAssign = -1),
                t.parenthesizedBind >= r.start && (t.parenthesizedBind = -1)),
              r
            );
          }),
          (lt.parseSubscripts = function (t, e, i, s) {
            for (
              var r =
                this.options.ecmaVersion >= 8 &&
                'Identifier' === t.type &&
                'async' === t.name &&
                this.lastTokEnd === t.end &&
                !this.canInsertSemicolon() &&
                'async' === this.input.slice(t.start, t.end);
              ;

            ) {
              var a = this.parseSubscript(t, e, i, s, r);
              if (a === t || 'ArrowFunctionExpression' === a.type) return a;
              t = a;
            }
          }),
          (lt.parseSubscript = function (t, e, i, s, r) {
            var a = this.eat(y.bracketL);
            if (a || this.eat(y.dot)) {
              var n = this.startNodeAt(e, i);
              (n.object = t),
                (n.property = a
                  ? this.parseExpression()
                  : this.parseIdent('never' !== this.options.allowReserved)),
                (n.computed = !!a),
                a && this.expect(y.bracketR),
                (t = this.finishNode(n, 'MemberExpression'));
            } else if (!s && this.eat(y.parenL)) {
              var o = new st(),
                h = this.yieldPos,
                p = this.awaitPos,
                c = this.awaitIdentPos;
              (this.yieldPos = 0),
                (this.awaitPos = 0),
                (this.awaitIdentPos = 0);
              var u = this.parseExprList(
                y.parenR,
                this.options.ecmaVersion >= 8,
                !1,
                o,
              );
              if (r && !this.canInsertSemicolon() && this.eat(y.arrow))
                return (
                  this.checkPatternErrors(o, !1),
                  this.checkYieldAwaitInDefaultParams(),
                  this.awaitIdentPos > 0 &&
                    this.raise(
                      this.awaitIdentPos,
                      "Cannot use 'await' as identifier inside an async function",
                    ),
                  (this.yieldPos = h),
                  (this.awaitPos = p),
                  (this.awaitIdentPos = c),
                  this.parseArrowExpression(this.startNodeAt(e, i), u, !0)
                );
              this.checkExpressionErrors(o, !0),
                (this.yieldPos = h || this.yieldPos),
                (this.awaitPos = p || this.awaitPos),
                (this.awaitIdentPos = c || this.awaitIdentPos);
              var l = this.startNodeAt(e, i);
              (l.callee = t),
                (l.arguments = u),
                (t = this.finishNode(l, 'CallExpression'));
            } else if (this.type === y.backQuote) {
              var d = this.startNodeAt(e, i);
              (d.tag = t),
                (d.quasi = this.parseTemplate({ isTagged: !0 })),
                (t = this.finishNode(d, 'TaggedTemplateExpression'));
            }
            return t;
          }),
          (lt.parseExprAtom = function (t) {
            this.type === y.slash && this.readRegexp();
            var e,
              i = this.potentialArrowAt === this.start;
            switch (this.type) {
              case y._super:
                return (
                  this.allowSuper ||
                    this.raise(this.start, "'super' keyword outside a method"),
                  (e = this.startNode()),
                  this.next(),
                  this.type !== y.parenL ||
                    this.allowDirectSuper ||
                    this.raise(
                      e.start,
                      'super() call outside constructor of a subclass',
                    ),
                  this.type !== y.dot &&
                    this.type !== y.bracketL &&
                    this.type !== y.parenL &&
                    this.unexpected(),
                  this.finishNode(e, 'Super')
                );
              case y._this:
                return (
                  (e = this.startNode()),
                  this.next(),
                  this.finishNode(e, 'ThisExpression')
                );
              case y.name:
                var s = this.start,
                  r = this.startLoc,
                  a = this.containsEsc,
                  n = this.parseIdent(!1);
                if (
                  this.options.ecmaVersion >= 8 &&
                  !a &&
                  'async' === n.name &&
                  !this.canInsertSemicolon() &&
                  this.eat(y._function)
                )
                  return this.parseFunction(this.startNodeAt(s, r), 0, !1, !0);
                if (i && !this.canInsertSemicolon()) {
                  if (this.eat(y.arrow))
                    return this.parseArrowExpression(
                      this.startNodeAt(s, r),
                      [n],
                      !1,
                    );
                  if (
                    this.options.ecmaVersion >= 8 &&
                    'async' === n.name &&
                    this.type === y.name &&
                    !a
                  )
                    return (
                      (n = this.parseIdent(!1)),
                      (!this.canInsertSemicolon() && this.eat(y.arrow)) ||
                        this.unexpected(),
                      this.parseArrowExpression(this.startNodeAt(s, r), [n], !0)
                    );
                }
                return n;
              case y.regexp:
                var o = this.value;
                return (
                  ((e = this.parseLiteral(o.value)).regex = {
                    pattern: o.pattern,
                    flags: o.flags,
                  }),
                  e
                );
              case y.num:
              case y.string:
                return this.parseLiteral(this.value);
              case y._null:
              case y._true:
              case y._false:
                return (
                  ((e = this.startNode()).value =
                    this.type === y._null ? null : this.type === y._true),
                  (e.raw = this.type.keyword),
                  this.next(),
                  this.finishNode(e, 'Literal')
                );
              case y.parenL:
                var h = this.start,
                  p = this.parseParenAndDistinguishExpression(i);
                return (
                  t &&
                    (t.parenthesizedAssign < 0 &&
                      !this.isSimpleAssignTarget(p) &&
                      (t.parenthesizedAssign = h),
                    t.parenthesizedBind < 0 && (t.parenthesizedBind = h)),
                  p
                );
              case y.bracketL:
                return (
                  (e = this.startNode()),
                  this.next(),
                  (e.elements = this.parseExprList(y.bracketR, !0, !0, t)),
                  this.finishNode(e, 'ArrayExpression')
                );
              case y.braceL:
                return this.parseObj(!1, t);
              case y._function:
                return (
                  (e = this.startNode()), this.next(), this.parseFunction(e, 0)
                );
              case y._class:
                return this.parseClass(this.startNode(), !1);
              case y._new:
                return this.parseNew();
              case y.backQuote:
                return this.parseTemplate();
              case y._import:
                return this.options.ecmaVersion >= 11
                  ? this.parseExprImport()
                  : this.unexpected();
              default:
                this.unexpected();
            }
          }),
          (lt.parseExprImport = function () {
            var t = this.startNode();
            switch ((this.next(), this.type)) {
              case y.parenL:
                return this.parseDynamicImport(t);
              default:
                this.unexpected();
            }
          }),
          (lt.parseDynamicImport = function (t) {
            if (
              (this.next(),
              (t.source = this.parseMaybeAssign()),
              !this.eat(y.parenR))
            ) {
              var e = this.start;
              this.eat(y.comma) && this.eat(y.parenR)
                ? this.raiseRecoverable(
                    e,
                    'Trailing comma is not allowed in import()',
                  )
                : this.unexpected(e);
            }
            return this.finishNode(t, 'ImportExpression');
          }),
          (lt.parseLiteral = function (t) {
            var e = this.startNode();
            return (
              (e.value = t),
              (e.raw = this.input.slice(this.start, this.end)),
              110 === e.raw.charCodeAt(e.raw.length - 1) &&
                (e.bigint = e.raw.slice(0, -1)),
              this.next(),
              this.finishNode(e, 'Literal')
            );
          }),
          (lt.parseParenExpression = function () {
            this.expect(y.parenL);
            var t = this.parseExpression();
            return this.expect(y.parenR), t;
          }),
          (lt.parseParenAndDistinguishExpression = function (t) {
            var e,
              i = this.start,
              s = this.startLoc,
              r = this.options.ecmaVersion >= 8;
            if (this.options.ecmaVersion >= 6) {
              this.next();
              var a,
                n = this.start,
                o = this.startLoc,
                h = [],
                p = !0,
                c = !1,
                u = new st(),
                l = this.yieldPos,
                d = this.awaitPos;
              for (
                this.yieldPos = 0, this.awaitPos = 0;
                this.type !== y.parenR;

              ) {
                if (
                  (p ? (p = !1) : this.expect(y.comma),
                  r && this.afterTrailingComma(y.parenR, !0))
                ) {
                  c = !0;
                  break;
                }
                if (this.type === y.ellipsis) {
                  (a = this.start),
                    h.push(this.parseParenItem(this.parseRestBinding())),
                    this.type === y.comma &&
                      this.raise(
                        this.start,
                        'Comma is not permitted after the rest element',
                      );
                  break;
                }
                h.push(this.parseMaybeAssign(!1, u, this.parseParenItem));
              }
              var f = this.start,
                m = this.startLoc;
              if (
                (this.expect(y.parenR),
                t && !this.canInsertSemicolon() && this.eat(y.arrow))
              )
                return (
                  this.checkPatternErrors(u, !1),
                  this.checkYieldAwaitInDefaultParams(),
                  (this.yieldPos = l),
                  (this.awaitPos = d),
                  this.parseParenArrowList(i, s, h)
                );
              (h.length && !c) || this.unexpected(this.lastTokStart),
                a && this.unexpected(a),
                this.checkExpressionErrors(u, !0),
                (this.yieldPos = l || this.yieldPos),
                (this.awaitPos = d || this.awaitPos),
                h.length > 1
                  ? (((e = this.startNodeAt(n, o)).expressions = h),
                    this.finishNodeAt(e, 'SequenceExpression', f, m))
                  : (e = h[0]);
            } else e = this.parseParenExpression();
            if (this.options.preserveParens) {
              var x = this.startNodeAt(i, s);
              return (
                (x.expression = e),
                this.finishNode(x, 'ParenthesizedExpression')
              );
            }
            return e;
          }),
          (lt.parseParenItem = function (t) {
            return t;
          }),
          (lt.parseParenArrowList = function (t, e, i) {
            return this.parseArrowExpression(this.startNodeAt(t, e), i);
          });
        var dt = [];
        (lt.parseNew = function () {
          this.containsEsc &&
            this.raiseRecoverable(this.start, 'Escape sequence in keyword new');
          var t = this.startNode(),
            e = this.parseIdent(!0);
          if (this.options.ecmaVersion >= 6 && this.eat(y.dot)) {
            t.meta = e;
            var i = this.containsEsc;
            return (
              (t.property = this.parseIdent(!0)),
              ('target' !== t.property.name || i) &&
                this.raiseRecoverable(
                  t.property.start,
                  'The only valid meta property for new is new.target',
                ),
              this.inNonArrowFunction() ||
                this.raiseRecoverable(
                  t.start,
                  'new.target can only be used in functions',
                ),
              this.finishNode(t, 'MetaProperty')
            );
          }
          var s = this.start,
            r = this.startLoc,
            a = this.type === y._import;
          return (
            (t.callee = this.parseSubscripts(this.parseExprAtom(), s, r, !0)),
            a &&
              'ImportExpression' === t.callee.type &&
              this.raise(s, 'Cannot use new with import()'),
            this.eat(y.parenL)
              ? (t.arguments = this.parseExprList(
                  y.parenR,
                  this.options.ecmaVersion >= 8,
                  !1,
                ))
              : (t.arguments = dt),
            this.finishNode(t, 'NewExpression')
          );
        }),
          (lt.parseTemplateElement = function (t) {
            var e = t.isTagged,
              i = this.startNode();
            return (
              this.type === y.invalidTemplate
                ? (e ||
                    this.raiseRecoverable(
                      this.start,
                      'Bad escape sequence in untagged template literal',
                    ),
                  (i.value = { raw: this.value, cooked: null }))
                : (i.value = {
                    raw: this.input
                      .slice(this.start, this.end)
                      .replace(/\r\n?/g, '\n'),
                    cooked: this.value,
                  }),
              this.next(),
              (i.tail = this.type === y.backQuote),
              this.finishNode(i, 'TemplateElement')
            );
          }),
          (lt.parseTemplate = function (t) {
            void 0 === t && (t = {});
            var e = t.isTagged;
            void 0 === e && (e = !1);
            var i = this.startNode();
            this.next(), (i.expressions = []);
            var s = this.parseTemplateElement({ isTagged: e });
            for (i.quasis = [s]; !s.tail; )
              this.type === y.eof &&
                this.raise(this.pos, 'Unterminated template literal'),
                this.expect(y.dollarBraceL),
                i.expressions.push(this.parseExpression()),
                this.expect(y.braceR),
                i.quasis.push((s = this.parseTemplateElement({ isTagged: e })));
            return this.next(), this.finishNode(i, 'TemplateLiteral');
          }),
          (lt.isAsyncProp = function (t) {
            return (
              !t.computed &&
              'Identifier' === t.key.type &&
              'async' === t.key.name &&
              (this.type === y.name ||
                this.type === y.num ||
                this.type === y.string ||
                this.type === y.bracketL ||
                this.type.keyword ||
                (this.options.ecmaVersion >= 9 && this.type === y.star)) &&
              !k.test(this.input.slice(this.lastTokEnd, this.start))
            );
          }),
          (lt.parseObj = function (t, e) {
            var i = this.startNode(),
              s = !0,
              r = {};
            for (i.properties = [], this.next(); !this.eat(y.braceR); ) {
              if (s) s = !1;
              else if (
                (this.expect(y.comma),
                this.options.ecmaVersion >= 5 &&
                  this.afterTrailingComma(y.braceR))
              )
                break;
              var a = this.parseProperty(t, e);
              t || this.checkPropClash(a, r, e), i.properties.push(a);
            }
            return this.finishNode(i, t ? 'ObjectPattern' : 'ObjectExpression');
          }),
          (lt.parseProperty = function (t, e) {
            var i,
              s,
              r,
              a,
              n = this.startNode();
            if (this.options.ecmaVersion >= 9 && this.eat(y.ellipsis))
              return t
                ? ((n.argument = this.parseIdent(!1)),
                  this.type === y.comma &&
                    this.raise(
                      this.start,
                      'Comma is not permitted after the rest element',
                    ),
                  this.finishNode(n, 'RestElement'))
                : (this.type === y.parenL &&
                    e &&
                    (e.parenthesizedAssign < 0 &&
                      (e.parenthesizedAssign = this.start),
                    e.parenthesizedBind < 0 &&
                      (e.parenthesizedBind = this.start)),
                  (n.argument = this.parseMaybeAssign(!1, e)),
                  this.type === y.comma &&
                    e &&
                    e.trailingComma < 0 &&
                    (e.trailingComma = this.start),
                  this.finishNode(n, 'SpreadElement'));
            this.options.ecmaVersion >= 6 &&
              ((n.method = !1),
              (n.shorthand = !1),
              (t || e) && ((r = this.start), (a = this.startLoc)),
              t || (i = this.eat(y.star)));
            var o = this.containsEsc;
            return (
              this.parsePropertyName(n),
              !t &&
              !o &&
              this.options.ecmaVersion >= 8 &&
              !i &&
              this.isAsyncProp(n)
                ? ((s = !0),
                  (i = this.options.ecmaVersion >= 9 && this.eat(y.star)),
                  this.parsePropertyName(n, e))
                : (s = !1),
              this.parsePropertyValue(n, t, i, s, r, a, e, o),
              this.finishNode(n, 'Property')
            );
          }),
          (lt.parsePropertyValue = function (t, e, i, s, r, a, n, o) {
            if (
              ((i || s) && this.type === y.colon && this.unexpected(),
              this.eat(y.colon))
            )
              (t.value = e
                ? this.parseMaybeDefault(this.start, this.startLoc)
                : this.parseMaybeAssign(!1, n)),
                (t.kind = 'init');
            else if (this.options.ecmaVersion >= 6 && this.type === y.parenL)
              e && this.unexpected(),
                (t.kind = 'init'),
                (t.method = !0),
                (t.value = this.parseMethod(i, s));
            else if (
              e ||
              o ||
              !(this.options.ecmaVersion >= 5) ||
              t.computed ||
              'Identifier' !== t.key.type ||
              ('get' !== t.key.name && 'set' !== t.key.name) ||
              this.type === y.comma ||
              this.type === y.braceR
            )
              this.options.ecmaVersion >= 6 &&
              !t.computed &&
              'Identifier' === t.key.type
                ? ((i || s) && this.unexpected(),
                  this.checkUnreserved(t.key),
                  'await' !== t.key.name ||
                    this.awaitIdentPos ||
                    (this.awaitIdentPos = r),
                  (t.kind = 'init'),
                  e
                    ? (t.value = this.parseMaybeDefault(r, a, t.key))
                    : this.type === y.eq && n
                    ? (n.shorthandAssign < 0 &&
                        (n.shorthandAssign = this.start),
                      (t.value = this.parseMaybeDefault(r, a, t.key)))
                    : (t.value = t.key),
                  (t.shorthand = !0))
                : this.unexpected();
            else {
              (i || s) && this.unexpected(),
                (t.kind = t.key.name),
                this.parsePropertyName(t),
                (t.value = this.parseMethod(!1));
              var h = 'get' === t.kind ? 0 : 1;
              if (t.value.params.length !== h) {
                var p = t.value.start;
                'get' === t.kind
                  ? this.raiseRecoverable(p, 'getter should have no params')
                  : this.raiseRecoverable(
                      p,
                      'setter should have exactly one param',
                    );
              } else
                'set' === t.kind &&
                  'RestElement' === t.value.params[0].type &&
                  this.raiseRecoverable(
                    t.value.params[0].start,
                    'Setter cannot use rest params',
                  );
            }
          }),
          (lt.parsePropertyName = function (t) {
            if (this.options.ecmaVersion >= 6) {
              if (this.eat(y.bracketL))
                return (
                  (t.computed = !0),
                  (t.key = this.parseMaybeAssign()),
                  this.expect(y.bracketR),
                  t.key
                );
              t.computed = !1;
            }
            return (t.key =
              this.type === y.num || this.type === y.string
                ? this.parseExprAtom()
                : this.parseIdent('never' !== this.options.allowReserved));
          }),
          (lt.initFunction = function (t) {
            (t.id = null),
              this.options.ecmaVersion >= 6 &&
                (t.generator = t.expression = !1),
              this.options.ecmaVersion >= 8 && (t.async = !1);
          }),
          (lt.parseMethod = function (t, e, i) {
            var s = this.startNode(),
              r = this.yieldPos,
              a = this.awaitPos,
              n = this.awaitIdentPos;
            return (
              this.initFunction(s),
              this.options.ecmaVersion >= 6 && (s.generator = t),
              this.options.ecmaVersion >= 8 && (s.async = !!e),
              (this.yieldPos = 0),
              (this.awaitPos = 0),
              (this.awaitIdentPos = 0),
              this.enterScope(z(e, s.generator) | j | (i ? W : 0)),
              this.expect(y.parenL),
              (s.params = this.parseBindingList(
                y.parenR,
                !1,
                this.options.ecmaVersion >= 8,
              )),
              this.checkYieldAwaitInDefaultParams(),
              this.parseFunctionBody(s, !1, !0),
              (this.yieldPos = r),
              (this.awaitPos = a),
              (this.awaitIdentPos = n),
              this.finishNode(s, 'FunctionExpression')
            );
          }),
          (lt.parseArrowExpression = function (t, e, i) {
            var s = this.yieldPos,
              r = this.awaitPos,
              a = this.awaitIdentPos;
            return (
              this.enterScope(z(i, !1) | G),
              this.initFunction(t),
              this.options.ecmaVersion >= 8 && (t.async = !!i),
              (this.yieldPos = 0),
              (this.awaitPos = 0),
              (this.awaitIdentPos = 0),
              (t.params = this.toAssignableList(e, !0)),
              this.parseFunctionBody(t, !0, !1),
              (this.yieldPos = s),
              (this.awaitPos = r),
              (this.awaitIdentPos = a),
              this.finishNode(t, 'ArrowFunctionExpression')
            );
          }),
          (lt.parseFunctionBody = function (t, e, i) {
            var s = e && this.type !== y.braceL,
              r = this.strict,
              a = !1;
            if (s)
              (t.body = this.parseMaybeAssign()),
                (t.expression = !0),
                this.checkParams(t, !1);
            else {
              var n =
                this.options.ecmaVersion >= 7 &&
                !this.isSimpleParamList(t.params);
              (r && !n) ||
                ((a = this.strictDirective(this.end)) &&
                  n &&
                  this.raiseRecoverable(
                    t.start,
                    "Illegal 'use strict' directive in function with non-simple parameter list",
                  ));
              var o = this.labels;
              (this.labels = []),
                a && (this.strict = !0),
                this.checkParams(
                  t,
                  !r && !a && !e && !i && this.isSimpleParamList(t.params),
                ),
                (t.body = this.parseBlock(!1)),
                (t.expression = !1),
                this.adaptDirectivePrologue(t.body.body),
                (this.labels = o);
            }
            this.exitScope(),
              this.strict && t.id && this.checkLVal(t.id, $),
              (this.strict = r);
          }),
          (lt.isSimpleParamList = function (t) {
            for (var e = 0, i = t; e < i.length; e += 1) {
              if ('Identifier' !== i[e].type) return !1;
            }
            return !0;
          }),
          (lt.checkParams = function (t, e) {
            for (var i = {}, s = 0, r = t.params; s < r.length; s += 1) {
              var a = r[s];
              this.checkLVal(a, K, e ? null : i);
            }
          }),
          (lt.parseExprList = function (t, e, i, s) {
            for (var r = [], a = !0; !this.eat(t); ) {
              if (a) a = !1;
              else if ((this.expect(y.comma), e && this.afterTrailingComma(t)))
                break;
              var n = void 0;
              i && this.type === y.comma
                ? (n = null)
                : this.type === y.ellipsis
                ? ((n = this.parseSpread(s)),
                  s &&
                    this.type === y.comma &&
                    s.trailingComma < 0 &&
                    (s.trailingComma = this.start))
                : (n = this.parseMaybeAssign(!1, s)),
                r.push(n);
            }
            return r;
          }),
          (lt.checkUnreserved = function (t) {
            var e = t.start,
              i = t.end,
              s = t.name;
            (this.inGenerator &&
              'yield' === s &&
              this.raiseRecoverable(
                e,
                "Cannot use 'yield' as identifier inside a generator",
              ),
            this.inAsync &&
              'await' === s &&
              this.raiseRecoverable(
                e,
                "Cannot use 'await' as identifier inside an async function",
              ),
            this.keywords.test(s) &&
              this.raise(e, "Unexpected keyword '" + s + "'"),
            this.options.ecmaVersion < 6 &&
              -1 !== this.input.slice(e, i).indexOf('\\')) ||
              ((this.strict
                ? this.reservedWordsStrict
                : this.reservedWords
              ).test(s) &&
                (this.inAsync ||
                  'await' !== s ||
                  this.raiseRecoverable(
                    e,
                    "Cannot use keyword 'await' outside an async function",
                  ),
                this.raiseRecoverable(
                  e,
                  "The keyword '" + s + "' is reserved",
                )));
          }),
          (lt.parseIdent = function (t, e) {
            var i = this.startNode();
            return (
              this.type === y.name
                ? (i.name = this.value)
                : this.type.keyword
                ? ((i.name = this.type.keyword),
                  ('class' !== i.name && 'function' !== i.name) ||
                    (this.lastTokEnd === this.lastTokStart + 1 &&
                      46 === this.input.charCodeAt(this.lastTokStart)) ||
                    this.context.pop())
                : this.unexpected(),
              this.next(!!t),
              this.finishNode(i, 'Identifier'),
              t ||
                (this.checkUnreserved(i),
                'await' !== i.name ||
                  this.awaitIdentPos ||
                  (this.awaitIdentPos = i.start)),
              i
            );
          }),
          (lt.parseYield = function (t) {
            this.yieldPos || (this.yieldPos = this.start);
            var e = this.startNode();
            return (
              this.next(),
              this.type === y.semi ||
              this.canInsertSemicolon() ||
              (this.type !== y.star && !this.type.startsExpr)
                ? ((e.delegate = !1), (e.argument = null))
                : ((e.delegate = this.eat(y.star)),
                  (e.argument = this.parseMaybeAssign(t))),
              this.finishNode(e, 'YieldExpression')
            );
          }),
          (lt.parseAwait = function () {
            this.awaitPos || (this.awaitPos = this.start);
            var t = this.startNode();
            return (
              this.next(),
              (t.argument = this.parseMaybeUnary(null, !1)),
              this.finishNode(t, 'AwaitExpression')
            );
          });
        var ft = J.prototype;
        (ft.raise = function (t, e) {
          var i = N(this.input, t);
          e += ' (' + i.line + ':' + i.column + ')';
          var s = new SyntaxError(e);
          throw ((s.pos = t), (s.loc = i), (s.raisedAt = this.pos), s);
        }),
          (ft.raiseRecoverable = ft.raise),
          (ft.curPosition = function () {
            if (this.options.locations)
              return new L(this.curLine, this.pos - this.lineStart);
          });
        var mt = J.prototype,
          xt = function (t) {
            (this.flags = t),
              (this.var = []),
              (this.lexical = []),
              (this.functions = []);
          };
        (mt.enterScope = function (t) {
          this.scopeStack.push(new xt(t));
        }),
          (mt.exitScope = function () {
            this.scopeStack.pop();
          }),
          (mt.treatFunctionsAsVarInScope = function (t) {
            return t.flags & D || (!this.inModule && t.flags & M);
          }),
          (mt.declareName = function (t, e, i) {
            var s = !1;
            if (e === X) {
              var r = this.currentScope();
              (s =
                r.lexical.indexOf(t) > -1 ||
                r.functions.indexOf(t) > -1 ||
                r.var.indexOf(t) > -1),
                r.lexical.push(t),
                this.inModule && r.flags & M && delete this.undefinedExports[t];
            } else if (e === Z) {
              this.currentScope().lexical.push(t);
            } else if (e === Y) {
              var a = this.currentScope();
              (s = this.treatFunctionsAsVar
                ? a.lexical.indexOf(t) > -1
                : a.lexical.indexOf(t) > -1 || a.var.indexOf(t) > -1),
                a.functions.push(t);
            } else
              for (var n = this.scopeStack.length - 1; n >= 0; --n) {
                var o = this.scopeStack[n];
                if (
                  (o.lexical.indexOf(t) > -1 &&
                    !(o.flags & H && o.lexical[0] === t)) ||
                  (!this.treatFunctionsAsVarInScope(o) &&
                    o.functions.indexOf(t) > -1)
                ) {
                  s = !0;
                  break;
                }
                if (
                  (o.var.push(t),
                  this.inModule &&
                    o.flags & M &&
                    delete this.undefinedExports[t],
                  o.flags & F)
                )
                  break;
              }
            s &&
              this.raiseRecoverable(
                i,
                "Identifier '" + t + "' has already been declared",
              );
          }),
          (mt.checkLocalExport = function (t) {
            -1 === this.scopeStack[0].lexical.indexOf(t.name) &&
              -1 === this.scopeStack[0].var.indexOf(t.name) &&
              (this.undefinedExports[t.name] = t);
          }),
          (mt.currentScope = function () {
            return this.scopeStack[this.scopeStack.length - 1];
          }),
          (mt.currentVarScope = function () {
            for (var t = this.scopeStack.length - 1; ; t--) {
              var e = this.scopeStack[t];
              if (e.flags & F) return e;
            }
          }),
          (mt.currentThisScope = function () {
            for (var t = this.scopeStack.length - 1; ; t--) {
              var e = this.scopeStack[t];
              if (e.flags & F && !(e.flags & G)) return e;
            }
          });
        var gt = function (t, e, i) {
          (this.type = ''),
            (this.start = e),
            (this.end = 0),
            t.options.locations && (this.loc = new V(t, i)),
            t.options.directSourceFile &&
              (this.sourceFile = t.options.directSourceFile),
            t.options.ranges && (this.range = [e, 0]);
        };
        exports.Node = gt;
        var vt = J.prototype;
        function yt(t, e, i, s) {
          return (
            (t.type = e),
            (t.end = i),
            this.options.locations && (t.loc.end = s),
            this.options.ranges && (t.range[1] = i),
            t
          );
        }
        (vt.startNode = function () {
          return new gt(this, this.start, this.startLoc);
        }),
          (vt.startNodeAt = function (t, e) {
            return new gt(this, t, e);
          }),
          (vt.finishNode = function (t, e) {
            return yt.call(this, t, e, this.lastTokEnd, this.lastTokEndLoc);
          }),
          (vt.finishNodeAt = function (t, e, i, s) {
            return yt.call(this, t, e, i, s);
          });
        var kt = function (t, e, i, s, r) {
          (this.token = t),
            (this.isExpr = !!e),
            (this.preserveSpace = !!i),
            (this.override = s),
            (this.generator = !!r);
        };
        exports.TokContext = kt;
        var _t = {
          b_stat: new kt('{', !1),
          b_expr: new kt('{', !0),
          b_tmpl: new kt('${', !1),
          p_stat: new kt('(', !1),
          p_expr: new kt('(', !0),
          q_tmpl: new kt('`', !0, !0, function (t) {
            return t.tryReadTemplateToken();
          }),
          f_stat: new kt('function', !1),
          f_expr: new kt('function', !0),
          f_expr_gen: new kt('function', !0, !1, null, !0),
          f_gen: new kt('function', !1, !1, null, !0),
        };
        exports.tokContexts = _t;
        var bt = J.prototype;
        (bt.initialContext = function () {
          return [_t.b_stat];
        }),
          (bt.braceIsBlock = function (t) {
            var e = this.curContext();
            return (
              e === _t.f_expr ||
              e === _t.f_stat ||
              (t !== y.colon || (e !== _t.b_stat && e !== _t.b_expr)
                ? t === y._return || (t === y.name && this.exprAllowed)
                  ? k.test(this.input.slice(this.lastTokEnd, this.start))
                  : t === y._else ||
                    t === y.semi ||
                    t === y.eof ||
                    t === y.parenR ||
                    t === y.arrow ||
                    (t === y.braceL
                      ? e === _t.b_stat
                      : t !== y._var &&
                        t !== y._const &&
                        t !== y.name &&
                        !this.exprAllowed)
                : !e.isExpr)
            );
          }),
          (bt.inGeneratorContext = function () {
            for (var t = this.context.length - 1; t >= 1; t--) {
              var e = this.context[t];
              if ('function' === e.token) return e.generator;
            }
            return !1;
          }),
          (bt.updateContext = function (t) {
            var e,
              i = this.type;
            i.keyword && t === y.dot
              ? (this.exprAllowed = !1)
              : (e = i.updateContext)
              ? e.call(this, t)
              : (this.exprAllowed = i.beforeExpr);
          }),
          (y.parenR.updateContext = y.braceR.updateContext = function () {
            if (1 !== this.context.length) {
              var t = this.context.pop();
              t === _t.b_stat &&
                'function' === this.curContext().token &&
                (t = this.context.pop()),
                (this.exprAllowed = !t.isExpr);
            } else this.exprAllowed = !0;
          }),
          (y.braceL.updateContext = function (t) {
            this.context.push(this.braceIsBlock(t) ? _t.b_stat : _t.b_expr),
              (this.exprAllowed = !0);
          }),
          (y.dollarBraceL.updateContext = function () {
            this.context.push(_t.b_tmpl), (this.exprAllowed = !0);
          }),
          (y.parenL.updateContext = function (t) {
            var e =
              t === y._if || t === y._for || t === y._with || t === y._while;
            this.context.push(e ? _t.p_stat : _t.p_expr),
              (this.exprAllowed = !0);
          }),
          (y.incDec.updateContext = function () {}),
          (y._function.updateContext = y._class.updateContext = function (t) {
            !t.beforeExpr ||
            t === y.semi ||
            t === y._else ||
            (t === y._return &&
              k.test(this.input.slice(this.lastTokEnd, this.start))) ||
            ((t === y.colon || t === y.braceL) &&
              this.curContext() === _t.b_stat)
              ? this.context.push(_t.f_stat)
              : this.context.push(_t.f_expr),
              (this.exprAllowed = !1);
          }),
          (y.backQuote.updateContext = function () {
            this.curContext() === _t.q_tmpl
              ? this.context.pop()
              : this.context.push(_t.q_tmpl),
              (this.exprAllowed = !1);
          }),
          (y.star.updateContext = function (t) {
            if (t === y._function) {
              var e = this.context.length - 1;
              this.context[e] === _t.f_expr
                ? (this.context[e] = _t.f_expr_gen)
                : (this.context[e] = _t.f_gen);
            }
            this.exprAllowed = !0;
          }),
          (y.name.updateContext = function (t) {
            var e = !1;
            this.options.ecmaVersion >= 6 &&
              t !== y.dot &&
              (('of' === this.value && !this.exprAllowed) ||
                ('yield' === this.value && this.inGeneratorContext())) &&
              (e = !0),
              (this.exprAllowed = e);
          });
        var St =
            'ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS',
          wt = St + ' Extended_Pictographic',
          Ct = wt,
          Et = { 9: St, 10: wt, 11: Ct },
          At =
            'Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu',
          It =
            'Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb',
          Pt =
            It +
            ' Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd',
          Tt =
            Pt +
            ' Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho',
          Lt = { 9: It, 10: Pt, 11: Tt },
          Vt = {};
        function Nt(t) {
          var e = (Vt[t] = {
            binary: T(Et[t] + ' ' + At),
            nonBinary: { General_Category: T(At), Script: T(Lt[t]) },
          });
          (e.nonBinary.Script_Extensions = e.nonBinary.Script),
            (e.nonBinary.gc = e.nonBinary.General_Category),
            (e.nonBinary.sc = e.nonBinary.Script),
            (e.nonBinary.scx = e.nonBinary.Script_Extensions);
        }
        Nt(9), Nt(10), Nt(11);
        var Rt = J.prototype,
          Bt = function (t) {
            (this.parser = t),
              (this.validFlags =
                'gim' +
                (t.options.ecmaVersion >= 6 ? 'uy' : '') +
                (t.options.ecmaVersion >= 9 ? 's' : '')),
              (this.unicodeProperties =
                Vt[t.options.ecmaVersion >= 11 ? 11 : t.options.ecmaVersion]),
              (this.source = ''),
              (this.flags = ''),
              (this.start = 0),
              (this.switchU = !1),
              (this.switchN = !1),
              (this.pos = 0),
              (this.lastIntValue = 0),
              (this.lastStringValue = ''),
              (this.lastAssertionIsQuantifiable = !1),
              (this.numCapturingParens = 0),
              (this.maxBackReference = 0),
              (this.groupNames = []),
              (this.backReferenceNames = []);
          };
        function Ot(t) {
          return t <= 65535
            ? String.fromCharCode(t)
            : ((t -= 65536),
              String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)));
        }
        function Mt(t) {
          return (
            36 === t ||
            (t >= 40 && t <= 43) ||
            46 === t ||
            63 === t ||
            (t >= 91 && t <= 94) ||
            (t >= 123 && t <= 125)
          );
        }
        function Dt(t) {
          return u(t, !0) || 36 === t || 95 === t;
        }
        function Ft(t) {
          return l(t, !0) || 36 === t || 95 === t || 8204 === t || 8205 === t;
        }
        function Ut(t) {
          return (t >= 65 && t <= 90) || (t >= 97 && t <= 122);
        }
        function qt(t) {
          return t >= 0 && t <= 1114111;
        }
        function Gt(t) {
          return (
            100 === t ||
            68 === t ||
            115 === t ||
            83 === t ||
            119 === t ||
            87 === t
          );
        }
        function Ht(t) {
          return Ut(t) || 95 === t;
        }
        function jt(t) {
          return Ht(t) || Wt(t);
        }
        function Wt(t) {
          return t >= 48 && t <= 57;
        }
        function zt(t) {
          return (
            (t >= 48 && t <= 57) ||
            (t >= 65 && t <= 70) ||
            (t >= 97 && t <= 102)
          );
        }
        function Qt(t) {
          return t >= 65 && t <= 70
            ? t - 65 + 10
            : t >= 97 && t <= 102
            ? t - 97 + 10
            : t - 48;
        }
        function Kt(t) {
          return t >= 48 && t <= 55;
        }
        (Bt.prototype.reset = function (t, e, i) {
          var s = -1 !== i.indexOf('u');
          (this.start = 0 | t),
            (this.source = e + ''),
            (this.flags = i),
            (this.switchU = s && this.parser.options.ecmaVersion >= 6),
            (this.switchN = s && this.parser.options.ecmaVersion >= 9);
        }),
          (Bt.prototype.raise = function (t) {
            this.parser.raiseRecoverable(
              this.start,
              'Invalid regular expression: /' + this.source + '/: ' + t,
            );
          }),
          (Bt.prototype.at = function (t) {
            var e = this.source,
              i = e.length;
            if (t >= i) return -1;
            var s = e.charCodeAt(t);
            if (!this.switchU || s <= 55295 || s >= 57344 || t + 1 >= i)
              return s;
            var r = e.charCodeAt(t + 1);
            return r >= 56320 && r <= 57343 ? (s << 10) + r - 56613888 : s;
          }),
          (Bt.prototype.nextIndex = function (t) {
            var e = this.source,
              i = e.length;
            if (t >= i) return i;
            var s,
              r = e.charCodeAt(t);
            return !this.switchU ||
              r <= 55295 ||
              r >= 57344 ||
              t + 1 >= i ||
              (s = e.charCodeAt(t + 1)) < 56320 ||
              s > 57343
              ? t + 1
              : t + 2;
          }),
          (Bt.prototype.current = function () {
            return this.at(this.pos);
          }),
          (Bt.prototype.lookahead = function () {
            return this.at(this.nextIndex(this.pos));
          }),
          (Bt.prototype.advance = function () {
            this.pos = this.nextIndex(this.pos);
          }),
          (Bt.prototype.eat = function (t) {
            return this.current() === t && (this.advance(), !0);
          }),
          (Rt.validateRegExpFlags = function (t) {
            for (var e = t.validFlags, i = t.flags, s = 0; s < i.length; s++) {
              var r = i.charAt(s);
              -1 === e.indexOf(r) &&
                this.raise(t.start, 'Invalid regular expression flag'),
                i.indexOf(r, s + 1) > -1 &&
                  this.raise(t.start, 'Duplicate regular expression flag');
            }
          }),
          (Rt.validateRegExpPattern = function (t) {
            this.regexp_pattern(t),
              !t.switchN &&
                this.options.ecmaVersion >= 9 &&
                t.groupNames.length > 0 &&
                ((t.switchN = !0), this.regexp_pattern(t));
          }),
          (Rt.regexp_pattern = function (t) {
            (t.pos = 0),
              (t.lastIntValue = 0),
              (t.lastStringValue = ''),
              (t.lastAssertionIsQuantifiable = !1),
              (t.numCapturingParens = 0),
              (t.maxBackReference = 0),
              (t.groupNames.length = 0),
              (t.backReferenceNames.length = 0),
              this.regexp_disjunction(t),
              t.pos !== t.source.length &&
                (t.eat(41) && t.raise("Unmatched ')'"),
                (t.eat(93) || t.eat(125)) &&
                  t.raise('Lone quantifier brackets')),
              t.maxBackReference > t.numCapturingParens &&
                t.raise('Invalid escape');
            for (var e = 0, i = t.backReferenceNames; e < i.length; e += 1) {
              var s = i[e];
              -1 === t.groupNames.indexOf(s) &&
                t.raise('Invalid named capture referenced');
            }
          }),
          (Rt.regexp_disjunction = function (t) {
            for (this.regexp_alternative(t); t.eat(124); )
              this.regexp_alternative(t);
            this.regexp_eatQuantifier(t, !0) && t.raise('Nothing to repeat'),
              t.eat(123) && t.raise('Lone quantifier brackets');
          }),
          (Rt.regexp_alternative = function (t) {
            for (; t.pos < t.source.length && this.regexp_eatTerm(t); );
          }),
          (Rt.regexp_eatTerm = function (t) {
            return this.regexp_eatAssertion(t)
              ? (t.lastAssertionIsQuantifiable &&
                  this.regexp_eatQuantifier(t) &&
                  t.switchU &&
                  t.raise('Invalid quantifier'),
                !0)
              : !(t.switchU
                  ? !this.regexp_eatAtom(t)
                  : !this.regexp_eatExtendedAtom(t)) &&
                  (this.regexp_eatQuantifier(t), !0);
          }),
          (Rt.regexp_eatAssertion = function (t) {
            var e = t.pos;
            if (((t.lastAssertionIsQuantifiable = !1), t.eat(94) || t.eat(36)))
              return !0;
            if (t.eat(92)) {
              if (t.eat(66) || t.eat(98)) return !0;
              t.pos = e;
            }
            if (t.eat(40) && t.eat(63)) {
              var i = !1;
              if (
                (this.options.ecmaVersion >= 9 && (i = t.eat(60)),
                t.eat(61) || t.eat(33))
              )
                return (
                  this.regexp_disjunction(t),
                  t.eat(41) || t.raise('Unterminated group'),
                  (t.lastAssertionIsQuantifiable = !i),
                  !0
                );
            }
            return (t.pos = e), !1;
          }),
          (Rt.regexp_eatQuantifier = function (t, e) {
            return (
              void 0 === e && (e = !1),
              !!this.regexp_eatQuantifierPrefix(t, e) && (t.eat(63), !0)
            );
          }),
          (Rt.regexp_eatQuantifierPrefix = function (t, e) {
            return (
              t.eat(42) ||
              t.eat(43) ||
              t.eat(63) ||
              this.regexp_eatBracedQuantifier(t, e)
            );
          }),
          (Rt.regexp_eatBracedQuantifier = function (t, e) {
            var i = t.pos;
            if (t.eat(123)) {
              var s = 0,
                r = -1;
              if (
                this.regexp_eatDecimalDigits(t) &&
                ((s = t.lastIntValue),
                t.eat(44) &&
                  this.regexp_eatDecimalDigits(t) &&
                  (r = t.lastIntValue),
                t.eat(125))
              )
                return (
                  -1 !== r &&
                    r < s &&
                    !e &&
                    t.raise('numbers out of order in {} quantifier'),
                  !0
                );
              t.switchU && !e && t.raise('Incomplete quantifier'), (t.pos = i);
            }
            return !1;
          }),
          (Rt.regexp_eatAtom = function (t) {
            return (
              this.regexp_eatPatternCharacters(t) ||
              t.eat(46) ||
              this.regexp_eatReverseSolidusAtomEscape(t) ||
              this.regexp_eatCharacterClass(t) ||
              this.regexp_eatUncapturingGroup(t) ||
              this.regexp_eatCapturingGroup(t)
            );
          }),
          (Rt.regexp_eatReverseSolidusAtomEscape = function (t) {
            var e = t.pos;
            if (t.eat(92)) {
              if (this.regexp_eatAtomEscape(t)) return !0;
              t.pos = e;
            }
            return !1;
          }),
          (Rt.regexp_eatUncapturingGroup = function (t) {
            var e = t.pos;
            if (t.eat(40)) {
              if (t.eat(63) && t.eat(58)) {
                if ((this.regexp_disjunction(t), t.eat(41))) return !0;
                t.raise('Unterminated group');
              }
              t.pos = e;
            }
            return !1;
          }),
          (Rt.regexp_eatCapturingGroup = function (t) {
            if (t.eat(40)) {
              if (
                (this.options.ecmaVersion >= 9
                  ? this.regexp_groupSpecifier(t)
                  : 63 === t.current() && t.raise('Invalid group'),
                this.regexp_disjunction(t),
                t.eat(41))
              )
                return (t.numCapturingParens += 1), !0;
              t.raise('Unterminated group');
            }
            return !1;
          }),
          (Rt.regexp_eatExtendedAtom = function (t) {
            return (
              t.eat(46) ||
              this.regexp_eatReverseSolidusAtomEscape(t) ||
              this.regexp_eatCharacterClass(t) ||
              this.regexp_eatUncapturingGroup(t) ||
              this.regexp_eatCapturingGroup(t) ||
              this.regexp_eatInvalidBracedQuantifier(t) ||
              this.regexp_eatExtendedPatternCharacter(t)
            );
          }),
          (Rt.regexp_eatInvalidBracedQuantifier = function (t) {
            return (
              this.regexp_eatBracedQuantifier(t, !0) &&
                t.raise('Nothing to repeat'),
              !1
            );
          }),
          (Rt.regexp_eatSyntaxCharacter = function (t) {
            var e = t.current();
            return !!Mt(e) && ((t.lastIntValue = e), t.advance(), !0);
          }),
          (Rt.regexp_eatPatternCharacters = function (t) {
            for (var e = t.pos, i = 0; -1 !== (i = t.current()) && !Mt(i); )
              t.advance();
            return t.pos !== e;
          }),
          (Rt.regexp_eatExtendedPatternCharacter = function (t) {
            var e = t.current();
            return (
              !(
                -1 === e ||
                36 === e ||
                (e >= 40 && e <= 43) ||
                46 === e ||
                63 === e ||
                91 === e ||
                94 === e ||
                124 === e
              ) && (t.advance(), !0)
            );
          }),
          (Rt.regexp_groupSpecifier = function (t) {
            if (t.eat(63)) {
              if (this.regexp_eatGroupName(t))
                return (
                  -1 !== t.groupNames.indexOf(t.lastStringValue) &&
                    t.raise('Duplicate capture group name'),
                  void t.groupNames.push(t.lastStringValue)
                );
              t.raise('Invalid group');
            }
          }),
          (Rt.regexp_eatGroupName = function (t) {
            if (((t.lastStringValue = ''), t.eat(60))) {
              if (this.regexp_eatRegExpIdentifierName(t) && t.eat(62))
                return !0;
              t.raise('Invalid capture group name');
            }
            return !1;
          }),
          (Rt.regexp_eatRegExpIdentifierName = function (t) {
            if (
              ((t.lastStringValue = ''),
              this.regexp_eatRegExpIdentifierStart(t))
            ) {
              for (
                t.lastStringValue += Ot(t.lastIntValue);
                this.regexp_eatRegExpIdentifierPart(t);

              )
                t.lastStringValue += Ot(t.lastIntValue);
              return !0;
            }
            return !1;
          }),
          (Rt.regexp_eatRegExpIdentifierStart = function (t) {
            var e = t.pos,
              i = t.current();
            return (
              t.advance(),
              92 === i &&
                this.regexp_eatRegExpUnicodeEscapeSequence(t) &&
                (i = t.lastIntValue),
              Dt(i) ? ((t.lastIntValue = i), !0) : ((t.pos = e), !1)
            );
          }),
          (Rt.regexp_eatRegExpIdentifierPart = function (t) {
            var e = t.pos,
              i = t.current();
            return (
              t.advance(),
              92 === i &&
                this.regexp_eatRegExpUnicodeEscapeSequence(t) &&
                (i = t.lastIntValue),
              Ft(i) ? ((t.lastIntValue = i), !0) : ((t.pos = e), !1)
            );
          }),
          (Rt.regexp_eatAtomEscape = function (t) {
            return (
              !!(
                this.regexp_eatBackReference(t) ||
                this.regexp_eatCharacterClassEscape(t) ||
                this.regexp_eatCharacterEscape(t) ||
                (t.switchN && this.regexp_eatKGroupName(t))
              ) ||
              (t.switchU &&
                (99 === t.current() && t.raise('Invalid unicode escape'),
                t.raise('Invalid escape')),
              !1)
            );
          }),
          (Rt.regexp_eatBackReference = function (t) {
            var e = t.pos;
            if (this.regexp_eatDecimalEscape(t)) {
              var i = t.lastIntValue;
              if (t.switchU)
                return i > t.maxBackReference && (t.maxBackReference = i), !0;
              if (i <= t.numCapturingParens) return !0;
              t.pos = e;
            }
            return !1;
          }),
          (Rt.regexp_eatKGroupName = function (t) {
            if (t.eat(107)) {
              if (this.regexp_eatGroupName(t))
                return t.backReferenceNames.push(t.lastStringValue), !0;
              t.raise('Invalid named reference');
            }
            return !1;
          }),
          (Rt.regexp_eatCharacterEscape = function (t) {
            return (
              this.regexp_eatControlEscape(t) ||
              this.regexp_eatCControlLetter(t) ||
              this.regexp_eatZero(t) ||
              this.regexp_eatHexEscapeSequence(t) ||
              this.regexp_eatRegExpUnicodeEscapeSequence(t) ||
              (!t.switchU && this.regexp_eatLegacyOctalEscapeSequence(t)) ||
              this.regexp_eatIdentityEscape(t)
            );
          }),
          (Rt.regexp_eatCControlLetter = function (t) {
            var e = t.pos;
            if (t.eat(99)) {
              if (this.regexp_eatControlLetter(t)) return !0;
              t.pos = e;
            }
            return !1;
          }),
          (Rt.regexp_eatZero = function (t) {
            return (
              48 === t.current() &&
              !Wt(t.lookahead()) &&
              ((t.lastIntValue = 0), t.advance(), !0)
            );
          }),
          (Rt.regexp_eatControlEscape = function (t) {
            var e = t.current();
            return 116 === e
              ? ((t.lastIntValue = 9), t.advance(), !0)
              : 110 === e
              ? ((t.lastIntValue = 10), t.advance(), !0)
              : 118 === e
              ? ((t.lastIntValue = 11), t.advance(), !0)
              : 102 === e
              ? ((t.lastIntValue = 12), t.advance(), !0)
              : 114 === e && ((t.lastIntValue = 13), t.advance(), !0);
          }),
          (Rt.regexp_eatControlLetter = function (t) {
            var e = t.current();
            return !!Ut(e) && ((t.lastIntValue = e % 32), t.advance(), !0);
          }),
          (Rt.regexp_eatRegExpUnicodeEscapeSequence = function (t) {
            var e = t.pos;
            if (t.eat(117)) {
              if (this.regexp_eatFixedHexDigits(t, 4)) {
                var i = t.lastIntValue;
                if (t.switchU && i >= 55296 && i <= 56319) {
                  var s = t.pos;
                  if (
                    t.eat(92) &&
                    t.eat(117) &&
                    this.regexp_eatFixedHexDigits(t, 4)
                  ) {
                    var r = t.lastIntValue;
                    if (r >= 56320 && r <= 57343)
                      return (
                        (t.lastIntValue =
                          1024 * (i - 55296) + (r - 56320) + 65536),
                        !0
                      );
                  }
                  (t.pos = s), (t.lastIntValue = i);
                }
                return !0;
              }
              if (
                t.switchU &&
                t.eat(123) &&
                this.regexp_eatHexDigits(t) &&
                t.eat(125) &&
                qt(t.lastIntValue)
              )
                return !0;
              t.switchU && t.raise('Invalid unicode escape'), (t.pos = e);
            }
            return !1;
          }),
          (Rt.regexp_eatIdentityEscape = function (t) {
            if (t.switchU)
              return (
                !!this.regexp_eatSyntaxCharacter(t) ||
                (!!t.eat(47) && ((t.lastIntValue = 47), !0))
              );
            var e = t.current();
            return (
              !(99 === e || (t.switchN && 107 === e)) &&
              ((t.lastIntValue = e), t.advance(), !0)
            );
          }),
          (Rt.regexp_eatDecimalEscape = function (t) {
            t.lastIntValue = 0;
            var e = t.current();
            if (e >= 49 && e <= 57) {
              do {
                (t.lastIntValue = 10 * t.lastIntValue + (e - 48)), t.advance();
              } while ((e = t.current()) >= 48 && e <= 57);
              return !0;
            }
            return !1;
          }),
          (Rt.regexp_eatCharacterClassEscape = function (t) {
            var e = t.current();
            if (Gt(e)) return (t.lastIntValue = -1), t.advance(), !0;
            if (
              t.switchU &&
              this.options.ecmaVersion >= 9 &&
              (80 === e || 112 === e)
            ) {
              if (
                ((t.lastIntValue = -1),
                t.advance(),
                t.eat(123) &&
                  this.regexp_eatUnicodePropertyValueExpression(t) &&
                  t.eat(125))
              )
                return !0;
              t.raise('Invalid property name');
            }
            return !1;
          }),
          (Rt.regexp_eatUnicodePropertyValueExpression = function (t) {
            var e = t.pos;
            if (this.regexp_eatUnicodePropertyName(t) && t.eat(61)) {
              var i = t.lastStringValue;
              if (this.regexp_eatUnicodePropertyValue(t)) {
                var s = t.lastStringValue;
                return (
                  this.regexp_validateUnicodePropertyNameAndValue(t, i, s), !0
                );
              }
            }
            if (
              ((t.pos = e), this.regexp_eatLoneUnicodePropertyNameOrValue(t))
            ) {
              var r = t.lastStringValue;
              return this.regexp_validateUnicodePropertyNameOrValue(t, r), !0;
            }
            return !1;
          }),
          (Rt.regexp_validateUnicodePropertyNameAndValue = function (t, e, i) {
            I(t.unicodeProperties.nonBinary, e) ||
              t.raise('Invalid property name'),
              t.unicodeProperties.nonBinary[e].test(i) ||
                t.raise('Invalid property value');
          }),
          (Rt.regexp_validateUnicodePropertyNameOrValue = function (t, e) {
            t.unicodeProperties.binary.test(e) ||
              t.raise('Invalid property name');
          }),
          (Rt.regexp_eatUnicodePropertyName = function (t) {
            var e = 0;
            for (t.lastStringValue = ''; Ht((e = t.current())); )
              (t.lastStringValue += Ot(e)), t.advance();
            return '' !== t.lastStringValue;
          }),
          (Rt.regexp_eatUnicodePropertyValue = function (t) {
            var e = 0;
            for (t.lastStringValue = ''; jt((e = t.current())); )
              (t.lastStringValue += Ot(e)), t.advance();
            return '' !== t.lastStringValue;
          }),
          (Rt.regexp_eatLoneUnicodePropertyNameOrValue = function (t) {
            return this.regexp_eatUnicodePropertyValue(t);
          }),
          (Rt.regexp_eatCharacterClass = function (t) {
            if (t.eat(91)) {
              if ((t.eat(94), this.regexp_classRanges(t), t.eat(93))) return !0;
              t.raise('Unterminated character class');
            }
            return !1;
          }),
          (Rt.regexp_classRanges = function (t) {
            for (; this.regexp_eatClassAtom(t); ) {
              var e = t.lastIntValue;
              if (t.eat(45) && this.regexp_eatClassAtom(t)) {
                var i = t.lastIntValue;
                !t.switchU ||
                  (-1 !== e && -1 !== i) ||
                  t.raise('Invalid character class'),
                  -1 !== e &&
                    -1 !== i &&
                    e > i &&
                    t.raise('Range out of order in character class');
              }
            }
          }),
          (Rt.regexp_eatClassAtom = function (t) {
            var e = t.pos;
            if (t.eat(92)) {
              if (this.regexp_eatClassEscape(t)) return !0;
              if (t.switchU) {
                var i = t.current();
                (99 === i || Kt(i)) && t.raise('Invalid class escape'),
                  t.raise('Invalid escape');
              }
              t.pos = e;
            }
            var s = t.current();
            return 93 !== s && ((t.lastIntValue = s), t.advance(), !0);
          }),
          (Rt.regexp_eatClassEscape = function (t) {
            var e = t.pos;
            if (t.eat(98)) return (t.lastIntValue = 8), !0;
            if (t.switchU && t.eat(45)) return (t.lastIntValue = 45), !0;
            if (!t.switchU && t.eat(99)) {
              if (this.regexp_eatClassControlLetter(t)) return !0;
              t.pos = e;
            }
            return (
              this.regexp_eatCharacterClassEscape(t) ||
              this.regexp_eatCharacterEscape(t)
            );
          }),
          (Rt.regexp_eatClassControlLetter = function (t) {
            var e = t.current();
            return (
              !(!Wt(e) && 95 !== e) &&
              ((t.lastIntValue = e % 32), t.advance(), !0)
            );
          }),
          (Rt.regexp_eatHexEscapeSequence = function (t) {
            var e = t.pos;
            if (t.eat(120)) {
              if (this.regexp_eatFixedHexDigits(t, 2)) return !0;
              t.switchU && t.raise('Invalid escape'), (t.pos = e);
            }
            return !1;
          }),
          (Rt.regexp_eatDecimalDigits = function (t) {
            var e = t.pos,
              i = 0;
            for (t.lastIntValue = 0; Wt((i = t.current())); )
              (t.lastIntValue = 10 * t.lastIntValue + (i - 48)), t.advance();
            return t.pos !== e;
          }),
          (Rt.regexp_eatHexDigits = function (t) {
            var e = t.pos,
              i = 0;
            for (t.lastIntValue = 0; zt((i = t.current())); )
              (t.lastIntValue = 16 * t.lastIntValue + Qt(i)), t.advance();
            return t.pos !== e;
          }),
          (Rt.regexp_eatLegacyOctalEscapeSequence = function (t) {
            if (this.regexp_eatOctalDigit(t)) {
              var e = t.lastIntValue;
              if (this.regexp_eatOctalDigit(t)) {
                var i = t.lastIntValue;
                e <= 3 && this.regexp_eatOctalDigit(t)
                  ? (t.lastIntValue = 64 * e + 8 * i + t.lastIntValue)
                  : (t.lastIntValue = 8 * e + i);
              } else t.lastIntValue = e;
              return !0;
            }
            return !1;
          }),
          (Rt.regexp_eatOctalDigit = function (t) {
            var e = t.current();
            return Kt(e)
              ? ((t.lastIntValue = e - 48), t.advance(), !0)
              : ((t.lastIntValue = 0), !1);
          }),
          (Rt.regexp_eatFixedHexDigits = function (t, e) {
            var i = t.pos;
            t.lastIntValue = 0;
            for (var s = 0; s < e; ++s) {
              var r = t.current();
              if (!zt(r)) return (t.pos = i), !1;
              (t.lastIntValue = 16 * t.lastIntValue + Qt(r)), t.advance();
            }
            return !0;
          });
        var Xt = function (t) {
          (this.type = t.type),
            (this.value = t.value),
            (this.start = t.start),
            (this.end = t.end),
            t.options.locations && (this.loc = new V(t, t.startLoc, t.endLoc)),
            t.options.ranges && (this.range = [t.start, t.end]);
        };
        exports.Token = Xt;
        var Yt = J.prototype;
        function Zt(t) {
          return t <= 65535
            ? String.fromCharCode(t)
            : ((t -= 65536),
              String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)));
        }
        (Yt.next = function (t) {
          !t &&
            this.type.keyword &&
            this.containsEsc &&
            this.raiseRecoverable(
              this.start,
              'Escape sequence in keyword ' + this.type.keyword,
            ),
            this.options.onToken && this.options.onToken(new Xt(this)),
            (this.lastTokEnd = this.end),
            (this.lastTokStart = this.start),
            (this.lastTokEndLoc = this.endLoc),
            (this.lastTokStartLoc = this.startLoc),
            this.nextToken();
        }),
          (Yt.getToken = function () {
            return this.next(), new Xt(this);
          }),
          'undefined' != typeof Symbol &&
            (Yt[Symbol.iterator] = function () {
              var t = this;
              return {
                next: function () {
                  var e = t.getToken();
                  return { done: e.type === y.eof, value: e };
                },
              };
            }),
          (Yt.curContext = function () {
            return this.context[this.context.length - 1];
          }),
          (Yt.nextToken = function () {
            var t = this.curContext();
            return (
              (t && t.preserveSpace) || this.skipSpace(),
              (this.start = this.pos),
              this.options.locations && (this.startLoc = this.curPosition()),
              this.pos >= this.input.length
                ? this.finishToken(y.eof)
                : t.override
                ? t.override(this)
                : void this.readToken(this.fullCharCodeAtPos())
            );
          }),
          (Yt.readToken = function (t) {
            return u(t, this.options.ecmaVersion >= 6) || 92 === t
              ? this.readWord()
              : this.getTokenFromCode(t);
          }),
          (Yt.fullCharCodeAtPos = function () {
            var t = this.input.charCodeAt(this.pos);
            return t <= 55295 || t >= 57344
              ? t
              : (t << 10) + this.input.charCodeAt(this.pos + 1) - 56613888;
          }),
          (Yt.skipBlockComment = function () {
            var t,
              e = this.options.onComment && this.curPosition(),
              i = this.pos,
              s = this.input.indexOf('*/', (this.pos += 2));
            if (
              (-1 === s && this.raise(this.pos - 2, 'Unterminated comment'),
              (this.pos = s + 2),
              this.options.locations)
            )
              for (
                _.lastIndex = i;
                (t = _.exec(this.input)) && t.index < this.pos;

              )
                ++this.curLine, (this.lineStart = t.index + t[0].length);
            this.options.onComment &&
              this.options.onComment(
                !0,
                this.input.slice(i + 2, s),
                i,
                this.pos,
                e,
                this.curPosition(),
              );
          }),
          (Yt.skipLineComment = function (t) {
            for (
              var e = this.pos,
                i = this.options.onComment && this.curPosition(),
                s = this.input.charCodeAt((this.pos += t));
              this.pos < this.input.length && !b(s);

            )
              s = this.input.charCodeAt(++this.pos);
            this.options.onComment &&
              this.options.onComment(
                !1,
                this.input.slice(e + t, this.pos),
                e,
                this.pos,
                i,
                this.curPosition(),
              );
          }),
          (Yt.skipSpace = function () {
            t: for (; this.pos < this.input.length; ) {
              var t = this.input.charCodeAt(this.pos);
              switch (t) {
                case 32:
                case 160:
                  ++this.pos;
                  break;
                case 13:
                  10 === this.input.charCodeAt(this.pos + 1) && ++this.pos;
                case 10:
                case 8232:
                case 8233:
                  ++this.pos,
                    this.options.locations &&
                      (++this.curLine, (this.lineStart = this.pos));
                  break;
                case 47:
                  switch (this.input.charCodeAt(this.pos + 1)) {
                    case 42:
                      this.skipBlockComment();
                      break;
                    case 47:
                      this.skipLineComment(2);
                      break;
                    default:
                      break t;
                  }
                  break;
                default:
                  if (
                    !(
                      (t > 8 && t < 14) ||
                      (t >= 5760 && S.test(String.fromCharCode(t)))
                    )
                  )
                    break t;
                  ++this.pos;
              }
            }
          }),
          (Yt.finishToken = function (t, e) {
            (this.end = this.pos),
              this.options.locations && (this.endLoc = this.curPosition());
            var i = this.type;
            (this.type = t), (this.value = e), this.updateContext(i);
          }),
          (Yt.readToken_dot = function () {
            var t = this.input.charCodeAt(this.pos + 1);
            if (t >= 48 && t <= 57) return this.readNumber(!0);
            var e = this.input.charCodeAt(this.pos + 2);
            return this.options.ecmaVersion >= 6 && 46 === t && 46 === e
              ? ((this.pos += 3), this.finishToken(y.ellipsis))
              : (++this.pos, this.finishToken(y.dot));
          }),
          (Yt.readToken_slash = function () {
            var t = this.input.charCodeAt(this.pos + 1);
            return this.exprAllowed
              ? (++this.pos, this.readRegexp())
              : 61 === t
              ? this.finishOp(y.assign, 2)
              : this.finishOp(y.slash, 1);
          }),
          (Yt.readToken_mult_modulo_exp = function (t) {
            var e = this.input.charCodeAt(this.pos + 1),
              i = 1,
              s = 42 === t ? y.star : y.modulo;
            return (
              this.options.ecmaVersion >= 7 &&
                42 === t &&
                42 === e &&
                (++i,
                (s = y.starstar),
                (e = this.input.charCodeAt(this.pos + 2))),
              61 === e ? this.finishOp(y.assign, i + 1) : this.finishOp(s, i)
            );
          }),
          (Yt.readToken_pipe_amp = function (t) {
            var e = this.input.charCodeAt(this.pos + 1);
            return e === t
              ? this.finishOp(124 === t ? y.logicalOR : y.logicalAND, 2)
              : 61 === e
              ? this.finishOp(y.assign, 2)
              : this.finishOp(124 === t ? y.bitwiseOR : y.bitwiseAND, 1);
          }),
          (Yt.readToken_caret = function () {
            return 61 === this.input.charCodeAt(this.pos + 1)
              ? this.finishOp(y.assign, 2)
              : this.finishOp(y.bitwiseXOR, 1);
          }),
          (Yt.readToken_plus_min = function (t) {
            var e = this.input.charCodeAt(this.pos + 1);
            return e === t
              ? 45 !== e ||
                this.inModule ||
                62 !== this.input.charCodeAt(this.pos + 2) ||
                (0 !== this.lastTokEnd &&
                  !k.test(this.input.slice(this.lastTokEnd, this.pos)))
                ? this.finishOp(y.incDec, 2)
                : (this.skipLineComment(3), this.skipSpace(), this.nextToken())
              : 61 === e
              ? this.finishOp(y.assign, 2)
              : this.finishOp(y.plusMin, 1);
          }),
          (Yt.readToken_lt_gt = function (t) {
            var e = this.input.charCodeAt(this.pos + 1),
              i = 1;
            return e === t
              ? ((i =
                  62 === t && 62 === this.input.charCodeAt(this.pos + 2)
                    ? 3
                    : 2),
                61 === this.input.charCodeAt(this.pos + i)
                  ? this.finishOp(y.assign, i + 1)
                  : this.finishOp(y.bitShift, i))
              : 33 !== e ||
                60 !== t ||
                this.inModule ||
                45 !== this.input.charCodeAt(this.pos + 2) ||
                45 !== this.input.charCodeAt(this.pos + 3)
              ? (61 === e && (i = 2), this.finishOp(y.relational, i))
              : (this.skipLineComment(4), this.skipSpace(), this.nextToken());
          }),
          (Yt.readToken_eq_excl = function (t) {
            var e = this.input.charCodeAt(this.pos + 1);
            return 61 === e
              ? this.finishOp(
                  y.equality,
                  61 === this.input.charCodeAt(this.pos + 2) ? 3 : 2,
                )
              : 61 === t && 62 === e && this.options.ecmaVersion >= 6
              ? ((this.pos += 2), this.finishToken(y.arrow))
              : this.finishOp(61 === t ? y.eq : y.prefix, 1);
          }),
          (Yt.getTokenFromCode = function (t) {
            switch (t) {
              case 46:
                return this.readToken_dot();
              case 40:
                return ++this.pos, this.finishToken(y.parenL);
              case 41:
                return ++this.pos, this.finishToken(y.parenR);
              case 59:
                return ++this.pos, this.finishToken(y.semi);
              case 44:
                return ++this.pos, this.finishToken(y.comma);
              case 91:
                return ++this.pos, this.finishToken(y.bracketL);
              case 93:
                return ++this.pos, this.finishToken(y.bracketR);
              case 123:
                return ++this.pos, this.finishToken(y.braceL);
              case 125:
                return ++this.pos, this.finishToken(y.braceR);
              case 58:
                return ++this.pos, this.finishToken(y.colon);
              case 63:
                return ++this.pos, this.finishToken(y.question);
              case 96:
                if (this.options.ecmaVersion < 6) break;
                return ++this.pos, this.finishToken(y.backQuote);
              case 48:
                var e = this.input.charCodeAt(this.pos + 1);
                if (120 === e || 88 === e) return this.readRadixNumber(16);
                if (this.options.ecmaVersion >= 6) {
                  if (111 === e || 79 === e) return this.readRadixNumber(8);
                  if (98 === e || 66 === e) return this.readRadixNumber(2);
                }
              case 49:
              case 50:
              case 51:
              case 52:
              case 53:
              case 54:
              case 55:
              case 56:
              case 57:
                return this.readNumber(!1);
              case 34:
              case 39:
                return this.readString(t);
              case 47:
                return this.readToken_slash();
              case 37:
              case 42:
                return this.readToken_mult_modulo_exp(t);
              case 124:
              case 38:
                return this.readToken_pipe_amp(t);
              case 94:
                return this.readToken_caret();
              case 43:
              case 45:
                return this.readToken_plus_min(t);
              case 60:
              case 62:
                return this.readToken_lt_gt(t);
              case 61:
              case 33:
                return this.readToken_eq_excl(t);
              case 126:
                return this.finishOp(y.prefix, 1);
            }
            this.raise(this.pos, "Unexpected character '" + Zt(t) + "'");
          }),
          (Yt.finishOp = function (t, e) {
            var i = this.input.slice(this.pos, this.pos + e);
            return (this.pos += e), this.finishToken(t, i);
          }),
          (Yt.readRegexp = function () {
            for (var t, e, i = this.pos; ; ) {
              this.pos >= this.input.length &&
                this.raise(i, 'Unterminated regular expression');
              var s = this.input.charAt(this.pos);
              if (
                (k.test(s) && this.raise(i, 'Unterminated regular expression'),
                t)
              )
                t = !1;
              else {
                if ('[' === s) e = !0;
                else if (']' === s && e) e = !1;
                else if ('/' === s && !e) break;
                t = '\\' === s;
              }
              ++this.pos;
            }
            var r = this.input.slice(i, this.pos);
            ++this.pos;
            var a = this.pos,
              n = this.readWord1();
            this.containsEsc && this.unexpected(a);
            var o = this.regexpState || (this.regexpState = new Bt(this));
            o.reset(i, r, n),
              this.validateRegExpFlags(o),
              this.validateRegExpPattern(o);
            var h = null;
            try {
              h = new RegExp(r, n);
            } catch (p) {}
            return this.finishToken(y.regexp, {
              pattern: r,
              flags: n,
              value: h,
            });
          }),
          (Yt.readInt = function (t, e) {
            for (
              var i = this.pos, s = 0, r = 0, a = null == e ? 1 / 0 : e;
              r < a;
              ++r
            ) {
              var n = this.input.charCodeAt(this.pos),
                o = void 0;
              if (
                (o =
                  n >= 97
                    ? n - 97 + 10
                    : n >= 65
                    ? n - 65 + 10
                    : n >= 48 && n <= 57
                    ? n - 48
                    : 1 / 0) >= t
              )
                break;
              ++this.pos, (s = s * t + o);
            }
            return this.pos === i || (null != e && this.pos - i !== e)
              ? null
              : s;
          }),
          (Yt.readRadixNumber = function (t) {
            var e = this.pos;
            this.pos += 2;
            var i = this.readInt(t);
            return (
              null == i &&
                this.raise(this.start + 2, 'Expected number in radix ' + t),
              this.options.ecmaVersion >= 11 &&
              110 === this.input.charCodeAt(this.pos)
                ? ((i =
                    'undefined' != typeof BigInt
                      ? BigInt(this.input.slice(e, this.pos))
                      : null),
                  ++this.pos)
                : u(this.fullCharCodeAtPos()) &&
                  this.raise(this.pos, 'Identifier directly after number'),
              this.finishToken(y.num, i)
            );
          }),
          (Yt.readNumber = function (t) {
            var e = this.pos;
            t || null !== this.readInt(10) || this.raise(e, 'Invalid number');
            var i = this.pos - e >= 2 && 48 === this.input.charCodeAt(e);
            i && this.strict && this.raise(e, 'Invalid number');
            var s = this.input.charCodeAt(this.pos);
            if (!i && !t && this.options.ecmaVersion >= 11 && 110 === s) {
              var r = this.input.slice(e, this.pos),
                a = 'undefined' != typeof BigInt ? BigInt(r) : null;
              return (
                ++this.pos,
                u(this.fullCharCodeAtPos()) &&
                  this.raise(this.pos, 'Identifier directly after number'),
                this.finishToken(y.num, a)
              );
            }
            i && /[89]/.test(this.input.slice(e, this.pos)) && (i = !1),
              46 !== s ||
                i ||
                (++this.pos,
                this.readInt(10),
                (s = this.input.charCodeAt(this.pos))),
              (69 !== s && 101 !== s) ||
                i ||
                ((43 !== (s = this.input.charCodeAt(++this.pos)) && 45 !== s) ||
                  ++this.pos,
                null === this.readInt(10) && this.raise(e, 'Invalid number')),
              u(this.fullCharCodeAtPos()) &&
                this.raise(this.pos, 'Identifier directly after number');
            var n = this.input.slice(e, this.pos),
              o = i ? parseInt(n, 8) : parseFloat(n);
            return this.finishToken(y.num, o);
          }),
          (Yt.readCodePoint = function () {
            var t;
            if (123 === this.input.charCodeAt(this.pos)) {
              this.options.ecmaVersion < 6 && this.unexpected();
              var e = ++this.pos;
              (t = this.readHexChar(
                this.input.indexOf('}', this.pos) - this.pos,
              )),
                ++this.pos,
                t > 1114111 &&
                  this.invalidStringToken(e, 'Code point out of bounds');
            } else t = this.readHexChar(4);
            return t;
          }),
          (Yt.readString = function (t) {
            for (var e = '', i = ++this.pos; ; ) {
              this.pos >= this.input.length &&
                this.raise(this.start, 'Unterminated string constant');
              var s = this.input.charCodeAt(this.pos);
              if (s === t) break;
              92 === s
                ? ((e += this.input.slice(i, this.pos)),
                  (e += this.readEscapedChar(!1)),
                  (i = this.pos))
                : (b(s, this.options.ecmaVersion >= 10) &&
                    this.raise(this.start, 'Unterminated string constant'),
                  ++this.pos);
            }
            return (
              (e += this.input.slice(i, this.pos++)),
              this.finishToken(y.string, e)
            );
          });
        var $t = {};
        (Yt.tryReadTemplateToken = function () {
          this.inTemplateElement = !0;
          try {
            this.readTmplToken();
          } catch (t) {
            if (t !== $t) throw t;
            this.readInvalidTemplateToken();
          }
          this.inTemplateElement = !1;
        }),
          (Yt.invalidStringToken = function (t, e) {
            if (this.inTemplateElement && this.options.ecmaVersion >= 9)
              throw $t;
            this.raise(t, e);
          }),
          (Yt.readTmplToken = function () {
            for (var t = '', e = this.pos; ; ) {
              this.pos >= this.input.length &&
                this.raise(this.start, 'Unterminated template');
              var i = this.input.charCodeAt(this.pos);
              if (
                96 === i ||
                (36 === i && 123 === this.input.charCodeAt(this.pos + 1))
              )
                return this.pos !== this.start ||
                  (this.type !== y.template && this.type !== y.invalidTemplate)
                  ? ((t += this.input.slice(e, this.pos)),
                    this.finishToken(y.template, t))
                  : 36 === i
                  ? ((this.pos += 2), this.finishToken(y.dollarBraceL))
                  : (++this.pos, this.finishToken(y.backQuote));
              if (92 === i)
                (t += this.input.slice(e, this.pos)),
                  (t += this.readEscapedChar(!0)),
                  (e = this.pos);
              else if (b(i)) {
                switch (((t += this.input.slice(e, this.pos)), ++this.pos, i)) {
                  case 13:
                    10 === this.input.charCodeAt(this.pos) && ++this.pos;
                  case 10:
                    t += '\n';
                    break;
                  default:
                    t += String.fromCharCode(i);
                }
                this.options.locations &&
                  (++this.curLine, (this.lineStart = this.pos)),
                  (e = this.pos);
              } else ++this.pos;
            }
          }),
          (Yt.readInvalidTemplateToken = function () {
            for (; this.pos < this.input.length; this.pos++)
              switch (this.input[this.pos]) {
                case '\\':
                  ++this.pos;
                  break;
                case '$':
                  if ('{' !== this.input[this.pos + 1]) break;
                case '`':
                  return this.finishToken(
                    y.invalidTemplate,
                    this.input.slice(this.start, this.pos),
                  );
              }
            this.raise(this.start, 'Unterminated template');
          }),
          (Yt.readEscapedChar = function (t) {
            var e = this.input.charCodeAt(++this.pos);
            switch ((++this.pos, e)) {
              case 110:
                return '\n';
              case 114:
                return '\r';
              case 120:
                return String.fromCharCode(this.readHexChar(2));
              case 117:
                return Zt(this.readCodePoint());
              case 116:
                return '\t';
              case 98:
                return '\b';
              case 118:
                return '\v';
              case 102:
                return '\f';
              case 13:
                10 === this.input.charCodeAt(this.pos) && ++this.pos;
              case 10:
                return (
                  this.options.locations &&
                    ((this.lineStart = this.pos), ++this.curLine),
                  ''
                );
              case 56:
              case 57:
                if (t) {
                  var i = this.pos - 1;
                  return (
                    this.invalidStringToken(
                      i,
                      'Invalid escape sequence in template string',
                    ),
                    null
                  );
                }
              default:
                if (e >= 48 && e <= 55) {
                  var s = this.input
                      .substr(this.pos - 1, 3)
                      .match(/^[0-7]+/)[0],
                    r = parseInt(s, 8);
                  return (
                    r > 255 && ((s = s.slice(0, -1)), (r = parseInt(s, 8))),
                    (this.pos += s.length - 1),
                    (e = this.input.charCodeAt(this.pos)),
                    ('0' === s && 56 !== e && 57 !== e) ||
                      (!this.strict && !t) ||
                      this.invalidStringToken(
                        this.pos - 1 - s.length,
                        t
                          ? 'Octal literal in template string'
                          : 'Octal literal in strict mode',
                      ),
                    String.fromCharCode(r)
                  );
                }
                return b(e) ? '' : String.fromCharCode(e);
            }
          }),
          (Yt.readHexChar = function (t) {
            var e = this.pos,
              i = this.readInt(16, t);
            return (
              null === i &&
                this.invalidStringToken(e, 'Bad character escape sequence'),
              i
            );
          }),
          (Yt.readWord1 = function () {
            this.containsEsc = !1;
            for (
              var t = '',
                e = !0,
                i = this.pos,
                s = this.options.ecmaVersion >= 6;
              this.pos < this.input.length;

            ) {
              var r = this.fullCharCodeAtPos();
              if (l(r, s)) this.pos += r <= 65535 ? 1 : 2;
              else {
                if (92 !== r) break;
                (this.containsEsc = !0), (t += this.input.slice(i, this.pos));
                var a = this.pos;
                117 !== this.input.charCodeAt(++this.pos) &&
                  this.invalidStringToken(
                    this.pos,
                    'Expecting Unicode escape sequence \\uXXXX',
                  ),
                  ++this.pos;
                var n = this.readCodePoint();
                (e ? u : l)(n, s) ||
                  this.invalidStringToken(a, 'Invalid Unicode escape'),
                  (t += Zt(n)),
                  (i = this.pos);
              }
              e = !1;
            }
            return t + this.input.slice(i, this.pos);
          }),
          (Yt.readWord = function () {
            var t = this.readWord1(),
              e = y.name;
            return this.keywords.test(t) && (e = g[t]), this.finishToken(e, t);
          });
        var Jt = '7.1.0';
        function te(t, e) {
          return J.parse(t, e);
        }
        function ee(t, e, i) {
          return J.parseExpressionAt(t, e, i);
        }
        function ie(t, e) {
          return J.tokenizer(t, e);
        }
        (exports.version = Jt),
          (J.acorn = {
            Parser: J,
            version: Jt,
            defaultOptions: R,
            Position: L,
            SourceLocation: V,
            getLineInfo: N,
            Node: gt,
            TokenType: d,
            tokTypes: y,
            keywordTypes: g,
            TokContext: kt,
            tokContexts: _t,
            isIdentifierChar: l,
            isIdentifierStart: u,
            Token: Xt,
            isNewLine: b,
            lineBreak: k,
            lineBreakG: _,
            nonASCIIwhitespace: S,
          });
      },
      {},
    ],
    FT5O: [
      function (require, module, exports) {
        var t,
          e,
          n = (module.exports = {});
        function r() {
          throw new Error('setTimeout has not been defined');
        }
        function o() {
          throw new Error('clearTimeout has not been defined');
        }
        function i(e) {
          if (t === setTimeout) return setTimeout(e, 0);
          if ((t === r || !t) && setTimeout)
            return (t = setTimeout), setTimeout(e, 0);
          try {
            return t(e, 0);
          } catch (n) {
            try {
              return t.call(null, e, 0);
            } catch (n) {
              return t.call(this, e, 0);
            }
          }
        }
        function u(t) {
          if (e === clearTimeout) return clearTimeout(t);
          if ((e === o || !e) && clearTimeout)
            return (e = clearTimeout), clearTimeout(t);
          try {
            return e(t);
          } catch (n) {
            try {
              return e.call(null, t);
            } catch (n) {
              return e.call(this, t);
            }
          }
        }
        !(function () {
          try {
            t = 'function' == typeof setTimeout ? setTimeout : r;
          } catch (n) {
            t = r;
          }
          try {
            e = 'function' == typeof clearTimeout ? clearTimeout : o;
          } catch (n) {
            e = o;
          }
        })();
        var c,
          s = [],
          l = !1,
          a = -1;
        function f() {
          l &&
            c &&
            ((l = !1),
            c.length ? (s = c.concat(s)) : (a = -1),
            s.length && h());
        }
        function h() {
          if (!l) {
            var t = i(f);
            l = !0;
            for (var e = s.length; e; ) {
              for (c = s, s = []; ++a < e; ) c && c[a].run();
              (a = -1), (e = s.length);
            }
            (c = null), (l = !1), u(t);
          }
        }
        function m(t, e) {
          (this.fun = t), (this.array = e);
        }
        function p() {}
        (n.nextTick = function (t) {
          var e = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
          s.push(new m(t, e)), 1 !== s.length || l || i(h);
        }),
          (m.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (n.title = 'browser'),
          (n.env = {}),
          (n.argv = []),
          (n.version = ''),
          (n.versions = {}),
          (n.on = p),
          (n.addListener = p),
          (n.once = p),
          (n.off = p),
          (n.removeListener = p),
          (n.removeAllListeners = p),
          (n.emit = p),
          (n.prependListener = p),
          (n.prependOnceListener = p),
          (n.listeners = function (t) {
            return [];
          }),
          (n.binding = function (t) {
            throw new Error('process.binding is not supported');
          }),
          (n.cwd = function () {
            return '/';
          }),
          (n.chdir = function (t) {
            throw new Error('process.chdir is not supported');
          }),
          (n.umask = function () {
            return 0;
          });
      },
      {},
    ],
    GYcQ: [
      function (require, module, exports) {
        var define;
        var process = require('process');
        var global = arguments[3];
        var t,
          e = require('process'),
          n = arguments[3];
        function i(t) {
          return (i =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                })(t);
        }
        var r = function (e, n) {
          var r = (e = e || require('./node/self.js')).window,
            s = e.document,
            a = new (function () {
              var t = /^(statics|enumerable|beans|preserve)$/,
                e = [],
                i = e.slice,
                r = Object.create,
                s = Object.getOwnPropertyDescriptor,
                a = Object.defineProperty,
                o =
                  e.forEach ||
                  function (t, e) {
                    for (var n = 0, i = this.length; n < i; n++)
                      t.call(e, this[n], n, this);
                  },
                h =
                  Object.assign ||
                  function (t) {
                    for (var e = 1, n = arguments.length; e < n; e++) {
                      var i = arguments[e];
                      for (var r in i) i.hasOwnProperty(r) && (t[r] = i[r]);
                    }
                    return t;
                  },
                u = function (t, e, n) {
                  if (t) {
                    var i = s(t, 'length');
                    (i && 'number' == typeof i.value
                      ? o
                      : function (t, e) {
                          for (var n in this)
                            this.hasOwnProperty(n) &&
                              t.call(e, this[n], n, this);
                        }
                    ).call(t, e, (n = n || t));
                  }
                  return n;
                };
              function l(e, n, i, r, o) {
                var h = {};
                function u(t, u) {
                  'string' ==
                    typeof (u =
                      u || ((u = s(n, t)) && (u.get ? u : u.value))) &&
                    '#' === u[0] &&
                    (u = e[u.substring(1)] || u);
                  var l,
                    f = 'function' == typeof u,
                    d = u,
                    _ =
                      o || (f && !u.base) ? (u && u.get ? t in e : e[t]) : null;
                  (o && _) ||
                    (f && _ && (u.base = _),
                    f &&
                      !1 !== r &&
                      (l = t.match(/^([gs]et|is)(([A-Z])(.*))$/)) &&
                      (h[l[3].toLowerCase() + l[4]] = l[2]),
                    (d &&
                      !f &&
                      d.get &&
                      'function' == typeof d.get &&
                      c.isPlainObject(d)) ||
                      (d = { value: d, writable: !0 }),
                    (s(e, t) || { configurable: !0 }).configurable &&
                      ((d.configurable = !0),
                      (d.enumerable = null != i ? i : !l)),
                    a(e, t, d));
                }
                if (n) {
                  for (var l in n) n.hasOwnProperty(l) && !t.test(l) && u(l);
                  for (var l in h) {
                    var f = h[l],
                      d = e['set' + f],
                      _ = e['get' + f] || (d && e['is' + f]);
                    !_ ||
                      (!0 !== r && 0 !== _.length) ||
                      u(l, { get: _, set: d });
                  }
                }
                return e;
              }
              function c() {
                for (var t = 0, e = arguments.length; t < e; t++) {
                  var n = arguments[t];
                  n && h(this, n);
                }
                return this;
              }
              return l(c, {
                inject: function (t) {
                  if (t) {
                    var e = !0 === t.statics ? t : t.statics,
                      n = t.beans,
                      i = t.preserve;
                    e !== t && l(this.prototype, t, t.enumerable, n, i),
                      l(this, e, null, n, i);
                  }
                  for (var r = 1, s = arguments.length; r < s; r++)
                    this.inject(arguments[r]);
                  return this;
                },
                extend: function () {
                  for (
                    var t, e, n, i = this, s = 0, o = arguments.length;
                    s < o && (!t || !e);
                    s++
                  )
                    (n = arguments[s]),
                      (t = t || n.initialize),
                      (e = e || n.prototype);
                  return (
                    (e = (t =
                      t ||
                      function () {
                        i.apply(this, arguments);
                      }).prototype = e || r(this.prototype)),
                    a(e, 'constructor', {
                      value: t,
                      writable: !0,
                      configurable: !0,
                    }),
                    l(t, this),
                    arguments.length && this.inject.apply(t, arguments),
                    (t.base = i),
                    t
                  );
                },
              }).inject({
                enumerable: !1,
                initialize: c,
                set: c,
                inject: function () {
                  for (var t = 0, e = arguments.length; t < e; t++) {
                    var n = arguments[t];
                    n && l(this, n, n.enumerable, n.beans, n.preserve);
                  }
                  return this;
                },
                extend: function () {
                  var t = r(this);
                  return t.inject.apply(t, arguments);
                },
                each: function (t, e) {
                  return u(this, t, e);
                },
                clone: function () {
                  return new this.constructor(this);
                },
                statics: {
                  set: h,
                  each: u,
                  create: r,
                  define: a,
                  describe: s,
                  clone: function (t) {
                    return h(new t.constructor(), t);
                  },
                  isPlainObject: function (t) {
                    var e = null != t && t.constructor;
                    return (
                      e && (e === Object || e === c || 'Object' === e.name)
                    );
                  },
                  pick: function (t, e) {
                    return t !== n ? t : e;
                  },
                  slice: function (t, e, n) {
                    return i.call(t, e, n);
                  },
                },
              });
            })();
          'undefined' != typeof module && (module.exports = a),
            a.inject(
              {
                enumerable: !1,
                toString: function () {
                  return null != this._id
                    ? (this._class || 'Object') +
                        (this._name ? " '" + this._name + "'" : ' @' + this._id)
                    : '{ ' +
                        a
                          .each(
                            this,
                            function (t, e) {
                              if (!/^_/.test(e)) {
                                var n = i(t);
                                this.push(
                                  e +
                                    ': ' +
                                    ('number' === n
                                      ? c.instance.number(t)
                                      : 'string' === n
                                      ? "'" + t + "'"
                                      : t),
                                );
                              }
                            },
                            [],
                          )
                          .join(', ') +
                        ' }';
                },
                getClassName: function () {
                  return this._class || '';
                },
                importJSON: function (t) {
                  return a.importJSON(t, this);
                },
                exportJSON: function (t) {
                  return a.exportJSON(this, t);
                },
                toJSON: function () {
                  return a.serialize(this);
                },
                set: function (t, e) {
                  return t && a.filter(this, t, e, this._prioritize), this;
                },
              },
              {
                beans: !1,
                statics: {
                  exports: {},
                  extend: function t() {
                    var e = t.base.apply(this, arguments),
                      n = e.prototype._class;
                    return n && !a.exports[n] && (a.exports[n] = e), e;
                  },
                  equals: function (t, e) {
                    if (t === e) return !0;
                    if (t && t.equals) return t.equals(e);
                    if (e && e.equals) return e.equals(t);
                    if (t && e && 'object' === i(t) && 'object' === i(e)) {
                      if (Array.isArray(t) && Array.isArray(e)) {
                        if ((n = t.length) !== e.length) return !1;
                        for (; n--; ) if (!a.equals(t[n], e[n])) return !1;
                      } else {
                        var n,
                          r = Object.keys(t);
                        if ((n = r.length) !== Object.keys(e).length) return !1;
                        for (; n--; ) {
                          var s = r[n];
                          if (!e.hasOwnProperty(s) || !a.equals(t[s], e[s]))
                            return !1;
                        }
                      }
                      return !0;
                    }
                    return !1;
                  },
                  read: function (t, e, i, r) {
                    if (this === a) {
                      var s = this.peek(t, e);
                      return t.__index++, s;
                    }
                    var o = this.prototype,
                      h = o._readIndex,
                      u = e || (h && t.__index) || 0,
                      l = t.length,
                      c = t[u];
                    if (
                      ((r = r || l - u),
                      c instanceof this ||
                        (i && i.readNull && null == c && r <= 1))
                    )
                      return (
                        h && (t.__index = u + 1),
                        c && i && i.clone ? c.clone() : c
                      );
                    if (
                      ((c = a.create(o)),
                      h && (c.__read = !0),
                      (c =
                        c.initialize.apply(
                          c,
                          u > 0 || u + r < l ? a.slice(t, u, u + r) : t,
                        ) || c),
                      h)
                    ) {
                      t.__index = u + c.__read;
                      var f = c.__filtered;
                      f && ((t.__filtered = f), (c.__filtered = n)),
                        (c.__read = n);
                    }
                    return c;
                  },
                  peek: function (t, e) {
                    return t[(t.__index = e || t.__index || 0)];
                  },
                  remain: function (t) {
                    return t.length - (t.__index || 0);
                  },
                  readList: function (t, e, n, i) {
                    for (
                      var r,
                        s = [],
                        a = e || 0,
                        o = i ? a + i : t.length,
                        h = a;
                      h < o;
                      h++
                    )
                      s.push(
                        Array.isArray((r = t[h]))
                          ? this.read(r, 0, n)
                          : this.read(t, h, n, 1),
                      );
                    return s;
                  },
                  readNamed: function (t, e, i, r, s) {
                    var o = this.getNamed(t, e),
                      h = o !== n;
                    if (h) {
                      var u = t.__filtered;
                      if (!u) {
                        var l = this.getSource(t);
                        (u = t.__filtered = a.create(l)).__unfiltered = l;
                      }
                      u[e] = n;
                    }
                    return this.read(h ? [o] : t, i, r, s);
                  },
                  readSupported: function (t, e) {
                    var i = this.getSource(t),
                      r = this,
                      s = !1;
                    return (
                      i &&
                        Object.keys(i).forEach(function (i) {
                          if (i in e) {
                            var a = r.readNamed(t, i);
                            a !== n && (e[i] = a), (s = !0);
                          }
                        }),
                      s
                    );
                  },
                  getSource: function (t) {
                    var e = t.__source;
                    if (e === n) {
                      var i = 1 === t.length && t[0];
                      e = t.__source = i && a.isPlainObject(i) ? i : null;
                    }
                    return e;
                  },
                  getNamed: function (t, e) {
                    var n = this.getSource(t);
                    if (n) return e ? n[e] : t.__filtered || n;
                  },
                  hasNamed: function (t, e) {
                    return !!this.getNamed(t, e);
                  },
                  filter: function (t, e, i, r) {
                    var s;
                    function a(r) {
                      if (!((i && r in i) || (s && r in s))) {
                        var a = e[r];
                        a !== n && (t[r] = a);
                      }
                    }
                    if (r) {
                      for (var o, h = {}, u = 0, l = r.length; u < l; u++)
                        (o = r[u]) in e && (a(o), (h[o] = !0));
                      s = h;
                    }
                    return Object.keys(e.__unfiltered || e).forEach(a), t;
                  },
                  isPlainValue: function (t, e) {
                    return (
                      a.isPlainObject(t) ||
                      Array.isArray(t) ||
                      (e && 'string' == typeof t)
                    );
                  },
                  serialize: function (t, e, n, i) {
                    e = e || {};
                    var r,
                      s = !i;
                    if (
                      (s &&
                        ((e.formatter = new c(e.precision)),
                        (i = {
                          length: 0,
                          definitions: {},
                          references: {},
                          add: function (t, e) {
                            var n = '#' + t._id,
                              i = this.references[n];
                            if (!i) {
                              this.length++;
                              var r = e.call(t),
                                s = t._class;
                              s && r[0] !== s && r.unshift(s),
                                (this.definitions[n] = r),
                                (i = this.references[n] = [n]);
                            }
                            return i;
                          },
                        })),
                      t && t._serialize)
                    ) {
                      r = t._serialize(e, i);
                      var o = t._class;
                      !o ||
                        t._compactSerialize ||
                        (!s && n) ||
                        r[0] === o ||
                        r.unshift(o);
                    } else if (Array.isArray(t)) {
                      r = [];
                      for (var h = 0, u = t.length; h < u; h++)
                        r[h] = a.serialize(t[h], e, n, i);
                    } else if (a.isPlainObject(t)) {
                      r = {};
                      var l = Object.keys(t);
                      for (h = 0, u = l.length; h < u; h++) {
                        var f = l[h];
                        r[f] = a.serialize(t[f], e, n, i);
                      }
                    } else
                      r =
                        'number' == typeof t
                          ? e.formatter.number(t, e.precision)
                          : t;
                    return s && i.length > 0
                      ? [['dictionary', i.definitions], r]
                      : r;
                  },
                  deserialize: function (t, e, n, i, r) {
                    var s = t,
                      o = !n,
                      h = o && t && t.length && 'dictionary' === t[0][0];
                    if (((n = n || {}), Array.isArray(t))) {
                      var u = t[0],
                        l = 'dictionary' === u;
                      if (1 == t.length && /^#/.test(u)) return n.dictionary[u];
                      s = [];
                      for (
                        var c = (u = a.exports[u]) ? 1 : 0, f = t.length;
                        c < f;
                        c++
                      )
                        s.push(a.deserialize(t[c], e, n, l, h));
                      if (u) {
                        var d = s;
                        s = e ? e(u, d, o || r) : new u(d);
                      }
                    } else if (a.isPlainObject(t))
                      for (var _ in ((s = {}), i && (n.dictionary = s), t))
                        s[_] = a.deserialize(t[_], e, n);
                    return h ? s[1] : s;
                  },
                  exportJSON: function (t, e) {
                    var n = a.serialize(t, e);
                    return e && 0 == e.asString ? n : JSON.stringify(n);
                  },
                  importJSON: function (t, e) {
                    return a.deserialize(
                      'string' == typeof t ? JSON.parse(t) : t,
                      function (t, n, i) {
                        var r = i && e && e.constructor === t,
                          s = r ? e : a.create(t.prototype);
                        if (
                          1 === n.length &&
                          s instanceof C &&
                          (r || !(s instanceof k))
                        ) {
                          var o = n[0];
                          a.isPlainObject(o) &&
                            ((o.insert = !1),
                            r && (n = n.concat([{ insert: !0 }])));
                        }
                        return (r ? s.set : t).apply(s, n), r && (e = null), s;
                      },
                    );
                  },
                  push: function (t, e) {
                    var n = e.length;
                    if (n < 4096) t.push.apply(t, e);
                    else {
                      var i = t.length;
                      t.length += n;
                      for (var r = 0; r < n; r++) t[i + r] = e[r];
                    }
                    return t;
                  },
                  splice: function (t, e, i, r) {
                    var s = e && e.length,
                      o = i === n;
                    (i = o ? t.length : i) > t.length && (i = t.length);
                    for (var h = 0; h < s; h++) e[h]._index = i + h;
                    if (o) return a.push(t, e), [];
                    var u = [i, r];
                    e && a.push(u, e);
                    for (
                      var l = t.splice.apply(t, u), c = ((h = 0), l.length);
                      h < c;
                      h++
                    )
                      l[h]._index = n;
                    for (h = i + s, c = t.length; h < c; h++) t[h]._index = h;
                    return l;
                  },
                  capitalize: function (t) {
                    return t.replace(/\b[a-z]/g, function (t) {
                      return t.toUpperCase();
                    });
                  },
                  camelize: function (t) {
                    return t.replace(/-(.)/g, function (t, e) {
                      return e.toUpperCase();
                    });
                  },
                  hyphenate: function (t) {
                    return t.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                  },
                },
              },
            );
          var o = {
              on: function (t, e) {
                if ('string' != typeof t)
                  a.each(
                    t,
                    function (t, e) {
                      this.on(e, t);
                    },
                    this,
                  );
                else {
                  var n = this._eventTypes,
                    i = n && n[t],
                    r = (this._callbacks = this._callbacks || {});
                  -1 === (r = r[t] = r[t] || []).indexOf(e) &&
                    (r.push(e),
                    i &&
                      i.install &&
                      1 === r.length &&
                      i.install.call(this, t));
                }
                return this;
              },
              off: function (t, e) {
                if ('string' == typeof t) {
                  var n,
                    i = this._eventTypes,
                    r = i && i[t],
                    s = this._callbacks && this._callbacks[t];
                  return (
                    s &&
                      (!e || (-1 !== (n = s.indexOf(e)) && 1 === s.length)
                        ? (r && r.uninstall && r.uninstall.call(this, t),
                          delete this._callbacks[t])
                        : -1 !== n && s.splice(n, 1)),
                    this
                  );
                }
                a.each(
                  t,
                  function (t, e) {
                    this.off(e, t);
                  },
                  this,
                );
              },
              once: function (t, e) {
                return this.on(t, function n() {
                  e.apply(this, arguments), this.off(t, n);
                });
              },
              emit: function (t, e) {
                var n = this._callbacks && this._callbacks[t];
                if (!n) return !1;
                var i = a.slice(arguments, 1),
                  r = e && e.target && !e.currentTarget;
                (n = n.slice()), r && (e.currentTarget = this);
                for (var s = 0, o = n.length; s < o; s++)
                  if (0 == n[s].apply(this, i)) {
                    e && e.stop && e.stop();
                    break;
                  }
                return r && delete e.currentTarget, !0;
              },
              responds: function (t) {
                return !(!this._callbacks || !this._callbacks[t]);
              },
              attach: '#on',
              detach: '#off',
              fire: '#emit',
              _installEvents: function (t) {
                var e = this._eventTypes,
                  n = this._callbacks,
                  i = t ? 'install' : 'uninstall';
                if (e)
                  for (var r in n)
                    if (n[r].length > 0) {
                      var s = e[r],
                        a = s && s[i];
                      a && a.call(this, r);
                    }
              },
              statics: {
                inject: function t(e) {
                  var n = e._events;
                  if (n) {
                    var i = {};
                    a.each(n, function (t, n) {
                      var r = 'string' == typeof t,
                        s = r ? t : n,
                        o = a.capitalize(s),
                        h = s.substring(2).toLowerCase();
                      (i[h] = r ? {} : t),
                        (s = '_' + s),
                        (e['get' + o] = function () {
                          return this[s];
                        }),
                        (e['set' + o] = function (t) {
                          var e = this[s];
                          e && this.off(h, e),
                            t && this.on(h, t),
                            (this[s] = t);
                        });
                    }),
                      (e._eventTypes = i);
                  }
                  return t.base.apply(this, arguments);
                },
              },
            },
            h = a.extend({
              _class: 'PaperScope',
              initialize: function t() {
                (ht = this),
                  (this.settings = new a({
                    applyMatrix: !0,
                    insertItems: !0,
                    handleSize: 4,
                    hitTolerance: 0,
                  })),
                  (this.project = null),
                  (this.projects = []),
                  (this.tools = []),
                  (this._id = t._id++),
                  (t._scopes[this._id] = this);
                var n = t.prototype;
                if (!this.support) {
                  var i = rt.getContext(1, 1) || {};
                  (n.support = {
                    nativeDash: 'setLineDash' in i || 'mozDash' in i,
                    nativeBlendModes: st.nativeModes,
                  }),
                    rt.release(i);
                }
                if (!this.agent) {
                  var r = e.navigator.userAgent.toLowerCase(),
                    s = (/(darwin|win|mac|linux|freebsd|sunos)/.exec(r) ||
                      [])[0],
                    o = 'darwin' === s ? 'mac' : s,
                    h = (n.agent = n.browser = { platform: o });
                  o && (h[o] = !0),
                    r.replace(
                      /(opera|chrome|safari|webkit|firefox|msie|trident|atom|node|jsdom)\/?\s*([.\d]+)(?:.*version\/([.\d]+))?(?:.*rv\:v?([.\d]+))?/g,
                      function (t, e, n, i, r) {
                        if (!h.chrome) {
                          var s =
                            'opera' === e
                              ? i
                              : /^(node|trident)$/.test(e)
                              ? r
                              : n;
                          (h.version = s),
                            (h.versionNumber = parseFloat(s)),
                            (e = { trident: 'msie', jsdom: 'node' }[e] || e),
                            (h.name = e),
                            (h[e] = !0);
                        }
                      },
                    ),
                    h.chrome && delete h.webkit,
                    h.atom && delete h.chrome;
                }
              },
              version: '0.12.11',
              getView: function () {
                var t = this.project;
                return t && t._view;
              },
              getPaper: function () {
                return this;
              },
              execute: function (t, e) {
                var n = ht.PaperScript.execute(t, this, e);
                return G.updateFocus(), n;
              },
              install: function (t) {
                var e = this;
                for (var n in (a.each(['project', 'view', 'tool'], function (
                  n,
                ) {
                  a.define(t, n, {
                    configurable: !0,
                    get: function () {
                      return e[n];
                    },
                  });
                }),
                this))
                  !/^_/.test(n) && this[n] && (t[n] = this[n]);
              },
              setup: function (t) {
                return (ht = this), (this.project = new b(t)), this;
              },
              createCanvas: function (t, e) {
                return rt.getCanvas(t, e);
              },
              activate: function () {
                ht = this;
              },
              clear: function () {
                for (
                  var t = this.projects, e = this.tools, n = t.length - 1;
                  n >= 0;
                  n--
                )
                  t[n].remove();
                for (n = e.length - 1; n >= 0; n--) e[n].remove();
              },
              remove: function () {
                this.clear(), delete h._scopes[this._id];
              },
              statics: new (function () {
                function t(t) {
                  return (
                    (t += 'Attribute'),
                    function (e, n) {
                      return e[t](n) || e[t]('data-paper-' + n);
                    }
                  );
                }
                return {
                  _scopes: {},
                  _id: 0,
                  get: function (t) {
                    return this._scopes[t] || null;
                  },
                  getAttribute: t('get'),
                  hasAttribute: t('has'),
                };
              })(),
            }),
            u = a.extend(o, {
              initialize: function (t) {
                (this._scope = ht),
                  (this._index = this._scope[this._list].push(this) - 1),
                  (!t && this._scope[this._reference]) || this.activate();
              },
              activate: function () {
                if (!this._scope) return !1;
                var t = this._scope[this._reference];
                return (
                  t && t !== this && t.emit('deactivate'),
                  (this._scope[this._reference] = this),
                  this.emit('activate', t),
                  !0
                );
              },
              isActive: function () {
                return this._scope[this._reference] === this;
              },
              remove: function () {
                return (
                  null != this._index &&
                  (a.splice(this._scope[this._list], null, this._index, 1),
                  this._scope[this._reference] == this &&
                    (this._scope[this._reference] = null),
                  (this._scope = null),
                  !0)
                );
              },
              getView: function () {
                return this._scope.getView();
              },
            }),
            l = {
              findItemBoundsCollisions: function (t, e, n) {
                function i(t) {
                  for (var e = new Array(t.length), n = 0; n < t.length; n++) {
                    var i = t[n].getBounds();
                    e[n] = [i.left, i.top, i.right, i.bottom];
                  }
                  return e;
                }
                var r = i(t),
                  s = e && e !== t ? i(e) : r;
                return this.findBoundsCollisions(r, s, n || 0);
              },
              findCurveBoundsCollisions: function (t, e, n, i) {
                function r(t) {
                  for (
                    var e = Math.min,
                      n = Math.max,
                      i = new Array(t.length),
                      r = 0;
                    r < t.length;
                    r++
                  ) {
                    var s = t[r];
                    i[r] = [
                      e(s[0], s[2], s[4], s[6]),
                      e(s[1], s[3], s[5], s[7]),
                      n(s[0], s[2], s[4], s[6]),
                      n(s[1], s[3], s[5], s[7]),
                    ];
                  }
                  return i;
                }
                var s = r(t),
                  a = e && e !== t ? r(e) : s;
                if (i) {
                  for (
                    var o = this.findBoundsCollisions(s, a, n || 0, !1, !0),
                      h = this.findBoundsCollisions(s, a, n || 0, !0, !0),
                      u = [],
                      l = 0,
                      c = o.length;
                    l < c;
                    l++
                  )
                    u[l] = { hor: o[l], ver: h[l] };
                  return u;
                }
                return this.findBoundsCollisions(s, a, n || 0);
              },
              findBoundsCollisions: function (t, e, n, i, r) {
                var s = !e || t === e,
                  a = s ? t : t.concat(e),
                  o = t.length,
                  h = a.length;
                function u(t, e, n) {
                  for (var i = 0, r = t.length; i < r; ) {
                    var s = (r + i) >>> 1;
                    a[t[s]][e] < n ? (i = s + 1) : (r = s);
                  }
                  return i - 1;
                }
                for (
                  var l = i ? 1 : 0,
                    c = l + 2,
                    f = i ? 0 : 1,
                    d = f + 2,
                    _ = new Array(h),
                    g = 0;
                  g < h;
                  g++
                )
                  _[g] = g;
                _.sort(function (t, e) {
                  return a[t][l] - a[e][l];
                });
                var v = [],
                  p = new Array(o);
                for (g = 0; g < h; g++) {
                  var m = _[g],
                    y = a[m],
                    w = s ? m : m - o,
                    x = m < o,
                    b = s || !x,
                    C = x ? [] : null;
                  if (v.length) {
                    var S = u(v, c, y[l] - n) + 1;
                    if ((v.splice(0, S), s && r)) {
                      C = C.concat(v);
                      for (var k = 0; k < v.length; k++) {
                        p[(M = v[k])].push(w);
                      }
                    } else {
                      var I = y[d],
                        P = y[f];
                      for (k = 0; k < v.length; k++) {
                        var M = v[k],
                          A = a[M],
                          T = M < o,
                          O = s || M >= o;
                        (r ||
                          (((x && O) || (b && T)) &&
                            I >= A[f] - n &&
                            P <= A[d] + n)) &&
                          (x && O && C.push(s ? M : M - o),
                          b && T && p[M].push(w));
                      }
                    }
                  }
                  if ((x && (t === e && C.push(m), (p[m] = C)), v.length)) {
                    var z = u(v, c, y[c]);
                    v.splice(z + 1, 0, m);
                  } else v.push(m);
                }
                for (g = 0; g < p.length; g++) {
                  var E = p[g];
                  E &&
                    E.sort(function (t, e) {
                      return t - e;
                    });
                }
                return p;
              },
            },
            c = a.extend({
              initialize: function (t) {
                (this.precision = a.pick(t, 5)),
                  (this.multiplier = Math.pow(10, this.precision));
              },
              number: function (t) {
                return this.precision < 16
                  ? Math.round(t * this.multiplier) / this.multiplier
                  : t;
              },
              pair: function (t, e, n) {
                return this.number(t) + (n || ',') + this.number(e);
              },
              point: function (t, e) {
                return this.number(t.x) + (e || ',') + this.number(t.y);
              },
              size: function (t, e) {
                return (
                  this.number(t.width) + (e || ',') + this.number(t.height)
                );
              },
              rectangle: function (t, e) {
                return this.point(t, e) + (e || ',') + this.size(t, e);
              },
            });
          c.instance = new c();
          var f = new (function () {
              var t = [
                  [0.5773502691896257],
                  [0, 0.7745966692414834],
                  [0.33998104358485626, 0.8611363115940526],
                  [0, 0.5384693101056831, 0.906179845938664],
                  [0.2386191860831969, 0.6612093864662645, 0.932469514203152],
                  [
                    0,
                    0.4058451513773972,
                    0.7415311855993945,
                    0.9491079123427585,
                  ],
                  [
                    0.1834346424956498,
                    0.525532409916329,
                    0.7966664774136267,
                    0.9602898564975363,
                  ],
                  [
                    0,
                    0.3242534234038089,
                    0.6133714327005904,
                    0.8360311073266358,
                    0.9681602395076261,
                  ],
                  [
                    0.14887433898163122,
                    0.4333953941292472,
                    0.6794095682990244,
                    0.8650633666889845,
                    0.9739065285171717,
                  ],
                  [
                    0,
                    0.26954315595234496,
                    0.5190961292068118,
                    0.7301520055740494,
                    0.8870625997680953,
                    0.978228658146057,
                  ],
                  [
                    0.1252334085114689,
                    0.3678314989981802,
                    0.5873179542866175,
                    0.7699026741943047,
                    0.9041172563704749,
                    0.9815606342467192,
                  ],
                  [
                    0,
                    0.2304583159551348,
                    0.44849275103644687,
                    0.6423493394403402,
                    0.8015780907333099,
                    0.9175983992229779,
                    0.9841830547185881,
                  ],
                  [
                    0.10805494870734367,
                    0.31911236892788974,
                    0.5152486363581541,
                    0.6872929048116855,
                    0.827201315069765,
                    0.9284348836635735,
                    0.9862838086968123,
                  ],
                  [
                    0,
                    0.20119409399743451,
                    0.3941513470775634,
                    0.5709721726085388,
                    0.7244177313601701,
                    0.8482065834104272,
                    0.937273392400706,
                    0.9879925180204854,
                  ],
                  [
                    0.09501250983763744,
                    0.2816035507792589,
                    0.45801677765722737,
                    0.6178762444026438,
                    0.755404408355003,
                    0.8656312023878318,
                    0.9445750230732326,
                    0.9894009349916499,
                  ],
                ],
                e = [
                  [1],
                  [0.8888888888888888, 0.5555555555555556],
                  [0.6521451548625461, 0.34785484513745385],
                  [
                    0.5688888888888889,
                    0.47862867049936647,
                    0.23692688505618908,
                  ],
                  [
                    0.46791393457269104,
                    0.3607615730481386,
                    0.17132449237917036,
                  ],
                  [
                    0.4179591836734694,
                    0.3818300505051189,
                    0.27970539148927664,
                    0.1294849661688697,
                  ],
                  [
                    0.362683783378362,
                    0.31370664587788727,
                    0.22238103445337448,
                    0.10122853629037626,
                  ],
                  [
                    0.3302393550012598,
                    0.31234707704000286,
                    0.26061069640293544,
                    0.1806481606948574,
                    0.08127438836157441,
                  ],
                  [
                    0.29552422471475287,
                    0.26926671930999635,
                    0.21908636251598204,
                    0.1494513491505806,
                    0.06667134430868814,
                  ],
                  [
                    0.2729250867779006,
                    0.26280454451024665,
                    0.23319376459199048,
                    0.18629021092773426,
                    0.1255803694649046,
                    0.05566856711617366,
                  ],
                  [
                    0.24914704581340277,
                    0.2334925365383548,
                    0.20316742672306592,
                    0.16007832854334622,
                    0.10693932599531843,
                    0.04717533638651183,
                  ],
                  [
                    0.2325515532308739,
                    0.22628318026289723,
                    0.2078160475368885,
                    0.17814598076194574,
                    0.13887351021978725,
                    0.09212149983772845,
                    0.04048400476531588,
                  ],
                  [
                    0.2152638534631578,
                    0.2051984637212956,
                    0.18553839747793782,
                    0.15720316715819355,
                    0.12151857068790319,
                    0.08015808715976021,
                    0.03511946033175186,
                  ],
                  [
                    0.2025782419255613,
                    0.19843148532711158,
                    0.1861610000155622,
                    0.16626920581699392,
                    0.13957067792615432,
                    0.10715922046717194,
                    0.07036604748810812,
                    0.03075324199611727,
                  ],
                  [
                    0.1894506104550685,
                    0.18260341504492358,
                    0.16915651939500254,
                    0.14959598881657674,
                    0.12462897125553388,
                    0.09515851168249279,
                    0.062253523938647894,
                    0.027152459411754096,
                  ],
                ],
                n = Math.abs,
                i = Math.sqrt,
                r = Math.pow,
                s =
                  Math.log2 ||
                  function (t) {
                    return Math.log(t) * Math.LOG2E;
                  };
              function a(t, e, n) {
                return t < e ? e : t > n ? n : t;
              }
              function o(t, e, i) {
                function r(t) {
                  var e = 134217729 * t,
                    n = t - e + e;
                  return [n, t - n];
                }
                var s = e * e - t * i,
                  a = e * e + t * i;
                if (3 * n(s) < a) {
                  var o = r(t),
                    h = r(e),
                    u = r(i),
                    l = e * e,
                    c = t * i;
                  s =
                    l -
                    c +
                    (h[0] * h[0] -
                      l +
                      2 * h[0] * h[1] +
                      h[1] * h[1] -
                      (o[0] * u[0] -
                        c +
                        o[0] * u[1] +
                        o[1] * u[0] +
                        o[1] * u[1]));
                }
                return s;
              }
              function h() {
                var t = Math.max.apply(Math, arguments);
                return t && (t < 1e-8 || t > 1e8) ? r(2, -Math.round(s(t))) : 0;
              }
              return {
                EPSILON: 1e-12,
                MACHINE_EPSILON: 1.12e-16,
                CURVETIME_EPSILON: 1e-8,
                GEOMETRIC_EPSILON: 1e-7,
                TRIGONOMETRIC_EPSILON: 1e-8,
                KAPPA: (4 * (i(2) - 1)) / 3,
                isZero: function (t) {
                  return t >= -1e-12 && t <= 1e-12;
                },
                isMachineZero: function (t) {
                  return t >= -1.12e-16 && t <= 1.12e-16;
                },
                clamp: a,
                integrate: function (n, i, r, s) {
                  for (
                    var a = t[s - 2],
                      o = e[s - 2],
                      h = 0.5 * (r - i),
                      u = h + i,
                      l = 0,
                      c = (s + 1) >> 1,
                      f = 1 & s ? o[l++] * n(u) : 0;
                    l < c;

                  ) {
                    var d = h * a[l];
                    f += o[l++] * (n(u + d) + n(u - d));
                  }
                  return h * f;
                },
                findRoot: function (t, e, i, r, s, o, h) {
                  for (var u = 0; u < o; u++) {
                    var l = t(i),
                      c = l / e(i),
                      f = i - c;
                    if (n(c) < h) {
                      i = f;
                      break;
                    }
                    l > 0
                      ? ((s = i), (i = f <= r ? 0.5 * (r + s) : f))
                      : ((r = i), (i = f >= s ? 0.5 * (r + s) : f));
                  }
                  return a(i, r, s);
                },
                solveQuadratic: function (t, e, r, s, u, l) {
                  var c,
                    f = 1 / 0;
                  if (n(t) < 1e-12) {
                    if (n(e) < 1e-12) return n(r) < 1e-12 ? -1 : 0;
                    c = -r / e;
                  } else {
                    var d = o(t, (e *= -0.5), r);
                    if (d && n(d) < 1.12e-16) {
                      var _ = h(n(t), n(e), n(r));
                      _ && (d = o((t *= _), (e *= _), (r *= _)));
                    }
                    if (d >= -1.12e-16) {
                      var g = d < 0 ? 0 : i(d),
                        v = e + (e < 0 ? -g : g);
                      0 === v ? (f = -(c = r / t)) : ((c = v / t), (f = r / v));
                    }
                  }
                  var p = 0,
                    m = null == u,
                    y = u - 1e-12,
                    w = l + 1e-12;
                  return (
                    isFinite(c) &&
                      (m || (c > y && c < w)) &&
                      (s[p++] = m ? c : a(c, u, l)),
                    f !== c &&
                      isFinite(f) &&
                      (m || (f > y && f < w)) &&
                      (s[p++] = m ? f : a(f, u, l)),
                    p
                  );
                },
                solveCubic: function (t, e, s, o, u, l, c) {
                  var d,
                    _,
                    g,
                    v,
                    p,
                    m = h(n(t), n(e), n(s), n(o));
                  function y(n) {
                    var i = t * (d = n);
                    (v = (i + (_ = i + e)) * d + (g = _ * d + s)),
                      (p = g * d + o);
                  }
                  if (
                    (m && ((t *= m), (e *= m), (s *= m), (o *= m)),
                    n(t) < 1e-12)
                  )
                    (t = e), (_ = s), (g = o), (d = 1 / 0);
                  else if (n(o) < 1e-12) (_ = e), (g = s), (d = 0);
                  else {
                    y(-e / t / 3);
                    var w = p / t,
                      x = r(n(w), 1 / 3),
                      b = w < 0 ? -1 : 1,
                      C = -v / t,
                      S = C > 0 ? 1.324717957244746 * Math.max(x, i(C)) : x,
                      k = d - b * S;
                    if (k !== d) {
                      do {
                        y(k), (k = 0 === v ? d : d - p / v / (1 + 1.12e-16));
                      } while (b * k > b * d);
                      n(t) * d * d > n(o / d) && (_ = ((g = -o / d) - s) / d);
                    }
                  }
                  var I = f.solveQuadratic(t, _, g, u, l, c),
                    P = null == l;
                  return (
                    isFinite(d) &&
                      (0 === I || (I > 0 && d !== u[0] && d !== u[1])) &&
                      (P || (d > l - 1e-12 && d < c + 1e-12)) &&
                      (u[I++] = P ? d : a(d, l, c)),
                    I
                  );
                },
              };
            })(),
            d = {
              _id: 1,
              _pools: {},
              get: function (t) {
                if (t) {
                  var e = this._pools[t];
                  return e || (e = this._pools[t] = { _id: 1 }), e._id++;
                }
                return this._id++;
              },
            },
            _ = a.extend(
              {
                _class: 'Point',
                _readIndex: !0,
                initialize: function (t, e) {
                  var n = i(t),
                    r = this.__read,
                    s = 0;
                  if ('number' === n) {
                    var a = 'number' == typeof e;
                    this._set(t, a ? e : t), r && (s = a ? 2 : 1);
                  } else if ('undefined' === n || null === t)
                    this._set(0, 0), r && (s = null === t ? 1 : 0);
                  else {
                    var o = 'string' === n ? t.split(/[\s,]+/) || [] : t;
                    (s = 1),
                      Array.isArray(o)
                        ? this._set(+o[0], +(o.length > 1 ? o[1] : o[0]))
                        : 'x' in o
                        ? this._set(o.x || 0, o.y || 0)
                        : 'width' in o
                        ? this._set(o.width || 0, o.height || 0)
                        : 'angle' in o
                        ? (this._set(o.length || 0, 0),
                          this.setAngle(o.angle || 0))
                        : (this._set(0, 0), (s = 0));
                  }
                  return r && (this.__read = s), this;
                },
                set: '#initialize',
                _set: function (t, e) {
                  return (this.x = t), (this.y = e), this;
                },
                equals: function (t) {
                  return (
                    this === t ||
                    (t &&
                      ((this.x === t.x && this.y === t.y) ||
                        (Array.isArray(t) &&
                          this.x === t[0] &&
                          this.y === t[1]))) ||
                    !1
                  );
                },
                clone: function () {
                  return new _(this.x, this.y);
                },
                toString: function () {
                  var t = c.instance;
                  return (
                    '{ x: ' +
                    t.number(this.x) +
                    ', y: ' +
                    t.number(this.y) +
                    ' }'
                  );
                },
                _serialize: function (t) {
                  var e = t.formatter;
                  return [e.number(this.x), e.number(this.y)];
                },
                getLength: function () {
                  return Math.sqrt(this.x * this.x + this.y * this.y);
                },
                setLength: function (t) {
                  if (this.isZero()) {
                    var e = this._angle || 0;
                    this._set(Math.cos(e) * t, Math.sin(e) * t);
                  } else {
                    var n = t / this.getLength();
                    f.isZero(n) && this.getAngle(),
                      this._set(this.x * n, this.y * n);
                  }
                },
                getAngle: function () {
                  return (
                    (180 * this.getAngleInRadians.apply(this, arguments)) /
                    Math.PI
                  );
                },
                setAngle: function (t) {
                  this.setAngleInRadians.call(this, (t * Math.PI) / 180);
                },
                getAngleInDegrees: '#getAngle',
                setAngleInDegrees: '#setAngle',
                getAngleInRadians: function () {
                  if (arguments.length) {
                    var t = _.read(arguments),
                      e = this.getLength() * t.getLength();
                    if (f.isZero(e)) return NaN;
                    var n = this.dot(t) / e;
                    return Math.acos(n < -1 ? -1 : n > 1 ? 1 : n);
                  }
                  return this.isZero()
                    ? this._angle || 0
                    : (this._angle = Math.atan2(this.y, this.x));
                },
                setAngleInRadians: function (t) {
                  if (((this._angle = t), !this.isZero())) {
                    var e = this.getLength();
                    this._set(Math.cos(t) * e, Math.sin(t) * e);
                  }
                },
                getQuadrant: function () {
                  return this.x >= 0
                    ? this.y >= 0
                      ? 1
                      : 4
                    : this.y >= 0
                    ? 2
                    : 3;
                },
              },
              {
                beans: !1,
                getDirectedAngle: function () {
                  var t = _.read(arguments);
                  return (
                    (180 * Math.atan2(this.cross(t), this.dot(t))) / Math.PI
                  );
                },
                getDistance: function () {
                  var t = arguments,
                    e = _.read(t),
                    n = e.x - this.x,
                    i = e.y - this.y,
                    r = n * n + i * i;
                  return a.read(t) ? r : Math.sqrt(r);
                },
                normalize: function (t) {
                  t === n && (t = 1);
                  var e = this.getLength(),
                    i = 0 !== e ? t / e : 0,
                    r = new _(this.x * i, this.y * i);
                  return i >= 0 && (r._angle = this._angle), r;
                },
                rotate: function (t, e) {
                  if (0 === t) return this.clone();
                  t = (t * Math.PI) / 180;
                  var n = e ? this.subtract(e) : this,
                    i = Math.sin(t),
                    r = Math.cos(t);
                  return (
                    (n = new _(n.x * r - n.y * i, n.x * i + n.y * r)),
                    e ? n.add(e) : n
                  );
                },
                transform: function (t) {
                  return t ? t._transformPoint(this) : this;
                },
                add: function () {
                  var t = _.read(arguments);
                  return new _(this.x + t.x, this.y + t.y);
                },
                subtract: function () {
                  var t = _.read(arguments);
                  return new _(this.x - t.x, this.y - t.y);
                },
                multiply: function () {
                  var t = _.read(arguments);
                  return new _(this.x * t.x, this.y * t.y);
                },
                divide: function () {
                  var t = _.read(arguments);
                  return new _(this.x / t.x, this.y / t.y);
                },
                modulo: function () {
                  var t = _.read(arguments);
                  return new _(this.x % t.x, this.y % t.y);
                },
                negate: function () {
                  return new _(-this.x, -this.y);
                },
                isInside: function () {
                  return m.read(arguments).contains(this);
                },
                isClose: function () {
                  var t = arguments,
                    e = _.read(t),
                    n = a.read(t);
                  return this.getDistance(e) <= n;
                },
                isCollinear: function () {
                  var t = _.read(arguments);
                  return _.isCollinear(this.x, this.y, t.x, t.y);
                },
                isColinear: '#isCollinear',
                isOrthogonal: function () {
                  var t = _.read(arguments);
                  return _.isOrthogonal(this.x, this.y, t.x, t.y);
                },
                isZero: function () {
                  var t = f.isZero;
                  return t(this.x) && t(this.y);
                },
                isNaN: (function (t) {
                  function e() {
                    return t.apply(this, arguments);
                  }
                  return (
                    (e.toString = function () {
                      return t.toString();
                    }),
                    e
                  );
                })(function () {
                  return isNaN(this.x) || isNaN(this.y);
                }),
                isInQuadrant: function (t) {
                  return (
                    this.x * (t > 1 && t < 4 ? -1 : 1) >= 0 &&
                    this.y * (t > 2 ? -1 : 1) >= 0
                  );
                },
                dot: function () {
                  var t = _.read(arguments);
                  return this.x * t.x + this.y * t.y;
                },
                cross: function () {
                  var t = _.read(arguments);
                  return this.x * t.y - this.y * t.x;
                },
                project: function () {
                  var t = _.read(arguments),
                    e = t.isZero() ? 0 : this.dot(t) / t.dot(t);
                  return new _(t.x * e, t.y * e);
                },
                statics: {
                  min: function () {
                    var t = arguments,
                      e = _.read(t),
                      n = _.read(t);
                    return new _(Math.min(e.x, n.x), Math.min(e.y, n.y));
                  },
                  max: function () {
                    var t = arguments,
                      e = _.read(t),
                      n = _.read(t);
                    return new _(Math.max(e.x, n.x), Math.max(e.y, n.y));
                  },
                  random: function () {
                    return new _(Math.random(), Math.random());
                  },
                  isCollinear: function (t, e, n, i) {
                    return (
                      Math.abs(t * i - e * n) <=
                      1e-8 * Math.sqrt((t * t + e * e) * (n * n + i * i))
                    );
                  },
                  isOrthogonal: function (t, e, n, i) {
                    return (
                      Math.abs(t * n + e * i) <=
                      1e-8 * Math.sqrt((t * t + e * e) * (n * n + i * i))
                    );
                  },
                },
              },
              a.each(
                ['round', 'ceil', 'floor', 'abs'],
                function (t) {
                  var e = Math[t];
                  this[t] = function () {
                    return new _(e(this.x), e(this.y));
                  };
                },
                {},
              ),
            ),
            g = _.extend({
              initialize: function (t, e, n, i) {
                (this._x = t),
                  (this._y = e),
                  (this._owner = n),
                  (this._setter = i);
              },
              _set: function (t, e, n) {
                return (
                  (this._x = t),
                  (this._y = e),
                  n || this._owner[this._setter](this),
                  this
                );
              },
              getX: function () {
                return this._x;
              },
              setX: function (t) {
                (this._x = t), this._owner[this._setter](this);
              },
              getY: function () {
                return this._y;
              },
              setY: function (t) {
                (this._y = t), this._owner[this._setter](this);
              },
              isSelected: function () {
                return !!(this._owner._selection & this._getSelection());
              },
              setSelected: function (t) {
                this._owner._changeSelection(this._getSelection(), t);
              },
              _getSelection: function () {
                return 'setPosition' === this._setter ? 4 : 0;
              },
            }),
            v = a.extend(
              {
                _class: 'Size',
                _readIndex: !0,
                initialize: function (t, e) {
                  var n = i(t),
                    r = this.__read,
                    s = 0;
                  if ('number' === n) {
                    var a = 'number' == typeof e;
                    this._set(t, a ? e : t), r && (s = a ? 2 : 1);
                  } else if ('undefined' === n || null === t)
                    this._set(0, 0), r && (s = null === t ? 1 : 0);
                  else {
                    var o = 'string' === n ? t.split(/[\s,]+/) || [] : t;
                    (s = 1),
                      Array.isArray(o)
                        ? this._set(+o[0], +(o.length > 1 ? o[1] : o[0]))
                        : 'width' in o
                        ? this._set(o.width || 0, o.height || 0)
                        : 'x' in o
                        ? this._set(o.x || 0, o.y || 0)
                        : (this._set(0, 0), (s = 0));
                  }
                  return r && (this.__read = s), this;
                },
                set: '#initialize',
                _set: function (t, e) {
                  return (this.width = t), (this.height = e), this;
                },
                equals: function (t) {
                  return (
                    t === this ||
                    (t &&
                      ((this.width === t.width && this.height === t.height) ||
                        (Array.isArray(t) &&
                          this.width === t[0] &&
                          this.height === t[1]))) ||
                    !1
                  );
                },
                clone: function () {
                  return new v(this.width, this.height);
                },
                toString: function () {
                  var t = c.instance;
                  return (
                    '{ width: ' +
                    t.number(this.width) +
                    ', height: ' +
                    t.number(this.height) +
                    ' }'
                  );
                },
                _serialize: function (t) {
                  var e = t.formatter;
                  return [e.number(this.width), e.number(this.height)];
                },
                add: function () {
                  var t = v.read(arguments);
                  return new v(this.width + t.width, this.height + t.height);
                },
                subtract: function () {
                  var t = v.read(arguments);
                  return new v(this.width - t.width, this.height - t.height);
                },
                multiply: function () {
                  var t = v.read(arguments);
                  return new v(this.width * t.width, this.height * t.height);
                },
                divide: function () {
                  var t = v.read(arguments);
                  return new v(this.width / t.width, this.height / t.height);
                },
                modulo: function () {
                  var t = v.read(arguments);
                  return new v(this.width % t.width, this.height % t.height);
                },
                negate: function () {
                  return new v(-this.width, -this.height);
                },
                isZero: function () {
                  var t = f.isZero;
                  return t(this.width) && t(this.height);
                },
                isNaN: (function (t) {
                  function e() {
                    return t.apply(this, arguments);
                  }
                  return (
                    (e.toString = function () {
                      return t.toString();
                    }),
                    e
                  );
                })(function () {
                  return isNaN(this.width) || isNaN(this.height);
                }),
                statics: {
                  min: function (t, e) {
                    return new v(
                      Math.min(t.width, e.width),
                      Math.min(t.height, e.height),
                    );
                  },
                  max: function (t, e) {
                    return new v(
                      Math.max(t.width, e.width),
                      Math.max(t.height, e.height),
                    );
                  },
                  random: function () {
                    return new v(Math.random(), Math.random());
                  },
                },
              },
              a.each(
                ['round', 'ceil', 'floor', 'abs'],
                function (t) {
                  var e = Math[t];
                  this[t] = function () {
                    return new v(e(this.width), e(this.height));
                  };
                },
                {},
              ),
            ),
            p = v.extend({
              initialize: function (t, e, n, i) {
                (this._width = t),
                  (this._height = e),
                  (this._owner = n),
                  (this._setter = i);
              },
              _set: function (t, e, n) {
                return (
                  (this._width = t),
                  (this._height = e),
                  n || this._owner[this._setter](this),
                  this
                );
              },
              getWidth: function () {
                return this._width;
              },
              setWidth: function (t) {
                (this._width = t), this._owner[this._setter](this);
              },
              getHeight: function () {
                return this._height;
              },
              setHeight: function (t) {
                (this._height = t), this._owner[this._setter](this);
              },
            }),
            m = a.extend(
              {
                _class: 'Rectangle',
                _readIndex: !0,
                beans: !0,
                initialize: function (t, e, r, s) {
                  var o,
                    h = arguments,
                    u = i(t);
                  if (
                    ('number' === u
                      ? (this._set(t, e, r, s), (o = 4))
                      : 'undefined' === u || null === t
                      ? (this._set(0, 0, 0, 0), (o = null === t ? 1 : 0))
                      : 1 === h.length &&
                        (Array.isArray(t)
                          ? (this._set.apply(this, t), (o = 1))
                          : t.x !== n || t.width !== n
                          ? (this._set(
                              t.x || 0,
                              t.y || 0,
                              t.width || 0,
                              t.height || 0,
                            ),
                            (o = 1))
                          : t.from === n &&
                            t.to === n &&
                            (this._set(0, 0, 0, 0),
                            a.readSupported(h, this) && (o = 1))),
                    o === n)
                  ) {
                    var l,
                      c,
                      f = _.readNamed(h, 'from'),
                      d = a.peek(h),
                      g = f.x,
                      p = f.y;
                    if ((d && d.x !== n) || a.hasNamed(h, 'to')) {
                      var m = _.readNamed(h, 'to');
                      (l = m.x - g),
                        (c = m.y - p),
                        l < 0 && ((g = m.x), (l = -l)),
                        c < 0 && ((p = m.y), (c = -c));
                    } else {
                      var y = v.read(h);
                      (l = y.width), (c = y.height);
                    }
                    this._set(g, p, l, c), (o = h.__index);
                  }
                  var w = h.__filtered;
                  return (
                    w && (this.__filtered = w),
                    this.__read && (this.__read = o),
                    this
                  );
                },
                set: '#initialize',
                _set: function (t, e, n, i) {
                  return (
                    (this.x = t),
                    (this.y = e),
                    (this.width = n),
                    (this.height = i),
                    this
                  );
                },
                clone: function () {
                  return new m(this.x, this.y, this.width, this.height);
                },
                equals: function (t) {
                  var e = a.isPlainValue(t) ? m.read(arguments) : t;
                  return (
                    e === this ||
                    (e &&
                      this.x === e.x &&
                      this.y === e.y &&
                      this.width === e.width &&
                      this.height === e.height) ||
                    !1
                  );
                },
                toString: function () {
                  var t = c.instance;
                  return (
                    '{ x: ' +
                    t.number(this.x) +
                    ', y: ' +
                    t.number(this.y) +
                    ', width: ' +
                    t.number(this.width) +
                    ', height: ' +
                    t.number(this.height) +
                    ' }'
                  );
                },
                _serialize: function (t) {
                  var e = t.formatter;
                  return [
                    e.number(this.x),
                    e.number(this.y),
                    e.number(this.width),
                    e.number(this.height),
                  ];
                },
                getPoint: function (t) {
                  return new (t ? _ : g)(this.x, this.y, this, 'setPoint');
                },
                setPoint: function () {
                  var t = _.read(arguments);
                  (this.x = t.x), (this.y = t.y);
                },
                getSize: function (t) {
                  return new (t ? v : p)(
                    this.width,
                    this.height,
                    this,
                    'setSize',
                  );
                },
                _fw: 1,
                _fh: 1,
                setSize: function () {
                  var t = v.read(arguments),
                    e = this._sx,
                    n = this._sy,
                    i = t.width,
                    r = t.height;
                  e && (this.x += (this.width - i) * e),
                    n && (this.y += (this.height - r) * n),
                    (this.width = i),
                    (this.height = r),
                    (this._fw = this._fh = 1);
                },
                getLeft: function () {
                  return this.x;
                },
                setLeft: function (t) {
                  if (!this._fw) {
                    var e = t - this.x;
                    this.width -= 0.5 === this._sx ? 2 * e : e;
                  }
                  (this.x = t), (this._sx = this._fw = 0);
                },
                getTop: function () {
                  return this.y;
                },
                setTop: function (t) {
                  if (!this._fh) {
                    var e = t - this.y;
                    this.height -= 0.5 === this._sy ? 2 * e : e;
                  }
                  (this.y = t), (this._sy = this._fh = 0);
                },
                getRight: function () {
                  return this.x + this.width;
                },
                setRight: function (t) {
                  if (!this._fw) {
                    var e = t - this.x;
                    this.width = 0.5 === this._sx ? 2 * e : e;
                  }
                  (this.x = t - this.width), (this._sx = 1), (this._fw = 0);
                },
                getBottom: function () {
                  return this.y + this.height;
                },
                setBottom: function (t) {
                  if (!this._fh) {
                    var e = t - this.y;
                    this.height = 0.5 === this._sy ? 2 * e : e;
                  }
                  (this.y = t - this.height), (this._sy = 1), (this._fh = 0);
                },
                getCenterX: function () {
                  return this.x + this.width / 2;
                },
                setCenterX: function (t) {
                  this._fw || 0.5 === this._sx
                    ? (this.x = t - this.width / 2)
                    : (this._sx && (this.x += 2 * (t - this.x) * this._sx),
                      (this.width = 2 * (t - this.x))),
                    (this._sx = 0.5),
                    (this._fw = 0);
                },
                getCenterY: function () {
                  return this.y + this.height / 2;
                },
                setCenterY: function (t) {
                  this._fh || 0.5 === this._sy
                    ? (this.y = t - this.height / 2)
                    : (this._sy && (this.y += 2 * (t - this.y) * this._sy),
                      (this.height = 2 * (t - this.y))),
                    (this._sy = 0.5),
                    (this._fh = 0);
                },
                getCenter: function (t) {
                  return new (t ? _ : g)(
                    this.getCenterX(),
                    this.getCenterY(),
                    this,
                    'setCenter',
                  );
                },
                setCenter: function () {
                  var t = _.read(arguments);
                  return this.setCenterX(t.x), this.setCenterY(t.y), this;
                },
                getArea: function () {
                  return this.width * this.height;
                },
                isEmpty: function () {
                  return 0 === this.width || 0 === this.height;
                },
                contains: function (t) {
                  return (t && t.width !== n) ||
                    4 === (Array.isArray(t) ? t : arguments).length
                    ? this._containsRectangle(m.read(arguments))
                    : this._containsPoint(_.read(arguments));
                },
                _containsPoint: function (t) {
                  var e = t.x,
                    n = t.y;
                  return (
                    e >= this.x &&
                    n >= this.y &&
                    e <= this.x + this.width &&
                    n <= this.y + this.height
                  );
                },
                _containsRectangle: function (t) {
                  var e = t.x,
                    n = t.y;
                  return (
                    e >= this.x &&
                    n >= this.y &&
                    e + t.width <= this.x + this.width &&
                    n + t.height <= this.y + this.height
                  );
                },
                intersects: function () {
                  var t = m.read(arguments),
                    e = a.read(arguments) || 0;
                  return (
                    t.x + t.width > this.x - e &&
                    t.y + t.height > this.y - e &&
                    t.x < this.x + this.width + e &&
                    t.y < this.y + this.height + e
                  );
                },
                intersect: function () {
                  var t = m.read(arguments),
                    e = Math.max(this.x, t.x),
                    n = Math.max(this.y, t.y),
                    i = Math.min(this.x + this.width, t.x + t.width),
                    r = Math.min(this.y + this.height, t.y + t.height);
                  return new m(e, n, i - e, r - n);
                },
                unite: function () {
                  var t = m.read(arguments),
                    e = Math.min(this.x, t.x),
                    n = Math.min(this.y, t.y),
                    i = Math.max(this.x + this.width, t.x + t.width),
                    r = Math.max(this.y + this.height, t.y + t.height);
                  return new m(e, n, i - e, r - n);
                },
                include: function () {
                  var t = _.read(arguments),
                    e = Math.min(this.x, t.x),
                    n = Math.min(this.y, t.y),
                    i = Math.max(this.x + this.width, t.x),
                    r = Math.max(this.y + this.height, t.y);
                  return new m(e, n, i - e, r - n);
                },
                expand: function () {
                  var t = v.read(arguments),
                    e = t.width,
                    n = t.height;
                  return new m(
                    this.x - e / 2,
                    this.y - n / 2,
                    this.width + e,
                    this.height + n,
                  );
                },
                scale: function (t, e) {
                  return this.expand(
                    this.width * t - this.width,
                    this.height * (e === n ? t : e) - this.height,
                  );
                },
              },
              a.each(
                [
                  ['Top', 'Left'],
                  ['Top', 'Right'],
                  ['Bottom', 'Left'],
                  ['Bottom', 'Right'],
                  ['Left', 'Center'],
                  ['Top', 'Center'],
                  ['Right', 'Center'],
                  ['Bottom', 'Center'],
                ],
                function (t, e) {
                  var n = t.join(''),
                    i = /^[RL]/.test(n);
                  e >= 4 && (t[1] += i ? 'Y' : 'X');
                  var r = t[i ? 0 : 1],
                    s = t[i ? 1 : 0],
                    a = 'get' + r,
                    o = 'get' + s,
                    h = 'set' + r,
                    u = 'set' + s,
                    l = 'set' + n;
                  (this['get' + n] = function (t) {
                    return new (t ? _ : g)(this[a](), this[o](), this, l);
                  }),
                    (this[l] = function () {
                      var t = _.read(arguments);
                      this[h](t.x), this[u](t.y);
                    });
                },
                { beans: !0 },
              ),
            ),
            y = m.extend(
              {
                initialize: function (t, e, n, i, r, s) {
                  this._set(t, e, n, i, !0),
                    (this._owner = r),
                    (this._setter = s);
                },
                _set: function (t, e, n, i, r) {
                  return (
                    (this._x = t),
                    (this._y = e),
                    (this._width = n),
                    (this._height = i),
                    r || this._owner[this._setter](this),
                    this
                  );
                },
              },
              new (function () {
                var t = m.prototype;
                return a.each(
                  ['x', 'y', 'width', 'height'],
                  function (t) {
                    var e = a.capitalize(t),
                      n = '_' + t;
                    (this['get' + e] = function () {
                      return this[n];
                    }),
                      (this['set' + e] = function (t) {
                        (this[n] = t),
                          this._dontNotify || this._owner[this._setter](this);
                      });
                  },
                  a.each(
                    [
                      'Point',
                      'Size',
                      'Center',
                      'Left',
                      'Top',
                      'Right',
                      'Bottom',
                      'CenterX',
                      'CenterY',
                      'TopLeft',
                      'TopRight',
                      'BottomLeft',
                      'BottomRight',
                      'LeftCenter',
                      'TopCenter',
                      'RightCenter',
                      'BottomCenter',
                    ],
                    function (e) {
                      var n = 'set' + e;
                      this[n] = function () {
                        (this._dontNotify = !0),
                          t[n].apply(this, arguments),
                          (this._dontNotify = !1),
                          this._owner[this._setter](this);
                      };
                    },
                    {
                      isSelected: function () {
                        return !!(2 & this._owner._selection);
                      },
                      setSelected: function (t) {
                        var e = this._owner;
                        e._changeSelection && e._changeSelection(2, t);
                      },
                    },
                  ),
                );
              })(),
            ),
            w = a.extend(
              {
                _class: 'Matrix',
                initialize: function t(e, n) {
                  var i = arguments,
                    r = i.length,
                    s = !0;
                  if (
                    (r >= 6
                      ? this._set.apply(this, i)
                      : 1 === r || 2 === r
                      ? e instanceof t
                        ? this._set(e._a, e._b, e._c, e._d, e._tx, e._ty, n)
                        : Array.isArray(e)
                        ? this._set.apply(this, n ? e.concat([n]) : e)
                        : (s = !1)
                      : r
                      ? (s = !1)
                      : this.reset(),
                    !s)
                  )
                    throw new Error('Unsupported matrix parameters');
                  return this;
                },
                set: '#initialize',
                _set: function (t, e, n, i, r, s, a) {
                  return (
                    (this._a = t),
                    (this._b = e),
                    (this._c = n),
                    (this._d = i),
                    (this._tx = r),
                    (this._ty = s),
                    a || this._changed(),
                    this
                  );
                },
                _serialize: function (t, e) {
                  return a.serialize(this.getValues(), t, !0, e);
                },
                _changed: function () {
                  var t = this._owner;
                  t &&
                    (t._applyMatrix ? t.transform(null, !0) : t._changed(25));
                },
                clone: function () {
                  return new w(
                    this._a,
                    this._b,
                    this._c,
                    this._d,
                    this._tx,
                    this._ty,
                  );
                },
                equals: function (t) {
                  return (
                    t === this ||
                    (t &&
                      this._a === t._a &&
                      this._b === t._b &&
                      this._c === t._c &&
                      this._d === t._d &&
                      this._tx === t._tx &&
                      this._ty === t._ty)
                  );
                },
                toString: function () {
                  var t = c.instance;
                  return (
                    '[[' +
                    [
                      t.number(this._a),
                      t.number(this._c),
                      t.number(this._tx),
                    ].join(', ') +
                    '], [' +
                    [
                      t.number(this._b),
                      t.number(this._d),
                      t.number(this._ty),
                    ].join(', ') +
                    ']]'
                  );
                },
                reset: function (t) {
                  return (
                    (this._a = this._d = 1),
                    (this._b = this._c = this._tx = this._ty = 0),
                    t || this._changed(),
                    this
                  );
                },
                apply: function (t, e) {
                  var n = this._owner;
                  return (
                    !!n &&
                    (n.transform(null, a.pick(t, !0), e), this.isIdentity())
                  );
                },
                translate: function () {
                  var t = _.read(arguments),
                    e = t.x,
                    n = t.y;
                  return (
                    (this._tx += e * this._a + n * this._c),
                    (this._ty += e * this._b + n * this._d),
                    this._changed(),
                    this
                  );
                },
                scale: function () {
                  var t = arguments,
                    e = _.read(t),
                    n = _.read(t, 0, { readNull: !0 });
                  return (
                    n && this.translate(n),
                    (this._a *= e.x),
                    (this._b *= e.x),
                    (this._c *= e.y),
                    (this._d *= e.y),
                    n && this.translate(n.negate()),
                    this._changed(),
                    this
                  );
                },
                rotate: function (t) {
                  t *= Math.PI / 180;
                  var e = _.read(arguments, 1),
                    n = e.x,
                    i = e.y,
                    r = Math.cos(t),
                    s = Math.sin(t),
                    a = n - n * r + i * s,
                    o = i - n * s - i * r,
                    h = this._a,
                    u = this._b,
                    l = this._c,
                    c = this._d;
                  return (
                    (this._a = r * h + s * l),
                    (this._b = r * u + s * c),
                    (this._c = -s * h + r * l),
                    (this._d = -s * u + r * c),
                    (this._tx += a * h + o * l),
                    (this._ty += a * u + o * c),
                    this._changed(),
                    this
                  );
                },
                shear: function () {
                  var t = arguments,
                    e = _.read(t),
                    n = _.read(t, 0, { readNull: !0 });
                  n && this.translate(n);
                  var i = this._a,
                    r = this._b;
                  return (
                    (this._a += e.y * this._c),
                    (this._b += e.y * this._d),
                    (this._c += e.x * i),
                    (this._d += e.x * r),
                    n && this.translate(n.negate()),
                    this._changed(),
                    this
                  );
                },
                skew: function () {
                  var t = arguments,
                    e = _.read(t),
                    n = _.read(t, 0, { readNull: !0 }),
                    i = Math.PI / 180,
                    r = new _(Math.tan(e.x * i), Math.tan(e.y * i));
                  return this.shear(r, n);
                },
                append: function (t, e) {
                  if (t) {
                    var n = this._a,
                      i = this._b,
                      r = this._c,
                      s = this._d,
                      a = t._a,
                      o = t._c,
                      h = t._b,
                      u = t._d,
                      l = t._tx,
                      c = t._ty;
                    (this._a = a * n + h * r),
                      (this._c = o * n + u * r),
                      (this._b = a * i + h * s),
                      (this._d = o * i + u * s),
                      (this._tx += l * n + c * r),
                      (this._ty += l * i + c * s),
                      e || this._changed();
                  }
                  return this;
                },
                prepend: function (t, e) {
                  if (t) {
                    var n = this._a,
                      i = this._b,
                      r = this._c,
                      s = this._d,
                      a = this._tx,
                      o = this._ty,
                      h = t._a,
                      u = t._c,
                      l = t._b,
                      c = t._d,
                      f = t._tx,
                      d = t._ty;
                    (this._a = h * n + u * i),
                      (this._c = h * r + u * s),
                      (this._b = l * n + c * i),
                      (this._d = l * r + c * s),
                      (this._tx = h * a + u * o + f),
                      (this._ty = l * a + c * o + d),
                      e || this._changed();
                  }
                  return this;
                },
                appended: function (t) {
                  return this.clone().append(t);
                },
                prepended: function (t) {
                  return this.clone().prepend(t);
                },
                invert: function () {
                  var t = this._a,
                    e = this._b,
                    n = this._c,
                    i = this._d,
                    r = this._tx,
                    s = this._ty,
                    a = t * i - e * n,
                    o = null;
                  return (
                    a &&
                      !isNaN(a) &&
                      isFinite(r) &&
                      isFinite(s) &&
                      ((this._a = i / a),
                      (this._b = -e / a),
                      (this._c = -n / a),
                      (this._d = t / a),
                      (this._tx = (n * s - i * r) / a),
                      (this._ty = (e * r - t * s) / a),
                      (o = this)),
                    o
                  );
                },
                inverted: function () {
                  return this.clone().invert();
                },
                concatenate: '#append',
                preConcatenate: '#prepend',
                chain: '#appended',
                _shiftless: function () {
                  return new w(this._a, this._b, this._c, this._d, 0, 0);
                },
                _orNullIfIdentity: function () {
                  return this.isIdentity() ? null : this;
                },
                isIdentity: function () {
                  return (
                    1 === this._a &&
                    0 === this._b &&
                    0 === this._c &&
                    1 === this._d &&
                    0 === this._tx &&
                    0 === this._ty
                  );
                },
                isInvertible: function () {
                  var t = this._a * this._d - this._c * this._b;
                  return (
                    t && !isNaN(t) && isFinite(this._tx) && isFinite(this._ty)
                  );
                },
                isSingular: function () {
                  return !this.isInvertible();
                },
                transform: function (t, e, n) {
                  return arguments.length < 3
                    ? this._transformPoint(_.read(arguments))
                    : this._transformCoordinates(t, e, n);
                },
                _transformPoint: function (t, e, n) {
                  var i = t.x,
                    r = t.y;
                  return (
                    e || (e = new _()),
                    e._set(
                      i * this._a + r * this._c + this._tx,
                      i * this._b + r * this._d + this._ty,
                      n,
                    )
                  );
                },
                _transformCoordinates: function (t, e, n) {
                  for (var i = 0, r = 2 * n; i < r; i += 2) {
                    var s = t[i],
                      a = t[i + 1];
                    (e[i] = s * this._a + a * this._c + this._tx),
                      (e[i + 1] = s * this._b + a * this._d + this._ty);
                  }
                  return e;
                },
                _transformCorners: function (t) {
                  var e = t.x,
                    n = t.y,
                    i = e + t.width,
                    r = n + t.height,
                    s = [e, n, i, n, i, r, e, r];
                  return this._transformCoordinates(s, s, 4);
                },
                _transformBounds: function (t, e, n) {
                  for (
                    var i = this._transformCorners(t),
                      r = i.slice(0, 2),
                      s = r.slice(),
                      a = 2;
                    a < 8;
                    a++
                  ) {
                    var o = i[a],
                      h = 1 & a;
                    o < r[h] ? (r[h] = o) : o > s[h] && (s[h] = o);
                  }
                  return (
                    e || (e = new m()),
                    e._set(r[0], r[1], s[0] - r[0], s[1] - r[1], n)
                  );
                },
                inverseTransform: function () {
                  return this._inverseTransform(_.read(arguments));
                },
                _inverseTransform: function (t, e, n) {
                  var i = this._a,
                    r = this._b,
                    s = this._c,
                    a = this._d,
                    o = this._tx,
                    h = this._ty,
                    u = i * a - r * s,
                    l = null;
                  if (u && !isNaN(u) && isFinite(o) && isFinite(h)) {
                    var c = t.x - this._tx,
                      f = t.y - this._ty;
                    e || (e = new _()),
                      (l = e._set((c * a - f * s) / u, (f * i - c * r) / u, n));
                  }
                  return l;
                },
                decompose: function () {
                  var t,
                    e,
                    n,
                    i = this._a,
                    r = this._b,
                    s = this._c,
                    a = this._d,
                    o = i * a - r * s,
                    h = Math.sqrt,
                    u = Math.atan2,
                    l = 180 / Math.PI;
                  if (0 !== i || 0 !== r) {
                    var c = h(i * i + r * r);
                    (t = Math.acos(i / c) * (r > 0 ? 1 : -1)),
                      (e = [c, o / c]),
                      (n = [u(i * s + r * a, c * c), 0]);
                  } else if (0 !== s || 0 !== a) {
                    var f = h(s * s + a * a);
                    (t = Math.asin(s / f) * (a > 0 ? 1 : -1)),
                      (e = [o / f, f]),
                      (n = [0, u(i * s + r * a, f * f)]);
                  } else (t = 0), (n = e = [0, 0]);
                  return {
                    translation: this.getTranslation(),
                    rotation: t * l,
                    scaling: new _(e),
                    skewing: new _(n[0] * l, n[1] * l),
                  };
                },
                getValues: function () {
                  return [
                    this._a,
                    this._b,
                    this._c,
                    this._d,
                    this._tx,
                    this._ty,
                  ];
                },
                getTranslation: function () {
                  return new _(this._tx, this._ty);
                },
                getScaling: function () {
                  return this.decompose().scaling;
                },
                getRotation: function () {
                  return this.decompose().rotation;
                },
                applyToContext: function (t) {
                  this.isIdentity() ||
                    t.transform(
                      this._a,
                      this._b,
                      this._c,
                      this._d,
                      this._tx,
                      this._ty,
                    );
                },
              },
              a.each(
                ['a', 'b', 'c', 'd', 'tx', 'ty'],
                function (t) {
                  var e = a.capitalize(t),
                    n = '_' + t;
                  (this['get' + e] = function () {
                    return this[n];
                  }),
                    (this['set' + e] = function (t) {
                      (this[n] = t), this._changed();
                    });
                },
                {},
              ),
            ),
            x = a.extend({
              _class: 'Line',
              initialize: function (t, e, n, i, r) {
                var s = !1;
                arguments.length >= 4
                  ? ((this._px = t),
                    (this._py = e),
                    (this._vx = n),
                    (this._vy = i),
                    (s = r))
                  : ((this._px = t.x),
                    (this._py = t.y),
                    (this._vx = e.x),
                    (this._vy = e.y),
                    (s = n)),
                  s || ((this._vx -= this._px), (this._vy -= this._py));
              },
              getPoint: function () {
                return new _(this._px, this._py);
              },
              getVector: function () {
                return new _(this._vx, this._vy);
              },
              getLength: function () {
                return this.getVector().getLength();
              },
              intersect: function (t, e) {
                return x.intersect(
                  this._px,
                  this._py,
                  this._vx,
                  this._vy,
                  t._px,
                  t._py,
                  t._vx,
                  t._vy,
                  !0,
                  e,
                );
              },
              getSide: function (t, e) {
                return x.getSide(
                  this._px,
                  this._py,
                  this._vx,
                  this._vy,
                  t.x,
                  t.y,
                  !0,
                  e,
                );
              },
              getDistance: function (t) {
                return Math.abs(this.getSignedDistance(t));
              },
              getSignedDistance: function (t) {
                return x.getSignedDistance(
                  this._px,
                  this._py,
                  this._vx,
                  this._vy,
                  t.x,
                  t.y,
                  !0,
                );
              },
              isCollinear: function (t) {
                return _.isCollinear(this._vx, this._vy, t._vx, t._vy);
              },
              isOrthogonal: function (t) {
                return _.isOrthogonal(this._vx, this._vy, t._vx, t._vy);
              },
              statics: {
                intersect: function (t, e, n, i, r, s, a, o, h, u) {
                  h || ((n -= t), (i -= e), (a -= r), (o -= s));
                  var l = n * o - i * a;
                  if (!f.isMachineZero(l)) {
                    var c = t - r,
                      d = e - s,
                      g = (a * d - o * c) / l,
                      v = (n * d - i * c) / l;
                    if (
                      u ||
                      (-1e-12 < g &&
                        g < 1 + 1e-12 &&
                        -1e-12 < v &&
                        v < 1 + 1e-12)
                    )
                      return (
                        u || (g = g <= 0 ? 0 : g >= 1 ? 1 : g),
                        new _(t + g * n, e + g * i)
                      );
                  }
                },
                getSide: function (t, e, n, i, r, s, a, o) {
                  a || ((n -= t), (i -= e));
                  var h = r - t,
                    u = h * i - (s - e) * n;
                  return (
                    !o &&
                      f.isMachineZero(u) &&
                      (u = (h * n + h * n) / (n * n + i * i)) >= 0 &&
                      u <= 1 &&
                      (u = 0),
                    u < 0 ? -1 : u > 0 ? 1 : 0
                  );
                },
                getSignedDistance: function (t, e, n, i, r, s, a) {
                  return (
                    a || ((n -= t), (i -= e)),
                    0 === n
                      ? i > 0
                        ? r - t
                        : t - r
                      : 0 === i
                      ? n < 0
                        ? s - e
                        : e - s
                      : ((r - t) * i - (s - e) * n) /
                        (i > n
                          ? i * Math.sqrt(1 + (n * n) / (i * i))
                          : n * Math.sqrt(1 + (i * i) / (n * n)))
                  );
                },
                getDistance: function (t, e, n, i, r, s, a) {
                  return Math.abs(x.getSignedDistance(t, e, n, i, r, s, a));
                },
              },
            }),
            b = u.extend({
              _class: 'Project',
              _list: 'projects',
              _reference: 'project',
              _compactSerialize: !0,
              initialize: function (t) {
                u.call(this, !0),
                  (this._children = []),
                  (this._namedChildren = {}),
                  (this._activeLayer = null),
                  (this._currentStyle = new Z(null, null, this)),
                  (this._view = G.create(this, t || rt.getCanvas(1, 1))),
                  (this._selectionItems = {}),
                  (this._selectionCount = 0),
                  (this._updateVersion = 0);
              },
              _serialize: function (t, e) {
                return a.serialize(this._children, t, !0, e);
              },
              _changed: function (t, e) {
                if (1 & t) {
                  var n = this._view;
                  n &&
                    ((n._needsUpdate = !0),
                    !n._requested && n._autoUpdate && n.requestUpdate());
                }
                var i = this._changes;
                if (i && e) {
                  var r = this._changesById,
                    s = e._id,
                    a = r[s];
                  a ? (a.flags |= t) : i.push((r[s] = { item: e, flags: t }));
                }
              },
              clear: function () {
                for (var t = this._children, e = t.length - 1; e >= 0; e--)
                  t[e].remove();
              },
              isEmpty: function () {
                return !this._children.length;
              },
              remove: function t() {
                return (
                  !!t.base.call(this) && (this._view && this._view.remove(), !0)
                );
              },
              getView: function () {
                return this._view;
              },
              getCurrentStyle: function () {
                return this._currentStyle;
              },
              setCurrentStyle: function (t) {
                this._currentStyle.set(t);
              },
              getIndex: function () {
                return this._index;
              },
              getOptions: function () {
                return this._scope.settings;
              },
              getLayers: function () {
                return this._children;
              },
              getActiveLayer: function () {
                return (
                  this._activeLayer || new k({ project: this, insert: !0 })
                );
              },
              getSymbolDefinitions: function () {
                var t = [],
                  e = {};
                return (
                  this.getItems({
                    class: M,
                    match: function (n) {
                      var i = n._definition,
                        r = i._id;
                      return e[r] || ((e[r] = !0), t.push(i)), !1;
                    },
                  }),
                  t
                );
              },
              getSymbols: 'getSymbolDefinitions',
              getSelectedItems: function () {
                var t = this._selectionItems,
                  e = [];
                for (var n in t) {
                  var i = t[n],
                    r = i._selection;
                  1 & r && i.isInserted()
                    ? e.push(i)
                    : r || this._updateSelection(i);
                }
                return e;
              },
              _updateSelection: function (t) {
                var e = t._id,
                  n = this._selectionItems;
                t._selection
                  ? n[e] !== t && (this._selectionCount++, (n[e] = t))
                  : n[e] === t && (this._selectionCount--, delete n[e]);
              },
              selectAll: function () {
                for (var t = this._children, e = 0, n = t.length; e < n; e++)
                  t[e].setFullySelected(!0);
              },
              deselectAll: function () {
                var t = this._selectionItems;
                for (var e in t) t[e].setFullySelected(!1);
              },
              addLayer: function (t) {
                return this.insertLayer(n, t);
              },
              insertLayer: function (t, e) {
                if (e instanceof k) {
                  e._remove(!1, !0),
                    a.splice(this._children, [e], t, 0),
                    e._setProject(this, !0);
                  var n = e._name;
                  n && e.setName(n),
                    this._changes && e._changed(5),
                    this._activeLayer || (this._activeLayer = e);
                } else e = null;
                return e;
              },
              _insertItem: function (t, e, i) {
                return (
                  (e =
                    this.insertLayer(t, e) ||
                    (
                      this._activeLayer ||
                      this._insertItem(n, new k(C.NO_INSERT), !0)
                    ).insertChild(t, e)),
                  i && e.activate && e.activate(),
                  e
                );
              },
              getItems: function (t) {
                return C._getItems(this, t);
              },
              getItem: function (t) {
                return C._getItems(this, t, null, null, !0)[0] || null;
              },
              importJSON: function (t) {
                this.activate();
                var e = this._activeLayer;
                return a.importJSON(t, e && e.isEmpty() && e);
              },
              removeOn: function (t) {
                var e = this._removeSets;
                if (e) {
                  'mouseup' === t && (e.mousedrag = null);
                  var n = e[t];
                  if (n) {
                    for (var i in n) {
                      var r = n[i];
                      for (var s in e) {
                        var a = e[s];
                        a && a != n && delete a[r._id];
                      }
                      r.remove();
                    }
                    e[t] = null;
                  }
                }
              },
              draw: function (t, e, n) {
                this._updateVersion++, t.save(), e.applyToContext(t);
                for (
                  var i = this._children,
                    r = new a({
                      offset: new _(0, 0),
                      pixelRatio: n,
                      viewMatrix: e.isIdentity() ? null : e,
                      matrices: [new w()],
                      updateMatrix: !0,
                    }),
                    s = 0,
                    o = i.length;
                  s < o;
                  s++
                )
                  i[s].draw(t, r);
                if ((t.restore(), this._selectionCount > 0)) {
                  t.save(), (t.strokeWidth = 1);
                  var h = this._selectionItems,
                    u = this._scope.settings.handleSize,
                    l = this._updateVersion;
                  for (var c in h) h[c]._drawSelection(t, e, u, h, l);
                  t.restore();
                }
              },
            }),
            C = a.extend(
              o,
              {
                statics: {
                  extend: function t(e) {
                    return (
                      e._serializeFields &&
                        (e._serializeFields = a.set(
                          {},
                          this.prototype._serializeFields,
                          e._serializeFields,
                        )),
                      t.base.apply(this, arguments)
                    );
                  },
                  NO_INSERT: { insert: !1 },
                },
                _class: 'Item',
                _name: null,
                _applyMatrix: !0,
                _canApplyMatrix: !0,
                _canScaleStroke: !1,
                _pivot: null,
                _visible: !0,
                _blendMode: 'normal',
                _opacity: 1,
                _locked: !1,
                _guide: !1,
                _clipMask: !1,
                _selection: 0,
                _selectBounds: !0,
                _selectChildren: !1,
                _serializeFields: {
                  name: null,
                  applyMatrix: null,
                  matrix: new w(),
                  pivot: null,
                  visible: !0,
                  blendMode: 'normal',
                  opacity: 1,
                  locked: !1,
                  guide: !1,
                  clipMask: !1,
                  selected: !1,
                  data: {},
                },
                _prioritize: ['applyMatrix'],
              },
              new (function () {
                var t = [
                  'onMouseDown',
                  'onMouseUp',
                  'onMouseDrag',
                  'onClick',
                  'onDoubleClick',
                  'onMouseMove',
                  'onMouseEnter',
                  'onMouseLeave',
                ];
                return a.each(
                  t,
                  function (t) {
                    this._events[t] = {
                      install: function (t) {
                        this.getView()._countItemEvent(t, 1);
                      },
                      uninstall: function (t) {
                        this.getView()._countItemEvent(t, -1);
                      },
                    };
                  },
                  {
                    _events: {
                      onFrame: {
                        install: function () {
                          this.getView()._animateItem(this, !0);
                        },
                        uninstall: function () {
                          this.getView()._animateItem(this, !1);
                        },
                      },
                      onLoad: {},
                      onError: {},
                    },
                    statics: { _itemHandlers: t },
                  },
                );
              })(),
              {
                initialize: function () {},
                _initialize: function (t, e) {
                  var i = t && a.isPlainObject(t),
                    r = i && !0 === t.internal,
                    s = (this._matrix = new w()),
                    o = (i && t.project) || ht.project,
                    h = ht.settings;
                  return (
                    (this._id = r ? null : d.get()),
                    (this._parent = this._index = null),
                    (this._applyMatrix = this._canApplyMatrix && h.applyMatrix),
                    e && s.translate(e),
                    (s._owner = this),
                    (this._style = new Z(o._currentStyle, this, o)),
                    r ||
                    (i && 0 == t.insert) ||
                    (!h.insertItems && (!i || !0 !== t.insert))
                      ? this._setProject(o)
                      : ((i && t.parent) || o)._insertItem(n, this, !0),
                    i &&
                      t !== C.NO_INSERT &&
                      this.set(t, {
                        internal: !0,
                        insert: !0,
                        project: !0,
                        parent: !0,
                      }),
                    i
                  );
                },
                _serialize: function (t, e) {
                  var n = {},
                    i = this;
                  function r(r) {
                    for (var s in r) {
                      var o = i[s];
                      a.equals(o, 'leading' === s ? 1.2 * r.fontSize : r[s]) ||
                        (n[s] = a.serialize(o, t, 'data' !== s, e));
                    }
                  }
                  return (
                    r(this._serializeFields),
                    this instanceof S || r(this._style._defaults),
                    [this._class, n]
                  );
                },
                _changed: function (t) {
                  var e = this._symbol,
                    i = this._parent || e,
                    r = this._project;
                  8 & t &&
                    (this._bounds = this._position = this._decomposed = n),
                    16 & t && (this._globalMatrix = n),
                    i && 72 & t && C._clearBoundsCache(i),
                    2 & t && C._clearBoundsCache(this),
                    r && r._changed(t, this),
                    e && e._changed(t);
                },
                getId: function () {
                  return this._id;
                },
                getName: function () {
                  return this._name;
                },
                setName: function (t) {
                  if ((this._name && this._removeNamed(), t === +t + ''))
                    throw new Error(
                      'Names consisting only of numbers are not supported.',
                    );
                  var e = this._getOwner();
                  if (t && e) {
                    var i = e._children,
                      r = e._namedChildren;
                    (r[t] = r[t] || []).push(this), t in i || (i[t] = this);
                  }
                  (this._name = t || n), this._changed(256);
                },
                getStyle: function () {
                  return this._style;
                },
                setStyle: function (t) {
                  this.getStyle().set(t);
                },
              },
              a.each(
                ['locked', 'visible', 'blendMode', 'opacity', 'guide'],
                function (t) {
                  var e = a.capitalize(t),
                    n = '_' + t,
                    i = { locked: 256, visible: 265 };
                  (this['get' + e] = function () {
                    return this[n];
                  }),
                    (this['set' + e] = function (e) {
                      e != this[n] &&
                        ((this[n] = e), this._changed(i[t] || 257));
                    });
                },
                {},
              ),
              {
                beans: !0,
                getSelection: function () {
                  return this._selection;
                },
                setSelection: function (t) {
                  if (t !== this._selection) {
                    this._selection = t;
                    var e = this._project;
                    e && (e._updateSelection(this), this._changed(257));
                  }
                },
                _changeSelection: function (t, e) {
                  var n = this._selection;
                  this.setSelection(e ? n | t : n & ~t);
                },
                isSelected: function () {
                  if (this._selectChildren)
                    for (
                      var t = this._children, e = 0, n = t.length;
                      e < n;
                      e++
                    )
                      if (t[e].isSelected()) return !0;
                  return !!(1 & this._selection);
                },
                setSelected: function (t) {
                  if (this._selectChildren)
                    for (
                      var e = this._children, n = 0, i = e.length;
                      n < i;
                      n++
                    )
                      e[n].setSelected(t);
                  this._changeSelection(1, t);
                },
                isFullySelected: function () {
                  var t = this._children,
                    e = !!(1 & this._selection);
                  if (t && e) {
                    for (var n = 0, i = t.length; n < i; n++)
                      if (!t[n].isFullySelected()) return !1;
                    return !0;
                  }
                  return e;
                },
                setFullySelected: function (t) {
                  var e = this._children;
                  if (e)
                    for (var n = 0, i = e.length; n < i; n++)
                      e[n].setFullySelected(t);
                  this._changeSelection(1, t);
                },
                isClipMask: function () {
                  return this._clipMask;
                },
                setClipMask: function (t) {
                  this._clipMask != (t = !!t) &&
                    ((this._clipMask = t),
                    t && (this.setFillColor(null), this.setStrokeColor(null)),
                    this._changed(257),
                    this._parent && this._parent._changed(2048));
                },
                getData: function () {
                  return this._data || (this._data = {}), this._data;
                },
                setData: function (t) {
                  this._data = t;
                },
                getPosition: function (t) {
                  var e = t ? _ : g,
                    n =
                      this._position ||
                      (this._position = this._getPositionFromBounds());
                  return new e(n.x, n.y, this, 'setPosition');
                },
                setPosition: function () {
                  this.translate(
                    _.read(arguments).subtract(this.getPosition(!0)),
                  );
                },
                _getPositionFromBounds: function (t) {
                  return this._pivot
                    ? this._matrix._transformPoint(this._pivot)
                    : (t || this.getBounds()).getCenter(!0);
                },
                getPivot: function () {
                  var t = this._pivot;
                  return t ? new g(t.x, t.y, this, 'setPivot') : null;
                },
                setPivot: function () {
                  (this._pivot = _.read(arguments, 0, {
                    clone: !0,
                    readNull: !0,
                  })),
                    (this._position = n);
                },
              },
              a.each(
                {
                  getStrokeBounds: { stroke: !0 },
                  getHandleBounds: { handle: !0 },
                  getInternalBounds: { internal: !0 },
                },
                function (t, e) {
                  this[e] = function (e) {
                    return this.getBounds(e, t);
                  };
                },
                {
                  beans: !0,
                  getBounds: function (t, e) {
                    var n = e || t instanceof w,
                      i = a.set({}, n ? e : t, this._boundsOptions);
                    (i.stroke && !this.getStrokeScaling()) ||
                      (i.cacheItem = this);
                    var r = this._getCachedBounds(n && t, i).rect;
                    return arguments.length
                      ? r
                      : new y(r.x, r.y, r.width, r.height, this, 'setBounds');
                  },
                  setBounds: function () {
                    var t = m.read(arguments),
                      e = this.getBounds(),
                      n = this._matrix,
                      i = new w(),
                      r = t.getCenter();
                    i.translate(r),
                      (t.width == e.width && t.height == e.height) ||
                        (n.isInvertible() ||
                          (n.set(
                            n._backup || new w().translate(n.getTranslation()),
                          ),
                          (e = this.getBounds())),
                        i.scale(
                          0 !== e.width ? t.width / e.width : 0,
                          0 !== e.height ? t.height / e.height : 0,
                        )),
                      (r = e.getCenter()),
                      i.translate(-r.x, -r.y),
                      this.transform(i);
                  },
                  _getBounds: function (t, e) {
                    var n = this._children;
                    return n && n.length
                      ? (C._updateBoundsCache(this, e.cacheItem),
                        C._getBounds(n, t, e))
                      : new m();
                  },
                  _getBoundsCacheKey: function (t, e) {
                    return [t.stroke ? 1 : 0, t.handle ? 1 : 0, e ? 1 : 0].join(
                      '',
                    );
                  },
                  _getCachedBounds: function (t, e, n) {
                    t = t && t._orNullIfIdentity();
                    var i = e.internal && !n,
                      r = e.cacheItem,
                      s = i ? null : this._matrix._orNullIfIdentity(),
                      a =
                        r &&
                        (!t || t.equals(s)) &&
                        this._getBoundsCacheKey(e, i),
                      o = this._bounds;
                    if (
                      (C._updateBoundsCache(this._parent || this._symbol, r),
                      a && o && a in o)
                    )
                      return {
                        rect: (f = o[a]).rect.clone(),
                        nonscaling: f.nonscaling,
                      };
                    var h = this._getBounds(t || s, e),
                      u = h.rect || h,
                      l = this._style,
                      c =
                        h.nonscaling ||
                        (l.hasStroke() && !l.getStrokeScaling());
                    if (a) {
                      o || (this._bounds = o = {});
                      var f = (o[a] = {
                        rect: u.clone(),
                        nonscaling: c,
                        internal: i,
                      });
                    }
                    return { rect: u, nonscaling: c };
                  },
                  _getStrokeMatrix: function (t, e) {
                    var n = this.getStrokeScaling()
                        ? null
                        : e && e.internal
                        ? this
                        : this._parent || (this._symbol && this._symbol._item),
                      i = n ? n.getViewMatrix().invert() : t;
                    return i && i._shiftless();
                  },
                  statics: {
                    _updateBoundsCache: function (t, e) {
                      if (t && e) {
                        var n = e._id,
                          i = (t._boundsCache = t._boundsCache || {
                            ids: {},
                            list: [],
                          });
                        i.ids[n] || (i.list.push(e), (i.ids[n] = e));
                      }
                    },
                    _clearBoundsCache: function (t) {
                      var e = t._boundsCache;
                      if (e) {
                        t._bounds = t._position = t._boundsCache = n;
                        for (var i = 0, r = e.list, s = r.length; i < s; i++) {
                          var a = r[i];
                          a !== t &&
                            ((a._bounds = a._position = n),
                            a._boundsCache && C._clearBoundsCache(a));
                        }
                      }
                    },
                    _getBounds: function (t, e, n) {
                      var i = 1 / 0,
                        r = -i,
                        s = i,
                        a = r,
                        o = !1;
                      n = n || {};
                      for (var h = 0, u = t.length; h < u; h++) {
                        var l = t[h];
                        if (l._visible && !l.isEmpty(!0)) {
                          var c = l._getCachedBounds(
                              e && e.appended(l._matrix),
                              n,
                              !0,
                            ),
                            f = c.rect;
                          (i = Math.min(f.x, i)),
                            (s = Math.min(f.y, s)),
                            (r = Math.max(f.x + f.width, r)),
                            (a = Math.max(f.y + f.height, a)),
                            c.nonscaling && (o = !0);
                        }
                      }
                      return {
                        rect: isFinite(i) ? new m(i, s, r - i, a - s) : new m(),
                        nonscaling: o,
                      };
                    },
                  },
                },
              ),
              {
                beans: !0,
                _decompose: function () {
                  return this._applyMatrix
                    ? null
                    : this._decomposed ||
                        (this._decomposed = this._matrix.decompose());
                },
                getRotation: function () {
                  var t = this._decompose();
                  return t ? t.rotation : 0;
                },
                setRotation: function (t) {
                  var e = this.getRotation();
                  if (null != e && null != t) {
                    var n = this._decomposed;
                    this.rotate(t - e),
                      n && ((n.rotation = t), (this._decomposed = n));
                  }
                },
                getScaling: function () {
                  var t = this._decompose(),
                    e = t && t.scaling;
                  return new g(e ? e.x : 1, e ? e.y : 1, this, 'setScaling');
                },
                setScaling: function () {
                  var t = this.getScaling(),
                    e = _.read(arguments, 0, { clone: !0, readNull: !0 });
                  if (t && e && !t.equals(e)) {
                    var n = this.getRotation(),
                      i = this._decomposed,
                      r = new w(),
                      s = f.isZero;
                    if (s(t.x) || s(t.y))
                      r.translate(i.translation),
                        n && r.rotate(n),
                        r.scale(e.x, e.y),
                        this._matrix.set(r);
                    else {
                      var a = this.getPosition(!0);
                      r.translate(a),
                        n && r.rotate(n),
                        r.scale(e.x / t.x, e.y / t.y),
                        n && r.rotate(-n),
                        r.translate(a.negate()),
                        this.transform(r);
                    }
                    i && ((i.scaling = e), (this._decomposed = i));
                  }
                },
                getMatrix: function () {
                  return this._matrix;
                },
                setMatrix: function () {
                  var t = this._matrix;
                  t.set.apply(t, arguments);
                },
                getGlobalMatrix: function (t) {
                  var e = this._globalMatrix;
                  if (e)
                    for (var n = this._parent, i = []; n; ) {
                      if (!n._globalMatrix) {
                        e = null;
                        for (var r = 0, s = i.length; r < s; r++)
                          i[r]._globalMatrix = null;
                        break;
                      }
                      i.push(n), (n = n._parent);
                    }
                  e ||
                    ((e = this._globalMatrix = this._matrix.clone()),
                    (n = this._parent) && e.prepend(n.getGlobalMatrix(!0)));
                  return t ? e : e.clone();
                },
                getViewMatrix: function () {
                  return this.getGlobalMatrix().prepend(this.getView()._matrix);
                },
                getApplyMatrix: function () {
                  return this._applyMatrix;
                },
                setApplyMatrix: function (t) {
                  (this._applyMatrix = this._canApplyMatrix && !!t) &&
                    this.transform(null, !0);
                },
                getTransformContent: '#getApplyMatrix',
                setTransformContent: '#setApplyMatrix',
              },
              {
                getProject: function () {
                  return this._project;
                },
                _setProject: function (t, e) {
                  if (this._project !== t) {
                    this._project && this._installEvents(!1),
                      (this._project = t);
                    for (
                      var n = this._children, i = 0, r = n && n.length;
                      i < r;
                      i++
                    )
                      n[i]._setProject(t);
                    e = !0;
                  }
                  e && this._installEvents(!0);
                },
                getView: function () {
                  return this._project._view;
                },
                _installEvents: function t(e) {
                  t.base.call(this, e);
                  for (
                    var n = this._children, i = 0, r = n && n.length;
                    i < r;
                    i++
                  )
                    n[i]._installEvents(e);
                },
                getLayer: function () {
                  for (var t = this; (t = t._parent); )
                    if (t instanceof k) return t;
                  return null;
                },
                getParent: function () {
                  return this._parent;
                },
                setParent: function (t) {
                  return t.addChild(this);
                },
                _getOwner: '#getParent',
                getChildren: function () {
                  return this._children;
                },
                setChildren: function (t) {
                  this.removeChildren(), this.addChildren(t);
                },
                getFirstChild: function () {
                  return (this._children && this._children[0]) || null;
                },
                getLastChild: function () {
                  return (
                    (this._children &&
                      this._children[this._children.length - 1]) ||
                    null
                  );
                },
                getNextSibling: function () {
                  var t = this._getOwner();
                  return (t && t._children[this._index + 1]) || null;
                },
                getPreviousSibling: function () {
                  var t = this._getOwner();
                  return (t && t._children[this._index - 1]) || null;
                },
                getIndex: function () {
                  return this._index;
                },
                equals: function (t) {
                  return (
                    t === this ||
                    (t &&
                      this._class === t._class &&
                      this._style.equals(t._style) &&
                      this._matrix.equals(t._matrix) &&
                      this._locked === t._locked &&
                      this._visible === t._visible &&
                      this._blendMode === t._blendMode &&
                      this._opacity === t._opacity &&
                      this._clipMask === t._clipMask &&
                      this._guide === t._guide &&
                      this._equals(t)) ||
                    !1
                  );
                },
                _equals: function (t) {
                  return a.equals(this._children, t._children);
                },
                clone: function (t) {
                  var e = new this.constructor(C.NO_INSERT),
                    i = this._children,
                    r = a.pick(t ? t.insert : n, t === n || !0 === t),
                    s = a.pick(t ? t.deep : n, !0);
                  i && e.copyAttributes(this),
                    (i && !s) || e.copyContent(this),
                    i || e.copyAttributes(this),
                    r && e.insertAbove(this);
                  var o = this._name,
                    h = this._parent;
                  if (o && h) {
                    i = h._children;
                    for (var u = o, l = 1; i[o]; ) o = u + ' ' + l++;
                    o !== u && e.setName(o);
                  }
                  return e;
                },
                copyContent: function (t) {
                  for (
                    var e = t._children, n = 0, i = e && e.length;
                    n < i;
                    n++
                  )
                    this.addChild(e[n].clone(!1), !0);
                },
                copyAttributes: function (t, e) {
                  this.setStyle(t._style);
                  for (
                    var n = [
                        '_locked',
                        '_visible',
                        '_blendMode',
                        '_opacity',
                        '_clipMask',
                        '_guide',
                      ],
                      i = 0,
                      r = n.length;
                    i < r;
                    i++
                  ) {
                    var s = n[i];
                    t.hasOwnProperty(s) && (this[s] = t[s]);
                  }
                  e || this._matrix.set(t._matrix, !0),
                    this.setApplyMatrix(t._applyMatrix),
                    this.setPivot(t._pivot),
                    this.setSelection(t._selection);
                  var o = t._data,
                    h = t._name;
                  (this._data = o ? a.clone(o) : null), h && this.setName(h);
                },
                rasterize: function (t, e) {
                  var i = this.getStrokeBounds(),
                    r = (t || this.getView().getResolution()) / 72,
                    s = i.getTopLeft().floor(),
                    o = i.getBottomRight().ceil(),
                    h = new v(o.subtract(s)),
                    u = new P(C.NO_INSERT);
                  if (!h.isZero()) {
                    var l = rt.getCanvas(h.multiply(r)),
                      c = l.getContext('2d'),
                      f = new w().scale(r).translate(s.negate());
                    c.save(),
                      f.applyToContext(c),
                      this.draw(c, new a({ matrices: [f] })),
                      c.restore(),
                      u.setCanvas(l);
                  }
                  return (
                    u.transform(
                      new w().translate(s.add(h.divide(2))).scale(1 / r),
                    ),
                    (e === n || e) && u.insertAbove(this),
                    u
                  );
                },
                contains: function () {
                  var t = this._matrix;
                  return (
                    t.isInvertible() &&
                    !!this._contains(t._inverseTransform(_.read(arguments)))
                  );
                },
                _contains: function (t) {
                  var e = this._children;
                  if (e) {
                    for (var n = e.length - 1; n >= 0; n--)
                      if (e[n].contains(t)) return !0;
                    return !1;
                  }
                  return t.isInside(this.getInternalBounds());
                },
                isInside: function () {
                  return m.read(arguments).contains(this.getBounds());
                },
                _asPathItem: function () {
                  return new B.Rectangle({
                    rectangle: this.getInternalBounds(),
                    matrix: this._matrix,
                    insert: !1,
                  });
                },
                intersects: function (t, e) {
                  return (
                    t instanceof C &&
                    this._asPathItem().getIntersections(
                      t._asPathItem(),
                      null,
                      e,
                      !0,
                    ).length > 0
                  );
                },
              },
              new (function () {
                function t() {
                  var t = arguments;
                  return this._hitTest(_.read(t), T.getOptions(t));
                }
                function e() {
                  var t = arguments,
                    e = _.read(t),
                    n = T.getOptions(t),
                    i = [];
                  return this._hitTest(e, new a({ all: i }, n)), i;
                }
                function n(t, e, n, i) {
                  var r = this._children;
                  if (r)
                    for (var s = r.length - 1; s >= 0; s--) {
                      var a = r[s],
                        o = a !== i && a._hitTest(t, e, n);
                      if (o && !e.all) return o;
                    }
                  return null;
                }
                return (
                  b.inject({ hitTest: t, hitTestAll: e, _hitTest: n }),
                  { hitTest: t, hitTestAll: e, _hitTestChildren: n }
                );
              })(),
              {
                _hitTest: function (t, e, n) {
                  if (
                    this._locked ||
                    !this._visible ||
                    (this._guide && !e.guides) ||
                    this.isEmpty()
                  )
                    return null;
                  var i = this._matrix,
                    r = n
                      ? n.appended(i)
                      : this.getGlobalMatrix().prepend(this.getView()._matrix),
                    s = Math.max(e.tolerance, 1e-12),
                    o = (e._tolerancePadding = new v(
                      B._getStrokePadding(s, i._shiftless().invert()),
                    ));
                  if (
                    !(t = i._inverseTransform(t)) ||
                    (!this._children &&
                      !this.getBounds({ internal: !0, stroke: !0, handle: !0 })
                        .expand(o.multiply(2))
                        ._containsPoint(t))
                  )
                    return null;
                  var h,
                    u,
                    l = !(
                      (e.guides && !this._guide) ||
                      (e.selected && !this.isSelected()) ||
                      (e.type && e.type !== a.hyphenate(this._class)) ||
                      (e.class && !(this instanceof e.class))
                    ),
                    c = e.match,
                    f = this;
                  function d(t) {
                    return (
                      t && c && !c(t) && (t = null),
                      t && e.all && e.all.push(t),
                      t
                    );
                  }
                  function _(e, n) {
                    var i = n ? h['get' + n]() : f.getPosition();
                    if (t.subtract(i).divide(o).length <= 1)
                      return new T(e, f, {
                        name: n ? a.hyphenate(n) : e,
                        point: i,
                      });
                  }
                  var g = e.position,
                    p = e.center,
                    m = e.bounds;
                  if (l && this._parent && (g || p || m)) {
                    if (
                      ((p || m) && (h = this.getInternalBounds()),
                      !(u =
                        (g && _('position')) || (p && _('center', 'Center'))) &&
                        m)
                    )
                      for (
                        var y = [
                            'TopLeft',
                            'TopRight',
                            'BottomLeft',
                            'BottomRight',
                            'LeftCenter',
                            'TopCenter',
                            'RightCenter',
                            'BottomCenter',
                          ],
                          w = 0;
                        w < 8 && !u;
                        w++
                      )
                        u = _('bounds', y[w]);
                    u = d(u);
                  }
                  return (
                    u ||
                      (u =
                        this._hitTestChildren(t, e, r) ||
                        (l &&
                          d(
                            this._hitTestSelf(
                              t,
                              e,
                              r,
                              this.getStrokeScaling()
                                ? null
                                : r._shiftless().invert(),
                            ),
                          )) ||
                        null),
                    u && u.point && (u.point = i.transform(u.point)),
                    u
                  );
                },
                _hitTestSelf: function (t, e) {
                  if (e.fill && this.hasFill() && this._contains(t))
                    return new T('fill', this);
                },
                matches: function (t, e) {
                  var n = i(t);
                  if ('object' === n) {
                    for (var r in t)
                      if (t.hasOwnProperty(r) && !this.matches(r, t[r]))
                        return !1;
                    return !0;
                  }
                  if ('function' === n) return t(this);
                  if ('match' === t) return e(this);
                  var s = /^(empty|editable)$/.test(t)
                    ? this['is' + a.capitalize(t)]()
                    : 'type' === t
                    ? a.hyphenate(this._class)
                    : this[t];
                  if ('class' === t) {
                    if ('function' == typeof e) return this instanceof e;
                    s = this._class;
                  }
                  if ('function' == typeof e) return !!e(s);
                  if (e) {
                    if (e.test) return e.test(s);
                    if (a.isPlainObject(e))
                      return (function t(e, n) {
                        for (var i in e)
                          if (e.hasOwnProperty(i)) {
                            var r = e[i],
                              s = n[i];
                            if (a.isPlainObject(r) && a.isPlainObject(s)) {
                              if (!t(r, s)) return !1;
                            } else if (!a.equals(r, s)) return !1;
                          }
                        return !0;
                      })(e, s);
                  }
                  return a.equals(s, e);
                },
                getItems: function (t) {
                  return C._getItems(this, t, this._matrix);
                },
                getItem: function (t) {
                  return (
                    C._getItems(this, t, this._matrix, null, !0)[0] || null
                  );
                },
                statics: {
                  _getItems: function t(e, n, r, s, o) {
                    if (!s) {
                      var h = 'object' === i(n) && n,
                        u = h && h.overlapping,
                        l = h && h.inside,
                        c = (x = u || l) && m.read([x]);
                      (s = {
                        items: [],
                        recursive: h && !1 !== h.recursive,
                        inside: !!l,
                        overlapping: !!u,
                        rect: c,
                        path:
                          u && new B.Rectangle({ rectangle: c, insert: !1 }),
                      }),
                        h &&
                          (n = a.filter({}, n, {
                            recursive: !0,
                            inside: !0,
                            overlapping: !0,
                          }));
                    }
                    var f = e._children,
                      d = s.items;
                    r = (c = s.rect) && (r || new w());
                    for (var _ = 0, g = f && f.length; _ < g; _++) {
                      var v = f[_],
                        p = r && r.appended(v._matrix),
                        y = !0;
                      if (c) {
                        var x = v.getBounds(p);
                        if (!c.intersects(x)) continue;
                        c.contains(x) ||
                          (s.overlapping &&
                            (x.contains(c) || s.path.intersects(v, p))) ||
                          (y = !1);
                      }
                      if (y && v.matches(n) && (d.push(v), o)) break;
                      if (
                        (!1 !== s.recursive && t(v, n, p, s, o),
                        o && d.length > 0)
                      )
                        break;
                    }
                    return d;
                  },
                },
              },
              {
                importJSON: function (t) {
                  var e = a.importJSON(t, this);
                  return e !== this ? this.addChild(e) : e;
                },
                addChild: function (t) {
                  return this.insertChild(n, t);
                },
                insertChild: function (t, e) {
                  var n = e ? this.insertChildren(t, [e]) : null;
                  return n && n[0];
                },
                addChildren: function (t) {
                  return this.insertChildren(this._children.length, t);
                },
                insertChildren: function (t, e) {
                  var n = this._children;
                  if (n && e && e.length > 0) {
                    for (
                      var i = {}, r = (e = a.slice(e)).length - 1;
                      r >= 0;
                      r--
                    ) {
                      var s = (l = e[r]) && l._id;
                      !l || i[s]
                        ? e.splice(r, 1)
                        : (l._remove(!1, !0), (i[s] = !0));
                    }
                    a.splice(n, e, t, 0);
                    for (
                      var o = this._project,
                        h = o._changes,
                        u = ((r = 0), e.length);
                      r < u;
                      r++
                    ) {
                      var l,
                        c = (l = e[r])._name;
                      (l._parent = this),
                        l._setProject(o, !0),
                        c && l.setName(c),
                        h && l._changed(5);
                    }
                    this._changed(11);
                  } else e = null;
                  return e;
                },
                _insertItem: '#insertChild',
                _insertAt: function (t, e) {
                  var n = t && t._getOwner(),
                    i = t !== this && n ? this : null;
                  return (
                    i && (i._remove(!1, !0), n._insertItem(t._index + e, i)), i
                  );
                },
                insertAbove: function (t) {
                  return this._insertAt(t, 1);
                },
                insertBelow: function (t) {
                  return this._insertAt(t, 0);
                },
                sendToBack: function () {
                  var t = this._getOwner();
                  return t ? t._insertItem(0, this) : null;
                },
                bringToFront: function () {
                  var t = this._getOwner();
                  return t ? t._insertItem(n, this) : null;
                },
                appendTop: '#addChild',
                appendBottom: function (t) {
                  return this.insertChild(0, t);
                },
                moveAbove: '#insertAbove',
                moveBelow: '#insertBelow',
                addTo: function (t) {
                  return t._insertItem(n, this);
                },
                copyTo: function (t) {
                  return this.clone(!1).addTo(t);
                },
                reduce: function (t) {
                  var e = this._children;
                  if (e && 1 === e.length) {
                    var n = e[0].reduce(t);
                    return (
                      this._parent
                        ? (n.insertAbove(this), this.remove())
                        : n.remove(),
                      n
                    );
                  }
                  return this;
                },
                _removeNamed: function () {
                  var t = this._getOwner();
                  if (t) {
                    var e = t._children,
                      n = t._namedChildren,
                      i = this._name,
                      r = n[i],
                      s = r ? r.indexOf(this) : -1;
                    -1 !== s &&
                      (e[i] == this && delete e[i],
                      r.splice(s, 1),
                      r.length ? (e[i] = r[0]) : delete n[i]);
                  }
                },
                _remove: function (t, e) {
                  var n = this._getOwner(),
                    i = this._project,
                    r = this._index;
                  return (
                    this._style && this._style._dispose(),
                    !!n &&
                      (this._name && this._removeNamed(),
                      null != r &&
                        (i._activeLayer === this &&
                          (i._activeLayer =
                            this.getNextSibling() || this.getPreviousSibling()),
                        a.splice(n._children, null, r, 1)),
                      this._installEvents(!1),
                      t && i._changes && this._changed(5),
                      e && n._changed(11, this),
                      (this._parent = null),
                      !0)
                  );
                },
                remove: function () {
                  return this._remove(!0, !0);
                },
                replaceWith: function (t) {
                  var e = t && t.insertBelow(this);
                  return e && this.remove(), e;
                },
                removeChildren: function (t, e) {
                  if (!this._children) return null;
                  (t = t || 0), (e = a.pick(e, this._children.length));
                  for (
                    var n = a.splice(this._children, null, t, e - t),
                      i = n.length - 1;
                    i >= 0;
                    i--
                  )
                    n[i]._remove(!0, !1);
                  return n.length > 0 && this._changed(11), n;
                },
                clear: '#removeChildren',
                reverseChildren: function () {
                  if (this._children) {
                    this._children.reverse();
                    for (var t = 0, e = this._children.length; t < e; t++)
                      this._children[t]._index = t;
                    this._changed(11);
                  }
                },
                isEmpty: function (t) {
                  var e = this._children,
                    n = e ? e.length : 0;
                  if (t) {
                    for (var i = 0; i < n; i++) if (!e[i].isEmpty(t)) return !1;
                    return !0;
                  }
                  return !n;
                },
                isEditable: function () {
                  for (var t = this; t; ) {
                    if (!t._visible || t._locked) return !1;
                    t = t._parent;
                  }
                  return !0;
                },
                hasFill: function () {
                  return this.getStyle().hasFill();
                },
                hasStroke: function () {
                  return this.getStyle().hasStroke();
                },
                hasShadow: function () {
                  return this.getStyle().hasShadow();
                },
                _getOrder: function (t) {
                  function e(t) {
                    var e = [];
                    do {
                      e.unshift(t);
                    } while ((t = t._parent));
                    return e;
                  }
                  for (
                    var n = e(this),
                      i = e(t),
                      r = 0,
                      s = Math.min(n.length, i.length);
                    r < s;
                    r++
                  )
                    if (n[r] != i[r]) return n[r]._index < i[r]._index ? 1 : -1;
                  return 0;
                },
                hasChildren: function () {
                  return this._children && this._children.length > 0;
                },
                isInserted: function () {
                  return !!this._parent && this._parent.isInserted();
                },
                isAbove: function (t) {
                  return -1 === this._getOrder(t);
                },
                isBelow: function (t) {
                  return 1 === this._getOrder(t);
                },
                isParent: function (t) {
                  return this._parent === t;
                },
                isChild: function (t) {
                  return t && t._parent === this;
                },
                isDescendant: function (t) {
                  for (var e = this; (e = e._parent); ) if (e === t) return !0;
                  return !1;
                },
                isAncestor: function (t) {
                  return !!t && t.isDescendant(this);
                },
                isSibling: function (t) {
                  return this._parent === t._parent;
                },
                isGroupedWith: function (t) {
                  for (var e = this._parent; e; ) {
                    if (
                      e._parent &&
                      /^(Group|Layer|CompoundPath)$/.test(e._class) &&
                      t.isDescendant(e)
                    )
                      return !0;
                    e = e._parent;
                  }
                  return !1;
                },
              },
              a.each(
                ['rotate', 'scale', 'shear', 'skew'],
                function (t) {
                  var e = 'rotate' === t;
                  this[t] = function () {
                    var n = arguments,
                      i = (e ? a : _).read(n),
                      r = _.read(n, 0, { readNull: !0 });
                    return this.transform(
                      new w()[t](i, r || this.getPosition(!0)),
                    );
                  };
                },
                {
                  translate: function () {
                    var t = new w();
                    return this.transform(t.translate.apply(t, arguments));
                  },
                  transform: function (t, e, n) {
                    var i = this._matrix,
                      r = t && !t.isIdentity(),
                      s =
                        (n && this._canApplyMatrix) ||
                        (this._applyMatrix &&
                          (r || !i.isIdentity() || (e && this._children)));
                    if (!r && !s) return this;
                    if (r) {
                      !t.isInvertible() &&
                        i.isInvertible() &&
                        (i._backup = i.getValues()),
                        i.prepend(t, !0);
                      var a = this._style,
                        o = a.getFillColor(!0),
                        h = a.getStrokeColor(!0);
                      o && o.transform(t), h && h.transform(t);
                    }
                    if (s && (s = this._transformContent(i, e, n))) {
                      var u = this._pivot;
                      u && i._transformPoint(u, u, !0),
                        i.reset(!0),
                        n && this._canApplyMatrix && (this._applyMatrix = !0);
                    }
                    var l = this._bounds,
                      c = this._position;
                    (r || s) && this._changed(25);
                    var f = r && l && t.decompose();
                    if (f && f.skewing.isZero() && f.rotation % 90 == 0) {
                      for (var d in l) {
                        var _ = l[d];
                        if (_.nonscaling) delete l[d];
                        else if (s || !_.internal) {
                          var g = _.rect;
                          t._transformBounds(g, g);
                        }
                      }
                      this._bounds = l;
                      var v =
                        l[this._getBoundsCacheKey(this._boundsOptions || {})];
                      v &&
                        (this._position = this._getPositionFromBounds(v.rect));
                    } else
                      r &&
                        c &&
                        this._pivot &&
                        (this._position = t._transformPoint(c, c));
                    return this;
                  },
                  _transformContent: function (t, e, n) {
                    var i = this._children;
                    if (i) {
                      for (var r = 0, s = i.length; r < s; r++)
                        i[r].transform(t, e, n);
                      return !0;
                    }
                  },
                  globalToLocal: function () {
                    return this.getGlobalMatrix(!0)._inverseTransform(
                      _.read(arguments),
                    );
                  },
                  localToGlobal: function () {
                    return this.getGlobalMatrix(!0)._transformPoint(
                      _.read(arguments),
                    );
                  },
                  parentToLocal: function () {
                    return this._matrix._inverseTransform(_.read(arguments));
                  },
                  localToParent: function () {
                    return this._matrix._transformPoint(_.read(arguments));
                  },
                  fitBounds: function (t, e) {
                    t = m.read(arguments);
                    var n = this.getBounds(),
                      i = n.height / n.width,
                      r = t.height / t.width,
                      s = (e ? i > r : i < r)
                        ? t.width / n.width
                        : t.height / n.height,
                      a = new m(new _(), new v(n.width * s, n.height * s));
                    a.setCenter(t.getCenter()), this.setBounds(a);
                  },
                },
              ),
              {
                _setStyles: function (t, e, n) {
                  var i = this._style,
                    r = this._matrix;
                  if (
                    (i.hasFill() &&
                      (t.fillStyle = i.getFillColor().toCanvasStyle(t, r)),
                    i.hasStroke())
                  ) {
                    (t.strokeStyle = i.getStrokeColor().toCanvasStyle(t, r)),
                      (t.lineWidth = i.getStrokeWidth());
                    var s = i.getStrokeJoin(),
                      a = i.getStrokeCap(),
                      o = i.getMiterLimit();
                    if (
                      (s && (t.lineJoin = s),
                      a && (t.lineCap = a),
                      o && (t.miterLimit = o),
                      ht.support.nativeDash)
                    ) {
                      var h = i.getDashArray(),
                        u = i.getDashOffset();
                      h &&
                        h.length &&
                        ('setLineDash' in t
                          ? (t.setLineDash(h), (t.lineDashOffset = u))
                          : ((t.mozDash = h), (t.mozDashOffset = u)));
                    }
                  }
                  if (i.hasShadow()) {
                    var l = e.pixelRatio || 1,
                      c = n._shiftless().prepend(new w().scale(l, l)),
                      f = c.transform(new _(i.getShadowBlur(), 0)),
                      d = c.transform(this.getShadowOffset());
                    (t.shadowColor = i.getShadowColor().toCanvasStyle(t)),
                      (t.shadowBlur = f.getLength()),
                      (t.shadowOffsetX = d.x),
                      (t.shadowOffsetY = d.y);
                  }
                },
                draw: function (t, e, n) {
                  this._updateVersion = this._project._updateVersion;
                  if (this._visible && 0 !== this._opacity) {
                    var i = e.matrices,
                      r = e.viewMatrix,
                      s = this._matrix,
                      a = i[i.length - 1].appended(s);
                    if (a.isInvertible()) {
                      (r = r ? r.appended(a) : a),
                        i.push(a),
                        e.updateMatrix && (this._globalMatrix = a);
                      var o,
                        h,
                        u,
                        l = this._blendMode,
                        c = f.clamp(this._opacity, 0, 1),
                        d = 'normal' === l,
                        _ = st.nativeModes[l],
                        g =
                          (d && 1 === c) ||
                          e.dontStart ||
                          e.clip ||
                          ((_ || (d && c < 1)) && this._canComposite()),
                        v = e.pixelRatio || 1;
                      if (!g) {
                        var p = this.getStrokeBounds(r);
                        if (!p.width || !p.height) return void i.pop();
                        (u = e.offset),
                          (h = e.offset = p.getTopLeft().floor()),
                          (o = t),
                          (t = rt.getContext(
                            p.getSize().ceil().add(1).multiply(v),
                          )),
                          1 !== v && t.scale(v, v);
                      }
                      t.save();
                      var m = n
                          ? n.appended(s)
                          : this._canScaleStroke &&
                            !this.getStrokeScaling(!0) &&
                            r,
                        y = !g && e.clipItem,
                        w = !m || y;
                      if (
                        (g
                          ? ((t.globalAlpha = c),
                            _ && (t.globalCompositeOperation = l))
                          : w && t.translate(-h.x, -h.y),
                        w && (g ? s : r).applyToContext(t),
                        y && e.clipItem.draw(t, e.extend({ clip: !0 })),
                        m)
                      ) {
                        t.setTransform(v, 0, 0, v, 0, 0);
                        var x = e.offset;
                        x && t.translate(-x.x, -x.y);
                      }
                      this._draw(t, e, r, m),
                        t.restore(),
                        i.pop(),
                        e.clip && !e.dontFinish && t.clip(this.getFillRule()),
                        g ||
                          (st.process(l, t, o, c, h.subtract(u).multiply(v)),
                          rt.release(t),
                          (e.offset = u));
                    }
                  }
                },
                _isUpdated: function (t) {
                  var e = this._parent;
                  if (e instanceof F) return e._isUpdated(t);
                  var n = this._updateVersion === t;
                  return (
                    !n &&
                      e &&
                      e._visible &&
                      e._isUpdated(t) &&
                      ((this._updateVersion = t), (n = !0)),
                    n
                  );
                },
                _drawSelection: function (t, e, n, i, r) {
                  var s = this._selection,
                    a = 1 & s,
                    o = 2 & s || (a && this._selectBounds),
                    h = 4 & s;
                  if (
                    (this._drawSelected || (a = !1),
                    (a || o || h) && this._isUpdated(r))
                  ) {
                    var u,
                      l =
                        this.getSelectedColor(!0) ||
                        ((u = this.getLayer()) && u.getSelectedColor(!0)),
                      c = e.appended(this.getGlobalMatrix(!0)),
                      f = n / 2;
                    if (
                      ((t.strokeStyle = t.fillStyle = l
                        ? l.toCanvasStyle(t)
                        : '#009dec'),
                      a && this._drawSelected(t, c, i),
                      h)
                    ) {
                      var d = this.getPosition(!0),
                        _ = this._parent,
                        g = _ ? _.localToGlobal(d) : d,
                        v = g.x,
                        p = g.y;
                      t.beginPath(),
                        t.arc(v, p, f, 0, 2 * Math.PI, !0),
                        t.stroke();
                      for (
                        var m = [
                            [0, -1],
                            [1, 0],
                            [0, 1],
                            [-1, 0],
                          ],
                          y = f,
                          w = n + 1,
                          x = 0;
                        x < 4;
                        x++
                      ) {
                        var b = m[x],
                          C = b[0],
                          S = b[1];
                        t.moveTo(v + C * y, p + S * y),
                          t.lineTo(v + C * w, p + S * w),
                          t.stroke();
                      }
                    }
                    if (o) {
                      var k = c._transformCorners(this.getInternalBounds());
                      t.beginPath();
                      for (x = 0; x < 8; x++)
                        t[x ? 'lineTo' : 'moveTo'](k[x], k[++x]);
                      t.closePath(), t.stroke();
                      for (x = 0; x < 8; x++)
                        t.fillRect(k[x] - f, k[++x] - f, n, n);
                    }
                  }
                },
                _canComposite: function () {
                  return !1;
                },
              },
              a.each(
                ['down', 'drag', 'up', 'move'],
                function (t) {
                  this['removeOn' + a.capitalize(t)] = function () {
                    var e = {};
                    return (e[t] = !0), this.removeOn(e);
                  };
                },
                {
                  removeOn: function (t) {
                    for (var e in t)
                      if (t[e]) {
                        var n = 'mouse' + e,
                          i = this._project,
                          r = (i._removeSets = i._removeSets || {});
                        (r[n] = r[n] || {}), (r[n][this._id] = this);
                      }
                    return this;
                  },
                },
              ),
              {
                tween: function (t, e, n) {
                  n ||
                    ((n = e), (e = t), (t = null), n || ((n = e), (e = null)));
                  var i = n && n.easing,
                    r = n && n.start,
                    s = null != n && ('number' == typeof n ? n : n.duration),
                    a = new nt(this, t, e, s, i, r);
                  return (
                    s &&
                      this.on('frame', function t(e) {
                        a._handleFrame(1e3 * e.time),
                          a.running || this.off('frame', t);
                      }),
                    a
                  );
                },
                tweenTo: function (t, e) {
                  return this.tween(null, t, e);
                },
                tweenFrom: function (t, e) {
                  return this.tween(t, null, e);
                },
              },
            ),
            S = C.extend({
              _class: 'Group',
              _selectBounds: !1,
              _selectChildren: !0,
              _serializeFields: { children: [] },
              initialize: function (t) {
                (this._children = []),
                  (this._namedChildren = {}),
                  this._initialize(t) ||
                    this.addChildren(Array.isArray(t) ? t : arguments);
              },
              _changed: function t(e) {
                t.base.call(this, e), 2050 & e && (this._clipItem = n);
              },
              _getClipItem: function () {
                var t = this._clipItem;
                if (t === n) {
                  t = null;
                  for (var e = this._children, i = 0, r = e.length; i < r; i++)
                    if (e[i]._clipMask) {
                      t = e[i];
                      break;
                    }
                  this._clipItem = t;
                }
                return t;
              },
              isClipped: function () {
                return !!this._getClipItem();
              },
              setClipped: function (t) {
                var e = this.getFirstChild();
                e && e.setClipMask(t);
              },
              _getBounds: function t(e, n) {
                var i = this._getClipItem();
                return i
                  ? i._getCachedBounds(
                      i._matrix.prepended(e),
                      a.set({}, n, { stroke: !1 }),
                    )
                  : t.base.call(this, e, n);
              },
              _hitTestChildren: function t(e, n, i) {
                var r = this._getClipItem();
                return (!r || r.contains(e)) && t.base.call(this, e, n, i, r);
              },
              _draw: function (t, e) {
                var n = e.clip,
                  i = !n && this._getClipItem();
                (e = e.extend({ clipItem: i, clip: !1 })),
                  n
                    ? (t.beginPath(), (e.dontStart = e.dontFinish = !0))
                    : i && i.draw(t, e.extend({ clip: !0 }));
                for (var r = this._children, s = 0, a = r.length; s < a; s++) {
                  var o = r[s];
                  o !== i && o.draw(t, e);
                }
              },
            }),
            k = S.extend({
              _class: 'Layer',
              initialize: function () {
                S.apply(this, arguments);
              },
              _getOwner: function () {
                return this._parent || (null != this._index && this._project);
              },
              isInserted: function t() {
                return this._parent ? t.base.call(this) : null != this._index;
              },
              activate: function () {
                this._project._activeLayer = this;
              },
              _hitTestSelf: function () {},
            }),
            I = C.extend(
              {
                _class: 'Shape',
                _applyMatrix: !1,
                _canApplyMatrix: !1,
                _canScaleStroke: !0,
                _serializeFields: { type: null, size: null, radius: null },
                initialize: function (t, e) {
                  this._initialize(t, e);
                },
                _equals: function (t) {
                  return (
                    this._type === t._type &&
                    this._size.equals(t._size) &&
                    a.equals(this._radius, t._radius)
                  );
                },
                copyContent: function (t) {
                  this.setType(t._type),
                    this.setSize(t._size),
                    this.setRadius(t._radius);
                },
                getType: function () {
                  return this._type;
                },
                setType: function (t) {
                  this._type = t;
                },
                getShape: '#getType',
                setShape: '#setType',
                getSize: function () {
                  var t = this._size;
                  return new p(t.width, t.height, this, 'setSize');
                },
                setSize: function () {
                  var t = v.read(arguments);
                  if (this._size) {
                    if (!this._size.equals(t)) {
                      var e = this._type,
                        n = t.width,
                        i = t.height;
                      'rectangle' === e
                        ? this._radius.set(
                            v.min(this._radius, t.divide(2).abs()),
                          )
                        : 'circle' === e
                        ? ((n = i = (n + i) / 2), (this._radius = n / 2))
                        : 'ellipse' === e && this._radius._set(n / 2, i / 2),
                        this._size._set(n, i),
                        this._changed(9);
                    }
                  } else this._size = t.clone();
                },
                getRadius: function () {
                  var t = this._radius;
                  return 'circle' === this._type
                    ? t
                    : new p(t.width, t.height, this, 'setRadius');
                },
                setRadius: function (t) {
                  var e = this._type;
                  if ('circle' === e) {
                    if (t === this._radius) return;
                    var n = 2 * t;
                    (this._radius = t), this._size._set(n, n);
                  } else if (((t = v.read(arguments)), this._radius)) {
                    if (this._radius.equals(t)) return;
                    if ((this._radius.set(t), 'rectangle' === e)) {
                      n = v.max(this._size, t.multiply(2));
                      this._size.set(n);
                    } else
                      'ellipse' === e &&
                        this._size._set(2 * t.width, 2 * t.height);
                  } else this._radius = t.clone();
                  this._changed(9);
                },
                isEmpty: function () {
                  return !1;
                },
                toPath: function (t) {
                  var e = new B[a.capitalize(this._type)]({
                    center: new _(),
                    size: this._size,
                    radius: this._radius,
                    insert: !1,
                  });
                  return (
                    e.copyAttributes(this),
                    ht.settings.applyMatrix && e.setApplyMatrix(!0),
                    (t === n || t) && e.insertAbove(this),
                    e
                  );
                },
                toShape: '#clone',
                _asPathItem: function () {
                  return this.toPath(!1);
                },
                _draw: function (t, e, n, i) {
                  var r = this._style,
                    s = r.hasFill(),
                    a = r.hasStroke(),
                    o = e.dontFinish || e.clip,
                    h = !i;
                  if (s || a || o) {
                    var u = this._type,
                      l = this._radius,
                      c = 'circle' === u;
                    if ((e.dontStart || t.beginPath(), h && c))
                      t.arc(0, 0, l, 0, 2 * Math.PI, !0);
                    else {
                      var f = c ? l : l.width,
                        d = c ? l : l.height,
                        _ = this._size,
                        g = _.width,
                        v = _.height;
                      if (h && 'rectangle' === u && 0 === f && 0 === d)
                        t.rect(-g / 2, -v / 2, g, v);
                      else {
                        var p = g / 2,
                          m = v / 2,
                          y = 0.44771525016920644,
                          w = f * y,
                          x = d * y,
                          b = [
                            -p,
                            -m + d,
                            -p,
                            -m + x,
                            -p + w,
                            -m,
                            -p + f,
                            -m,
                            p - f,
                            -m,
                            p - w,
                            -m,
                            p,
                            -m + x,
                            p,
                            -m + d,
                            p,
                            m - d,
                            p,
                            m - x,
                            p - w,
                            m,
                            p - f,
                            m,
                            -p + f,
                            m,
                            -p + w,
                            m,
                            -p,
                            m - x,
                            -p,
                            m - d,
                          ];
                        i && i.transform(b, b, 32),
                          t.moveTo(b[0], b[1]),
                          t.bezierCurveTo(b[2], b[3], b[4], b[5], b[6], b[7]),
                          p !== f && t.lineTo(b[8], b[9]),
                          t.bezierCurveTo(
                            b[10],
                            b[11],
                            b[12],
                            b[13],
                            b[14],
                            b[15],
                          ),
                          m !== d && t.lineTo(b[16], b[17]),
                          t.bezierCurveTo(
                            b[18],
                            b[19],
                            b[20],
                            b[21],
                            b[22],
                            b[23],
                          ),
                          p !== f && t.lineTo(b[24], b[25]),
                          t.bezierCurveTo(
                            b[26],
                            b[27],
                            b[28],
                            b[29],
                            b[30],
                            b[31],
                          );
                      }
                    }
                    t.closePath();
                  }
                  o ||
                    (!s && !a) ||
                    (this._setStyles(t, e, n),
                    s &&
                      (t.fill(r.getFillRule()),
                      (t.shadowColor = 'rgba(0,0,0,0)')),
                    a && t.stroke());
                },
                _canComposite: function () {
                  return !(this.hasFill() && this.hasStroke());
                },
                _getBounds: function (t, e) {
                  var n = new m(this._size).setCenter(0, 0),
                    i = this._style,
                    r = e.stroke && i.hasStroke() && i.getStrokeWidth();
                  return (
                    t && (n = t._transformBounds(n)),
                    r
                      ? n.expand(
                          B._getStrokePadding(r, this._getStrokeMatrix(t, e)),
                        )
                      : n
                  );
                },
              },
              new (function () {
                function t(t, e, n) {
                  var i = t._radius;
                  if (!i.isZero())
                    for (var r = t._size.divide(2), s = 1; s <= 4; s++) {
                      var a = new _(s > 1 && s < 4 ? -1 : 1, s > 2 ? -1 : 1),
                        o = a.multiply(r),
                        h = o.subtract(a.multiply(i));
                      if (new m(n ? o.add(a.multiply(n)) : o, h).contains(e))
                        return { point: h, quadrant: s };
                    }
                }
                function e(t, e, n, i) {
                  var r = t.divide(e);
                  return (
                    (!i || r.isInQuadrant(i)) &&
                    r.subtract(r.normalize()).multiply(e).divide(n).length <= 1
                  );
                }
                return {
                  _contains: function e(n) {
                    if ('rectangle' === this._type) {
                      var i = t(this, n);
                      return i
                        ? n
                            .subtract(i.point)
                            .divide(this._radius)
                            .getLength() <= 1
                        : e.base.call(this, n);
                    }
                    return n.divide(this.size).getLength() <= 0.5;
                  },
                  _hitTestSelf: function n(i, r, s, a) {
                    var o = !1,
                      h = this._style,
                      u = r.stroke && h.hasStroke(),
                      l = r.fill && h.hasFill();
                    if (u || l) {
                      var c = this._type,
                        f = this._radius,
                        d = u ? h.getStrokeWidth() / 2 : 0,
                        _ = r._tolerancePadding.add(
                          B._getStrokePadding(d, !h.getStrokeScaling() && a),
                        );
                      if ('rectangle' === c) {
                        var g = _.multiply(2),
                          v = t(this, i, g);
                        if (v) o = e(i.subtract(v.point), f, _, v.quadrant);
                        else {
                          var p = new m(this._size).setCenter(0, 0),
                            y = p.expand(g),
                            w = p.expand(g.negate());
                          o = y._containsPoint(i) && !w._containsPoint(i);
                        }
                      } else o = e(i, f, _);
                    }
                    return o
                      ? new T(u ? 'stroke' : 'fill', this)
                      : n.base.apply(this, arguments);
                  },
                };
              })(),
              {
                statics: new (function () {
                  function t(t, e, n, i, r) {
                    var s = a.create(I.prototype);
                    return (
                      (s._type = t),
                      (s._size = n),
                      (s._radius = i),
                      s._initialize(a.getNamed(r), e),
                      s
                    );
                  }
                  return {
                    Circle: function () {
                      var e = arguments,
                        n = _.readNamed(e, 'center'),
                        i = a.readNamed(e, 'radius');
                      return t('circle', n, new v(2 * i), i, e);
                    },
                    Rectangle: function () {
                      var e = arguments,
                        n = m.readNamed(e, 'rectangle'),
                        i = v.min(
                          v.readNamed(e, 'radius'),
                          n.getSize(!0).divide(2),
                        );
                      return t(
                        'rectangle',
                        n.getCenter(!0),
                        n.getSize(!0),
                        i,
                        e,
                      );
                    },
                    Ellipse: function () {
                      var e = arguments,
                        n = I._readEllipse(e),
                        i = n.radius;
                      return t('ellipse', n.center, i.multiply(2), i, e);
                    },
                    _readEllipse: function (t) {
                      var e, n;
                      if (a.hasNamed(t, 'radius'))
                        (e = _.readNamed(t, 'center')),
                          (n = v.readNamed(t, 'radius'));
                      else {
                        var i = m.readNamed(t, 'rectangle');
                        (e = i.getCenter(!0)), (n = i.getSize(!0).divide(2));
                      }
                      return { center: e, radius: n };
                    },
                  };
                })(),
              },
            ),
            P = C.extend(
              {
                _class: 'Raster',
                _applyMatrix: !1,
                _canApplyMatrix: !1,
                _boundsOptions: { stroke: !1, handle: !1 },
                _serializeFields: { crossOrigin: null, source: null },
                _prioritize: ['crossOrigin'],
                _smoothing: !0,
                beans: !0,
                initialize: function (t, e) {
                  if (!this._initialize(t, e !== n && _.read(arguments))) {
                    var r,
                      a = i(t),
                      o =
                        'string' === a
                          ? s.getElementById(t)
                          : 'object' === a
                          ? t
                          : null;
                    if (o && o !== C.NO_INSERT)
                      if (o.getContext || null != o.naturalHeight) r = o;
                      else if (o) {
                        var h = v.read(arguments);
                        h.isZero() || (r = rt.getCanvas(h));
                      }
                    r ? this.setImage(r) : this.setSource(t);
                  }
                  this._size || ((this._size = new v()), (this._loaded = !1));
                },
                _equals: function (t) {
                  return this.getSource() === t.getSource();
                },
                copyContent: function (t) {
                  var e = t._image,
                    n = t._canvas;
                  if (e) this._setImage(e);
                  else if (n) {
                    var i = rt.getCanvas(t._size);
                    i.getContext('2d').drawImage(n, 0, 0), this._setImage(i);
                  }
                  this._crossOrigin = t._crossOrigin;
                },
                getSize: function () {
                  var t = this._size;
                  return new p(
                    t ? t.width : 0,
                    t ? t.height : 0,
                    this,
                    'setSize',
                  );
                },
                setSize: function () {
                  var t = v.read(arguments);
                  if (!t.equals(this._size))
                    if (t.width > 0 && t.height > 0) {
                      var e = this.getElement();
                      this._setImage(rt.getCanvas(t)),
                        e &&
                          this.getContext(!0).drawImage(
                            e,
                            0,
                            0,
                            t.width,
                            t.height,
                          );
                    } else
                      this._canvas && rt.release(this._canvas),
                        (this._size = t.clone());
                },
                getWidth: function () {
                  return this._size ? this._size.width : 0;
                },
                setWidth: function (t) {
                  this.setSize(t, this.getHeight());
                },
                getHeight: function () {
                  return this._size ? this._size.height : 0;
                },
                setHeight: function (t) {
                  this.setSize(this.getWidth(), t);
                },
                getLoaded: function () {
                  return this._loaded;
                },
                isEmpty: function () {
                  var t = this._size;
                  return !t || (0 === t.width && 0 === t.height);
                },
                getResolution: function () {
                  var t = this._matrix,
                    e = new _(0, 0).transform(t),
                    n = new _(1, 0).transform(t).subtract(e),
                    i = new _(0, 1).transform(t).subtract(e);
                  return new v(72 / n.getLength(), 72 / i.getLength());
                },
                getPpi: '#getResolution',
                getImage: function () {
                  return this._image;
                },
                setImage: function (t) {
                  var e = this;
                  function n(t) {
                    var n = e.getView(),
                      i = (t && t.type) || 'load';
                    n &&
                      e.responds(i) &&
                      ((ht = n._scope), e.emit(i, new X(t)));
                  }
                  this._setImage(t),
                    this._loaded
                      ? setTimeout(n, 0)
                      : t &&
                        $.add(t, {
                          load: function (i) {
                            e._setImage(t), n(i);
                          },
                          error: n,
                        });
                },
                _setImage: function (t) {
                  this._canvas && rt.release(this._canvas),
                    t && t.getContext
                      ? ((this._image = null),
                        (this._canvas = t),
                        (this._loaded = !0))
                      : ((this._image = t),
                        (this._canvas = null),
                        (this._loaded = !!(t && t.src && t.complete))),
                    (this._size = new v(
                      t ? t.naturalWidth || t.width : 0,
                      t ? t.naturalHeight || t.height : 0,
                    )),
                    (this._context = null),
                    this._changed(1033);
                },
                getCanvas: function () {
                  if (!this._canvas) {
                    var t = rt.getContext(this._size);
                    try {
                      this._image && t.drawImage(this._image, 0, 0),
                        (this._canvas = t.canvas);
                    } catch (e) {
                      rt.release(t);
                    }
                  }
                  return this._canvas;
                },
                setCanvas: '#setImage',
                getContext: function (t) {
                  return (
                    this._context ||
                      (this._context = this.getCanvas().getContext('2d')),
                    t && ((this._image = null), this._changed(1025)),
                    this._context
                  );
                },
                setContext: function (t) {
                  this._context = t;
                },
                getSource: function () {
                  var t = this._image;
                  return (t && t.src) || this.toDataURL();
                },
                setSource: function (t) {
                  var n = new e.Image(),
                    i = this._crossOrigin;
                  i && (n.crossOrigin = i), t && (n.src = t), this.setImage(n);
                },
                getCrossOrigin: function () {
                  var t = this._image;
                  return (t && t.crossOrigin) || this._crossOrigin || '';
                },
                setCrossOrigin: function (t) {
                  this._crossOrigin = t;
                  var e = this._image;
                  e && (e.crossOrigin = t);
                },
                getSmoothing: function () {
                  return this._smoothing;
                },
                setSmoothing: function (t) {
                  (this._smoothing = t), this._changed(257);
                },
                getElement: function () {
                  return this._canvas || (this._loaded && this._image);
                },
              },
              {
                beans: !1,
                getSubCanvas: function () {
                  var t = m.read(arguments),
                    e = rt.getContext(t.getSize());
                  return (
                    e.drawImage(
                      this.getCanvas(),
                      t.x,
                      t.y,
                      t.width,
                      t.height,
                      0,
                      0,
                      t.width,
                      t.height,
                    ),
                    e.canvas
                  );
                },
                getSubRaster: function () {
                  var t = m.read(arguments),
                    e = new P(C.NO_INSERT);
                  return (
                    e._setImage(this.getSubCanvas(t)),
                    e.translate(
                      t.getCenter().subtract(this.getSize().divide(2)),
                    ),
                    e._matrix.prepend(this._matrix),
                    e.insertAbove(this),
                    e
                  );
                },
                toDataURL: function () {
                  var t = this._image,
                    e = t && t.src;
                  if (/^data:/.test(e)) return e;
                  var n = this.getCanvas();
                  return n ? n.toDataURL.apply(n, arguments) : null;
                },
                drawImage: function (t) {
                  var e = _.read(arguments, 1);
                  this.getContext(!0).drawImage(t, e.x, e.y);
                },
                getAverageColor: function (t) {
                  var e, n;
                  if (
                    (t
                      ? t instanceof N
                        ? ((n = t), (e = t.getBounds()))
                        : 'object' === i(t) &&
                          ('width' in t
                            ? (e = new m(t))
                            : 'x' in t &&
                              (e = new m(t.x - 0.5, t.y - 0.5, 1, 1)))
                      : (e = this.getBounds()),
                    !e)
                  )
                    return null;
                  var r = Math.min(e.width, 32),
                    s = Math.min(e.height, 32),
                    o = P._sampleContext;
                  o
                    ? o.clearRect(0, 0, 33, 33)
                    : (o = P._sampleContext = rt.getContext(new v(32))),
                    o.save();
                  var h = new w()
                    .scale(r / e.width, s / e.height)
                    .translate(-e.x, -e.y);
                  h.applyToContext(o),
                    n && n.draw(o, new a({ clip: !0, matrices: [h] })),
                    this._matrix.applyToContext(o);
                  var u = this.getElement(),
                    l = this._size;
                  u && o.drawImage(u, -l.width / 2, -l.height / 2), o.restore();
                  for (
                    var c = o.getImageData(0.5, 0.5, Math.ceil(r), Math.ceil(s))
                        .data,
                      f = [0, 0, 0],
                      d = 0,
                      _ = 0,
                      g = c.length;
                    _ < g;
                    _ += 4
                  ) {
                    var p = c[_ + 3];
                    (d += p),
                      (p /= 255),
                      (f[0] += c[_] * p),
                      (f[1] += c[_ + 1] * p),
                      (f[2] += c[_ + 2] * p);
                  }
                  for (_ = 0; _ < 3; _++) f[_] /= d;
                  return d ? V.read(f) : null;
                },
                getPixel: function () {
                  var t = _.read(arguments),
                    e = this.getContext().getImageData(t.x, t.y, 1, 1).data;
                  return new V(
                    'rgb',
                    [e[0] / 255, e[1] / 255, e[2] / 255],
                    e[3] / 255,
                  );
                },
                setPixel: function () {
                  var t = arguments,
                    e = _.read(t),
                    n = V.read(t),
                    i = n._convert('rgb'),
                    r = n._alpha,
                    s = this.getContext(!0),
                    a = s.createImageData(1, 1),
                    o = a.data;
                  (o[0] = 255 * i[0]),
                    (o[1] = 255 * i[1]),
                    (o[2] = 255 * i[2]),
                    (o[3] = null != r ? 255 * r : 255),
                    s.putImageData(a, e.x, e.y);
                },
                clear: function () {
                  var t = this._size;
                  this.getContext(!0).clearRect(
                    0,
                    0,
                    t.width + 1,
                    t.height + 1,
                  );
                },
                createImageData: function () {
                  var t = v.read(arguments);
                  return this.getContext().createImageData(t.width, t.height);
                },
                getImageData: function () {
                  var t = m.read(arguments);
                  return (
                    t.isEmpty() && (t = new m(this._size)),
                    this.getContext().getImageData(t.x, t.y, t.width, t.height)
                  );
                },
                setImageData: function (t) {
                  var e = _.read(arguments, 1);
                  this.getContext(!0).putImageData(t, e.x, e.y);
                },
                _getBounds: function (t, e) {
                  var n = new m(this._size).setCenter(0, 0);
                  return t ? t._transformBounds(n) : n;
                },
                _hitTestSelf: function (t) {
                  if (this._contains(t)) {
                    var e = this;
                    return new T('pixel', e, {
                      offset: t.add(e._size.divide(2)).round(),
                      color: {
                        get: function () {
                          return e.getPixel(this.offset);
                        },
                      },
                    });
                  }
                },
                _draw: function (t, e, n) {
                  var i = this.getElement();
                  i &&
                    i.width > 0 &&
                    i.height > 0 &&
                    ((t.globalAlpha = f.clamp(this._opacity, 0, 1)),
                    this._setStyles(t, e, n),
                    W.setPrefixed(t, 'imageSmoothingEnabled', this._smoothing),
                    t.drawImage(
                      i,
                      -this._size.width / 2,
                      -this._size.height / 2,
                    ));
                },
                _canComposite: function () {
                  return !0;
                },
              },
            ),
            M = C.extend({
              _class: 'SymbolItem',
              _applyMatrix: !1,
              _canApplyMatrix: !1,
              _boundsOptions: { stroke: !0 },
              _serializeFields: { symbol: null },
              initialize: function (t, e) {
                this._initialize(t, e !== n && _.read(arguments, 1)) ||
                  this.setDefinition(t instanceof A ? t : new A(t));
              },
              _equals: function (t) {
                return this._definition === t._definition;
              },
              copyContent: function (t) {
                this.setDefinition(t._definition);
              },
              getDefinition: function () {
                return this._definition;
              },
              setDefinition: function (t) {
                (this._definition = t), this._changed(9);
              },
              getSymbol: '#getDefinition',
              setSymbol: '#setDefinition',
              isEmpty: function () {
                return this._definition._item.isEmpty();
              },
              _getBounds: function (t, e) {
                var n = this._definition._item;
                return n._getCachedBounds(n._matrix.prepended(t), e);
              },
              _hitTestSelf: function (t, e, n) {
                var i = e.extend({ all: !1 }),
                  r = this._definition._item._hitTest(t, i, n);
                return r && (r.item = this), r;
              },
              _draw: function (t, e) {
                this._definition._item.draw(t, e);
              },
            }),
            A = a.extend({
              _class: 'SymbolDefinition',
              initialize: function (t, e) {
                (this._id = d.get()),
                  (this.project = ht.project),
                  t && this.setItem(t, e);
              },
              _serialize: function (t, e) {
                return e.add(this, function () {
                  return a.serialize([this._class, this._item], t, !1, e);
                });
              },
              _changed: function (t) {
                8 & t && C._clearBoundsCache(this),
                  1 & t && this.project._changed(t);
              },
              getItem: function () {
                return this._item;
              },
              setItem: function (t, e) {
                t._symbol && (t = t.clone()),
                  this._item && (this._item._symbol = null),
                  (this._item = t),
                  t.remove(),
                  t.setSelected(!1),
                  e || t.setPosition(new _()),
                  (t._symbol = this),
                  this._changed(9);
              },
              getDefinition: '#getItem',
              setDefinition: '#setItem',
              place: function (t) {
                return new M(this, t);
              },
              clone: function () {
                return new A(this._item.clone(!1));
              },
              equals: function (t) {
                return t === this || (t && this._item.equals(t._item)) || !1;
              },
            }),
            T = a.extend({
              _class: 'HitResult',
              initialize: function (t, e, n) {
                (this.type = t), (this.item = e), n && this.inject(n);
              },
              statics: {
                getOptions: function (t) {
                  var e = t && a.read(t);
                  return new a(
                    {
                      type: null,
                      tolerance: ht.settings.hitTolerance,
                      fill: !e,
                      stroke: !e,
                      segments: !e,
                      handles: !1,
                      ends: !1,
                      position: !1,
                      center: !1,
                      bounds: !1,
                      guides: !1,
                      selected: !1,
                    },
                    e,
                  );
                },
              },
            }),
            O = a.extend({
              _class: 'Segment',
              beans: !0,
              _selection: 0,
              initialize: function (t, e, r, s, a, o) {
                var h,
                  u,
                  l,
                  c,
                  f = arguments.length;
                f > 0 &&
                  (null == t || 'object' === i(t)
                    ? 1 === f && t && 'point' in t
                      ? ((h = t.point),
                        (u = t.handleIn),
                        (l = t.handleOut),
                        (c = t.selection))
                      : ((h = t), (u = e), (l = r), (c = s))
                    : ((h = [t, e]),
                      (u = r !== n ? [r, s] : null),
                      (l = a !== n ? [a, o] : null))),
                  new z(h, this, '_point'),
                  new z(u, this, '_handleIn'),
                  new z(l, this, '_handleOut'),
                  c && this.setSelection(c);
              },
              _serialize: function (t, e) {
                var n = this._point,
                  i = this._selection,
                  r =
                    i || this.hasHandles()
                      ? [n, this._handleIn, this._handleOut]
                      : n;
                return i && r.push(i), a.serialize(r, t, !0, e);
              },
              _changed: function (t) {
                var e = this._path;
                if (e) {
                  var n,
                    i = e._curves,
                    r = this._index;
                  i &&
                    ((t && t !== this._point && t !== this._handleIn) ||
                      !(n =
                        r > 0
                          ? i[r - 1]
                          : e._closed
                          ? i[i.length - 1]
                          : null) ||
                      n._changed(),
                    (t && t !== this._point && t !== this._handleOut) ||
                      !(n = i[r]) ||
                      n._changed()),
                    e._changed(41);
                }
              },
              getPoint: function () {
                return this._point;
              },
              setPoint: function () {
                this._point.set(_.read(arguments));
              },
              getHandleIn: function () {
                return this._handleIn;
              },
              setHandleIn: function () {
                this._handleIn.set(_.read(arguments));
              },
              getHandleOut: function () {
                return this._handleOut;
              },
              setHandleOut: function () {
                this._handleOut.set(_.read(arguments));
              },
              hasHandles: function () {
                return !this._handleIn.isZero() || !this._handleOut.isZero();
              },
              isSmooth: function () {
                var t = this._handleIn,
                  e = this._handleOut;
                return !t.isZero() && !e.isZero() && t.isCollinear(e);
              },
              clearHandles: function () {
                this._handleIn._set(0, 0), this._handleOut._set(0, 0);
              },
              getSelection: function () {
                return this._selection;
              },
              setSelection: function (t) {
                var e = this._selection,
                  n = this._path;
                (this._selection = t = t || 0),
                  n &&
                    t !== e &&
                    (n._updateSelection(this, e, t), n._changed(257));
              },
              _changeSelection: function (t, e) {
                var n = this._selection;
                this.setSelection(e ? n | t : n & ~t);
              },
              isSelected: function () {
                return !!(7 & this._selection);
              },
              setSelected: function (t) {
                this._changeSelection(7, t);
              },
              getIndex: function () {
                return this._index !== n ? this._index : null;
              },
              getPath: function () {
                return this._path || null;
              },
              getCurve: function () {
                var t = this._path,
                  e = this._index;
                return t
                  ? (e > 0 && !t._closed && e === t._segments.length - 1 && e--,
                    t.getCurves()[e] || null)
                  : null;
              },
              getLocation: function () {
                var t = this.getCurve();
                return t ? new L(t, this === t._segment1 ? 0 : 1) : null;
              },
              getNext: function () {
                var t = this._path && this._path._segments;
                return (
                  (t && (t[this._index + 1] || (this._path._closed && t[0]))) ||
                  null
                );
              },
              smooth: function (t, e, i) {
                var r = t || {},
                  s = r.type,
                  a = r.factor,
                  o = this.getPrevious(),
                  h = this.getNext(),
                  u = (o || this)._point,
                  l = this._point,
                  c = (h || this)._point,
                  f = u.getDistance(l),
                  d = l.getDistance(c);
                if (s && 'catmull-rom' !== s) {
                  if ('geometric' !== s)
                    throw new Error(
                      "Smoothing method '" + s + "' not supported.",
                    );
                  if (o && h) {
                    var g = u.subtract(c),
                      v = a === n ? 0.4 : a,
                      p = (v * f) / (f + d);
                    e || this.setHandleIn(g.multiply(p)),
                      i || this.setHandleOut(g.multiply(p - v));
                  }
                } else {
                  var m = a === n ? 0.5 : a,
                    y = Math.pow(f, m),
                    w = y * y,
                    x = Math.pow(d, m),
                    b = x * x;
                  if (!e && o) {
                    var C = 2 * b + 3 * x * y + w,
                      S = 3 * x * (x + y);
                    this.setHandleIn(
                      0 !== S
                        ? new _(
                            (b * u._x + C * l._x - w * c._x) / S - l._x,
                            (b * u._y + C * l._y - w * c._y) / S - l._y,
                          )
                        : new _(),
                    );
                  }
                  if (!i && h) {
                    (C = 2 * w + 3 * y * x + b), (S = 3 * y * (y + x));
                    this.setHandleOut(
                      0 !== S
                        ? new _(
                            (w * c._x + C * l._x - b * u._x) / S - l._x,
                            (w * c._y + C * l._y - b * u._y) / S - l._y,
                          )
                        : new _(),
                    );
                  }
                }
              },
              getPrevious: function () {
                var t = this._path && this._path._segments;
                return (
                  (t &&
                    (t[this._index - 1] ||
                      (this._path._closed && t[t.length - 1]))) ||
                  null
                );
              },
              isFirst: function () {
                return !this._index;
              },
              isLast: function () {
                var t = this._path;
                return (t && this._index === t._segments.length - 1) || !1;
              },
              reverse: function () {
                var t = this._handleIn,
                  e = this._handleOut,
                  n = t.clone();
                t.set(e), e.set(n);
              },
              reversed: function () {
                return new O(this._point, this._handleOut, this._handleIn);
              },
              remove: function () {
                return !!this._path && !!this._path.removeSegment(this._index);
              },
              clone: function () {
                return new O(this._point, this._handleIn, this._handleOut);
              },
              equals: function (t) {
                return (
                  t === this ||
                  (t &&
                    this._class === t._class &&
                    this._point.equals(t._point) &&
                    this._handleIn.equals(t._handleIn) &&
                    this._handleOut.equals(t._handleOut)) ||
                  !1
                );
              },
              toString: function () {
                var t = ['point: ' + this._point];
                return (
                  this._handleIn.isZero() ||
                    t.push('handleIn: ' + this._handleIn),
                  this._handleOut.isZero() ||
                    t.push('handleOut: ' + this._handleOut),
                  '{ ' + t.join(', ') + ' }'
                );
              },
              transform: function (t) {
                this._transformCoordinates(t, new Array(6), !0),
                  this._changed();
              },
              interpolate: function (t, e, n) {
                var i = 1 - n,
                  r = n,
                  s = t._point,
                  a = e._point,
                  o = t._handleIn,
                  h = e._handleIn,
                  u = e._handleOut,
                  l = t._handleOut;
                this._point._set(i * s._x + r * a._x, i * s._y + r * a._y, !0),
                  this._handleIn._set(
                    i * o._x + r * h._x,
                    i * o._y + r * h._y,
                    !0,
                  ),
                  this._handleOut._set(
                    i * l._x + r * u._x,
                    i * l._y + r * u._y,
                    !0,
                  ),
                  this._changed();
              },
              _transformCoordinates: function (t, e, n) {
                var i = this._point,
                  r = n && this._handleIn.isZero() ? null : this._handleIn,
                  s = n && this._handleOut.isZero() ? null : this._handleOut,
                  a = i._x,
                  o = i._y,
                  h = 2;
                return (
                  (e[0] = a),
                  (e[1] = o),
                  r && ((e[h++] = r._x + a), (e[h++] = r._y + o)),
                  s && ((e[h++] = s._x + a), (e[h++] = s._y + o)),
                  t &&
                    (t._transformCoordinates(e, e, h / 2),
                    (a = e[0]),
                    (o = e[1]),
                    n
                      ? ((i._x = a),
                        (i._y = o),
                        (h = 2),
                        r && ((r._x = e[h++] - a), (r._y = e[h++] - o)),
                        s && ((s._x = e[h++] - a), (s._y = e[h++] - o)))
                      : (r || ((e[h++] = a), (e[h++] = o)),
                        s || ((e[h++] = a), (e[h++] = o)))),
                  e
                );
              },
            }),
            z = _.extend({
              initialize: function (t, e, i) {
                var r, s, a;
                if (t)
                  if ((r = t[0]) !== n) s = t[1];
                  else {
                    var o = t;
                    (r = o.x) === n && (r = (o = _.read(arguments)).x),
                      (s = o.y),
                      (a = o.selected);
                  }
                else r = s = 0;
                (this._x = r),
                  (this._y = s),
                  (this._owner = e),
                  (e[i] = this),
                  a && this.setSelected(!0);
              },
              _set: function (t, e) {
                return (
                  (this._x = t), (this._y = e), this._owner._changed(this), this
                );
              },
              getX: function () {
                return this._x;
              },
              setX: function (t) {
                (this._x = t), this._owner._changed(this);
              },
              getY: function () {
                return this._y;
              },
              setY: function (t) {
                (this._y = t), this._owner._changed(this);
              },
              isZero: function () {
                var t = f.isZero;
                return t(this._x) && t(this._y);
              },
              isSelected: function () {
                return !!(this._owner._selection & this._getSelection());
              },
              setSelected: function (t) {
                this._owner._changeSelection(this._getSelection(), t);
              },
              _getSelection: function () {
                var t = this._owner;
                return this === t._point
                  ? 1
                  : this === t._handleIn
                  ? 2
                  : this === t._handleOut
                  ? 4
                  : 0;
              },
            }),
            E = a.extend(
              {
                _class: 'Curve',
                beans: !0,
                initialize: function (t, e, n, i, r, s, a, o) {
                  var h,
                    u,
                    l,
                    c,
                    f,
                    d,
                    _ = arguments.length;
                  3 === _
                    ? ((this._path = t), (h = e), (u = n))
                    : _
                    ? 1 === _
                      ? 'segment1' in t
                        ? ((h = new O(t.segment1)), (u = new O(t.segment2)))
                        : 'point1' in t
                        ? ((l = t.point1),
                          (f = t.handle1),
                          (d = t.handle2),
                          (c = t.point2))
                        : Array.isArray(t) &&
                          ((l = [t[0], t[1]]),
                          (c = [t[6], t[7]]),
                          (f = [t[2] - t[0], t[3] - t[1]]),
                          (d = [t[4] - t[6], t[5] - t[7]]))
                      : 2 === _
                      ? ((h = new O(t)), (u = new O(e)))
                      : 4 === _
                      ? ((l = t), (f = e), (d = n), (c = i))
                      : 8 === _ &&
                        ((l = [t, e]),
                        (c = [a, o]),
                        (f = [n - t, i - e]),
                        (d = [r - a, s - o]))
                    : ((h = new O()), (u = new O())),
                    (this._segment1 = h || new O(l, null, f)),
                    (this._segment2 = u || new O(c, d, null));
                },
                _serialize: function (t, e) {
                  return a.serialize(
                    this.hasHandles()
                      ? [
                          this.getPoint1(),
                          this.getHandle1(),
                          this.getHandle2(),
                          this.getPoint2(),
                        ]
                      : [this.getPoint1(), this.getPoint2()],
                    t,
                    !0,
                    e,
                  );
                },
                _changed: function () {
                  this._length = this._bounds = n;
                },
                clone: function () {
                  return new E(this._segment1, this._segment2);
                },
                toString: function () {
                  var t = ['point1: ' + this._segment1._point];
                  return (
                    this._segment1._handleOut.isZero() ||
                      t.push('handle1: ' + this._segment1._handleOut),
                    this._segment2._handleIn.isZero() ||
                      t.push('handle2: ' + this._segment2._handleIn),
                    t.push('point2: ' + this._segment2._point),
                    '{ ' + t.join(', ') + ' }'
                  );
                },
                classify: function () {
                  return E.classify(this.getValues());
                },
                remove: function () {
                  var t = !1;
                  if (this._path) {
                    var e = this._segment2,
                      n = e._handleOut;
                    (t = e.remove()) && this._segment1._handleOut.set(n);
                  }
                  return t;
                },
                getPoint1: function () {
                  return this._segment1._point;
                },
                setPoint1: function () {
                  this._segment1._point.set(_.read(arguments));
                },
                getPoint2: function () {
                  return this._segment2._point;
                },
                setPoint2: function () {
                  this._segment2._point.set(_.read(arguments));
                },
                getHandle1: function () {
                  return this._segment1._handleOut;
                },
                setHandle1: function () {
                  this._segment1._handleOut.set(_.read(arguments));
                },
                getHandle2: function () {
                  return this._segment2._handleIn;
                },
                setHandle2: function () {
                  this._segment2._handleIn.set(_.read(arguments));
                },
                getSegment1: function () {
                  return this._segment1;
                },
                getSegment2: function () {
                  return this._segment2;
                },
                getPath: function () {
                  return this._path;
                },
                getIndex: function () {
                  return this._segment1._index;
                },
                getNext: function () {
                  var t = this._path && this._path._curves;
                  return (
                    (t &&
                      (t[this._segment1._index + 1] ||
                        (this._path._closed && t[0]))) ||
                    null
                  );
                },
                getPrevious: function () {
                  var t = this._path && this._path._curves;
                  return (
                    (t &&
                      (t[this._segment1._index - 1] ||
                        (this._path._closed && t[t.length - 1]))) ||
                    null
                  );
                },
                isFirst: function () {
                  return !this._segment1._index;
                },
                isLast: function () {
                  var t = this._path;
                  return (
                    (t && this._segment1._index === t._curves.length - 1) || !1
                  );
                },
                isSelected: function () {
                  return (
                    this.getPoint1().isSelected() &&
                    this.getHandle1().isSelected() &&
                    this.getHandle2().isSelected() &&
                    this.getPoint2().isSelected()
                  );
                },
                setSelected: function (t) {
                  this.getPoint1().setSelected(t),
                    this.getHandle1().setSelected(t),
                    this.getHandle2().setSelected(t),
                    this.getPoint2().setSelected(t);
                },
                getValues: function (t) {
                  return E.getValues(this._segment1, this._segment2, t);
                },
                getPoints: function () {
                  for (var t = this.getValues(), e = [], n = 0; n < 8; n += 2)
                    e.push(new _(t[n], t[n + 1]));
                  return e;
                },
              },
              {
                getLength: function () {
                  return (
                    null == this._length &&
                      (this._length = E.getLength(this.getValues(), 0, 1)),
                    this._length
                  );
                },
                getArea: function () {
                  return E.getArea(this.getValues());
                },
                getLine: function () {
                  return new x(this._segment1._point, this._segment2._point);
                },
                getPart: function (t, e) {
                  return new E(E.getPart(this.getValues(), t, e));
                },
                getPartLength: function (t, e) {
                  return E.getLength(this.getValues(), t, e);
                },
                divideAt: function (t) {
                  return this.divideAtTime(
                    t && t.curve === this ? t.time : this.getTimeAt(t),
                  );
                },
                divideAtTime: function (t, e) {
                  var n = null;
                  if (t >= 1e-8 && t <= 1 - 1e-8) {
                    var i = E.subdivide(this.getValues(), t),
                      r = i[0],
                      s = i[1],
                      a = e || this.hasHandles(),
                      o = this._segment1,
                      h = this._segment2,
                      u = this._path;
                    a &&
                      (o._handleOut._set(r[2] - r[0], r[3] - r[1]),
                      h._handleIn._set(s[4] - s[6], s[5] - s[7]));
                    var l = r[6],
                      c = r[7],
                      f = new O(
                        new _(l, c),
                        a && new _(r[4] - l, r[5] - c),
                        a && new _(s[2] - l, s[3] - c),
                      );
                    u
                      ? (u.insert(o._index + 1, f), (n = this.getNext()))
                      : ((this._segment2 = f),
                        this._changed(),
                        (n = new E(f, h)));
                  }
                  return n;
                },
                splitAt: function (t) {
                  var e = this._path;
                  return e ? e.splitAt(t) : null;
                },
                splitAtTime: function (t) {
                  return this.splitAt(this.getLocationAtTime(t));
                },
                divide: function (t, e) {
                  return this.divideAtTime(
                    t === n ? 0.5 : e ? t : this.getTimeAt(t),
                  );
                },
                split: function (t, e) {
                  return this.splitAtTime(
                    t === n ? 0.5 : e ? t : this.getTimeAt(t),
                  );
                },
                reversed: function () {
                  return new E(
                    this._segment2.reversed(),
                    this._segment1.reversed(),
                  );
                },
                clearHandles: function () {
                  this._segment1._handleOut._set(0, 0),
                    this._segment2._handleIn._set(0, 0);
                },
                statics: {
                  getValues: function (t, e, n, i) {
                    var r = t._point,
                      s = t._handleOut,
                      a = e._handleIn,
                      o = e._point,
                      h = r.x,
                      u = r.y,
                      l = o.x,
                      c = o.y,
                      f = i
                        ? [h, u, h, u, l, c, l, c]
                        : [h, u, h + s._x, u + s._y, l + a._x, c + a._y, l, c];
                    return n && n._transformCoordinates(f, f, 4), f;
                  },
                  subdivide: function (t, e) {
                    var i = t[0],
                      r = t[1],
                      s = t[2],
                      a = t[3],
                      o = t[4],
                      h = t[5],
                      u = t[6],
                      l = t[7];
                    e === n && (e = 0.5);
                    var c = 1 - e,
                      f = c * i + e * s,
                      d = c * r + e * a,
                      _ = c * s + e * o,
                      g = c * a + e * h,
                      v = c * o + e * u,
                      p = c * h + e * l,
                      m = c * f + e * _,
                      y = c * d + e * g,
                      w = c * _ + e * v,
                      x = c * g + e * p,
                      b = c * m + e * w,
                      C = c * y + e * x;
                    return [
                      [i, r, f, d, m, y, b, C],
                      [b, C, w, x, v, p, u, l],
                    ];
                  },
                  getMonoCurves: function (t, e) {
                    var n = [],
                      i = e ? 0 : 1,
                      r = t[i + 0],
                      s = t[i + 2],
                      a = t[i + 4],
                      o = t[i + 6];
                    if (
                      (r >= s == s >= a && s >= a == a >= o) ||
                      E.isStraight(t)
                    )
                      n.push(t);
                    else {
                      var h = 3 * (s - a) - r + o,
                        u = 2 * (r + a) - 4 * s,
                        l = s - r,
                        c = [],
                        d = f.solveQuadratic(h, u, l, c, 1e-8, 1 - 1e-8);
                      if (d) {
                        c.sort();
                        var _ = c[0],
                          g = E.subdivide(t, _);
                        n.push(g[0]),
                          d > 1 &&
                            ((_ = (c[1] - _) / (1 - _)),
                            (g = E.subdivide(g[1], _)),
                            n.push(g[0])),
                          n.push(g[1]);
                      } else n.push(t);
                    }
                    return n;
                  },
                  solveCubic: function (t, e, n, i, r, s) {
                    var a = t[e],
                      o = t[e + 2],
                      h = t[e + 4],
                      u = t[e + 6],
                      l = 0;
                    if (
                      !(
                        (a < n && u < n && o < n && h < n) ||
                        (a > n && u > n && o > n && h > n)
                      )
                    ) {
                      var c = 3 * (o - a),
                        d = 3 * (h - o) - c,
                        _ = u - a - c - d;
                      l = f.solveCubic(_, d, c, a - n, i, r, s);
                    }
                    return l;
                  },
                  getTimeOf: function (t, e) {
                    var n = new _(t[0], t[1]),
                      i = new _(t[6], t[7]);
                    if (
                      null ===
                      (e.isClose(n, 1e-12) ? 0 : e.isClose(i, 1e-12) ? 1 : null)
                    )
                      for (var r = [e.x, e.y], s = [], a = 0; a < 2; a++)
                        for (
                          var o = E.solveCubic(t, a, r[a], s, 0, 1), h = 0;
                          h < o;
                          h++
                        ) {
                          var u = s[h];
                          if (e.isClose(E.getPoint(t, u), 1e-7)) return u;
                        }
                    return e.isClose(n, 1e-7)
                      ? 0
                      : e.isClose(i, 1e-7)
                      ? 1
                      : null;
                  },
                  getNearestTime: function (t, e) {
                    if (E.isStraight(t)) {
                      var n = t[0],
                        i = t[1],
                        r = t[6] - n,
                        s = t[7] - i,
                        a = r * r + s * s;
                      if (0 === a) return 0;
                      var o = ((e.x - n) * r + (e.y - i) * s) / a;
                      return o < 1e-12
                        ? 0
                        : o > 0.999999999999
                        ? 1
                        : E.getTimeOf(t, new _(n + o * r, i + o * s));
                    }
                    var h = 1 / 0,
                      u = 0;
                    function l(n) {
                      if (n >= 0 && n <= 1) {
                        var i = e.getDistance(E.getPoint(t, n), !0);
                        if (i < h) return (h = i), (u = n), !0;
                      }
                    }
                    for (var c = 0; c <= 100; c++) l(c / 100);
                    for (var f = 0.005; f > 1e-8; )
                      l(u - f) || l(u + f) || (f /= 2);
                    return u;
                  },
                  getPart: function (t, e, n) {
                    var i = e > n;
                    if (i) {
                      var r = e;
                      (e = n), (n = r);
                    }
                    return (
                      e > 0 && (t = E.subdivide(t, e)[1]),
                      n < 1 && (t = E.subdivide(t, (n - e) / (1 - e))[0]),
                      i ? [t[6], t[7], t[4], t[5], t[2], t[3], t[0], t[1]] : t
                    );
                  },
                  isFlatEnough: function (t, e) {
                    var n = t[0],
                      i = t[1],
                      r = t[2],
                      s = t[3],
                      a = t[4],
                      o = t[5],
                      h = t[6],
                      u = t[7],
                      l = 3 * r - 2 * n - h,
                      c = 3 * s - 2 * i - u,
                      f = 3 * a - 2 * h - n,
                      d = 3 * o - 2 * u - i;
                    return (
                      Math.max(l * l, f * f) + Math.max(c * c, d * d) <=
                      16 * e * e
                    );
                  },
                  getArea: function (t) {
                    var e = t[0],
                      n = t[1],
                      i = t[2],
                      r = t[3],
                      s = t[4],
                      a = t[5],
                      o = t[6],
                      h = t[7];
                    return (
                      (3 *
                        ((h - n) * (i + s) -
                          (o - e) * (r + a) +
                          r * (e - s) -
                          i * (n - a) +
                          h * (s + e / 3) -
                          o * (a + n / 3))) /
                      20
                    );
                  },
                  getBounds: function (t) {
                    for (
                      var e = t.slice(0, 2), n = e.slice(), i = [0, 0], r = 0;
                      r < 2;
                      r++
                    )
                      E._addBounds(
                        t[r],
                        t[r + 2],
                        t[r + 4],
                        t[r + 6],
                        r,
                        0,
                        e,
                        n,
                        i,
                      );
                    return new m(e[0], e[1], n[0] - e[0], n[1] - e[1]);
                  },
                  _addBounds: function (t, e, n, i, r, s, a, o, h) {
                    function u(t, e) {
                      var n = t - e,
                        i = t + e;
                      n < a[r] && (a[r] = n), i > o[r] && (o[r] = i);
                    }
                    s /= 2;
                    var l = a[r] + s,
                      c = o[r] - s;
                    if (
                      t < l ||
                      e < l ||
                      n < l ||
                      i < l ||
                      t > c ||
                      e > c ||
                      n > c ||
                      i > c
                    )
                      if (e < t != e < i && n < t != n < i) u(t, 0), u(i, 0);
                      else {
                        var d = 3 * (e - n) - t + i,
                          _ = 2 * (t + n) - 4 * e,
                          g = e - t,
                          v = f.solveQuadratic(d, _, g, h);
                        u(i, 0);
                        for (var p = 0; p < v; p++) {
                          var m = h[p],
                            y = 1 - m;
                          1e-8 <= m &&
                            m <= 1 - 1e-8 &&
                            u(
                              y * y * y * t +
                                3 * y * y * m * e +
                                3 * y * m * m * n +
                                m * m * m * i,
                              s,
                            );
                        }
                      }
                  },
                },
              },
              a.each(
                ['getBounds', 'getStrokeBounds', 'getHandleBounds'],
                function (t) {
                  this[t] = function () {
                    this._bounds || (this._bounds = {});
                    var e = this._bounds[t];
                    return (
                      e ||
                        (e = this._bounds[t] = B[t](
                          [this._segment1, this._segment2],
                          !1,
                          this._path,
                        )),
                      e.clone()
                    );
                  };
                },
                {},
              ),
              a.each(
                {
                  isStraight: function (t, e, n, i) {
                    if (e.isZero() && n.isZero()) return !0;
                    var r = i.subtract(t);
                    if (r.isZero()) return !1;
                    if (r.isCollinear(e) && r.isCollinear(n)) {
                      var s = new x(t, i);
                      if (
                        s.getDistance(t.add(e)) < 1e-7 &&
                        s.getDistance(i.add(n)) < 1e-7
                      ) {
                        var a = r.dot(r),
                          o = r.dot(e) / a,
                          h = r.dot(n) / a;
                        return o >= 0 && o <= 1 && h <= 0 && h >= -1;
                      }
                    }
                    return !1;
                  },
                  isLinear: function (t, e, n, i) {
                    var r = i.subtract(t).divide(3);
                    return e.equals(r) && n.negate().equals(r);
                  },
                },
                function (t, e) {
                  (this[e] = function (e) {
                    var n = this._segment1,
                      i = this._segment2;
                    return t(n._point, n._handleOut, i._handleIn, i._point, e);
                  }),
                    (this.statics[e] = function (e, n) {
                      var i = e[0],
                        r = e[1],
                        s = e[6],
                        a = e[7];
                      return t(
                        new _(i, r),
                        new _(e[2] - i, e[3] - r),
                        new _(e[4] - s, e[5] - a),
                        new _(s, a),
                        n,
                      );
                    });
                },
                {
                  statics: {},
                  hasHandles: function () {
                    return (
                      !this._segment1._handleOut.isZero() ||
                      !this._segment2._handleIn.isZero()
                    );
                  },
                  hasLength: function (t) {
                    return (
                      (!this.getPoint1().equals(this.getPoint2()) ||
                        this.hasHandles()) &&
                      this.getLength() > (t || 0)
                    );
                  },
                  isCollinear: function (t) {
                    return (
                      t &&
                      this.isStraight() &&
                      t.isStraight() &&
                      this.getLine().isCollinear(t.getLine())
                    );
                  },
                  isHorizontal: function () {
                    return (
                      this.isStraight() &&
                      Math.abs(this.getTangentAtTime(0.5).y) < 1e-8
                    );
                  },
                  isVertical: function () {
                    return (
                      this.isStraight() &&
                      Math.abs(this.getTangentAtTime(0.5).x) < 1e-8
                    );
                  },
                },
              ),
              {
                beans: !1,
                getLocationAt: function (t, e) {
                  return this.getLocationAtTime(e ? t : this.getTimeAt(t));
                },
                getLocationAtTime: function (t) {
                  return null != t && t >= 0 && t <= 1 ? new L(this, t) : null;
                },
                getTimeAt: function (t, e) {
                  return E.getTimeAt(this.getValues(), t, e);
                },
                getParameterAt: '#getTimeAt',
                getTimesWithTangent: function () {
                  var t = _.read(arguments);
                  return t.isZero()
                    ? []
                    : E.getTimesWithTangent(this.getValues(), t);
                },
                getOffsetAtTime: function (t) {
                  return this.getPartLength(0, t);
                },
                getLocationOf: function () {
                  return this.getLocationAtTime(
                    this.getTimeOf(_.read(arguments)),
                  );
                },
                getOffsetOf: function () {
                  var t = this.getLocationOf.apply(this, arguments);
                  return t ? t.getOffset() : null;
                },
                getTimeOf: function () {
                  return E.getTimeOf(this.getValues(), _.read(arguments));
                },
                getParameterOf: '#getTimeOf',
                getNearestLocation: function () {
                  var t = _.read(arguments),
                    e = this.getValues(),
                    n = E.getNearestTime(e, t),
                    i = E.getPoint(e, n);
                  return new L(this, n, i, null, t.getDistance(i));
                },
                getNearestPoint: function () {
                  var t = this.getNearestLocation.apply(this, arguments);
                  return t ? t.getPoint() : t;
                },
              },
              new (function () {
                var t = [
                  'getPoint',
                  'getTangent',
                  'getNormal',
                  'getWeightedTangent',
                  'getWeightedNormal',
                  'getCurvature',
                ];
                return a.each(
                  t,
                  function (t) {
                    (this[t + 'At'] = function (e, n) {
                      var i = this.getValues();
                      return E[t](i, n ? e : E.getTimeAt(i, e));
                    }),
                      (this[t + 'AtTime'] = function (e) {
                        return E[t](this.getValues(), e);
                      });
                  },
                  { statics: { _evaluateMethods: t } },
                );
              })(),
              new (function () {
                function t(t) {
                  var e = t[0],
                    n = t[1],
                    i = t[2],
                    r = t[3],
                    s = t[4],
                    a = t[5],
                    o = t[6],
                    h = t[7],
                    u = 9 * (i - s) + 3 * (o - e),
                    l = 6 * (e + s) - 12 * i,
                    c = 3 * (i - e),
                    f = 9 * (r - a) + 3 * (h - n),
                    d = 6 * (n + a) - 12 * r,
                    _ = 3 * (r - n);
                  return function (t) {
                    var e = (u * t + l) * t + c,
                      n = (f * t + d) * t + _;
                    return Math.sqrt(e * e + n * n);
                  };
                }
                function e(t, e) {
                  return Math.max(
                    2,
                    Math.min(16, Math.ceil(32 * Math.abs(e - t))),
                  );
                }
                function i(t, e, n, i) {
                  if (null == e || e < 0 || e > 1) return null;
                  var r = t[0],
                    s = t[1],
                    a = t[2],
                    o = t[3],
                    h = t[4],
                    u = t[5],
                    l = t[6],
                    c = t[7],
                    d = f.isZero;
                  d(a - r) && d(o - s) && ((a = r), (o = s)),
                    d(h - l) && d(u - c) && ((h = l), (u = c));
                  var g,
                    v,
                    p = 3 * (a - r),
                    m = 3 * (h - a) - p,
                    y = l - r - p - m,
                    w = 3 * (o - s),
                    x = 3 * (u - o) - w,
                    b = c - s - w - x;
                  if (0 === n)
                    (g =
                      0 === e
                        ? r
                        : 1 === e
                        ? l
                        : ((y * e + m) * e + p) * e + r),
                      (v =
                        0 === e
                          ? s
                          : 1 === e
                          ? c
                          : ((b * e + x) * e + w) * e + s);
                  else {
                    if (
                      (e < 1e-8
                        ? ((g = p), (v = w))
                        : e > 1 - 1e-8
                        ? ((g = 3 * (l - h)), (v = 3 * (c - u)))
                        : ((g = (3 * y * e + 2 * m) * e + p),
                          (v = (3 * b * e + 2 * x) * e + w)),
                      i)
                    ) {
                      0 === g &&
                        0 === v &&
                        (e < 1e-8 || e > 1 - 1e-8) &&
                        ((g = h - a), (v = u - o));
                      var C = Math.sqrt(g * g + v * v);
                      C && ((g /= C), (v /= C));
                    }
                    if (3 === n) {
                      (h = 6 * y * e + 2 * m), (u = 6 * b * e + 2 * x);
                      var S = Math.pow(g * g + v * v, 1.5);
                      (g = 0 !== S ? (g * u - v * h) / S : 0), (v = 0);
                    }
                  }
                  return 2 === n ? new _(v, -g) : new _(g, v);
                }
                return {
                  statics: {
                    classify: function (t) {
                      var e = t[0],
                        i = t[1],
                        r = t[2],
                        s = t[3],
                        a = t[4],
                        o = t[5],
                        h = t[6],
                        u = t[7],
                        l = r * (i - u) + s * (h - e) + e * u - i * h,
                        c = 3 * (a * (s - i) + o * (e - r) + r * i - s * e),
                        d = c - l,
                        _ = d - l + (e * (u - o) + i * (a - h) + h * o - u * a),
                        g = Math.sqrt(_ * _ + d * d + c * c),
                        v = 0 !== g ? 1 / g : 0,
                        p = f.isZero;
                      function m(t, e, i) {
                        var r = e !== n,
                          s = r && e > 0 && e < 1,
                          a = r && i > 0 && i < 1;
                        return (
                          !r ||
                            ((s || a) && ('loop' !== t || (s && a))) ||
                            ((t = 'arch'), (s = a = !1)),
                          {
                            type: t,
                            roots:
                              s || a
                                ? s && a
                                  ? e < i
                                    ? [e, i]
                                    : [i, e]
                                  : [s ? e : i]
                                : null,
                          }
                        );
                      }
                      if (((d *= v), (c *= v), p((_ *= v))))
                        return p(d)
                          ? m(p(c) ? 'line' : 'quadratic')
                          : m('serpentine', c / (3 * d));
                      var y = 3 * d * d - 4 * _ * c;
                      if (p(y)) return m('cusp', d / (2 * _));
                      var w = y > 0 ? Math.sqrt(y / 3) : Math.sqrt(-y),
                        x = 2 * _;
                      return m(
                        y > 0 ? 'serpentine' : 'loop',
                        (d + w) / x,
                        (d - w) / x,
                      );
                    },
                    getLength: function (i, r, s, a) {
                      if (
                        (r === n && (r = 0),
                        s === n && (s = 1),
                        E.isStraight(i))
                      ) {
                        var o = i;
                        s < 1 && ((o = E.subdivide(o, s)[0]), (r /= s)),
                          r > 0 && (o = E.subdivide(o, r)[1]);
                        var h = o[6] - o[0],
                          u = o[7] - o[1];
                        return Math.sqrt(h * h + u * u);
                      }
                      return f.integrate(a || t(i), r, s, e(r, s));
                    },
                    getTimeAt: function (i, r, s) {
                      if ((s === n && (s = r < 0 ? 1 : 0), 0 === r)) return s;
                      var a = Math.abs,
                        o = r > 0,
                        h = o ? s : 0,
                        u = o ? 1 : s,
                        l = t(i),
                        c = E.getLength(i, h, u, l),
                        d = a(r) - c;
                      if (a(d) < 1e-12) return o ? u : h;
                      if (d > 1e-12) return null;
                      var _ = r / c,
                        g = 0;
                      return f.findRoot(
                        function (t) {
                          return (
                            (g += f.integrate(l, s, t, e(s, t))), (s = t), g - r
                          );
                        },
                        l,
                        s + _,
                        h,
                        u,
                        32,
                        1e-12,
                      );
                    },
                    getPoint: function (t, e) {
                      return i(t, e, 0, !1);
                    },
                    getTangent: function (t, e) {
                      return i(t, e, 1, !0);
                    },
                    getWeightedTangent: function (t, e) {
                      return i(t, e, 1, !1);
                    },
                    getNormal: function (t, e) {
                      return i(t, e, 2, !0);
                    },
                    getWeightedNormal: function (t, e) {
                      return i(t, e, 2, !1);
                    },
                    getCurvature: function (t, e) {
                      return i(t, e, 3, !1).x;
                    },
                    getPeaks: function (t) {
                      var e = t[0],
                        n = t[1],
                        i = t[2],
                        r = t[3],
                        s = t[4],
                        a = t[5],
                        o = 3 * i - e - 3 * s + t[6],
                        h = 3 * e - 6 * i + 3 * s,
                        u = -3 * e + 3 * i,
                        l = 3 * r - n - 3 * a + t[7],
                        c = 3 * n - 6 * r + 3 * a,
                        d = -3 * n + 3 * r,
                        _ = [];
                      return (
                        f.solveCubic(
                          9 * (o * o + l * l),
                          9 * (o * h + c * l),
                          2 * (h * h + c * c) + 3 * (u * o + d * l),
                          u * h + c * d,
                          _,
                          1e-8,
                          1 - 1e-8,
                        ),
                        _.sort()
                      );
                    },
                  },
                };
              })(),
              new (function () {
                function t(t, e, n, i, r, s, a) {
                  var o = !a && n.getPrevious() === r,
                    h = !a && n !== r && n.getNext() === r;
                  if (
                    null !== i &&
                    i >= (o ? 1e-8 : 0) &&
                    i <= (h ? 1 - 1e-8 : 1) &&
                    null !== s &&
                    s >= (h ? 1e-8 : 0) &&
                    s <= (o ? 1 - 1e-8 : 1)
                  ) {
                    var u = new L(n, i, null, a),
                      l = new L(r, s, null, a);
                    (u._intersection = l),
                      (l._intersection = u),
                      (e && !e(u)) || L.insert(t, u, !0);
                  }
                }
                function e(t, e, i, r) {
                  return t[0][1] < i
                    ? n(t, !0, i)
                    : e[0][1] > r
                    ? n(e, !1, r)
                    : t[0][0];
                }
                function n(t, e, n) {
                  for (
                    var i = t[0][0], r = t[0][1], s = 1, a = t.length;
                    s < a;
                    s++
                  ) {
                    var o = t[s][0],
                      h = t[s][1];
                    if (e ? h >= n : h <= n)
                      return h === n ? o : i + ((n - r) * (o - i)) / (h - r);
                    (i = o), (r = h);
                  }
                  return null;
                }
                function i(t, e, n, i, r) {
                  var s = f.isZero;
                  if (s(i) && s(r)) {
                    var a = E.getTimeOf(t, new _(e, n));
                    return null === a ? [] : [a];
                  }
                  for (
                    var o = Math.atan2(-r, i),
                      h = Math.sin(o),
                      u = Math.cos(o),
                      l = [],
                      c = [],
                      d = 0;
                    d < 8;
                    d += 2
                  ) {
                    var g = t[d] - e,
                      v = t[d + 1] - n;
                    l.push(g * u - v * h, g * h + v * u);
                  }
                  return E.solveCubic(l, 1, 0, c, 0, 1), c;
                }
                function r(n, r, s, o, h, u) {
                  var l = Math.min,
                    c = Math.max;
                  if (
                    c(n[0], n[2], n[4], n[6]) + 1e-12 >
                      l(r[0], r[2], r[4], r[6]) &&
                    l(n[0], n[2], n[4], n[6]) - 1e-12 <
                      c(r[0], r[2], r[4], r[6]) &&
                    c(n[1], n[3], n[5], n[7]) + 1e-12 >
                      l(r[1], r[3], r[5], r[7]) &&
                    l(n[1], n[3], n[5], n[7]) - 1e-12 <
                      c(r[1], r[3], r[5], r[7])
                  ) {
                    var f = a(n, r);
                    if (f)
                      for (var d = 0; d < 2; d++) {
                        var g = f[d];
                        t(h, u, s, g[0], o, g[1], !0);
                      }
                    else {
                      var v = E.isStraight(n),
                        p = E.isStraight(r),
                        m = v && p,
                        y = v && !p,
                        w = h.length;
                      if (
                        ((m
                          ? function (e, n, i, r, s, a) {
                              var o = x.intersect(
                                e[0],
                                e[1],
                                e[6],
                                e[7],
                                n[0],
                                n[1],
                                n[6],
                                n[7],
                              );
                              o &&
                                t(
                                  s,
                                  a,
                                  i,
                                  E.getTimeOf(e, o),
                                  r,
                                  E.getTimeOf(n, o),
                                );
                            }
                          : v || p
                          ? function (e, n, r, s, a, o, h) {
                              for (
                                var u = n[0],
                                  l = n[1],
                                  c = i(e, u, l, n[6] - u, n[7] - l),
                                  f = 0,
                                  d = c.length;
                                f < d;
                                f++
                              ) {
                                var _ = c[f],
                                  g = E.getPoint(e, _),
                                  v = E.getTimeOf(n, g);
                                null !== v &&
                                  t(
                                    a,
                                    o,
                                    h ? s : r,
                                    h ? v : _,
                                    h ? r : s,
                                    h ? _ : v,
                                  );
                              }
                            }
                          : function n(i, r, s, a, o, h, u, l, c, f, d, _, g) {
                              if (++c >= 4096 || ++l >= 40) return c;
                              var v,
                                p,
                                m = r[0],
                                y = r[1],
                                w = r[6],
                                b = r[7],
                                C = x.getSignedDistance,
                                S = C(m, y, w, b, r[2], r[3]),
                                k = C(m, y, w, b, r[4], r[5]),
                                I = S * k > 0 ? 0.75 : 4 / 9,
                                P = I * Math.min(0, S, k),
                                M = I * Math.max(0, S, k),
                                A = C(m, y, w, b, i[0], i[1]),
                                T = C(m, y, w, b, i[2], i[3]),
                                O = C(m, y, w, b, i[4], i[5]),
                                z = C(m, y, w, b, i[6], i[7]),
                                L = (function (t, e, n, i) {
                                  var r,
                                    s = [0, t],
                                    a = [1 / 3, e],
                                    o = [2 / 3, n],
                                    h = [1, i],
                                    u = e - (2 * t + i) / 3,
                                    l = n - (t + 2 * i) / 3;
                                  if (u * l < 0)
                                    r = [
                                      [s, a, h],
                                      [s, o, h],
                                    ];
                                  else {
                                    var c = u / l;
                                    r = [
                                      c >= 2
                                        ? [s, a, h]
                                        : c <= 0.5
                                        ? [s, o, h]
                                        : [s, a, o, h],
                                      [s, h],
                                    ];
                                  }
                                  return (u || l) < 0 ? r.reverse() : r;
                                })(A, T, O, z),
                                N = L[0],
                                B = L[1];
                              if (
                                (0 === S &&
                                  0 === k &&
                                  0 === A &&
                                  0 === T &&
                                  0 === O &&
                                  0 === z) ||
                                null == (v = e(N, B, P, M)) ||
                                null == (p = e(N.reverse(), B.reverse(), P, M))
                              )
                                return c;
                              var F = f + (d - f) * v,
                                j = f + (d - f) * p;
                              if (Math.max(g - _, j - F) < 1e-9) {
                                var R = (F + j) / 2,
                                  D = (_ + g) / 2;
                                t(
                                  o,
                                  h,
                                  u ? a : s,
                                  u ? D : R,
                                  u ? s : a,
                                  u ? R : D,
                                );
                              } else {
                                i = E.getPart(i, v, p);
                                var q = g - _;
                                if (p - v > 0.8)
                                  if (j - F > q)
                                    (R = (F + j) / 2),
                                      (c = n(
                                        r,
                                        (V = E.subdivide(i, 0.5))[0],
                                        a,
                                        s,
                                        o,
                                        h,
                                        !u,
                                        l,
                                        c,
                                        _,
                                        g,
                                        F,
                                        R,
                                      )),
                                      (c = n(
                                        r,
                                        V[1],
                                        a,
                                        s,
                                        o,
                                        h,
                                        !u,
                                        l,
                                        c,
                                        _,
                                        g,
                                        R,
                                        j,
                                      ));
                                  else {
                                    var V;
                                    (D = (_ + g) / 2),
                                      (c = n(
                                        (V = E.subdivide(r, 0.5))[0],
                                        i,
                                        a,
                                        s,
                                        o,
                                        h,
                                        !u,
                                        l,
                                        c,
                                        _,
                                        D,
                                        F,
                                        j,
                                      )),
                                      (c = n(
                                        V[1],
                                        i,
                                        a,
                                        s,
                                        o,
                                        h,
                                        !u,
                                        l,
                                        c,
                                        D,
                                        g,
                                        F,
                                        j,
                                      ));
                                  }
                                else
                                  c =
                                    0 === q || q >= 1e-9
                                      ? n(
                                          r,
                                          i,
                                          a,
                                          s,
                                          o,
                                          h,
                                          !u,
                                          l,
                                          c,
                                          _,
                                          g,
                                          F,
                                          j,
                                        )
                                      : n(
                                          i,
                                          r,
                                          s,
                                          a,
                                          o,
                                          h,
                                          u,
                                          l,
                                          c,
                                          F,
                                          j,
                                          _,
                                          g,
                                        );
                              }
                              return c;
                            })(
                          y ? r : n,
                          y ? n : r,
                          y ? o : s,
                          y ? s : o,
                          h,
                          u,
                          y,
                          0,
                          0,
                          0,
                          1,
                          0,
                          1,
                        ),
                        !m || h.length === w)
                      )
                        for (d = 0; d < 4; d++) {
                          var b = d >> 1,
                            C = 1 & d,
                            S = 6 * b,
                            k = 6 * C,
                            I = new _(n[S], n[S + 1]),
                            P = new _(r[k], r[k + 1]);
                          I.isClose(P, 1e-12) && t(h, u, s, b, o, C);
                        }
                    }
                  }
                  return h;
                }
                function s(e, n, i, r) {
                  var s = E.classify(e);
                  if ('loop' === s.type) {
                    var a = s.roots;
                    t(i, r, n, a[0], n, a[1]);
                  }
                  return i;
                }
                function a(t, e) {
                  function n(t) {
                    var e = t[6] - t[0],
                      n = t[7] - t[1];
                    return e * e + n * n;
                  }
                  var i = Math.abs,
                    r = x.getDistance,
                    s = E.isStraight(t),
                    a = E.isStraight(e),
                    o = s && a,
                    h = n(t) < n(e),
                    u = h ? e : t,
                    l = h ? t : e,
                    c = u[0],
                    f = u[1],
                    d = u[6] - c,
                    g = u[7] - f;
                  if (
                    r(c, f, d, g, l[0], l[1], !0) < 1e-7 &&
                    r(c, f, d, g, l[6], l[7], !0) < 1e-7
                  )
                    !o &&
                      r(c, f, d, g, u[2], u[3], !0) < 1e-7 &&
                      r(c, f, d, g, u[4], u[5], !0) < 1e-7 &&
                      r(c, f, d, g, l[2], l[3], !0) < 1e-7 &&
                      r(c, f, d, g, l[4], l[5], !0) < 1e-7 &&
                      (s = a = o = !0);
                  else if (o) return null;
                  if (s ^ a) return null;
                  for (
                    var v = [t, e], p = [], m = 0;
                    m < 4 && p.length < 2;
                    m++
                  ) {
                    var y = 1 & m,
                      w = 1 ^ y,
                      b = m >> 1,
                      C = E.getTimeOf(
                        v[y],
                        new _(v[w][b ? 6 : 0], v[w][b ? 7 : 1]),
                      );
                    if (null != C) {
                      var S = y ? [b, C] : [C, b];
                      (!p.length ||
                        (i(S[0] - p[0][0]) > 1e-8 &&
                          i(S[1] - p[0][1]) > 1e-8)) &&
                        p.push(S);
                    }
                    if (m > 2 && !p.length) break;
                  }
                  if (2 !== p.length) p = null;
                  else if (!o) {
                    var k = E.getPart(t, p[0][0], p[1][0]),
                      I = E.getPart(e, p[0][1], p[1][1]);
                    (i(I[2] - k[2]) > 1e-7 ||
                      i(I[3] - k[3]) > 1e-7 ||
                      i(I[4] - k[4]) > 1e-7 ||
                      i(I[5] - k[5]) > 1e-7) &&
                      (p = null);
                  }
                  return p;
                }
                return {
                  getIntersections: function (t) {
                    var e = this.getValues(),
                      n = t && t !== this && t.getValues();
                    return n ? r(e, n, this, t, []) : s(e, this, []);
                  },
                  statics: {
                    getOverlaps: a,
                    getIntersections: function (t, e, n, i, a, o) {
                      var h = !e;
                      h && (e = t);
                      for (
                        var u = t.length,
                          c = e.length,
                          f = new Array(u),
                          d = h ? f : new Array(c),
                          _ = [],
                          g = 0;
                        g < u;
                        g++
                      )
                        f[g] = t[g].getValues(i);
                      if (!h) for (g = 0; g < c; g++) d[g] = e[g].getValues(a);
                      for (
                        var v = l.findCurveBoundsCollisions(f, d, 1e-7), p = 0;
                        p < u;
                        p++
                      ) {
                        var m = t[p],
                          y = f[p];
                        h && s(y, m, _, n);
                        var w = v[p];
                        if (w)
                          for (var x = 0; x < w.length; x++) {
                            if (o && _.length) return _;
                            var b = w[x];
                            if (!h || b > p) {
                              var C = e[b];
                              r(y, d[b], m, C, _, n);
                            }
                          }
                      }
                      return _;
                    },
                    getCurveLineIntersections: i,
                    getTimesWithTangent: function (t, e) {
                      var n = t[0],
                        i = t[1],
                        r = t[2],
                        s = t[3],
                        a = t[4],
                        o = t[5],
                        h = t[6],
                        u = t[7],
                        l = e.normalize(),
                        c = l.x,
                        d = l.y,
                        _ = 3 * h - 9 * a + 9 * r - 3 * n,
                        g = 3 * u - 9 * o + 9 * s - 3 * i,
                        v = 6 * a - 12 * r + 6 * n,
                        p = 6 * o - 12 * s + 6 * i,
                        m = 3 * r - 3 * n,
                        y = 3 * s - 3 * i,
                        w = 2 * _ * d - 2 * g * c,
                        x = [];
                      if (Math.abs(w) < f.CURVETIME_EPSILON) {
                        if (0 != (w = _ * p - g * v)) {
                          var b = -(_ * y - g * m) / w;
                          b >= 0 && b <= 1 && x.push(b);
                        }
                      } else {
                        var C =
                            (v * v - 4 * _ * m) * d * d +
                            (-2 * v * p + 4 * g * m + 4 * _ * y) * c * d +
                            (p * p - 4 * g * y) * c * c,
                          S = v * d - p * c;
                        if (C >= 0 && 0 != w) {
                          var k = Math.sqrt(C),
                            I = -(S + k) / w,
                            P = (-S + k) / w;
                          I >= 0 && I <= 1 && x.push(I),
                            P >= 0 && P <= 1 && x.push(P);
                        }
                      }
                      return x;
                    },
                  },
                };
              })(),
            ),
            L = a.extend(
              {
                _class: 'CurveLocation',
                initialize: function (t, e, n, i, r) {
                  if (e >= 0.99999999) {
                    var s = t.getNext();
                    s && ((e = 0), (t = s));
                  }
                  this._setCurve(t),
                    (this._time = e),
                    (this._point = n || t.getPointAtTime(e)),
                    (this._overlap = i),
                    (this._distance = r),
                    (this._intersection = this._next = this._previous = null);
                },
                _setPath: function (t) {
                  (this._path = t), (this._version = t ? t._version : 0);
                },
                _setCurve: function (t) {
                  this._setPath(t._path),
                    (this._curve = t),
                    (this._segment = null),
                    (this._segment1 = t._segment1),
                    (this._segment2 = t._segment2);
                },
                _setSegment: function (t) {
                  var e = t.getCurve();
                  e
                    ? this._setCurve(e)
                    : (this._setPath(t._path),
                      (this._segment1 = t),
                      (this._segment2 = null)),
                    (this._segment = t),
                    (this._time = t === this._segment1 ? 0 : 1),
                    (this._point = t._point.clone());
                },
                getSegment: function () {
                  var t = this._segment;
                  if (!t) {
                    var e = this.getCurve(),
                      n = this.getTime();
                    0 === n
                      ? (t = e._segment1)
                      : 1 === n
                      ? (t = e._segment2)
                      : null != n &&
                        (t =
                          e.getPartLength(0, n) < e.getPartLength(n, 1)
                            ? e._segment1
                            : e._segment2),
                      (this._segment = t);
                  }
                  return t;
                },
                getCurve: function () {
                  var t = this._path,
                    e = this;
                  function n(t) {
                    var n = t && t.getCurve();
                    if (n && null != (e._time = n.getTimeOf(e._point)))
                      return e._setCurve(n), n;
                  }
                  return (
                    t &&
                      t._version !== this._version &&
                      (this._time = this._offset = this._curveOffset = this._curve = null),
                    this._curve ||
                      n(this._segment) ||
                      n(this._segment1) ||
                      n(this._segment2.getPrevious())
                  );
                },
                getPath: function () {
                  var t = this.getCurve();
                  return t && t._path;
                },
                getIndex: function () {
                  var t = this.getCurve();
                  return t && t.getIndex();
                },
                getTime: function () {
                  var t = this.getCurve(),
                    e = this._time;
                  return t && null == e
                    ? (this._time = t.getTimeOf(this._point))
                    : e;
                },
                getParameter: '#getTime',
                getPoint: function () {
                  return this._point;
                },
                getOffset: function () {
                  var t = this._offset;
                  if (null == t) {
                    t = 0;
                    var e = this.getPath(),
                      n = this.getIndex();
                    if (e && null != n)
                      for (var i = e.getCurves(), r = 0; r < n; r++)
                        t += i[r].getLength();
                    this._offset = t += this.getCurveOffset();
                  }
                  return t;
                },
                getCurveOffset: function () {
                  var t = this._curveOffset;
                  if (null == t) {
                    var e = this.getCurve(),
                      n = this.getTime();
                    this._curveOffset = t =
                      null != n && e && e.getPartLength(0, n);
                  }
                  return t;
                },
                getIntersection: function () {
                  return this._intersection;
                },
                getDistance: function () {
                  return this._distance;
                },
                divide: function () {
                  var t = this.getCurve(),
                    e = t && t.divideAtTime(this.getTime());
                  return e && this._setSegment(e._segment1), e;
                },
                split: function () {
                  var t = this.getCurve(),
                    e = t._path,
                    n = t && t.splitAtTime(this.getTime());
                  return n && this._setSegment(e.getLastSegment()), n;
                },
                equals: function (t, e) {
                  var n = this === t;
                  if (!n && t instanceof L) {
                    var i = this.getCurve(),
                      r = t.getCurve(),
                      s = i._path;
                    if (s === r._path) {
                      var a = Math.abs,
                        o = a(this.getOffset() - t.getOffset()),
                        h = !e && this._intersection,
                        u = !e && t._intersection;
                      n =
                        (o < 1e-7 || (s && a(s.getLength() - o) < 1e-7)) &&
                        ((!h && !u) || (h && u && h.equals(u, !0)));
                    }
                  }
                  return n;
                },
                toString: function () {
                  var t = [],
                    e = this.getPoint(),
                    n = c.instance;
                  e && t.push('point: ' + e);
                  var i = this.getIndex();
                  null != i && t.push('index: ' + i);
                  var r = this.getTime();
                  return (
                    null != r && t.push('time: ' + n.number(r)),
                    null != this._distance &&
                      t.push('distance: ' + n.number(this._distance)),
                    '{ ' + t.join(', ') + ' }'
                  );
                },
                isTouching: function () {
                  var t = this._intersection;
                  if (t && this.getTangent().isCollinear(t.getTangent())) {
                    var e = this.getCurve(),
                      n = t.getCurve();
                    return !(
                      e.isStraight() &&
                      n.isStraight() &&
                      e.getLine().intersect(n.getLine())
                    );
                  }
                  return !1;
                },
                isCrossing: function () {
                  var t = this._intersection;
                  if (!t) return !1;
                  var e = this.getTime(),
                    n = t.getTime(),
                    i = e >= 1e-8 && e <= 1 - 1e-8,
                    r = n >= 1e-8 && n <= 1 - 1e-8;
                  if (i && r) return !this.isTouching();
                  var s = this.getCurve(),
                    a = s && e < 1e-8 ? s.getPrevious() : s,
                    o = t.getCurve(),
                    h = o && n < 1e-8 ? o.getPrevious() : o;
                  if (
                    (e > 1 - 1e-8 && (s = s.getNext()),
                    n > 1 - 1e-8 && (o = o.getNext()),
                    !(a && s && h && o))
                  )
                    return !1;
                  var u = [];
                  function l(t, e) {
                    var n = t.getValues(),
                      i = E.classify(n).roots || E.getPeaks(n),
                      r = i.length,
                      s = E.getLength(
                        n,
                        e && r ? i[r - 1] : 0,
                        !e && r ? i[0] : 1,
                      );
                    u.push(r ? s : s / 32);
                  }
                  function c(t, e, n) {
                    return e < n ? t > e && t < n : t > e || t < n;
                  }
                  i || (l(a, !0), l(s, !1)), r || (l(h, !0), l(o, !1));
                  var f = this.getPoint(),
                    d = Math.min.apply(Math, u),
                    _ = i ? s.getTangentAtTime(e) : s.getPointAt(d).subtract(f),
                    g = i ? _.negate() : a.getPointAt(-d).subtract(f),
                    v = r ? o.getTangentAtTime(n) : o.getPointAt(d).subtract(f),
                    p = r ? v.negate() : h.getPointAt(-d).subtract(f),
                    m = g.getAngle(),
                    y = _.getAngle(),
                    w = p.getAngle(),
                    x = v.getAngle();
                  return !!(i
                    ? c(m, w, x) ^ c(y, w, x) && c(m, x, w) ^ c(y, x, w)
                    : c(w, m, y) ^ c(x, m, y) && c(w, y, m) ^ c(x, y, m));
                },
                hasOverlap: function () {
                  return !!this._overlap;
                },
              },
              a.each(
                E._evaluateMethods,
                function (t) {
                  var e = t + 'At';
                  this[t] = function () {
                    var t = this.getCurve(),
                      n = this.getTime();
                    return null != n && t && t[e](n, !0);
                  };
                },
                { preserve: !0 },
              ),
              new (function () {
                function t(t, e, n) {
                  var i = t.length,
                    r = 0,
                    s = i - 1;
                  function a(n, r) {
                    for (var s = n + r; s >= -1 && s <= i; s += r) {
                      var a = t[((s % i) + i) % i];
                      if (!e.getPoint().isClose(a.getPoint(), 1e-7)) break;
                      if (e.equals(a)) return a;
                    }
                    return null;
                  }
                  for (; r <= s; ) {
                    var o,
                      h = (r + s) >>> 1,
                      u = t[h];
                    if (n && (o = e.equals(u) ? u : a(h, -1) || a(h, 1)))
                      return (
                        e._overlap &&
                          (o._overlap = o._intersection._overlap = !0),
                        o
                      );
                    var l = e.getPath(),
                      c = u.getPath();
                    (l !== c
                      ? l._id - c._id
                      : e.getIndex() +
                        e.getTime() -
                        (u.getIndex() + u.getTime())) < 0
                      ? (s = h - 1)
                      : (r = h + 1);
                  }
                  return t.splice(r, 0, e), e;
                }
                return {
                  statics: {
                    insert: t,
                    expand: function (e) {
                      for (var n = e.slice(), i = e.length - 1; i >= 0; i--)
                        t(n, e[i]._intersection, !1);
                      return n;
                    },
                  },
                };
              })(),
            ),
            N = C.extend({
              _class: 'PathItem',
              _selectBounds: !1,
              _canScaleStroke: !0,
              beans: !0,
              initialize: function () {},
              statics: {
                create: function (t) {
                  var e, n, i;
                  if (
                    (a.isPlainObject(t)
                      ? ((n = t.segments), (e = t.pathData))
                      : Array.isArray(t)
                      ? (n = t)
                      : 'string' == typeof t && (e = t),
                    n)
                  ) {
                    var r = n[0];
                    i = r && Array.isArray(r[0]);
                  } else
                    e &&
                      (i =
                        (e.match(/m/gi) || []).length > 1 ||
                        /z\s*\S+/i.test(e));
                  return new (i ? F : B)(t);
                },
              },
              _asPathItem: function () {
                return this;
              },
              isClockwise: function () {
                return this.getArea() >= 0;
              },
              setClockwise: function (t) {
                this.isClockwise() != (t = !!t) && this.reverse();
              },
              setPathData: function (t) {
                var e,
                  n,
                  i,
                  r = t && t.match(/[mlhvcsqtaz][^mlhvcsqtaz]*/gi),
                  s = !1,
                  a = new _(),
                  o = new _();
                function h(t, n) {
                  var i = +e[t];
                  return s && (i += a[n]), i;
                }
                function u(t) {
                  return new _(h(t, 'x'), h(t + 1, 'y'));
                }
                this.clear();
                for (var l = 0, c = r && r.length; l < c; l++) {
                  var f = r[l],
                    d = f[0],
                    g = d.toLowerCase(),
                    p =
                      (e = f.match(
                        /[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g,
                      )) && e.length;
                  switch (
                    ((s = d === g),
                    'z' !== n || /[mz]/.test(g) || this.moveTo(a),
                    g)
                  ) {
                    case 'm':
                    case 'l':
                      for (var m = 'm' === g, y = 0; y < p; y += 2)
                        this[m ? 'moveTo' : 'lineTo']((a = u(y))),
                          m && ((o = a), (m = !1));
                      i = a;
                      break;
                    case 'h':
                    case 'v':
                      var w = 'h' === g ? 'x' : 'y';
                      a = a.clone();
                      for (y = 0; y < p; y++) (a[w] = h(y, w)), this.lineTo(a);
                      i = a;
                      break;
                    case 'c':
                      for (y = 0; y < p; y += 6)
                        this.cubicCurveTo(u(y), (i = u(y + 2)), (a = u(y + 4)));
                      break;
                    case 's':
                      for (y = 0; y < p; y += 4)
                        this.cubicCurveTo(
                          /[cs]/.test(n) ? a.multiply(2).subtract(i) : a,
                          (i = u(y)),
                          (a = u(y + 2)),
                        ),
                          (n = g);
                      break;
                    case 'q':
                      for (y = 0; y < p; y += 4)
                        this.quadraticCurveTo((i = u(y)), (a = u(y + 2)));
                      break;
                    case 't':
                      for (y = 0; y < p; y += 2)
                        this.quadraticCurveTo(
                          (i = /[qt]/.test(n) ? a.multiply(2).subtract(i) : a),
                          (a = u(y)),
                        ),
                          (n = g);
                      break;
                    case 'a':
                      for (y = 0; y < p; y += 7)
                        this.arcTo(
                          (a = u(y + 5)),
                          new v(+e[y], +e[y + 1]),
                          +e[y + 2],
                          +e[y + 4],
                          +e[y + 3],
                        );
                      break;
                    case 'z':
                      this.closePath(1e-12), (a = o);
                  }
                  n = g;
                }
              },
              _canComposite: function () {
                return !(this.hasFill() && this.hasStroke());
              },
              _contains: function (t) {
                var e = t.isInside(this.getBounds({ internal: !0, handle: !0 }))
                  ? this._getWinding(t)
                  : {};
                return (
                  e.onPath ||
                  !!('evenodd' === this.getFillRule()
                    ? 1 & e.windingL || 1 & e.windingR
                    : e.winding)
                );
              },
              getIntersections: function (t, e, n, i) {
                var r = this === t || !t,
                  s = this._matrix._orNullIfIdentity(),
                  a = r ? s : (n || t._matrix)._orNullIfIdentity();
                return r || this.getBounds(s).intersects(t.getBounds(a), 1e-12)
                  ? E.getIntersections(
                      this.getCurves(),
                      !r && t.getCurves(),
                      e,
                      s,
                      a,
                      i,
                    )
                  : [];
              },
              getCrossings: function (t) {
                return this.getIntersections(t, function (t) {
                  return t.isCrossing();
                });
              },
              getNearestLocation: function () {
                for (
                  var t = _.read(arguments),
                    e = this.getCurves(),
                    n = 1 / 0,
                    i = null,
                    r = 0,
                    s = e.length;
                  r < s;
                  r++
                ) {
                  var a = e[r].getNearestLocation(t);
                  a._distance < n && ((n = a._distance), (i = a));
                }
                return i;
              },
              getNearestPoint: function () {
                var t = this.getNearestLocation.apply(this, arguments);
                return t ? t.getPoint() : t;
              },
              interpolate: function (t, e, n) {
                var i = !this._children,
                  r = i ? '_segments' : '_children',
                  s = t[r],
                  a = e[r],
                  o = this[r];
                if (!s || !a || s.length !== a.length)
                  throw new Error(
                    'Invalid operands in interpolate() call: ' + t + ', ' + e,
                  );
                var h = o.length,
                  u = a.length;
                if (h < u)
                  for (var l = i ? O : B, c = h; c < u; c++) this.add(new l());
                else
                  h > u && this[i ? 'removeSegments' : 'removeChildren'](u, h);
                for (c = 0; c < u; c++) o[c].interpolate(s[c], a[c], n);
                i && (this.setClosed(t._closed), this._changed(9));
              },
              compare: function (t) {
                var e = !1;
                if (t) {
                  var n = this._children || [this],
                    i = t._children ? t._children.slice() : [t],
                    r = n.length,
                    s = i.length,
                    a = [],
                    o = 0;
                  e = !0;
                  for (
                    var h = l.findItemBoundsCollisions(
                        n,
                        i,
                        f.GEOMETRIC_EPSILON,
                      ),
                      u = r - 1;
                    u >= 0 && e;
                    u--
                  ) {
                    var c = n[u];
                    e = !1;
                    var d = h[u];
                    if (d)
                      for (var _ = d.length - 1; _ >= 0 && !e; _--)
                        c.compare(i[d[_]]) &&
                          (a[d[_]] || ((a[d[_]] = !0), o++), (e = !0));
                  }
                  e = e && o === s;
                }
                return e;
              },
            }),
            B = N.extend(
              {
                _class: 'Path',
                _serializeFields: { segments: [], closed: !1 },
                initialize: function (t) {
                  (this._closed = !1),
                    (this._segments = []),
                    (this._version = 0);
                  var e = arguments,
                    r = Array.isArray(t)
                      ? 'object' === i(t[0])
                        ? t
                        : e
                      : !t || t.size !== n || (t.x === n && t.point === n)
                      ? null
                      : e;
                  r && r.length > 0
                    ? this.setSegments(r)
                    : ((this._curves = n),
                      (this._segmentSelection = 0),
                      r ||
                        'string' != typeof t ||
                        (this.setPathData(t), (t = null))),
                    this._initialize(!r && t);
                },
                _equals: function (t) {
                  return (
                    this._closed === t._closed &&
                    a.equals(this._segments, t._segments)
                  );
                },
                copyContent: function (t) {
                  this.setSegments(t._segments), (this._closed = t._closed);
                },
                _changed: function t(e) {
                  if ((t.base.call(this, e), 8 & e)) {
                    if (((this._length = this._area = n), 32 & e))
                      this._version++;
                    else if (this._curves)
                      for (var i = 0, r = this._curves.length; i < r; i++)
                        this._curves[i]._changed();
                  } else 64 & e && (this._bounds = n);
                },
                getStyle: function () {
                  var t = this._parent;
                  return (t instanceof F ? t : this)._style;
                },
                getSegments: function () {
                  return this._segments;
                },
                setSegments: function (t) {
                  var e = this.isFullySelected(),
                    i = t && t.length;
                  if (
                    ((this._segments.length = 0),
                    (this._segmentSelection = 0),
                    (this._curves = n),
                    i)
                  ) {
                    var r = t[i - 1];
                    'boolean' == typeof r && (this.setClosed(r), i--),
                      this._add(O.readList(t, 0, {}, i));
                  }
                  e && this.setFullySelected(!0);
                },
                getFirstSegment: function () {
                  return this._segments[0];
                },
                getLastSegment: function () {
                  return this._segments[this._segments.length - 1];
                },
                getCurves: function () {
                  var t = this._curves,
                    e = this._segments;
                  if (!t) {
                    var n = this._countCurves();
                    t = this._curves = new Array(n);
                    for (var i = 0; i < n; i++)
                      t[i] = new E(this, e[i], e[i + 1] || e[0]);
                  }
                  return t;
                },
                getFirstCurve: function () {
                  return this.getCurves()[0];
                },
                getLastCurve: function () {
                  var t = this.getCurves();
                  return t[t.length - 1];
                },
                isClosed: function () {
                  return this._closed;
                },
                setClosed: function (t) {
                  if (this._closed != (t = !!t)) {
                    if (((this._closed = t), this._curves)) {
                      var e = (this._curves.length = this._countCurves());
                      t &&
                        (this._curves[e - 1] = new E(
                          this,
                          this._segments[e - 1],
                          this._segments[0],
                        ));
                    }
                    this._changed(41);
                  }
                },
              },
              {
                beans: !0,
                getPathData: function (t, e) {
                  var n,
                    i,
                    r,
                    s,
                    a,
                    o,
                    h,
                    u,
                    l = this._segments,
                    f = l.length,
                    d = new c(e),
                    _ = new Array(6),
                    g = !0,
                    v = [];
                  function p(e, l) {
                    if (
                      (e._transformCoordinates(t, _), (n = _[0]), (i = _[1]), g)
                    )
                      v.push('M' + d.pair(n, i)), (g = !1);
                    else if (
                      ((a = _[2]),
                      (o = _[3]),
                      a === n && o === i && h === r && u === s)
                    ) {
                      if (!l) {
                        var c = n - r,
                          f = i - s;
                        v.push(
                          0 === c
                            ? 'v' + d.number(f)
                            : 0 === f
                            ? 'h' + d.number(c)
                            : 'l' + d.pair(c, f),
                        );
                      }
                    } else
                      v.push(
                        'c' +
                          d.pair(h - r, u - s) +
                          ' ' +
                          d.pair(a - r, o - s) +
                          ' ' +
                          d.pair(n - r, i - s),
                      );
                    (r = n), (s = i), (h = _[4]), (u = _[5]);
                  }
                  if (!f) return '';
                  for (var m = 0; m < f; m++) p(l[m]);
                  return (
                    this._closed && f > 0 && (p(l[0], !0), v.push('z')),
                    v.join('')
                  );
                },
                isEmpty: function () {
                  return !this._segments.length;
                },
                _transformContent: function (t) {
                  for (
                    var e = this._segments,
                      n = new Array(6),
                      i = 0,
                      r = e.length;
                    i < r;
                    i++
                  )
                    e[i]._transformCoordinates(t, n, !0);
                  return !0;
                },
                _add: function (t, e) {
                  for (
                    var n = this._segments,
                      i = this._curves,
                      r = t.length,
                      s = null == e,
                      o = ((e = s ? n.length : e), 0);
                    o < r;
                    o++
                  ) {
                    var h = t[o];
                    h._path && (h = t[o] = h.clone()),
                      (h._path = this),
                      (h._index = e + o),
                      h._selection && this._updateSelection(h, 0, h._selection);
                  }
                  if (s) a.push(n, t);
                  else {
                    n.splice.apply(n, [e, 0].concat(t));
                    o = e + r;
                    for (var u = n.length; o < u; o++) n[o]._index = o;
                  }
                  if (i) {
                    var l = this._countCurves(),
                      c = e > 0 && e + r - 1 === l ? e - 1 : e,
                      f = c,
                      d = Math.min(c + r, l);
                    t._curves &&
                      (i.splice.apply(i, [c, 0].concat(t._curves)),
                      (f += t._curves.length));
                    for (o = f; o < d; o++)
                      i.splice(o, 0, new E(this, null, null));
                    this._adjustCurves(c, d);
                  }
                  return this._changed(41), t;
                },
                _adjustCurves: function (t, e) {
                  for (
                    var n, i = this._segments, r = this._curves, s = t;
                    s < e;
                    s++
                  )
                    ((n = r[s])._path = this),
                      (n._segment1 = i[s]),
                      (n._segment2 = i[s + 1] || i[0]),
                      n._changed();
                  (n = r[this._closed && !t ? i.length - 1 : t - 1]) &&
                    ((n._segment2 = i[t] || i[0]), n._changed()),
                    (n = r[e]) && ((n._segment1 = i[e]), n._changed());
                },
                _countCurves: function () {
                  var t = this._segments.length;
                  return !this._closed && t > 0 ? t - 1 : t;
                },
                add: function (t) {
                  var e = arguments;
                  return e.length > 1 && 'number' != typeof t
                    ? this._add(O.readList(e))
                    : this._add([O.read(e)])[0];
                },
                insert: function (t, e) {
                  var n = arguments;
                  return n.length > 2 && 'number' != typeof e
                    ? this._add(O.readList(n, 1), t)
                    : this._add([O.read(n, 1)], t)[0];
                },
                addSegment: function () {
                  return this._add([O.read(arguments)])[0];
                },
                insertSegment: function (t) {
                  return this._add([O.read(arguments, 1)], t)[0];
                },
                addSegments: function (t) {
                  return this._add(O.readList(t));
                },
                insertSegments: function (t, e) {
                  return this._add(O.readList(e), t);
                },
                removeSegment: function (t) {
                  return this.removeSegments(t, t + 1)[0] || null;
                },
                removeSegments: function (t, e, n) {
                  (t = t || 0), (e = a.pick(e, this._segments.length));
                  var i = this._segments,
                    r = this._curves,
                    s = i.length,
                    o = i.splice(t, e - t),
                    h = o.length;
                  if (!h) return o;
                  for (var u = 0; u < h; u++) {
                    var l = o[u];
                    l._selection && this._updateSelection(l, l._selection, 0),
                      (l._index = l._path = null);
                  }
                  u = t;
                  for (var c = i.length; u < c; u++) i[u]._index = u;
                  if (r) {
                    var f =
                      t > 0 && e === s + (this._closed ? 1 : 0) ? t - 1 : t;
                    for (u = (r = r.splice(f, h)).length - 1; u >= 0; u--)
                      r[u]._path = null;
                    n && (o._curves = r.slice(1)), this._adjustCurves(f, f);
                  }
                  return this._changed(41), o;
                },
                clear: '#removeSegments',
                hasHandles: function () {
                  for (var t = this._segments, e = 0, n = t.length; e < n; e++)
                    if (t[e].hasHandles()) return !0;
                  return !1;
                },
                clearHandles: function () {
                  for (var t = this._segments, e = 0, n = t.length; e < n; e++)
                    t[e].clearHandles();
                },
                getLength: function () {
                  if (null == this._length) {
                    for (
                      var t = this.getCurves(), e = 0, n = 0, i = t.length;
                      n < i;
                      n++
                    )
                      e += t[n].getLength();
                    this._length = e;
                  }
                  return this._length;
                },
                getArea: function () {
                  var t = this._area;
                  if (null == t) {
                    var e = this._segments,
                      n = this._closed;
                    t = 0;
                    for (var i = 0, r = e.length; i < r; i++) {
                      var s = i + 1 === r;
                      t += E.getArea(
                        E.getValues(e[i], e[s ? 0 : i + 1], null, s && !n),
                      );
                    }
                    this._area = t;
                  }
                  return t;
                },
                isFullySelected: function () {
                  var t = this._segments.length;
                  return (
                    this.isSelected() &&
                    t > 0 &&
                    this._segmentSelection === 7 * t
                  );
                },
                setFullySelected: function (t) {
                  t && this._selectSegments(!0), this.setSelected(t);
                },
                setSelection: function t(e) {
                  1 & e || this._selectSegments(!1), t.base.call(this, e);
                },
                _selectSegments: function (t) {
                  var e = this._segments,
                    n = e.length,
                    i = t ? 7 : 0;
                  this._segmentSelection = i * n;
                  for (var r = 0; r < n; r++) e[r]._selection = i;
                },
                _updateSelection: function (t, e, n) {
                  (t._selection = n),
                    (this._segmentSelection += n - e) > 0 &&
                      this.setSelected(!0);
                },
                divideAt: function (t) {
                  var e,
                    n = this.getLocationAt(t);
                  return n && (e = n.getCurve().divideAt(n.getCurveOffset()))
                    ? e._segment1
                    : null;
                },
                splitAt: function (t) {
                  var e = this.getLocationAt(t),
                    n = e && e.index,
                    i = e && e.time;
                  i > 1 - 1e-8 && (n++, (i = 0));
                  var r = this.getCurves();
                  if (n >= 0 && n < r.length) {
                    i >= 1e-8 && r[n++].divideAtTime(i);
                    var s,
                      a = this.removeSegments(n, this._segments.length, !0);
                    return (
                      this._closed
                        ? (this.setClosed(!1), (s = this))
                        : ((s = new B(C.NO_INSERT)).insertAbove(this),
                          s.copyAttributes(this)),
                      s._add(a, 0),
                      this.addSegment(a[0]),
                      s
                    );
                  }
                  return null;
                },
                split: function (t, e) {
                  var i,
                    r =
                      e === n
                        ? t
                        : (i = this.getCurves()[t]) && i.getLocationAtTime(e);
                  return null != r ? this.splitAt(r) : null;
                },
                join: function (t, e) {
                  var n = e || 0;
                  if (t && t !== this) {
                    var i = t._segments,
                      r = this.getLastSegment(),
                      s = t.getLastSegment();
                    if (!s) return this;
                    r && r._point.isClose(s._point, n) && t.reverse();
                    var a = t.getFirstSegment();
                    if (r && r._point.isClose(a._point, n))
                      r.setHandleOut(a._handleOut), this._add(i.slice(1));
                    else {
                      var o = this.getFirstSegment();
                      o && o._point.isClose(a._point, n) && t.reverse(),
                        (s = t.getLastSegment()),
                        o && o._point.isClose(s._point, n)
                          ? (o.setHandleIn(s._handleIn),
                            this._add(i.slice(0, i.length - 1), 0))
                          : this._add(i.slice());
                    }
                    t._closed && this._add([i[0]]), t.remove();
                  }
                  var h = this.getFirstSegment(),
                    u = this.getLastSegment();
                  return (
                    h !== u &&
                      h._point.isClose(u._point, n) &&
                      (h.setHandleIn(u._handleIn),
                      u.remove(),
                      this.setClosed(!0)),
                    this
                  );
                },
                reduce: function (t) {
                  for (
                    var e = this.getCurves(),
                      n = t && t.simplify,
                      i = n ? 1e-7 : 0,
                      r = e.length - 1;
                    r >= 0;
                    r--
                  ) {
                    var s = e[r];
                    !s.hasHandles() &&
                      (!s.hasLength(i) || (n && s.isCollinear(s.getNext()))) &&
                      s.remove();
                  }
                  return this;
                },
                reverse: function () {
                  this._segments.reverse();
                  for (var t = 0, e = this._segments.length; t < e; t++) {
                    var n = this._segments[t],
                      i = n._handleIn;
                    (n._handleIn = n._handleOut),
                      (n._handleOut = i),
                      (n._index = t);
                  }
                  (this._curves = null), this._changed(9);
                },
                flatten: function (t) {
                  for (
                    var e = new j(this, t || 0.25, 256, !0).parts,
                      n = e.length,
                      i = [],
                      r = 0;
                    r < n;
                    r++
                  )
                    i.push(new O(e[r].curve.slice(0, 2)));
                  !this._closed &&
                    n > 0 &&
                    i.push(new O(e[n - 1].curve.slice(6))),
                    this.setSegments(i);
                },
                simplify: function (t) {
                  var e = new R(this).fit(t || 2.5);
                  return e && this.setSegments(e), !!e;
                },
                smooth: function (t) {
                  var e = this,
                    i = t || {},
                    r = i.type || 'asymmetric',
                    s = this._segments,
                    a = s.length,
                    o = this._closed;
                  function h(t, n) {
                    var i = t && t.index;
                    if (null != i) {
                      var r = t.path;
                      if (r && r !== e)
                        throw new Error(
                          t._class +
                            ' ' +
                            i +
                            ' of ' +
                            r +
                            ' is not part of ' +
                            e,
                        );
                      n && t instanceof E && i++;
                    } else i = 'number' == typeof t ? t : n;
                    return Math.min(
                      i < 0 && o ? i % a : i < 0 ? i + a : i,
                      a - 1,
                    );
                  }
                  var u = o && i.from === n && i.to === n,
                    l = h(i.from, 0),
                    c = h(i.to, a - 1);
                  if (l > c)
                    if (o) l -= a;
                    else {
                      var f = l;
                      (l = c), (c = f);
                    }
                  if (/^(?:asymmetric|continuous)$/.test(r)) {
                    var d = 'asymmetric' === r,
                      _ = Math.min,
                      g = c - l + 1,
                      v = g - 1,
                      p = u ? _(g, 4) : 1,
                      m = p,
                      y = p,
                      w = [];
                    if (
                      (o || ((m = _(1, l)), (y = _(1, a - c - 1))),
                      (v += m + y) <= 1)
                    )
                      return;
                    for (var x = 0, b = l - m; x <= v; x++, b++)
                      w[x] = s[(b < 0 ? b + a : b) % a]._point;
                    var C = w[0]._x + 2 * w[1]._x,
                      S = w[0]._y + 2 * w[1]._y,
                      k = 2,
                      I = v - 1,
                      P = [C],
                      M = [S],
                      A = [k],
                      T = [],
                      O = [];
                    for (x = 1; x < v; x++) {
                      var z = x < I,
                        L = z ? 4 : d ? 2 : 7,
                        N = z ? 4 : d ? 3 : 8,
                        B = z ? 2 : d ? 0 : 1,
                        F = (z ? 1 : d ? 1 : 2) / k;
                      (k = A[x] = L - F),
                        (C = P[x] = N * w[x]._x + B * w[x + 1]._x - F * C),
                        (S = M[x] = N * w[x]._y + B * w[x + 1]._y - F * S);
                    }
                    (T[I] = P[I] / A[I]), (O[I] = M[I] / A[I]);
                    for (x = v - 2; x >= 0; x--)
                      (T[x] = (P[x] - T[x + 1]) / A[x]),
                        (O[x] = (M[x] - O[x + 1]) / A[x]);
                    (T[v] = (3 * w[v]._x - T[I]) / 2),
                      (O[v] = (3 * w[v]._y - O[I]) / 2);
                    x = m;
                    var j = v - y;
                    for (b = l; x <= j; x++, b++) {
                      var R = s[b < 0 ? b + a : b],
                        D = R._point,
                        q = T[x] - D._x,
                        V = O[x] - D._y;
                      (u || x < j) && R.setHandleOut(q, V),
                        (u || x > m) && R.setHandleIn(-q, -V);
                    }
                  } else
                    for (x = l; x <= c; x++)
                      s[x < 0 ? x + a : x].smooth(
                        i,
                        !u && x === l,
                        !u && x === c,
                      );
                },
                toShape: function (t) {
                  if (!this._closed) return null;
                  var e,
                    i,
                    r,
                    s,
                    a,
                    o,
                    h,
                    u = this._segments;
                  function l(t, e) {
                    var n = u[t],
                      i = n.getNext(),
                      r = u[e],
                      s = r.getNext();
                    return (
                      n._handleOut.isZero() &&
                      i._handleIn.isZero() &&
                      r._handleOut.isZero() &&
                      s._handleIn.isZero() &&
                      i._point
                        .subtract(n._point)
                        .isCollinear(s._point.subtract(r._point))
                    );
                  }
                  function c(t) {
                    var e = u[t],
                      n = e.getNext(),
                      i = e._handleOut,
                      r = n._handleIn;
                    if (i.isOrthogonal(r)) {
                      var s = e._point,
                        a = n._point,
                        o = new x(s, i, !0).intersect(new x(a, r, !0), !0);
                      return (
                        o &&
                        f.isZero(
                          i.getLength() / o.subtract(s).getLength() -
                            0.5522847498307936,
                        ) &&
                        f.isZero(
                          r.getLength() / o.subtract(a).getLength() -
                            0.5522847498307936,
                        )
                      );
                    }
                    return !1;
                  }
                  function d(t, e) {
                    return u[t]._point.getDistance(u[e]._point);
                  }
                  if (
                    (!this.hasHandles() &&
                    4 === u.length &&
                    l(0, 2) &&
                    l(1, 3) &&
                    ((a = u[1]),
                    (o = a.getPrevious()),
                    (h = a.getNext()),
                    o._handleOut.isZero() &&
                      a._handleIn.isZero() &&
                      a._handleOut.isZero() &&
                      h._handleIn.isZero() &&
                      a._point
                        .subtract(o._point)
                        .isOrthogonal(h._point.subtract(a._point)))
                      ? ((e = I.Rectangle),
                        (i = new v(d(0, 3), d(0, 1))),
                        (s = u[1]._point.add(u[2]._point).divide(2)))
                      : 8 === u.length &&
                        c(0) &&
                        c(2) &&
                        c(4) &&
                        c(6) &&
                        l(1, 5) &&
                        l(3, 7)
                      ? ((e = I.Rectangle),
                        (r = (i = new v(d(1, 6), d(0, 3)))
                          .subtract(new v(d(0, 7), d(1, 2)))
                          .divide(2)),
                        (s = u[3]._point.add(u[4]._point).divide(2)))
                      : 4 === u.length &&
                        c(0) &&
                        c(1) &&
                        c(2) &&
                        c(3) &&
                        (f.isZero(d(0, 2) - d(1, 3))
                          ? ((e = I.Circle), (r = d(0, 2) / 2))
                          : ((e = I.Ellipse),
                            (r = new v(d(2, 0) / 2, d(3, 1) / 2))),
                        (s = u[1]._point)),
                    e)
                  ) {
                    var _ = this.getPosition(!0),
                      g = new e({ center: _, size: i, radius: r, insert: !1 });
                    return (
                      g.copyAttributes(this, !0),
                      g._matrix.prepend(this._matrix),
                      g.rotate(s.subtract(_).getAngle() + 90),
                      (t === n || t) && g.insertAbove(this),
                      g
                    );
                  }
                  return null;
                },
                toPath: '#clone',
                compare: function t(e) {
                  if (!e || e instanceof F) return t.base.call(this, e);
                  var n = this.getCurves(),
                    i = e.getCurves(),
                    r = n.length,
                    s = i.length;
                  if (!r || !s) return r == s;
                  for (
                    var a, o, h = n[0].getValues(), u = [], l = 0, c = 0, f = 0;
                    f < s;
                    f++
                  ) {
                    var d = i[f].getValues();
                    if ((u.push(d), (v = E.getOverlaps(h, d)))) {
                      (a = !f && v[0][0] > 0 ? s - 1 : f), (o = v[0][1]);
                      break;
                    }
                  }
                  var _,
                    g = Math.abs;
                  for (d = u[a]; h && d; ) {
                    var v;
                    if ((v = E.getOverlaps(h, d)))
                      if (g(v[0][0] - c) < 1e-8) {
                        1 === (c = v[1][0]) &&
                          ((h = ++l < r ? n[l].getValues() : null), (c = 0));
                        var p = v[0][1];
                        if (g(p - o) < 1e-8) {
                          if (
                            (_ || (_ = [a, p]),
                            1 === (o = v[1][1]) &&
                              (++a >= s && (a = 0),
                              (d = u[a] || i[a].getValues()),
                              (o = 0)),
                            !h)
                          )
                            return _[0] === a && _[1] === o;
                          continue;
                        }
                      }
                    break;
                  }
                  return !1;
                },
                _hitTestSelf: function (t, e, n, i) {
                  var r,
                    s,
                    a,
                    o,
                    h,
                    u,
                    l = this,
                    c = this.getStyle(),
                    f = this._segments,
                    d = f.length,
                    _ = this._closed,
                    g = e._tolerancePadding,
                    v = g,
                    p = e.stroke && c.hasStroke(),
                    m = e.fill && c.hasFill(),
                    y = e.curves,
                    w = p
                      ? c.getStrokeWidth() / 2
                      : (m && e.tolerance > 0) || y
                      ? 0
                      : null;
                  function x(e, n) {
                    return t.subtract(e).divide(n).length <= 1;
                  }
                  function b(t, n, i) {
                    if (!e.selected || n.isSelected()) {
                      var r = t._point;
                      if ((n !== r && (n = n.add(r)), x(n, v)))
                        return new T(i, l, { segment: t, point: n });
                    }
                  }
                  function C(t, n) {
                    return (
                      ((n || e.segments) && b(t, t._point, 'segment')) ||
                      (!n &&
                        e.handles &&
                        (b(t, t._handleIn, 'handle-in') ||
                          b(t, t._handleOut, 'handle-out')))
                    );
                  }
                  function S(t) {
                    o.add(t);
                  }
                  function k(e) {
                    var n,
                      h = _ || (e._index > 0 && e._index < d - 1);
                    return 'round' === (h ? r : s)
                      ? x(e._point, v)
                      : ((o = new B({ internal: !0, closed: !0 })),
                        h
                          ? e.isSmooth() ||
                            B._addBevelJoin(e, r, w, a, null, i, S, !0)
                          : 'square' === s &&
                            B._addSquareCap(e, s, w, null, i, S, !0),
                        o.isEmpty()
                          ? void 0
                          : o.contains(t) ||
                            ((n = o.getNearestLocation(t)) &&
                              x(n.getPoint(), g)));
                  }
                  if (
                    (null !== w &&
                      (w > 0
                        ? ((r = c.getStrokeJoin()),
                          (s = c.getStrokeCap()),
                          (a = c.getMiterLimit()),
                          (v = v.add(B._getStrokePadding(w, i))))
                        : (r = s = 'round')),
                    !e.ends || e.segments || _)
                  ) {
                    if (e.segments || e.handles)
                      for (var I = 0; I < d; I++) if ((u = C(f[I]))) return u;
                  } else if ((u = C(f[0], !0) || C(f[d - 1], !0))) return u;
                  if (null !== w) {
                    if ((h = this.getNearestLocation(t))) {
                      var P = h.getTime();
                      0 === P || (1 === P && d > 1)
                        ? k(h.getSegment()) || (h = null)
                        : x(h.getPoint(), v) || (h = null);
                    }
                    if (!h && 'miter' === r && d > 1)
                      for (I = 0; I < d; I++) {
                        var M = f[I];
                        if (t.getDistance(M._point) <= a * w && k(M)) {
                          h = M.getLocation();
                          break;
                        }
                      }
                  }
                  return (!h && m && this._contains(t)) || (h && !p && !y)
                    ? new T('fill', this)
                    : h
                    ? new T(p ? 'stroke' : 'curve', this, {
                        location: h,
                        point: h.getPoint(),
                      })
                    : null;
                },
              },
              a.each(
                E._evaluateMethods,
                function (t) {
                  this[t + 'At'] = function (e) {
                    var n = this.getLocationAt(e);
                    return n && n[t]();
                  };
                },
                {
                  beans: !1,
                  getLocationOf: function () {
                    for (
                      var t = _.read(arguments),
                        e = this.getCurves(),
                        n = 0,
                        i = e.length;
                      n < i;
                      n++
                    ) {
                      var r = e[n].getLocationOf(t);
                      if (r) return r;
                    }
                    return null;
                  },
                  getOffsetOf: function () {
                    var t = this.getLocationOf.apply(this, arguments);
                    return t ? t.getOffset() : null;
                  },
                  getLocationAt: function (t) {
                    if ('number' == typeof t) {
                      for (
                        var e = this.getCurves(), n = 0, i = 0, r = e.length;
                        i < r;
                        i++
                      ) {
                        var s = n,
                          a = e[i];
                        if ((n += a.getLength()) > t)
                          return a.getLocationAt(t - s);
                      }
                      if (e.length > 0 && t <= this.getLength())
                        return new L(e[e.length - 1], 1);
                    } else if (t && t.getPath && t.getPath() === this) return t;
                    return null;
                  },
                  getOffsetsWithTangent: function () {
                    var t = _.read(arguments);
                    if (t.isZero()) return [];
                    for (
                      var e = [],
                        n = 0,
                        i = this.getCurves(),
                        r = 0,
                        s = i.length;
                      r < s;
                      r++
                    ) {
                      for (
                        var a = i[r],
                          o = a.getTimesWithTangent(t),
                          h = 0,
                          u = o.length;
                        h < u;
                        h++
                      ) {
                        var l = n + a.getOffsetAtTime(o[h]);
                        e.indexOf(l) < 0 && e.push(l);
                      }
                      n += a.length;
                    }
                    return e;
                  },
                },
              ),
              new (function () {
                function t(t, e, n) {
                  var i,
                    r,
                    s,
                    a,
                    o,
                    h,
                    u,
                    l,
                    c = e._segments,
                    f = c.length,
                    d = new Array(6),
                    _ = !0;
                  function g(e) {
                    if (n)
                      e._transformCoordinates(n, d), (i = d[0]), (r = d[1]);
                    else {
                      var c = e._point;
                      (i = c._x), (r = c._y);
                    }
                    if (_) t.moveTo(i, r), (_ = !1);
                    else {
                      if (n) (o = d[2]), (h = d[3]);
                      else {
                        var f = e._handleIn;
                        (o = i + f._x), (h = r + f._y);
                      }
                      o === i && h === r && u === s && l === a
                        ? t.lineTo(i, r)
                        : t.bezierCurveTo(u, l, o, h, i, r);
                    }
                    if (((s = i), (a = r), n)) (u = d[4]), (l = d[5]);
                    else {
                      f = e._handleOut;
                      (u = s + f._x), (l = a + f._y);
                    }
                  }
                  for (var v = 0; v < f; v++) g(c[v]);
                  e._closed && f > 0 && g(c[0]);
                }
                return {
                  _draw: function (e, n, i, r) {
                    var s = n.dontStart,
                      a = n.dontFinish || n.clip,
                      o = this.getStyle(),
                      h = o.hasFill(),
                      u = o.hasStroke(),
                      l = o.getDashArray(),
                      c = !ht.support.nativeDash && u && l && l.length;
                    function f(t) {
                      return l[((t % c) + c) % c];
                    }
                    if (
                      (s || e.beginPath(),
                      (h || (u && !c) || a) &&
                        (t(e, this, r), this._closed && e.closePath()),
                      !a &&
                        (h || u) &&
                        (this._setStyles(e, n, i),
                        h &&
                          (e.fill(o.getFillRule()),
                          (e.shadowColor = 'rgba(0,0,0,0)')),
                        u))
                    ) {
                      if (c) {
                        s || e.beginPath();
                        for (
                          var d,
                            _ = new j(this, 0.25, 32, !1, r),
                            g = _.length,
                            v = -o.getDashOffset(),
                            p = 0;
                          v > 0;

                        )
                          v -= f(p--) + f(p--);
                        for (; v < g; )
                          (d = v + f(p++)),
                            (v > 0 || d > 0) &&
                              _.drawPart(e, Math.max(v, 0), Math.max(d, 0)),
                            (v = d + f(p++));
                      }
                      e.stroke();
                    }
                  },
                  _drawSelected: function (e, n) {
                    e.beginPath(),
                      t(e, this, n),
                      e.stroke(),
                      (function (t, e, n, i) {
                        if (!(i <= 0))
                          for (
                            var r,
                              s,
                              a = i / 2,
                              o = i - 2,
                              h = a - 1,
                              u = new Array(6),
                              l = 0,
                              c = e.length;
                            l < c;
                            l++
                          ) {
                            var f = e[l],
                              d = f._selection;
                            if (
                              (f._transformCoordinates(n, u),
                              (r = u[0]),
                              (s = u[1]),
                              2 & d && g(2),
                              4 & d && g(4),
                              t.fillRect(r - a, s - a, i, i),
                              o > 0 && !(1 & d))
                            ) {
                              var _ = t.fillStyle;
                              (t.fillStyle = '#ffffff'),
                                t.fillRect(r - h, s - h, o, o),
                                (t.fillStyle = _);
                            }
                          }
                        function g(e) {
                          var n = u[e],
                            i = u[e + 1];
                          (r == n && s == i) ||
                            (t.beginPath(),
                            t.moveTo(r, s),
                            t.lineTo(n, i),
                            t.stroke(),
                            t.beginPath(),
                            t.arc(n, i, a, 0, 2 * Math.PI, !0),
                            t.fill());
                        }
                      })(e, this._segments, n, ht.settings.handleSize);
                  },
                };
              })(),
              new (function () {
                function t(t) {
                  var e = t._segments;
                  if (!e.length)
                    throw new Error('Use a moveTo() command first');
                  return e[e.length - 1];
                }
                return {
                  moveTo: function () {
                    var t = this._segments;
                    1 === t.length && this.removeSegment(0),
                      t.length || this._add([new O(_.read(arguments))]);
                  },
                  moveBy: function () {
                    throw new Error('moveBy() is unsupported on Path items.');
                  },
                  lineTo: function () {
                    this._add([new O(_.read(arguments))]);
                  },
                  cubicCurveTo: function () {
                    var e = arguments,
                      n = _.read(e),
                      i = _.read(e),
                      r = _.read(e),
                      s = t(this);
                    s.setHandleOut(n.subtract(s._point)),
                      this._add([new O(r, i.subtract(r))]);
                  },
                  quadraticCurveTo: function () {
                    var e = arguments,
                      n = _.read(e),
                      i = _.read(e),
                      r = t(this)._point;
                    this.cubicCurveTo(
                      n.add(r.subtract(n).multiply(1 / 3)),
                      n.add(i.subtract(n).multiply(1 / 3)),
                      i,
                    );
                  },
                  curveTo: function () {
                    var e = arguments,
                      n = _.read(e),
                      i = _.read(e),
                      r = a.pick(a.read(e), 0.5),
                      s = 1 - r,
                      o = t(this)._point,
                      h = n
                        .subtract(o.multiply(s * s))
                        .subtract(i.multiply(r * r))
                        .divide(2 * r * s);
                    if (h.isNaN())
                      throw new Error(
                        'Cannot put a curve through points with parameter = ' +
                          r,
                      );
                    this.quadraticCurveTo(h, i);
                  },
                  arcTo: function () {
                    var e,
                      n,
                      i,
                      r,
                      s = arguments,
                      o = Math.abs,
                      h = Math.sqrt,
                      u = t(this),
                      l = u._point,
                      c = _.read(s),
                      d = a.peek(s);
                    if ('boolean' == typeof (b = a.pick(d, !0)))
                      var g = (S = l.add(c).divide(2)).add(
                        S.subtract(l).rotate(b ? -90 : 90),
                      );
                    else if (a.remain(s) <= 2) (g = c), (c = _.read(s));
                    else if (!l.equals(c)) {
                      var p = v.read(s),
                        m = f.isZero;
                      if (m(p.width) || m(p.height)) return this.lineTo(c);
                      var y = a.read(s),
                        b = !!a.read(s),
                        C = !!a.read(s),
                        S = l.add(c).divide(2),
                        k = ($ = l.subtract(S).rotate(-y)).x,
                        I = $.y,
                        P = o(p.width),
                        M = o(p.height),
                        A = P * P,
                        T = M * M,
                        z = k * k,
                        E = I * I,
                        L = h(z / A + E / T);
                      if (
                        (L > 1 && ((A = (P *= L) * P), (T = (M *= L) * M)),
                        o((L = (A * T - A * E - T * z) / (A * E + T * z))) <
                          1e-12 && (L = 0),
                        L < 0)
                      )
                        throw new Error(
                          'Cannot create an arc with the given arguments',
                        );
                      (e = new _((P * I) / M, (-M * k) / P)
                        .multiply((C === b ? -1 : 1) * h(L))
                        .rotate(y)
                        .add(S)),
                        (n = (i = (r = new w()
                          .translate(e)
                          .rotate(y)
                          .scale(P, M))._inverseTransform(l)).getDirectedAngle(
                          r._inverseTransform(c),
                        )),
                        !b && n > 0 ? (n -= 360) : b && n < 0 && (n += 360);
                    }
                    if (g) {
                      var N = new x(
                          l.add(g).divide(2),
                          g.subtract(l).rotate(90),
                          !0,
                        ),
                        B = new x(
                          g.add(c).divide(2),
                          c.subtract(g).rotate(90),
                          !0,
                        ),
                        F = new x(l, c),
                        j = F.getSide(g);
                      if (!(e = N.intersect(B, !0))) {
                        if (!j) return this.lineTo(c);
                        throw new Error(
                          'Cannot create an arc with the given arguments',
                        );
                      }
                      n = (i = l.subtract(e)).getDirectedAngle(c.subtract(e));
                      var R = F.getSide(e, !0);
                      0 === R
                        ? (n = j * o(n))
                        : j === R && (n += n < 0 ? 360 : -360);
                    }
                    if (n) {
                      for (
                        var D = o(n),
                          q = D >= 360 ? 4 : Math.ceil((D - 1e-7) / 90),
                          V = n / q,
                          U = (V * Math.PI) / 360,
                          H = ((4 / 3) * Math.sin(U)) / (1 + Math.cos(U)),
                          Z = [],
                          W = 0;
                        W <= q;
                        W++
                      ) {
                        var $ = c,
                          G = null;
                        if (
                          (W < q &&
                            ((G = i.rotate(90).multiply(H)),
                            r
                              ? (($ = r._transformPoint(i)),
                                (G = r._transformPoint(i.add(G)).subtract($)))
                              : ($ = e.add(i))),
                          W)
                        ) {
                          var J = i.rotate(-90).multiply(H);
                          r && (J = r._transformPoint(i.add(J)).subtract($)),
                            Z.push(new O($, J, G));
                        } else u.setHandleOut(G);
                        i = i.rotate(V);
                      }
                      this._add(Z);
                    }
                  },
                  lineBy: function () {
                    var e = _.read(arguments),
                      n = t(this)._point;
                    this.lineTo(n.add(e));
                  },
                  curveBy: function () {
                    var e = arguments,
                      n = _.read(e),
                      i = _.read(e),
                      r = a.read(e),
                      s = t(this)._point;
                    this.curveTo(s.add(n), s.add(i), r);
                  },
                  cubicCurveBy: function () {
                    var e = arguments,
                      n = _.read(e),
                      i = _.read(e),
                      r = _.read(e),
                      s = t(this)._point;
                    this.cubicCurveTo(s.add(n), s.add(i), s.add(r));
                  },
                  quadraticCurveBy: function () {
                    var e = arguments,
                      n = _.read(e),
                      i = _.read(e),
                      r = t(this)._point;
                    this.quadraticCurveTo(r.add(n), r.add(i));
                  },
                  arcBy: function () {
                    var e = arguments,
                      n = t(this)._point,
                      i = n.add(_.read(e)),
                      r = a.pick(a.peek(e), !0);
                    'boolean' == typeof r
                      ? this.arcTo(i, r)
                      : this.arcTo(i, n.add(_.read(e)));
                  },
                  closePath: function (t) {
                    this.setClosed(!0), this.join(this, t);
                  },
                };
              })(),
              {
                _getBounds: function (t, e) {
                  var n = e.handle
                    ? 'getHandleBounds'
                    : e.stroke
                    ? 'getStrokeBounds'
                    : 'getBounds';
                  return B[n](this._segments, this._closed, this, t, e);
                },
                statics: {
                  getBounds: function (t, e, n, i, r, s) {
                    var a = t[0];
                    if (!a) return new m();
                    var o = new Array(6),
                      h = a._transformCoordinates(i, new Array(6)),
                      u = h.slice(0, 2),
                      l = u.slice(),
                      c = new Array(2);
                    function f(t) {
                      t._transformCoordinates(i, o);
                      for (var e = 0; e < 2; e++)
                        E._addBounds(
                          h[e],
                          h[e + 4],
                          o[e + 2],
                          o[e],
                          e,
                          s ? s[e] : 0,
                          u,
                          l,
                          c,
                        );
                      var n = h;
                      (h = o), (o = n);
                    }
                    for (var d = 1, _ = t.length; d < _; d++) f(t[d]);
                    return (
                      e && f(a), new m(u[0], u[1], l[0] - u[0], l[1] - u[1])
                    );
                  },
                  getStrokeBounds: function (t, e, n, i, r) {
                    var s = n.getStyle(),
                      a = s.hasStroke(),
                      o = s.getStrokeWidth(),
                      h = a && n._getStrokeMatrix(i, r),
                      u = a && B._getStrokePadding(o, h),
                      l = B.getBounds(t, e, n, i, r, u);
                    if (!a) return l;
                    var c = o / 2,
                      f = s.getStrokeJoin(),
                      d = s.getStrokeCap(),
                      _ = s.getMiterLimit(),
                      g = new m(new v(u));
                    function p(t) {
                      l = l.include(t);
                    }
                    function y(t) {
                      l = l.unite(g.setCenter(t._point.transform(i)));
                    }
                    function w(t, e) {
                      'round' === e || t.isSmooth()
                        ? y(t)
                        : B._addBevelJoin(t, e, c, _, i, h, p);
                    }
                    function x(t, e) {
                      'round' === e ? y(t) : B._addSquareCap(t, e, c, i, h, p);
                    }
                    var b = t.length - (e ? 0 : 1);
                    if (b > 0) {
                      for (var C = 1; C < b; C++) w(t[C], f);
                      e ? w(t[0], f) : (x(t[0], d), x(t[t.length - 1], d));
                    }
                    return l;
                  },
                  _getStrokePadding: function (t, e) {
                    if (!e) return [t, t];
                    var n = new _(t, 0).transform(e),
                      i = new _(0, t).transform(e),
                      r = n.getAngleInRadians(),
                      s = n.getLength(),
                      a = i.getLength(),
                      o = Math.sin(r),
                      h = Math.cos(r),
                      u = Math.tan(r),
                      l = Math.atan2(a * u, s),
                      c = Math.atan2(a, u * s);
                    return [
                      Math.abs(s * Math.cos(l) * h + a * Math.sin(l) * o),
                      Math.abs(a * Math.sin(c) * h + s * Math.cos(c) * o),
                    ];
                  },
                  _addBevelJoin: function (t, e, n, i, r, s, a, o) {
                    var h = t.getCurve(),
                      u = h.getPrevious(),
                      l = h.getPoint1().transform(r),
                      c = u.getNormalAtTime(1).multiply(n).transform(s),
                      f = h.getNormalAtTime(0).multiply(n).transform(s),
                      d = c.getDirectedAngle(f);
                    if (
                      ((d < 0 || d >= 180) &&
                        ((c = c.negate()), (f = f.negate())),
                      o && a(l),
                      a(l.add(c)),
                      'miter' === e)
                    ) {
                      var g = new x(l.add(c), new _(-c.y, c.x), !0).intersect(
                        new x(l.add(f), new _(-f.y, f.x), !0),
                        !0,
                      );
                      g && l.getDistance(g) <= i * n && a(g);
                    }
                    a(l.add(f));
                  },
                  _addSquareCap: function (t, e, n, i, r, s, a) {
                    var o = t._point.transform(i),
                      h = t.getLocation(),
                      u = h
                        .getNormal()
                        .multiply(0 === h.getTime() ? n : -n)
                        .transform(r);
                    'square' === e &&
                      (a && (s(o.subtract(u)), s(o.add(u))),
                      (o = o.add(u.rotate(-90)))),
                      s(o.add(u)),
                      s(o.subtract(u));
                  },
                  getHandleBounds: function (t, e, n, i, r) {
                    var s,
                      a,
                      o = n.getStyle();
                    if (r.stroke && o.hasStroke()) {
                      var h = n._getStrokeMatrix(i, r),
                        u = o.getStrokeWidth() / 2,
                        l = u;
                      'miter' === o.getStrokeJoin() &&
                        (l = u * o.getMiterLimit()),
                        'square' === o.getStrokeCap() &&
                          (l = Math.max(l, u * Math.SQRT2)),
                        (s = B._getStrokePadding(u, h)),
                        (a = B._getStrokePadding(l, h));
                    }
                    for (
                      var c = new Array(6),
                        f = 1 / 0,
                        d = -f,
                        _ = f,
                        g = d,
                        v = 0,
                        p = t.length;
                      v < p;
                      v++
                    ) {
                      t[v]._transformCoordinates(i, c);
                      for (var y = 0; y < 6; y += 2) {
                        var w = y ? s : a,
                          x = w ? w[0] : 0,
                          b = w ? w[1] : 0,
                          C = c[y],
                          S = c[y + 1],
                          k = C - x,
                          I = C + x,
                          P = S - b,
                          M = S + b;
                        k < f && (f = k),
                          I > d && (d = I),
                          P < _ && (_ = P),
                          M > g && (g = M);
                      }
                    }
                    return new m(f, _, d - f, g - _);
                  },
                },
              },
            );
          B.inject({
            statics: new (function () {
              var t = 0.5522847498307936,
                e = [
                  new O([-1, 0], [0, t], [0, -t]),
                  new O([0, -1], [-t, 0], [t, 0]),
                  new O([1, 0], [0, -t], [0, t]),
                  new O([0, 1], [t, 0], [-t, 0]),
                ];
              function n(t, e, n) {
                var i = a.getNamed(n),
                  r = new B(i && 0 == i.insert && C.NO_INSERT);
                return r._add(t), (r._closed = e), r.set(i, { insert: !0 });
              }
              function i(t, i, r) {
                for (var s = new Array(4), a = 0; a < 4; a++) {
                  var o = e[a];
                  s[a] = new O(
                    o._point.multiply(i).add(t),
                    o._handleIn.multiply(i),
                    o._handleOut.multiply(i),
                  );
                }
                return n(s, !0, r);
              }
              return {
                Line: function () {
                  var t = arguments;
                  return n(
                    [
                      new O(_.readNamed(t, 'from')),
                      new O(_.readNamed(t, 'to')),
                    ],
                    !1,
                    t,
                  );
                },
                Circle: function () {
                  var t = arguments,
                    e = _.readNamed(t, 'center'),
                    n = a.readNamed(t, 'radius');
                  return i(e, new v(n), t);
                },
                Rectangle: function () {
                  var e,
                    i = arguments,
                    r = m.readNamed(i, 'rectangle'),
                    s = v.readNamed(i, 'radius', 0, { readNull: !0 }),
                    a = r.getBottomLeft(!0),
                    o = r.getTopLeft(!0),
                    h = r.getTopRight(!0),
                    u = r.getBottomRight(!0);
                  if (!s || s.isZero())
                    e = [new O(a), new O(o), new O(h), new O(u)];
                  else {
                    var l = (s = v.min(s, r.getSize(!0).divide(2))).width,
                      c = s.height,
                      f = l * t,
                      d = c * t;
                    e = [
                      new O(a.add(l, 0), null, [-f, 0]),
                      new O(a.subtract(0, c), [0, d]),
                      new O(o.add(0, c), null, [0, -d]),
                      new O(o.add(l, 0), [-f, 0], null),
                      new O(h.subtract(l, 0), null, [f, 0]),
                      new O(h.add(0, c), [0, -d], null),
                      new O(u.subtract(0, c), null, [0, d]),
                      new O(u.subtract(l, 0), [f, 0]),
                    ];
                  }
                  return n(e, !0, i);
                },
                RoundRectangle: '#Rectangle',
                Ellipse: function () {
                  var t = arguments,
                    e = I._readEllipse(t);
                  return i(e.center, e.radius, t);
                },
                Oval: '#Ellipse',
                Arc: function () {
                  var t = arguments,
                    e = _.readNamed(t, 'from'),
                    n = _.readNamed(t, 'through'),
                    i = _.readNamed(t, 'to'),
                    r = a.getNamed(t),
                    s = new B(r && 0 == r.insert && C.NO_INSERT);
                  return s.moveTo(e), s.arcTo(n, i), s.set(r);
                },
                RegularPolygon: function () {
                  for (
                    var t = arguments,
                      e = _.readNamed(t, 'center'),
                      i = a.readNamed(t, 'sides'),
                      r = a.readNamed(t, 'radius'),
                      s = 360 / i,
                      o = i % 3 == 0,
                      h = new _(0, o ? -r : r),
                      u = o ? -1 : 0.5,
                      l = new Array(i),
                      c = 0;
                    c < i;
                    c++
                  )
                    l[c] = new O(e.add(h.rotate((c + u) * s)));
                  return n(l, !0, t);
                },
                Star: function () {
                  for (
                    var t = arguments,
                      e = _.readNamed(t, 'center'),
                      i = 2 * a.readNamed(t, 'points'),
                      r = a.readNamed(t, 'radius1'),
                      s = a.readNamed(t, 'radius2'),
                      o = 360 / i,
                      h = new _(0, -1),
                      u = new Array(i),
                      l = 0;
                    l < i;
                    l++
                  )
                    u[l] = new O(
                      e.add(h.rotate(o * l).multiply(l % 2 ? s : r)),
                    );
                  return n(u, !0, t);
                },
              };
            })(),
          });
          var F = N.extend(
            {
              _class: 'CompoundPath',
              _serializeFields: { children: [] },
              beans: !0,
              initialize: function (t) {
                (this._children = []),
                  (this._namedChildren = {}),
                  this._initialize(t) ||
                    ('string' == typeof t
                      ? this.setPathData(t)
                      : this.addChildren(Array.isArray(t) ? t : arguments));
              },
              insertChildren: function t(e, n) {
                var i = n,
                  r = i[0];
                r && 'number' == typeof r[0] && (i = [i]);
                for (var s = n.length - 1; s >= 0; s--) {
                  var o = i[s];
                  i !== n || o instanceof B || (i = a.slice(i)),
                    Array.isArray(o)
                      ? (i[s] = new B({ segments: o, insert: !1 }))
                      : o instanceof F &&
                        (i.splice.apply(i, [s, 1].concat(o.removeChildren())),
                        o.remove());
                }
                return t.base.call(this, e, i);
              },
              reduce: function t(e) {
                for (var n = this._children, i = n.length - 1; i >= 0; i--) {
                  var r;
                  (r = n[i].reduce(e)).isEmpty() && r.remove();
                }
                return n.length
                  ? t.base.call(this)
                  : ((r = new B(C.NO_INSERT)).copyAttributes(this),
                    r.insertAbove(this),
                    this.remove(),
                    r);
              },
              isClosed: function () {
                for (var t = this._children, e = 0, n = t.length; e < n; e++)
                  if (!t[e]._closed) return !1;
                return !0;
              },
              setClosed: function (t) {
                for (var e = this._children, n = 0, i = e.length; n < i; n++)
                  e[n].setClosed(t);
              },
              getFirstSegment: function () {
                var t = this.getFirstChild();
                return t && t.getFirstSegment();
              },
              getLastSegment: function () {
                var t = this.getLastChild();
                return t && t.getLastSegment();
              },
              getCurves: function () {
                for (
                  var t = this._children, e = [], n = 0, i = t.length;
                  n < i;
                  n++
                )
                  a.push(e, t[n].getCurves());
                return e;
              },
              getFirstCurve: function () {
                var t = this.getFirstChild();
                return t && t.getFirstCurve();
              },
              getLastCurve: function () {
                var t = this.getLastChild();
                return t && t.getLastCurve();
              },
              getArea: function () {
                for (
                  var t = this._children, e = 0, n = 0, i = t.length;
                  n < i;
                  n++
                )
                  e += t[n].getArea();
                return e;
              },
              getLength: function () {
                for (
                  var t = this._children, e = 0, n = 0, i = t.length;
                  n < i;
                  n++
                )
                  e += t[n].getLength();
                return e;
              },
              getPathData: function (t, e) {
                for (
                  var n = this._children, i = [], r = 0, s = n.length;
                  r < s;
                  r++
                ) {
                  var a = n[r],
                    o = a._matrix;
                  i.push(
                    a.getPathData(t && !o.isIdentity() ? t.appended(o) : t, e),
                  );
                }
                return i.join('');
              },
              _hitTestChildren: function t(e, n, i) {
                return t.base.call(
                  this,
                  e,
                  n.class === B || 'path' === n.type
                    ? n
                    : a.set({}, n, { fill: !1 }),
                  i,
                );
              },
              _draw: function (t, e, n, i) {
                var r = this._children;
                if (r.length) {
                  (e = e.extend({ dontStart: !0, dontFinish: !0 })),
                    t.beginPath();
                  for (var s = 0, a = r.length; s < a; s++) r[s].draw(t, e, i);
                  if (!e.clip) {
                    this._setStyles(t, e, n);
                    var o = this._style;
                    o.hasFill() &&
                      (t.fill(o.getFillRule()),
                      (t.shadowColor = 'rgba(0,0,0,0)')),
                      o.hasStroke() && t.stroke();
                  }
                }
              },
              _drawSelected: function (t, e, n) {
                for (var i = this._children, r = 0, s = i.length; r < s; r++) {
                  var a = i[r],
                    o = a._matrix;
                  n[a._id] ||
                    a._drawSelected(t, o.isIdentity() ? e : e.appended(o));
                }
              },
            },
            new (function () {
              function t(t, e) {
                var n = t._children;
                if (e && !n.length)
                  throw new Error('Use a moveTo() command first');
                return n[n.length - 1];
              }
              return a.each(
                [
                  'lineTo',
                  'cubicCurveTo',
                  'quadraticCurveTo',
                  'curveTo',
                  'arcTo',
                  'lineBy',
                  'cubicCurveBy',
                  'quadraticCurveBy',
                  'curveBy',
                  'arcBy',
                ],
                function (e) {
                  this[e] = function () {
                    var n = t(this, !0);
                    n[e].apply(n, arguments);
                  };
                },
                {
                  moveTo: function () {
                    var e = t(this),
                      n = e && e.isEmpty() ? e : new B(C.NO_INSERT);
                    n !== e && this.addChild(n), n.moveTo.apply(n, arguments);
                  },
                  moveBy: function () {
                    var e = t(this, !0),
                      n = e && e.getLastSegment(),
                      i = _.read(arguments);
                    this.moveTo(n ? i.add(n._point) : i);
                  },
                  closePath: function (e) {
                    t(this, !0).closePath(e);
                  },
                },
              );
            })(),
            a.each(
              ['reverse', 'flatten', 'simplify', 'smooth'],
              function (t) {
                this[t] = function (e) {
                  for (
                    var n, i = this._children, r = 0, s = i.length;
                    r < s;
                    r++
                  )
                    n = i[r][t](e) || n;
                  return n;
                };
              },
              {},
            ),
          );
          N.inject(
            new (function () {
              var t = Math.min,
                e = Math.max,
                i = Math.abs,
                r = {
                  unite: { 1: !0, 2: !0 },
                  intersect: { 2: !0 },
                  subtract: { 1: !0 },
                  exclude: { 1: !0, '-1': !0 },
                };
              function s(t) {
                return t._children || [t];
              }
              function o(t, e) {
                var n = t
                  .clone(!1)
                  .reduce({ simplify: !0 })
                  .transform(null, !0, !0);
                if (e) {
                  for (var i = s(n), r = 0, a = i.length; r < a; r++) {
                    (t = i[r])._closed ||
                      t.isEmpty() ||
                      (t.closePath(1e-12),
                      t.getFirstSegment().setHandleIn(0, 0),
                      t.getLastSegment().setHandleOut(0, 0));
                  }
                  n = n
                    .resolveCrossings()
                    .reorient('nonzero' === n.getFillRule(), !0);
                }
                return n;
              }
              function h(t, e, n, i, r) {
                var s = new F(C.NO_INSERT);
                return (
                  s.addChildren(t, !0),
                  (s = s.reduce({ simplify: e })),
                  (r && 0 == r.insert) ||
                    s.insertAbove(
                      i && n.isSibling(i) && n.getIndex() < i.getIndex()
                        ? i
                        : n,
                    ),
                  s.copyAttributes(n, !0),
                  s
                );
              }
              function u(t) {
                return t.hasOverlap() || t.isCrossing();
              }
              function c(t, e, n, i) {
                if (
                  i &&
                  (0 == i.trace || i.stroke) &&
                  /^(subtract|intersect)$/.test(n)
                )
                  return d(t, e, n);
                var c = o(t, !0),
                  f = e && t !== e && o(e, !0),
                  _ = r[n];
                (_[n] = !0),
                  f &&
                    (_.subtract || _.exclude) ^
                      f.isClockwise() ^
                      c.isClockwise() &&
                    f.reverse();
                var g,
                  m = p(L.expand(c.getIntersections(f, u))),
                  x = s(c),
                  b = f && s(f),
                  C = [],
                  S = [];
                function k(t) {
                  for (var e = 0, n = t.length; e < n; e++) {
                    var i = t[e];
                    a.push(C, i._segments),
                      a.push(S, i.getCurves()),
                      (i._overlapsOnly = !0);
                  }
                }
                function I(t) {
                  for (var e = [], n = 0, i = t && t.length; n < i; n++)
                    e.push(S[t[n]]);
                  return e;
                }
                if (m.length) {
                  k(x), b && k(b);
                  for (
                    var P = new Array(S.length), M = 0, A = S.length;
                    M < A;
                    M++
                  )
                    P[M] = S[M].getValues();
                  var T = l.findCurveBoundsCollisions(P, P, 0, !0),
                    O = {};
                  for (M = 0; M < S.length; M++) {
                    var z = S[M],
                      E = z._path._id;
                    (O[E] = O[E] || {})[z.getIndex()] = {
                      hor: I(T[M].hor),
                      ver: I(T[M].ver),
                    };
                  }
                  for (M = 0, A = m.length; M < A; M++)
                    y(m[M]._segment, c, f, O, _);
                  for (M = 0, A = C.length; M < A; M++) {
                    var N = C[M],
                      B = N._intersection;
                    N._winding || y(N, c, f, O, _),
                      (B && B._overlap) || (N._path._overlapsOnly = !1);
                  }
                  g = w(C, _);
                } else
                  g = v(b ? x.concat(b) : x.slice(), function (t) {
                    return !!_[t];
                  });
                return h(g, !0, t, e, i);
              }
              function d(t, e, n) {
                var i = o(t),
                  r = o(e),
                  s = i.getIntersections(r, u),
                  a = 'subtract' === n,
                  l = 'divide' === n,
                  c = {},
                  f = [];
                function d(t) {
                  if (
                    !c[t._id] &&
                    (l || r.contains(t.getPointAt(t.getLength() / 2)) ^ a)
                  )
                    return f.unshift(t), (c[t._id] = !0);
                }
                for (var _ = s.length - 1; _ >= 0; _--) {
                  var g = s[_].split();
                  g &&
                    (d(g) && g.getFirstSegment().setHandleIn(0, 0),
                    i.getLastSegment().setHandleOut(0, 0));
                }
                return d(i), h(f, !1, t, e);
              }
              function _(t, e) {
                for (var n = t; n; ) {
                  if (n === e) return;
                  n = n._previous;
                }
                for (; t._next && t._next !== e; ) t = t._next;
                if (!t._next) {
                  for (; e._previous; ) e = e._previous;
                  (t._next = e), (e._previous = t);
                }
              }
              function g(t) {
                for (var e = t.length - 1; e >= 0; e--) t[e].clearHandles();
              }
              function v(t, e, n) {
                var r = t && t.length;
                if (r) {
                  var s = a.each(
                      t,
                      function (t, e) {
                        this[t._id] = {
                          container: null,
                          winding: t.isClockwise() ? 1 : -1,
                          index: e,
                        };
                      },
                      {},
                    ),
                    o = t.slice().sort(function (t, e) {
                      return i(e.getArea()) - i(t.getArea());
                    }),
                    h = o[0],
                    u = l.findItemBoundsCollisions(
                      o,
                      null,
                      f.GEOMETRIC_EPSILON,
                    );
                  null == n && (n = h.isClockwise());
                  for (var c = 0; c < r; c++) {
                    var d = o[c],
                      _ = s[d._id],
                      g = 0,
                      v = u[c];
                    if (v)
                      for (var p = null, m = v.length - 1; m >= 0; m--)
                        if (v[m] < c) {
                          p = p || d.getInteriorPoint();
                          var y = o[v[m]];
                          if (y.contains(p)) {
                            var w = s[y._id];
                            (g = w.winding),
                              (_.winding += g),
                              (_.container = w.exclude ? w.container : y);
                            break;
                          }
                        }
                    if (e(_.winding) === e(g))
                      (_.exclude = !0), (t[_.index] = null);
                    else {
                      var x = _.container;
                      d.setClockwise(x ? !x.isClockwise() : n);
                    }
                  }
                }
                return t;
              }
              function p(t, e, n) {
                var i,
                  r,
                  s,
                  a = e && [],
                  o = !1,
                  h = n || [],
                  u = n && {};
                function l(t) {
                  return t._path._id + '.' + t._segment1._index;
                }
                for (var c = (n && n.length) - 1; c >= 0; c--) {
                  (f = n[c])._path && (u[l(f)] = !0);
                }
                for (c = t.length - 1; c >= 0; c--) {
                  var f,
                    d,
                    v = t[c],
                    p = v._time,
                    m = p,
                    y = e && !e(v);
                  if (
                    ((f = v._curve) &&
                      (f !== r
                        ? ((o = !f.hasHandles() || (u && u[l(f)])),
                          (i = []),
                          (s = null),
                          (r = f))
                        : s >= 1e-8 && (p /= s)),
                    y)
                  )
                    i && i.push(v);
                  else {
                    if ((e && a.unshift(v), (s = m), p < 1e-8)) d = f._segment1;
                    else if (p > 1 - 1e-8) d = f._segment2;
                    else {
                      var w = f.divideAtTime(p, !0);
                      o && h.push(f, w), (d = w._segment1);
                      for (var x = i.length - 1; x >= 0; x--) {
                        var b = i[x];
                        b._time = (b._time - p) / (1 - p);
                      }
                    }
                    v._setSegment(d);
                    var C = d._intersection,
                      S = v._intersection;
                    if (C) {
                      _(C, S);
                      for (var k = C; k; ) _(k._intersection, C), (k = k._next);
                    } else d._intersection = S;
                  }
                }
                return n || g(h), a || t;
              }
              function m(n, r, s, a, o) {
                var h,
                  u,
                  l = Array.isArray(r) ? r : r[s ? 'hor' : 'ver'],
                  c = s ? 1 : 0,
                  f = 1 ^ c,
                  d = [n.x, n.y],
                  _ = d[c],
                  g = d[f],
                  v = 1e-6,
                  p = _ - 1e-9,
                  y = _ + 1e-9,
                  w = 0,
                  x = 0,
                  b = 0,
                  C = 0,
                  S = !1,
                  k = !1,
                  I = 1,
                  P = [];
                function M(i) {
                  var u = i[f + 0],
                    l = i[f + 6];
                  if (!(g < t(u, l) || g > e(u, l))) {
                    var d = i[c + 0],
                      w = i[c + 2],
                      x = i[c + 4],
                      k = i[c + 6];
                    if (u !== l) {
                      var M =
                          g === u
                            ? 0
                            : g === l
                            ? 1
                            : p > e(d, w, x, k) || y < t(d, w, x, k)
                            ? 1
                            : E.solveCubic(i, f, g, P, 0, 1) > 0
                            ? P[0]
                            : 1,
                        A =
                          0 === M
                            ? d
                            : 1 === M
                            ? k
                            : E.getPoint(i, M)[s ? 'y' : 'x'],
                        T = u > l ? 1 : -1,
                        O = h[f] > h[f + 6] ? 1 : -1,
                        z = h[c + 6];
                      return (
                        g !== u
                          ? (A < p ? (b += T) : A > y ? (C += T) : (S = !0),
                            A > _ - v && A < _ + v && (I /= 2))
                          : (T !== O
                              ? d < p
                                ? (b += T)
                                : d > y && (C += T)
                              : d != z &&
                                (z < y && A > y
                                  ? ((C += T), (S = !0))
                                  : z > p && A < p && ((b += T), (S = !0))),
                            (I /= 4)),
                        (h = i),
                        !o &&
                          A > p &&
                          A < y &&
                          0 === E.getTangent(i, M)[s ? 'x' : 'y'] &&
                          m(n, r, !s, a, !0)
                      );
                    }
                    ((d < y && k > p) || (k < y && d > p)) && (S = !0);
                  }
                }
                function A(n) {
                  var i = n[f + 0],
                    r = n[f + 2],
                    a = n[f + 4],
                    o = n[f + 6];
                  if (g <= e(i, r, a, o) && g >= t(i, r, a, o))
                    for (
                      var h,
                        u = n[c + 0],
                        l = n[c + 2],
                        d = n[c + 4],
                        _ = n[c + 6],
                        v =
                          p > e(u, l, d, _) || y < t(u, l, d, _)
                            ? [n]
                            : E.getMonoCurves(n, s),
                        m = 0,
                        w = v.length;
                      m < w;
                      m++
                    )
                      if ((h = M(v[m]))) return h;
                }
                for (var T = 0, O = l.length; T < O; T++) {
                  var z,
                    L = l[T],
                    N = L._path,
                    B = L.getValues();
                  if (
                    !(
                      (T && l[T - 1]._path === N) ||
                      ((h = null),
                      N._closed ||
                        ((u = E.getValues(
                          N.getLastCurve().getSegment2(),
                          L.getSegment1(),
                          null,
                          !a,
                        ))[f] !== u[f + 6] &&
                          (h = u)),
                      h)
                    )
                  ) {
                    h = B;
                    for (var F = N.getLastCurve(); F && F !== L; ) {
                      var j = F.getValues();
                      if (j[f] !== j[f + 6]) {
                        h = j;
                        break;
                      }
                      F = F.getPrevious();
                    }
                  }
                  if ((z = A(B))) return z;
                  if (T + 1 === O || l[T + 1]._path !== N) {
                    if (u && (z = A(u))) return z;
                    !S || b || C || (b = C = N.isClockwise(a) ^ s ? 1 : -1),
                      (w += b),
                      (x += C),
                      (b = C = 0),
                      S && ((k = !0), (S = !1)),
                      (u = null);
                  }
                }
                return (
                  (w = i(w)),
                  (x = i(x)),
                  {
                    winding: e(w, x),
                    windingL: w,
                    windingR: x,
                    quality: I,
                    onPath: k,
                  }
                );
              }
              function y(t, e, n, r, s) {
                var a = [],
                  o = t,
                  h = 0;
                do {
                  if ((y = t.getCurve())) {
                    var u = y.getLength();
                    a.push({ segment: t, curve: y, length: u }), (h += u);
                  }
                  t = t.getNext();
                } while (t && !t._intersection && t !== o);
                for (
                  var l = [0.5, 0.25, 0.75],
                    c = { winding: 0, quality: -1 },
                    d = 0;
                  d < l.length && c.quality < 0.5;
                  d++
                ) {
                  u = h * l[d];
                  for (var _ = 0, g = a.length; _ < g; _++) {
                    var v = a[_],
                      p = v.length;
                    if (u <= p) {
                      var y,
                        w = (y = v.curve)._path,
                        x = w._parent,
                        b = x instanceof F ? x : w,
                        C = f.clamp(y.getTimeAt(u), 0.001, 0.999),
                        S = y.getPointAtTime(C),
                        k = i(y.getTangentAtTime(C).y) < Math.SQRT1_2,
                        I = null;
                      if (s.subtract && n) {
                        var P = (b === e ? n : e)._getWinding(S, k, !0);
                        if ((b === e && P.winding) || (b === n && !P.winding)) {
                          if (P.quality < 1) continue;
                          I = { winding: 0, quality: 1 };
                        }
                      }
                      (I = I || m(S, r[w._id][y.getIndex()], k, !0)).quality >
                        c.quality && (c = I);
                      break;
                    }
                    u -= p;
                  }
                }
                for (_ = a.length - 1; _ >= 0; _--) a[_].segment._winding = c;
              }
              function w(t, e) {
                var n,
                  i = [];
                function r(t) {
                  var n;
                  return !(
                    !t ||
                    t._visited ||
                    (e &&
                      (!e[(n = t._winding || {}).winding] ||
                        (e.unite &&
                          2 === n.winding &&
                          n.windingL &&
                          n.windingR)))
                  );
                }
                function s(t) {
                  if (t)
                    for (var e = 0, i = n.length; e < i; e++)
                      if (t === n[e]) return !0;
                  return !1;
                }
                function a(t) {
                  for (var e = t._segments, n = 0, i = e.length; n < i; n++)
                    e[n]._visited = !0;
                }
                function o(t, e) {
                  var i = t._intersection,
                    a = i,
                    o = [];
                  function h(i, a) {
                    for (; i && i !== a; ) {
                      var h = i._segment,
                        u = h && h._path;
                      if (u) {
                        var l = h.getNext() || u.getFirstSegment(),
                          c = l._intersection;
                        h !== t &&
                          (s(h) ||
                            s(l) ||
                            (l && r(h) && (r(l) || (c && r(c._segment))))) &&
                          o.push(h),
                          e && n.push(h);
                      }
                      i = i._next;
                    }
                  }
                  if ((e && (n = [t]), i)) {
                    for (h(i); i && i._previous; ) i = i._previous;
                    h(i, a);
                  }
                  return o;
                }
                t.sort(function (t, e) {
                  var n = t._intersection,
                    i = e._intersection,
                    r = !(!n || !n._overlap),
                    s = !(!i || !i._overlap),
                    a = t._path,
                    o = e._path;
                  return r ^ s
                    ? r
                      ? 1
                      : -1
                    : !n ^ !i
                    ? n
                      ? 1
                      : -1
                    : a !== o
                    ? a._id - o._id
                    : t._index - e._index;
                });
                for (var h = 0, u = t.length; h < u; h++) {
                  var l,
                    c,
                    f,
                    d = t[h],
                    _ = r(d),
                    g = null,
                    v = !1,
                    p = !0,
                    m = [];
                  if (_ && d._path._overlapsOnly) {
                    var y = d._path,
                      w = d._intersection._segment._path;
                    y.compare(w) &&
                      (y.getArea() && i.push(y.clone(!1)),
                      a(y),
                      a(w),
                      (_ = !1));
                  }
                  for (; _; ) {
                    var x = !g,
                      b = o(d, x),
                      S = b.shift(),
                      k = !(v = !x && (s(d) || s(S))) && S;
                    if ((x && ((g = new B(C.NO_INSERT)), (l = null)), v)) {
                      (d.isFirst() || d.isLast()) && (p = d._path._closed),
                        (d._visited = !0);
                      break;
                    }
                    if (
                      (k && l && (m.push(l), (l = null)),
                      l ||
                        (k && b.push(d),
                        (l = {
                          start: g._segments.length,
                          crossings: b,
                          visited: (c = []),
                          handleIn: f,
                        })),
                      k && (d = S),
                      !r(d))
                    ) {
                      g.removeSegments(l.start);
                      for (var I = 0, P = c.length; I < P; I++)
                        c[I]._visited = !1;
                      c.length = 0;
                      do {
                        ((d = l && l.crossings.shift()) && d._path) ||
                          ((d = null),
                          (l = m.pop()) && ((c = l.visited), (f = l.handleIn)));
                      } while (l && !r(d));
                      if (!d) break;
                    }
                    var M = d.getNext();
                    g.add(new O(d._point, f, M && d._handleOut)),
                      (d._visited = !0),
                      c.push(d),
                      (d = M || d._path.getFirstSegment()),
                      (f = M && M._handleIn);
                  }
                  v &&
                    (p && (g.getFirstSegment().setHandleIn(f), g.setClosed(p)),
                    0 !== g.getArea() && i.push(g));
                }
                return i;
              }
              return {
                _getWinding: function (t, e, n) {
                  return m(t, this.getCurves(), e, n);
                },
                unite: function (t, e) {
                  return c(this, t, 'unite', e);
                },
                intersect: function (t, e) {
                  return c(this, t, 'intersect', e);
                },
                subtract: function (t, e) {
                  return c(this, t, 'subtract', e);
                },
                exclude: function (t, e) {
                  return c(this, t, 'exclude', e);
                },
                divide: function (t, e) {
                  return e && (0 == e.trace || e.stroke)
                    ? d(this, t, 'divide')
                    : h(
                        [this.subtract(t, e), this.intersect(t, e)],
                        !0,
                        this,
                        t,
                        e,
                      );
                },
                resolveCrossings: function () {
                  var t = this._children,
                    e = t || [this];
                  function n(t, e) {
                    var n = t && t._intersection;
                    return n && n._overlap && n._path === e;
                  }
                  var i = !1,
                    r = !1,
                    s = this.getIntersections(null, function (t) {
                      return (
                        (t.hasOverlap() && (i = !0)) ||
                        (t.isCrossing() && (r = !0))
                      );
                    }),
                    o = i && r && [];
                  if (((s = L.expand(s)), i))
                    for (
                      var h = p(
                          s,
                          function (t) {
                            return t.hasOverlap();
                          },
                          o,
                        ),
                        u = h.length - 1;
                      u >= 0;
                      u--
                    ) {
                      var l = h[u],
                        c = l._path,
                        f = l._segment,
                        d = f.getPrevious(),
                        _ = f.getNext();
                      n(d, c) &&
                        n(_, c) &&
                        (f.remove(),
                        d._handleOut._set(0, 0),
                        _._handleIn._set(0, 0),
                        d === f ||
                          d.getCurve().hasLength() ||
                          (_._handleIn.set(d._handleIn), d.remove()));
                    }
                  r &&
                    (p(
                      s,
                      i &&
                        function (t) {
                          var e = t.getCurve(),
                            n = t.getSegment(),
                            i = t._intersection,
                            r = i._curve,
                            s = i._segment;
                          if (e && r && e._path && r._path) return !0;
                          n && (n._intersection = null),
                            s && (s._intersection = null);
                        },
                      o,
                    ),
                    o && g(o),
                    (e = w(
                      a.each(
                        e,
                        function (t) {
                          a.push(this, t._segments);
                        },
                        [],
                      ),
                    )));
                  var v,
                    m = e.length;
                  return (
                    m > 1 && t
                      ? (e !== t && this.setChildren(e), (v = this))
                      : 1 !== m ||
                        t ||
                        (e[0] !== this &&
                          this.setSegments(e[0].removeSegments()),
                        (v = this)),
                    v ||
                      ((v = new F(C.NO_INSERT)).addChildren(e),
                      (v = v.reduce()).copyAttributes(this),
                      this.replaceWith(v)),
                    v
                  );
                },
                reorient: function (t, e) {
                  var i = this._children;
                  return (
                    i && i.length
                      ? this.setChildren(
                          v(
                            this.removeChildren(),
                            function (e) {
                              return !!(t ? e : 1 & e);
                            },
                            e,
                          ),
                        )
                      : e !== n && this.setClockwise(e),
                    this
                  );
                },
                getInteriorPoint: function () {
                  var n = this.getBounds().getCenter(!0);
                  if (!this.contains(n)) {
                    for (
                      var i = this.getCurves(),
                        r = n.y,
                        s = [],
                        a = [],
                        o = 0,
                        h = i.length;
                      o < h;
                      o++
                    ) {
                      var u = i[o].getValues(),
                        l = u[1],
                        c = u[3],
                        f = u[5],
                        d = u[7];
                      if (r >= t(l, c, f, d) && r <= e(l, c, f, d))
                        for (
                          var _ = E.getMonoCurves(u), g = 0, v = _.length;
                          g < v;
                          g++
                        ) {
                          var p = _[g],
                            m = p[1],
                            y = p[7];
                          if (
                            m !== y &&
                            ((r >= m && r <= y) || (r >= y && r <= m))
                          ) {
                            var w =
                              r === m
                                ? p[0]
                                : r === y
                                ? p[6]
                                : 1 === E.solveCubic(p, 1, r, a, 0, 1)
                                ? E.getPoint(p, a[0]).x
                                : (p[0] + p[6]) / 2;
                            s.push(w);
                          }
                        }
                    }
                    s.length > 1 &&
                      (s.sort(function (t, e) {
                        return t - e;
                      }),
                      (n.x = (s[0] + s[1]) / 2));
                  }
                  return n;
                },
              };
            })(),
          );
          var j = a.extend(
              {
                _class: 'PathFlattener',
                initialize: function (t, e, n, i, r) {
                  var s,
                    a = [],
                    o = [],
                    h = 0,
                    u = 1 / (n || 32),
                    l = t._segments,
                    c = l[0];
                  function f(t, n) {
                    var s = E.getValues(t, n, r);
                    a.push(s),
                      (function t(n, r, s, a) {
                        if (
                          !(a - s > u) ||
                          (i && E.isStraight(n)) ||
                          E.isFlatEnough(n, e || 0.25)
                        ) {
                          var l = n[6] - n[0],
                            c = n[7] - n[1],
                            f = Math.sqrt(l * l + c * c);
                          f > 0 &&
                            ((h += f),
                            o.push({ offset: h, curve: n, index: r, time: a }));
                        } else {
                          var d = E.subdivide(n, 0.5),
                            _ = (s + a) / 2;
                          t(d[0], r, s, _), t(d[1], r, _, a);
                        }
                      })(s, t._index, 0, 1);
                  }
                  for (var d = 1, _ = l.length; d < _; d++)
                    f(c, (s = l[d])), (c = s);
                  t._closed && f(s || c, l[0]),
                    (this.curves = a),
                    (this.parts = o),
                    (this.length = h),
                    (this.index = 0);
                },
                _get: function (t) {
                  for (
                    var e, n = this.parts, i = n.length, r = this.index;
                    (e = r), r && !(n[--r].offset < t);

                  );
                  for (; e < i; e++) {
                    var s = n[e];
                    if (s.offset >= t) {
                      this.index = e;
                      var a = n[e - 1],
                        o = a && a.index === s.index ? a.time : 0,
                        h = a ? a.offset : 0;
                      return {
                        index: s.index,
                        time: o + ((s.time - o) * (t - h)) / (s.offset - h),
                      };
                    }
                  }
                  return { index: n[i - 1].index, time: 1 };
                },
                drawPart: function (t, e, n) {
                  for (
                    var i = this._get(e),
                      r = this._get(n),
                      s = i.index,
                      a = r.index;
                    s <= a;
                    s++
                  ) {
                    var o = E.getPart(
                      this.curves[s],
                      s === i.index ? i.time : 0,
                      s === r.index ? r.time : 1,
                    );
                    s === i.index && t.moveTo(o[0], o[1]),
                      t.bezierCurveTo.apply(t, o.slice(2));
                  }
                },
              },
              a.each(
                E._evaluateMethods,
                function (t) {
                  this[t + 'At'] = function (e) {
                    var n = this._get(e);
                    return E[t](this.curves[n.index], n.time);
                  };
                },
                {},
              ),
            ),
            R = a.extend({
              initialize: function (t) {
                for (
                  var e,
                    n = (this.points = []),
                    i = t._segments,
                    r = t._closed,
                    s = 0,
                    a = i.length;
                  s < a;
                  s++
                ) {
                  var o = i[s].point;
                  (e && e.equals(o)) || n.push((e = o.clone()));
                }
                r && (n.unshift(n[n.length - 1]), n.push(n[1])),
                  (this.closed = r);
              },
              fit: function (t) {
                var e = this.points,
                  n = e.length,
                  i = null;
                return (
                  n > 0 &&
                    ((i = [new O(e[0])]),
                    n > 1 &&
                      (this.fitCubic(
                        i,
                        t,
                        0,
                        n - 1,
                        e[1].subtract(e[0]),
                        e[n - 2].subtract(e[n - 1]),
                      ),
                      this.closed && (i.shift(), i.pop()))),
                  i
                );
              },
              fitCubic: function (t, e, n, i, r, s) {
                var a = this.points;
                if (i - n != 1) {
                  for (
                    var o,
                      h = this.chordLengthParameterize(n, i),
                      u = Math.max(e, e * e),
                      l = !0,
                      c = 0;
                    c <= 4;
                    c++
                  ) {
                    var f = this.generateBezier(n, i, h, r, s),
                      d = this.findMaxError(n, i, f, h);
                    if (d.error < e && l) return void this.addCurve(t, f);
                    if (((o = d.index), d.error >= u)) break;
                    (l = this.reparameterize(n, i, h, f)), (u = d.error);
                  }
                  var _ = a[o - 1].subtract(a[o + 1]);
                  this.fitCubic(t, e, n, o, r, _),
                    this.fitCubic(t, e, o, i, _.negate(), s);
                } else {
                  var g = a[n],
                    v = a[i],
                    p = g.getDistance(v) / 3;
                  this.addCurve(t, [
                    g,
                    g.add(r.normalize(p)),
                    v.add(s.normalize(p)),
                    v,
                  ]);
                }
              },
              addCurve: function (t, e) {
                t[t.length - 1].setHandleOut(e[1].subtract(e[0])),
                  t.push(new O(e[3], e[2].subtract(e[3])));
              },
              generateBezier: function (t, e, n, i, r) {
                for (
                  var s = Math.abs,
                    a = this.points,
                    o = a[t],
                    h = a[e],
                    u = [
                      [0, 0],
                      [0, 0],
                    ],
                    l = [0, 0],
                    c = 0,
                    f = e - t + 1;
                  c < f;
                  c++
                ) {
                  var d = n[c],
                    _ = 1 - d,
                    g = 3 * d * _,
                    v = _ * _ * _,
                    p = g * _,
                    m = g * d,
                    y = d * d * d,
                    w = i.normalize(p),
                    x = r.normalize(m),
                    b = a[t + c]
                      .subtract(o.multiply(v + p))
                      .subtract(h.multiply(m + y));
                  (u[0][0] += w.dot(w)),
                    (u[0][1] += w.dot(x)),
                    (u[1][0] = u[0][1]),
                    (u[1][1] += x.dot(x)),
                    (l[0] += w.dot(b)),
                    (l[1] += x.dot(b));
                }
                var C,
                  S,
                  k = u[0][0] * u[1][1] - u[1][0] * u[0][1];
                if (s(k) > 1e-12) {
                  var I = u[0][0] * l[1] - u[1][0] * l[0];
                  (C = (l[0] * u[1][1] - l[1] * u[0][1]) / k), (S = I / k);
                } else {
                  var P = u[0][0] + u[0][1],
                    M = u[1][0] + u[1][1];
                  C = S = s(P) > 1e-12 ? l[0] / P : s(M) > 1e-12 ? l[1] / M : 0;
                }
                var A,
                  T,
                  O = h.getDistance(o),
                  z = 1e-12 * O;
                if (C < z || S < z) C = S = O / 3;
                else {
                  var E = h.subtract(o);
                  (A = i.normalize(C)),
                    (T = r.normalize(S)),
                    A.dot(E) - T.dot(E) > O * O &&
                      ((C = S = O / 3), (A = T = null));
                }
                return [
                  o,
                  o.add(A || i.normalize(C)),
                  h.add(T || r.normalize(S)),
                  h,
                ];
              },
              reparameterize: function (t, e, n, i) {
                for (var r = t; r <= e; r++)
                  n[r - t] = this.findRoot(i, this.points[r], n[r - t]);
                r = 1;
                for (var s = n.length; r < s; r++)
                  if (n[r] <= n[r - 1]) return !1;
                return !0;
              },
              findRoot: function (t, e, n) {
                for (var i = [], r = [], s = 0; s <= 2; s++)
                  i[s] = t[s + 1].subtract(t[s]).multiply(3);
                for (s = 0; s <= 1; s++)
                  r[s] = i[s + 1].subtract(i[s]).multiply(2);
                var a = this.evaluate(3, t, n),
                  o = this.evaluate(2, i, n),
                  h = this.evaluate(1, r, n),
                  u = a.subtract(e),
                  l = o.dot(o) + u.dot(h);
                return f.isMachineZero(l) ? n : n - u.dot(o) / l;
              },
              evaluate: function (t, e, n) {
                for (var i = e.slice(), r = 1; r <= t; r++)
                  for (var s = 0; s <= t - r; s++)
                    i[s] = i[s].multiply(1 - n).add(i[s + 1].multiply(n));
                return i[0];
              },
              chordLengthParameterize: function (t, e) {
                for (var n = [0], i = t + 1; i <= e; i++)
                  n[i - t] =
                    n[i - t - 1] +
                    this.points[i].getDistance(this.points[i - 1]);
                i = 1;
                for (var r = e - t; i <= r; i++) n[i] /= n[r];
                return n;
              },
              findMaxError: function (t, e, n, i) {
                for (
                  var r = Math.floor((e - t + 1) / 2), s = 0, a = t + 1;
                  a < e;
                  a++
                ) {
                  var o = this.evaluate(3, n, i[a - t]).subtract(
                      this.points[a],
                    ),
                    h = o.x * o.x + o.y * o.y;
                  h >= s && ((s = h), (r = a));
                }
                return { error: s, index: r };
              },
            }),
            D = C.extend({
              _class: 'TextItem',
              _applyMatrix: !1,
              _canApplyMatrix: !1,
              _serializeFields: { content: null },
              _boundsOptions: { stroke: !1, handle: !1 },
              initialize: function (t) {
                (this._content = ''), (this._lines = []);
                var e = t && a.isPlainObject(t) && t.x === n && t.y === n;
                this._initialize(e && t, !e && _.read(arguments));
              },
              _equals: function (t) {
                return this._content === t._content;
              },
              copyContent: function (t) {
                this.setContent(t._content);
              },
              getContent: function () {
                return this._content;
              },
              setContent: function (t) {
                (this._content = '' + t),
                  (this._lines = this._content.split(/\r\n|\n|\r/gm)),
                  this._changed(521);
              },
              isEmpty: function () {
                return !this._content;
              },
              getCharacterStyle: '#getStyle',
              setCharacterStyle: '#setStyle',
              getParagraphStyle: '#getStyle',
              setParagraphStyle: '#setStyle',
            }),
            q = D.extend({
              _class: 'PointText',
              initialize: function () {
                D.apply(this, arguments);
              },
              getPoint: function () {
                var t = this._matrix.getTranslation();
                return new g(t.x, t.y, this, 'setPoint');
              },
              setPoint: function () {
                var t = _.read(arguments);
                this.translate(t.subtract(this._matrix.getTranslation()));
              },
              _draw: function (t, e, n) {
                if (this._content) {
                  this._setStyles(t, e, n);
                  var i = this._lines,
                    r = this._style,
                    s = r.hasFill(),
                    a = r.hasStroke(),
                    o = r.getLeading(),
                    h = t.shadowColor;
                  (t.font = r.getFontStyle()),
                    (t.textAlign = r.getJustification());
                  for (var u = 0, l = i.length; u < l; u++) {
                    t.shadowColor = h;
                    var c = i[u];
                    s &&
                      (t.fillText(c, 0, 0), (t.shadowColor = 'rgba(0,0,0,0)')),
                      a && t.strokeText(c, 0, 0),
                      t.translate(0, o);
                  }
                }
              },
              _getBounds: function (t, e) {
                var n = this._style,
                  i = this._lines,
                  r = i.length,
                  s = n.getJustification(),
                  a = n.getLeading(),
                  o = this.getView().getTextWidth(n.getFontStyle(), i),
                  h = 0;
                'left' !== s && (h -= o / ('center' === s ? 2 : 1));
                var u = new m(h, r ? -0.75 * a : 0, o, r * a);
                return t ? t._transformBounds(u, u) : u;
              },
            }),
            V = a.extend(
              new (function () {
                var t,
                  e = {
                    gray: ['gray'],
                    rgb: ['red', 'green', 'blue'],
                    hsb: ['hue', 'saturation', 'brightness'],
                    hsl: ['hue', 'saturation', 'lightness'],
                    gradient: [
                      'gradient',
                      'origin',
                      'destination',
                      'highlight',
                    ],
                  },
                  n = {},
                  s = { transparent: [0, 0, 0, 0] };
                var o = [
                    [0, 3, 1],
                    [2, 0, 1],
                    [1, 0, 3],
                    [1, 2, 0],
                    [3, 1, 0],
                    [0, 1, 2],
                  ],
                  h = {
                    'rgb-hsb': function (t, e, n) {
                      var i = Math.max(t, e, n),
                        r = i - Math.min(t, e, n);
                      return [
                        0 === r
                          ? 0
                          : 60 *
                            (i == t
                              ? (e - n) / r + (e < n ? 6 : 0)
                              : i == e
                              ? (n - t) / r + 2
                              : (t - e) / r + 4),
                        0 === i ? 0 : r / i,
                        i,
                      ];
                    },
                    'hsb-rgb': function (t, e, n) {
                      var i,
                        r =
                          (t = (((t / 60) % 6) + 6) % 6) - (i = Math.floor(t)),
                        s = [
                          n,
                          n * (1 - e),
                          n * (1 - e * r),
                          n * (1 - e * (1 - r)),
                        ];
                      return [s[(i = o[i])[0]], s[i[1]], s[i[2]]];
                    },
                    'rgb-hsl': function (t, e, n) {
                      var i = Math.max(t, e, n),
                        r = Math.min(t, e, n),
                        s = i - r,
                        a = 0 === s,
                        o = (i + r) / 2;
                      return [
                        a
                          ? 0
                          : 60 *
                            (i == t
                              ? (e - n) / s + (e < n ? 6 : 0)
                              : i == e
                              ? (n - t) / s + 2
                              : (t - e) / s + 4),
                        a ? 0 : o < 0.5 ? s / (i + r) : s / (2 - i - r),
                        o,
                      ];
                    },
                    'hsl-rgb': function (t, e, n) {
                      if (0 === e) return [n, n, n];
                      for (
                        var i = [
                            (t = (((t / 360) % 1) + 1) % 1) + 1 / 3,
                            t,
                            t - 1 / 3,
                          ],
                          r = n < 0.5 ? n * (1 + e) : n + e - n * e,
                          s = 2 * n - r,
                          a = [],
                          o = 0;
                        o < 3;
                        o++
                      ) {
                        var h = i[o];
                        h < 0 && (h += 1),
                          h > 1 && (h -= 1),
                          (a[o] =
                            6 * h < 1
                              ? s + 6 * (r - s) * h
                              : 2 * h < 1
                              ? r
                              : 3 * h < 2
                              ? s + (r - s) * (2 / 3 - h) * 6
                              : s);
                      }
                      return a;
                    },
                    'rgb-gray': function (t, e, n) {
                      return [0.2989 * t + 0.587 * e + 0.114 * n];
                    },
                    'gray-rgb': function (t) {
                      return [t, t, t];
                    },
                    'gray-hsb': function (t) {
                      return [0, 0, t];
                    },
                    'gray-hsl': function (t) {
                      return [0, 0, t];
                    },
                    'gradient-rgb': function () {
                      return [];
                    },
                    'rgb-gradient': function () {
                      return [];
                    },
                  };
                return a.each(
                  e,
                  function (t, i) {
                    (n[i] = []),
                      a.each(
                        t,
                        function (t, r) {
                          var s = a.capitalize(t),
                            o = /^(hue|saturation)$/.test(t),
                            h = (n[i][r] =
                              'gradient' === i
                                ? 'gradient' === t
                                  ? function (t) {
                                      var e = this._components[0];
                                      return (
                                        e !==
                                          (t = U.read(
                                            Array.isArray(t) ? t : arguments,
                                            0,
                                            { readNull: !0 },
                                          )) &&
                                          (e && e._removeOwner(this),
                                          t && t._addOwner(this)),
                                        t
                                      );
                                    }
                                  : function () {
                                      return _.read(arguments, 0, {
                                        readNull: 'highlight' === t,
                                        clone: !0,
                                      });
                                    }
                                : function (t) {
                                    return null == t || isNaN(t) ? 0 : +t;
                                  });
                          (this['get' + s] = function () {
                            return this._type === i ||
                              (o && /^hs[bl]$/.test(this._type))
                              ? this._components[r]
                              : this._convert(i)[r];
                          }),
                            (this['set' + s] = function (t) {
                              this._type === i ||
                                (o && /^hs[bl]$/.test(this._type)) ||
                                ((this._components = this._convert(i)),
                                (this._properties = e[i]),
                                (this._type = i)),
                                (this._components[r] = h.call(this, t)),
                                this._changed();
                            });
                        },
                        this,
                      );
                  },
                  {
                    _class: 'Color',
                    _readIndex: !0,
                    initialize: function o(h) {
                      var u,
                        l,
                        c,
                        f,
                        d = arguments,
                        _ = this.__read,
                        g = 0;
                      Array.isArray(h) && (h = (d = h)[0]);
                      var v = null != h && i(h);
                      if (
                        ('string' === v &&
                          h in e &&
                          ((u = h),
                          (h = d[1]),
                          Array.isArray(h)
                            ? ((l = h), (c = d[2]))
                            : (_ && (g = 1), (d = a.slice(d, 1)), (v = i(h)))),
                        !l)
                      ) {
                        if (
                          (f =
                            'number' === v
                              ? d
                              : 'object' === v && null != h.length
                              ? h
                              : null)
                        ) {
                          u || (u = f.length >= 3 ? 'rgb' : 'gray');
                          var p = e[u].length;
                          (c = f[p]),
                            _ &&
                              (g +=
                                f === arguments ? p + (null != c ? 1 : 0) : 1),
                            f.length > p && (f = a.slice(f, 0, p));
                        } else if ('string' === v) {
                          var m = (function (e) {
                            var n,
                              i =
                                e.match(
                                  /^#([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})?$/i,
                                ) ||
                                e.match(
                                  /^#([\da-f])([\da-f])([\da-f])([\da-f])?$/i,
                                ),
                              a = 'rgb';
                            if (i) {
                              var o = i[4] ? 4 : 3;
                              n = new Array(o);
                              for (var h = 0; h < o; h++) {
                                var u = i[h + 1];
                                n[h] =
                                  parseInt(1 == u.length ? u + u : u, 16) / 255;
                              }
                            } else if ((i = e.match(/^(rgb|hsl)a?\((.*)\)$/))) {
                              (a = i[1]), (n = i[2].trim().split(/[,\s]+/g));
                              for (
                                var l = 'hsl' === a,
                                  c = ((h = 0), Math.min(n.length, 4));
                                h < c;
                                h++
                              ) {
                                var f = n[h];
                                if (((u = parseFloat(f)), l))
                                  if (0 === h) {
                                    var d = f.match(/([a-z]*)$/)[1];
                                    u *=
                                      {
                                        turn: 360,
                                        rad: 180 / Math.PI,
                                        grad: 0.9,
                                      }[d] || 1;
                                  } else h < 3 && (u /= 100);
                                else h < 3 && (u /= /%$/.test(f) ? 100 : 255);
                                n[h] = u;
                              }
                            } else {
                              var _ = s[e];
                              if (!_)
                                if (r) {
                                  t ||
                                    ((t = rt.getContext(
                                      1,
                                      1,
                                    )).globalCompositeOperation = 'copy'),
                                    (t.fillStyle = 'rgba(0,0,0,0)'),
                                    (t.fillStyle = e),
                                    t.fillRect(0, 0, 1, 1);
                                  var g = t.getImageData(0, 0, 1, 1).data;
                                  _ = s[e] = [
                                    g[0] / 255,
                                    g[1] / 255,
                                    g[2] / 255,
                                  ];
                                } else _ = [0, 0, 0];
                              n = _.slice();
                            }
                            return [a, n];
                          })(h);
                          (u = m[0]),
                            4 === (l = m[1]).length && ((c = l[3]), l.length--);
                        } else if ('object' === v)
                          if (h.constructor === o) {
                            if (
                              ((u = h._type),
                              (l = h._components.slice()),
                              (c = h._alpha),
                              'gradient' === u)
                            )
                              for (var y = 1, w = l.length; y < w; y++) {
                                var x = l[y];
                                x && (l[y] = x.clone());
                              }
                          } else if (h.constructor === U)
                            (u = 'gradient'), (f = d);
                          else {
                            var b =
                                e[
                                  (u =
                                    'hue' in h
                                      ? 'lightness' in h
                                        ? 'hsl'
                                        : 'hsb'
                                      : 'gradient' in h ||
                                        'stops' in h ||
                                        'radial' in h
                                      ? 'gradient'
                                      : 'gray' in h
                                      ? 'gray'
                                      : 'rgb')
                                ],
                              C = n[u];
                            this._components = l = [];
                            for (y = 0, w = b.length; y < w; y++) {
                              null == (S = h[b[y]]) &&
                                !y &&
                                'gradient' === u &&
                                'stops' in h &&
                                (S = { stops: h.stops, radial: h.radial }),
                                null != (S = C[y].call(this, S)) && (l[y] = S);
                            }
                            c = h.alpha;
                          }
                        _ && u && (g = 1);
                      }
                      if (((this._type = u || 'rgb'), !l)) {
                        this._components = l = [];
                        for (
                          y = 0, w = (C = n[this._type]).length;
                          y < w;
                          y++
                        ) {
                          var S;
                          null != (S = C[y].call(this, f && f[y])) &&
                            (l[y] = S);
                        }
                      }
                      return (
                        (this._components = l),
                        (this._properties = e[this._type]),
                        (this._alpha = c),
                        _ && (this.__read = g),
                        this
                      );
                    },
                    set: '#initialize',
                    _serialize: function (t, e) {
                      var n = this.getComponents();
                      return a.serialize(
                        /^(gray|rgb)$/.test(this._type)
                          ? n
                          : [this._type].concat(n),
                        t,
                        !0,
                        e,
                      );
                    },
                    _changed: function () {
                      (this._canvasStyle = null),
                        this._owner &&
                          (this._setter
                            ? this._owner[this._setter](this)
                            : this._owner._changed(129));
                    },
                    _convert: function (t) {
                      var e;
                      return this._type === t
                        ? this._components.slice()
                        : (e = h[this._type + '-' + t])
                        ? e.apply(this, this._components)
                        : h['rgb-' + t].apply(
                            this,
                            h[this._type + '-rgb'].apply(
                              this,
                              this._components,
                            ),
                          );
                    },
                    convert: function (t) {
                      return new V(t, this._convert(t), this._alpha);
                    },
                    getType: function () {
                      return this._type;
                    },
                    setType: function (t) {
                      (this._components = this._convert(t)),
                        (this._properties = e[t]),
                        (this._type = t);
                    },
                    getComponents: function () {
                      var t = this._components.slice();
                      return null != this._alpha && t.push(this._alpha), t;
                    },
                    getAlpha: function () {
                      return null != this._alpha ? this._alpha : 1;
                    },
                    setAlpha: function (t) {
                      (this._alpha =
                        null == t ? null : Math.min(Math.max(t, 0), 1)),
                        this._changed();
                    },
                    hasAlpha: function () {
                      return null != this._alpha;
                    },
                    equals: function (t) {
                      var e = a.isPlainValue(t, !0) ? V.read(arguments) : t;
                      return (
                        e === this ||
                        (e &&
                          this._class === e._class &&
                          this._type === e._type &&
                          this.getAlpha() === e.getAlpha() &&
                          a.equals(this._components, e._components)) ||
                        !1
                      );
                    },
                    toString: function () {
                      for (
                        var t = this._properties,
                          e = [],
                          n = 'gradient' === this._type,
                          i = c.instance,
                          r = 0,
                          s = t.length;
                        r < s;
                        r++
                      ) {
                        var a = this._components[r];
                        null != a &&
                          e.push(t[r] + ': ' + (n ? a : i.number(a)));
                      }
                      return (
                        null != this._alpha &&
                          e.push('alpha: ' + i.number(this._alpha)),
                        '{ ' + e.join(', ') + ' }'
                      );
                    },
                    toCSS: function (t) {
                      var e = this._convert('rgb'),
                        n = t || null == this._alpha ? 1 : this._alpha;
                      function i(t) {
                        return Math.round(255 * (t < 0 ? 0 : t > 1 ? 1 : t));
                      }
                      return (
                        (e = [i(e[0]), i(e[1]), i(e[2])]),
                        n < 1 && e.push(n < 0 ? 0 : n),
                        t
                          ? '#' +
                            ((1 << 24) + (e[0] << 16) + (e[1] << 8) + e[2])
                              .toString(16)
                              .slice(1)
                          : (4 == e.length ? 'rgba(' : 'rgb(') +
                            e.join(',') +
                            ')'
                      );
                    },
                    toCanvasStyle: function (t, e) {
                      if (this._canvasStyle) return this._canvasStyle;
                      if ('gradient' !== this._type)
                        return (this._canvasStyle = this.toCSS());
                      var n,
                        i = this._components,
                        r = i[0],
                        s = r._stops,
                        a = i[1],
                        o = i[2],
                        h = i[3],
                        u = e && e.inverted();
                      if (
                        (u &&
                          ((a = u._transformPoint(a)),
                          (o = u._transformPoint(o)),
                          h && (h = u._transformPoint(h))),
                        r._radial)
                      ) {
                        var l = o.getDistance(a);
                        if (h) {
                          var c = h.subtract(a);
                          c.getLength() > l &&
                            (h = a.add(c.normalize(l - 0.1)));
                        }
                        var f = h || a;
                        n = t.createRadialGradient(f.x, f.y, 0, a.x, a.y, l);
                      } else n = t.createLinearGradient(a.x, a.y, o.x, o.y);
                      for (var d = 0, _ = s.length; d < _; d++) {
                        var g = s[d],
                          v = g._offset;
                        n.addColorStop(
                          null == v ? d / (_ - 1) : v,
                          g._color.toCanvasStyle(),
                        );
                      }
                      return (this._canvasStyle = n);
                    },
                    transform: function (t) {
                      if ('gradient' === this._type) {
                        for (
                          var e = this._components, n = 1, i = e.length;
                          n < i;
                          n++
                        ) {
                          var r = e[n];
                          t._transformPoint(r, r, !0);
                        }
                        this._changed();
                      }
                    },
                    statics: {
                      _types: e,
                      random: function () {
                        var t = Math.random;
                        return new V(t(), t(), t());
                      },
                      _setOwner: function (t, e, n) {
                        return (
                          t &&
                            (t._owner && e && t._owner !== e && (t = t.clone()),
                            !t._owner ^ !e &&
                              ((t._owner = e || null),
                              (t._setter = n || null))),
                          t
                        );
                      },
                    },
                  },
                );
              })(),
              new (function () {
                return a.each(
                  {
                    add: function (t, e) {
                      return t + e;
                    },
                    subtract: function (t, e) {
                      return t - e;
                    },
                    multiply: function (t, e) {
                      return t * e;
                    },
                    divide: function (t, e) {
                      return t / e;
                    },
                  },
                  function (t, e) {
                    this[e] = function (e) {
                      e = V.read(arguments);
                      for (
                        var n = this._type,
                          i = this._components,
                          r = e._convert(n),
                          s = 0,
                          a = i.length;
                        s < a;
                        s++
                      )
                        r[s] = t(i[s], r[s]);
                      return new V(
                        n,
                        r,
                        null != this._alpha
                          ? t(this._alpha, e.getAlpha())
                          : null,
                      );
                    };
                  },
                  {},
                );
              })(),
            ),
            U = a.extend({
              _class: 'Gradient',
              initialize: function (t, e) {
                (this._id = d.get()),
                  t && a.isPlainObject(t) && (this.set(t), (t = e = null)),
                  null == this._stops && this.setStops(t || ['white', 'black']),
                  null == this._radial &&
                    this.setRadial(
                      ('string' == typeof e && 'radial' === e) || e || !1,
                    );
              },
              _serialize: function (t, e) {
                return e.add(this, function () {
                  return a.serialize([this._stops, this._radial], t, !0, e);
                });
              },
              _changed: function () {
                for (
                  var t = 0, e = this._owners && this._owners.length;
                  t < e;
                  t++
                )
                  this._owners[t]._changed();
              },
              _addOwner: function (t) {
                this._owners || (this._owners = []), this._owners.push(t);
              },
              _removeOwner: function (t) {
                var e = this._owners ? this._owners.indexOf(t) : -1;
                -1 != e &&
                  (this._owners.splice(e, 1),
                  this._owners.length || (this._owners = n));
              },
              clone: function () {
                for (var t = [], e = 0, n = this._stops.length; e < n; e++)
                  t[e] = this._stops[e].clone();
                return new U(t, this._radial);
              },
              getStops: function () {
                return this._stops;
              },
              setStops: function (t) {
                if (t.length < 2)
                  throw new Error(
                    'Gradient stop list needs to contain at least two stops.',
                  );
                var e = this._stops;
                if (e)
                  for (var i = 0, r = e.length; i < r; i++) e[i]._owner = n;
                for (
                  i = 0,
                    r = (e = this._stops = H.readList(t, 0, { clone: !0 }))
                      .length;
                  i < r;
                  i++
                )
                  e[i]._owner = this;
                this._changed();
              },
              getRadial: function () {
                return this._radial;
              },
              setRadial: function (t) {
                (this._radial = t), this._changed();
              },
              equals: function (t) {
                if (t === this) return !0;
                if (t && this._class === t._class) {
                  var e = this._stops,
                    n = t._stops,
                    i = e.length;
                  if (i === n.length) {
                    for (var r = 0; r < i; r++)
                      if (!e[r].equals(n[r])) return !1;
                    return !0;
                  }
                }
                return !1;
              },
            }),
            H = a.extend({
              _class: 'GradientStop',
              initialize: function (t, e) {
                var r = t,
                  s = e;
                'object' === i(t) &&
                  e === n &&
                  (Array.isArray(t) && 'number' != typeof t[0]
                    ? ((r = t[0]), (s = t[1]))
                    : ('color' in t || 'offset' in t || 'rampPoint' in t) &&
                      ((r = t.color), (s = t.offset || t.rampPoint || 0))),
                  this.setColor(r),
                  this.setOffset(s);
              },
              clone: function () {
                return new H(this._color.clone(), this._offset);
              },
              _serialize: function (t, e) {
                var n = this._color,
                  i = this._offset;
                return a.serialize(null == i ? [n] : [n, i], t, !0, e);
              },
              _changed: function () {
                this._owner && this._owner._changed(129);
              },
              getOffset: function () {
                return this._offset;
              },
              setOffset: function (t) {
                (this._offset = t), this._changed();
              },
              getRampPoint: '#getOffset',
              setRampPoint: '#setOffset',
              getColor: function () {
                return this._color;
              },
              setColor: function () {
                V._setOwner(this._color, null),
                  (this._color = V._setOwner(
                    V.read(arguments, 0),
                    this,
                    'setColor',
                  )),
                  this._changed();
              },
              equals: function (t) {
                return (
                  t === this ||
                  (t &&
                    this._class === t._class &&
                    this._color.equals(t._color) &&
                    this._offset == t._offset) ||
                  !1
                );
              },
            }),
            Z = a.extend(
              new (function () {
                var t = {
                    fillColor: null,
                    fillRule: 'nonzero',
                    strokeColor: null,
                    strokeWidth: 1,
                    strokeCap: 'butt',
                    strokeJoin: 'miter',
                    strokeScaling: !0,
                    miterLimit: 10,
                    dashOffset: 0,
                    dashArray: [],
                    shadowColor: null,
                    shadowBlur: 0,
                    shadowOffset: new _(),
                    selectedColor: null,
                  },
                  e = a.set({}, t, {
                    fontFamily: 'sans-serif',
                    fontWeight: 'normal',
                    fontSize: 12,
                    leading: null,
                    justification: 'left',
                  }),
                  i = a.set({}, e, { fillColor: new V() }),
                  r = {
                    strokeWidth: 193,
                    strokeCap: 193,
                    strokeJoin: 193,
                    strokeScaling: 201,
                    miterLimit: 193,
                    fontFamily: 9,
                    fontWeight: 9,
                    fontSize: 9,
                    font: 9,
                    leading: 9,
                    justification: 9,
                  },
                  s = { beans: !0 },
                  o = {
                    _class: 'Style',
                    beans: !0,
                    initialize: function (n, r, s) {
                      (this._values = {}),
                        (this._owner = r),
                        (this._project = (r && r._project) || s || ht.project),
                        (this._defaults =
                          !r || r instanceof S ? e : r instanceof D ? i : t),
                        n && this.set(n);
                    },
                  };
                return (
                  a.each(e, function (t, e) {
                    var i = /Color$/.test(e),
                      h = 'shadowOffset' === e,
                      u = a.capitalize(e),
                      l = r[e],
                      c = 'set' + u,
                      f = 'get' + u;
                    (o[c] = function (t) {
                      var n = this._owner,
                        r = n && n._children,
                        s = r && r.length > 0 && !(n instanceof F);
                      if (s)
                        for (var a = 0, o = r.length; a < o; a++)
                          r[a]._style[c](t);
                      if (
                        ('selectedColor' === e || !s) &&
                        e in this._defaults
                      ) {
                        var h = this._values[e];
                        h !== t &&
                          (i &&
                            (h &&
                              (V._setOwner(h, null), (h._canvasStyle = null)),
                            t &&
                              t.constructor === V &&
                              (t = V._setOwner(t, n, s && c))),
                          (this._values[e] = t),
                          n && n._changed(l || 129));
                      }
                    }),
                      (o[f] = function (t) {
                        var r = this._owner,
                          s = r && r._children,
                          o = s && s.length > 0 && !(r instanceof F);
                        if (o && !t)
                          for (var u = 0, l = s.length; u < l; u++) {
                            var d = s[u]._style[f]();
                            if (u) {
                              if (!a.equals(g, d)) return n;
                            } else g = d;
                          }
                        else if (e in this._defaults) {
                          var g;
                          if ((g = this._values[e]) === n)
                            (g = this._defaults[e]) &&
                              g.clone &&
                              (g = g.clone());
                          else {
                            var v = i ? V : h ? _ : null;
                            !v ||
                              (g && g.constructor === v) ||
                              (this._values[e] = g = v.read([g], 0, {
                                readNull: !0,
                                clone: !0,
                              }));
                          }
                        }
                        return g && i && (g = V._setOwner(g, r, o && c)), g;
                      }),
                      (s[f] = function (t) {
                        return this._style[f](t);
                      }),
                      (s[c] = function (t) {
                        this._style[c](t);
                      });
                  }),
                  a.each(
                    { Font: 'FontFamily', WindingRule: 'FillRule' },
                    function (t, e) {
                      var n = 'get' + e,
                        i = 'set' + e;
                      (o[n] = s[n] = '#get' + t), (o[i] = s[i] = '#set' + t);
                    },
                  ),
                  C.inject(s),
                  o
                );
              })(),
              {
                set: function (t) {
                  var e = t instanceof Z,
                    n = e ? t._values : t;
                  if (n)
                    for (var i in n)
                      if (i in this._defaults) {
                        var r = n[i];
                        this[i] = r && e && r.clone ? r.clone() : r;
                      }
                },
                equals: function (t) {
                  function e(t, e, i) {
                    var r = t._values,
                      s = e._values,
                      o = e._defaults;
                    for (var h in r) {
                      var u = r[h],
                        l = s[h];
                      if (!((i && h in s) || a.equals(u, l === n ? o[h] : l)))
                        return !1;
                    }
                    return !0;
                  }
                  return (
                    t === this ||
                    (t &&
                      this._class === t._class &&
                      e(this, t) &&
                      e(t, this, !0)) ||
                    !1
                  );
                },
                _dispose: function () {
                  var t;
                  (t = this.getFillColor()) && (t._canvasStyle = null),
                    (t = this.getStrokeColor()) && (t._canvasStyle = null),
                    (t = this.getShadowColor()) && (t._canvasStyle = null);
                },
                hasFill: function () {
                  var t = this.getFillColor();
                  return !!t && t.alpha > 0;
                },
                hasStroke: function () {
                  var t = this.getStrokeColor();
                  return !!t && t.alpha > 0 && this.getStrokeWidth() > 0;
                },
                hasShadow: function () {
                  var t = this.getShadowColor();
                  return (
                    !!t &&
                    t.alpha > 0 &&
                    (this.getShadowBlur() > 0 ||
                      !this.getShadowOffset().isZero())
                  );
                },
                getView: function () {
                  return this._project._view;
                },
                getFontStyle: function () {
                  var t = this.getFontSize();
                  return (
                    this.getFontWeight() +
                    ' ' +
                    t +
                    (/[a-z]/i.test(t + '') ? ' ' : 'px ') +
                    this.getFontFamily()
                  );
                },
                getFont: '#getFontFamily',
                setFont: '#setFontFamily',
                getLeading: function t() {
                  var e = t.base.call(this),
                    n = this.getFontSize();
                  return (
                    /pt|em|%|px/.test(n) &&
                      (n = this.getView().getPixelSize(n)),
                    null != e ? e : 1.2 * n
                  );
                },
              },
            ),
            W = new (function () {
              function t(t, e, n, i) {
                for (
                  var r = ['', 'webkit', 'moz', 'Moz', 'ms', 'o'],
                    s = e[0].toUpperCase() + e.substring(1),
                    a = 0;
                  a < 6;
                  a++
                ) {
                  var o = r[a],
                    h = o ? o + s : e;
                  if (h in t) {
                    if (!n) return t[h];
                    t[h] = i;
                    break;
                  }
                }
              }
              return {
                getStyles: function (t) {
                  var e = t && 9 !== t.nodeType ? t.ownerDocument : t,
                    n = e && e.defaultView;
                  return n && n.getComputedStyle(t, '');
                },
                getBounds: function (t, e) {
                  var n,
                    i = t.ownerDocument,
                    r = i.body,
                    s = i.documentElement;
                  try {
                    n = t.getBoundingClientRect();
                  } catch (u) {
                    n = { left: 0, top: 0, width: 0, height: 0 };
                  }
                  var a = n.left - (s.clientLeft || r.clientLeft || 0),
                    o = n.top - (s.clientTop || r.clientTop || 0);
                  if (!e) {
                    var h = i.defaultView;
                    (a += h.pageXOffset || s.scrollLeft || r.scrollLeft),
                      (o += h.pageYOffset || s.scrollTop || r.scrollTop);
                  }
                  return new m(a, o, n.width, n.height);
                },
                getViewportBounds: function (t) {
                  var e = t.ownerDocument,
                    n = e.defaultView,
                    i = e.documentElement;
                  return new m(
                    0,
                    0,
                    n.innerWidth || i.clientWidth,
                    n.innerHeight || i.clientHeight,
                  );
                },
                getOffset: function (t, e) {
                  return W.getBounds(t, e).getPoint();
                },
                getSize: function (t) {
                  return W.getBounds(t, !0).getSize();
                },
                isInvisible: function (t) {
                  return W.getSize(t).equals(new v(0, 0));
                },
                isInView: function (t) {
                  return (
                    !W.isInvisible(t) &&
                    W.getViewportBounds(t).intersects(W.getBounds(t, !0))
                  );
                },
                isInserted: function (t) {
                  return s.body.contains(t);
                },
                getPrefixed: function (e, n) {
                  return e && t(e, n);
                },
                setPrefixed: function (e, n, r) {
                  if ('object' === i(n)) for (var s in n) t(e, s, !0, n[s]);
                  else t(e, n, !0, r);
                },
              };
            })(),
            $ = {
              add: function (t, e) {
                if (t)
                  for (var n in e)
                    for (
                      var i = e[n], r = n.split(/[\s,]+/g), a = 0, o = r.length;
                      a < o;
                      a++
                    ) {
                      var h = r[a],
                        u = t === s &&
                          ('touchstart' === h || 'touchmove' === h) && {
                            passive: !1,
                          };
                      t.addEventListener(h, i, u);
                    }
              },
              remove: function (t, e) {
                if (t)
                  for (var n in e)
                    for (
                      var i = e[n], r = n.split(/[\s,]+/g), s = 0, a = r.length;
                      s < a;
                      s++
                    )
                      t.removeEventListener(r[s], i, !1);
              },
              getPoint: function (t) {
                var e = t.targetTouches
                  ? t.targetTouches.length
                    ? t.targetTouches[0]
                    : t.changedTouches[0]
                  : t;
                return new _(
                  e.pageX || e.clientX + s.documentElement.scrollLeft,
                  e.pageY || e.clientY + s.documentElement.scrollTop,
                );
              },
              getTarget: function (t) {
                return t.target || t.srcElement;
              },
              getRelatedTarget: function (t) {
                return t.relatedTarget || t.toElement;
              },
              getOffset: function (t, e) {
                return $.getPoint(t).subtract(W.getOffset(e || $.getTarget(t)));
              },
            };
          $.requestAnimationFrame = new (function () {
            var t,
              e = W.getPrefixed(r, 'requestAnimationFrame'),
              n = !1,
              i = [];
            function s() {
              var t = i;
              i = [];
              for (var r = 0, a = t.length; r < a; r++) t[r]();
              (n = e && i.length) && e(s);
            }
            return function (r) {
              i.push(r),
                e ? n || (e(s), (n = !0)) : t || (t = setInterval(s, 1e3 / 60));
            };
          })();
          var G = a.extend(
              o,
              {
                _class: 'View',
                initialize: function t(e, n) {
                  function i(t) {
                    return n[t] || parseInt(n.getAttribute(t), 10);
                  }
                  function a() {
                    var t = W.getSize(n);
                    return t.isNaN() || t.isZero()
                      ? new v(i('width'), i('height'))
                      : t;
                  }
                  var o;
                  if (r && n) {
                    (this._id = n.getAttribute('id')),
                      null == this._id &&
                        n.setAttribute(
                          'id',
                          (this._id = 'paper-view-' + t._id++),
                        ),
                      $.add(n, this._viewEvents);
                    if (
                      (W.setPrefixed(n.style, {
                        userDrag: 'none',
                        userSelect: 'none',
                        touchCallout: 'none',
                        contentZooming: 'none',
                        tapHighlightColor: 'rgba(0,0,0,0)',
                      }),
                      h.hasAttribute(n, 'resize'))
                    ) {
                      var u = this;
                      $.add(
                        r,
                        (this._windowEvents = {
                          resize: function () {
                            u.setViewSize(a());
                          },
                        }),
                      );
                    }
                    if (
                      ((o = a()),
                      h.hasAttribute(n, 'stats') && 'undefined' != typeof Stats)
                    ) {
                      this._stats = new Stats();
                      var l = this._stats.domElement,
                        c = l.style,
                        f = W.getOffset(n);
                      (c.position = 'absolute'),
                        (c.left = f.x + 'px'),
                        (c.top = f.y + 'px'),
                        s.body.appendChild(l);
                    }
                  } else (o = new v(n)), (n = null);
                  (this._project = e),
                    (this._scope = e._scope),
                    (this._element = n),
                    this._pixelRatio ||
                      (this._pixelRatio = (r && r.devicePixelRatio) || 1),
                    this._setElementSize(o.width, o.height),
                    (this._viewSize = o),
                    t._views.push(this),
                    (t._viewsById[this._id] = this),
                    ((this._matrix = new w())._owner = this),
                    t._focused || (t._focused = this),
                    (this._frameItems = {}),
                    (this._frameItemCount = 0),
                    (this._itemEvents = { native: {}, virtual: {} }),
                    (this._autoUpdate = !ht.agent.node),
                    (this._needsUpdate = !1);
                },
                remove: function () {
                  if (!this._project) return !1;
                  G._focused === this && (G._focused = null),
                    G._views.splice(G._views.indexOf(this), 1),
                    delete G._viewsById[this._id];
                  var t = this._project;
                  return (
                    t._view === this && (t._view = null),
                    $.remove(this._element, this._viewEvents),
                    $.remove(r, this._windowEvents),
                    (this._element = this._project = null),
                    this.off('frame'),
                    (this._animate = !1),
                    (this._frameItems = {}),
                    !0
                  );
                },
                _events: a.each(
                  C._itemHandlers.concat(['onResize', 'onKeyDown', 'onKeyUp']),
                  function (t) {
                    this[t] = {};
                  },
                  {
                    onFrame: {
                      install: function () {
                        this.play();
                      },
                      uninstall: function () {
                        this.pause();
                      },
                    },
                  },
                ),
                _animate: !1,
                _time: 0,
                _count: 0,
                getAutoUpdate: function () {
                  return this._autoUpdate;
                },
                setAutoUpdate: function (t) {
                  (this._autoUpdate = t), t && this.requestUpdate();
                },
                update: function () {},
                draw: function () {
                  this.update();
                },
                requestUpdate: function () {
                  if (!this._requested) {
                    var t = this;
                    $.requestAnimationFrame(function () {
                      if (((t._requested = !1), t._animate)) {
                        t.requestUpdate();
                        var e = t._element;
                        (W.getPrefixed(s, 'hidden') &&
                          'true' !== h.getAttribute(e, 'keepalive')) ||
                          !W.isInView(e) ||
                          t._handleFrame();
                      }
                      t._autoUpdate && t.update();
                    }),
                      (this._requested = !0);
                  }
                },
                play: function () {
                  (this._animate = !0), this.requestUpdate();
                },
                pause: function () {
                  this._animate = !1;
                },
                _handleFrame: function () {
                  ht = this._scope;
                  var t = Date.now() / 1e3,
                    e = this._last ? t - this._last : 0;
                  (this._last = t),
                    this.emit(
                      'frame',
                      new a({
                        delta: e,
                        time: (this._time += e),
                        count: this._count++,
                      }),
                    ),
                    this._stats && this._stats.update();
                },
                _animateItem: function (t, e) {
                  var n = this._frameItems;
                  e
                    ? ((n[t._id] = { item: t, time: 0, count: 0 }),
                      1 == ++this._frameItemCount &&
                        this.on('frame', this._handleFrameItems))
                    : (delete n[t._id],
                      0 == --this._frameItemCount &&
                        this.off('frame', this._handleFrameItems));
                },
                _handleFrameItems: function (t) {
                  for (var e in this._frameItems) {
                    var n = this._frameItems[e];
                    n.item.emit(
                      'frame',
                      new a(t, { time: (n.time += t.delta), count: n.count++ }),
                    );
                  }
                },
                _changed: function () {
                  this._project._changed(4097),
                    (this._bounds = this._decomposed = n);
                },
                getElement: function () {
                  return this._element;
                },
                getPixelRatio: function () {
                  return this._pixelRatio;
                },
                getResolution: function () {
                  return 72 * this._pixelRatio;
                },
                getViewSize: function () {
                  var t = this._viewSize;
                  return new p(t.width, t.height, this, 'setViewSize');
                },
                setViewSize: function () {
                  var t = v.read(arguments),
                    e = t.subtract(this._viewSize);
                  e.isZero() ||
                    (this._setElementSize(t.width, t.height),
                    this._viewSize.set(t),
                    this._changed(),
                    this.emit('resize', { size: t, delta: e }),
                    this._autoUpdate && this.update());
                },
                _setElementSize: function (t, e) {
                  var n = this._element;
                  n &&
                    (n.width !== t && (n.width = t),
                    n.height !== e && (n.height = e));
                },
                getBounds: function () {
                  return (
                    this._bounds ||
                      (this._bounds = this._matrix
                        .inverted()
                        ._transformBounds(new m(new _(), this._viewSize))),
                    this._bounds
                  );
                },
                getSize: function () {
                  return this.getBounds().getSize();
                },
                isVisible: function () {
                  return W.isInView(this._element);
                },
                isInserted: function () {
                  return W.isInserted(this._element);
                },
                getPixelSize: function (t) {
                  var e,
                    n = this._element;
                  if (n) {
                    var i = n.parentNode,
                      r = s.createElement('div');
                    (r.style.fontSize = t),
                      i.appendChild(r),
                      (e = parseFloat(W.getStyles(r).fontSize)),
                      i.removeChild(r);
                  } else e = parseFloat(e);
                  return e;
                },
                getTextWidth: function (t, e) {
                  return 0;
                },
              },
              a.each(
                ['rotate', 'scale', 'shear', 'skew'],
                function (t) {
                  var e = 'rotate' === t;
                  this[t] = function () {
                    var n = arguments,
                      i = (e ? a : _).read(n),
                      r = _.read(n, 0, { readNull: !0 });
                    return this.transform(
                      new w()[t](i, r || this.getCenter(!0)),
                    );
                  };
                },
                {
                  _decompose: function () {
                    return (
                      this._decomposed ||
                      (this._decomposed = this._matrix.decompose())
                    );
                  },
                  translate: function () {
                    var t = new w();
                    return this.transform(t.translate.apply(t, arguments));
                  },
                  getCenter: function () {
                    return this.getBounds().getCenter();
                  },
                  setCenter: function () {
                    var t = _.read(arguments);
                    this.translate(this.getCenter().subtract(t));
                  },
                  getZoom: function () {
                    var t = this._decompose().scaling;
                    return (t.x + t.y) / 2;
                  },
                  setZoom: function (t) {
                    this.transform(
                      new w().scale(t / this.getZoom(), this.getCenter()),
                    );
                  },
                  getRotation: function () {
                    return this._decompose().rotation;
                  },
                  setRotation: function (t) {
                    var e = this.getRotation();
                    null != e && null != t && this.rotate(t - e);
                  },
                  getScaling: function () {
                    var t = this._decompose().scaling;
                    return new g(t.x, t.y, this, 'setScaling');
                  },
                  setScaling: function () {
                    var t = this.getScaling(),
                      e = _.read(arguments, 0, { clone: !0, readNull: !0 });
                    t && e && this.scale(e.x / t.x, e.y / t.y);
                  },
                  getMatrix: function () {
                    return this._matrix;
                  },
                  setMatrix: function () {
                    var t = this._matrix;
                    t.set.apply(t, arguments);
                  },
                  transform: function (t) {
                    this._matrix.append(t);
                  },
                  scrollBy: function () {
                    this.translate(_.read(arguments).negate());
                  },
                },
              ),
              {
                projectToView: function () {
                  return this._matrix._transformPoint(_.read(arguments));
                },
                viewToProject: function () {
                  return this._matrix._inverseTransform(_.read(arguments));
                },
                getEventPoint: function (t) {
                  return this.viewToProject($.getOffset(t, this._element));
                },
              },
              {
                statics: {
                  _views: [],
                  _viewsById: {},
                  _id: 0,
                  create: function (t, e) {
                    return (
                      s && 'string' == typeof e && (e = s.getElementById(e)),
                      new (r ? J : G)(t, e)
                    );
                  },
                },
              },
              new (function () {
                if (r) {
                  var t,
                    e,
                    n,
                    i,
                    a,
                    o = !1,
                    h = !1,
                    u = r.navigator;
                  u.pointerEnabled || u.msPointerEnabled
                    ? ((n = 'pointerdown MSPointerDown'),
                      (i = 'pointermove MSPointerMove'),
                      (a =
                        'pointerup pointercancel MSPointerUp MSPointerCancel'))
                    : ((n = 'touchstart'),
                      (i = 'touchmove'),
                      (a = 'touchend touchcancel'),
                      ('ontouchstart' in r &&
                        u.userAgent.match(
                          /mobile|tablet|ip(ad|hone|od)|android|silk/i,
                        )) ||
                        ((n += ' mousedown'),
                        (i += ' mousemove'),
                        (a += ' mouseup')));
                  var l = {},
                    c = {
                      mouseout: function (t) {
                        var e = G._focused,
                          n = $.getRelatedTarget(t);
                        if (e && (!n || 'HTML' === n.nodeName)) {
                          var i = $.getOffset(t, e._element),
                            r = i.x,
                            s = Math.abs,
                            a = s(r),
                            o = a - (1 << 25);
                          (i.x = s(o) < a ? o * (r < 0 ? -1 : 1) : r),
                            P(e, t, e.viewToProject(i));
                        }
                      },
                      scroll: I,
                    };
                  (l[n] = function (t) {
                    var e = (G._focused = k(t));
                    o || ((o = !0), e._handleMouseEvent('mousedown', t));
                  }),
                    (c[i] = function (n) {
                      var i = G._focused;
                      if (!h) {
                        var r = k(n);
                        r
                          ? i !== r &&
                            (i && P(i, n),
                            t || (t = i),
                            (i = G._focused = e = r))
                          : e &&
                            e === i &&
                            (t && !t.isInserted() && (t = null),
                            (i = G._focused = t),
                            (t = null),
                            I());
                      }
                      i && P(i, n);
                    }),
                    (c[n] = function () {
                      h = !0;
                    }),
                    (c[a] = function (t) {
                      var e = G._focused;
                      e && o && e._handleMouseEvent('mouseup', t), (h = o = !1);
                    }),
                    $.add(s, c),
                    $.add(r, { load: I });
                  var f,
                    d,
                    _,
                    g,
                    v,
                    p,
                    m,
                    y,
                    w = !1,
                    x = !1,
                    b = { doubleclick: 'click', mousedrag: 'mousemove' },
                    C = !1,
                    S = {
                      mousedown: {
                        mousedown: 1,
                        mousedrag: 1,
                        click: 1,
                        doubleclick: 1,
                      },
                      mouseup: {
                        mouseup: 1,
                        mousedrag: 1,
                        click: 1,
                        doubleclick: 1,
                      },
                      mousemove: {
                        mousedrag: 1,
                        mousemove: 1,
                        mouseenter: 1,
                        mouseleave: 1,
                      },
                    };
                  return {
                    _viewEvents: l,
                    _handleMouseEvent: function (t, e, n) {
                      var i = this._itemEvents,
                        r = i.native[t],
                        s = 'mousemove' === t,
                        a = this._scope.tool,
                        h = this;
                      function u(t) {
                        return (
                          i.virtual[t] || h.responds(t) || (a && a.responds(t))
                        );
                      }
                      s && o && u('mousedrag') && (t = 'mousedrag'),
                        n || (n = this.getEventPoint(e));
                      var l = this.getBounds().contains(n),
                        c =
                          r &&
                          l &&
                          h._project.hitTest(n, {
                            tolerance: 0,
                            fill: !0,
                            stroke: !0,
                          }),
                        b = (c && c.item) || null,
                        S = !1,
                        k = {};
                      if (
                        ((k[t.substr(5)] = !0),
                        r &&
                          b !== g &&
                          (g && M(g, null, 'mouseleave', e, n),
                          b && M(b, null, 'mouseenter', e, n),
                          (g = b)),
                        C ^ l &&
                          (M(this, null, l ? 'mouseenter' : 'mouseleave', e, n),
                          l ? this : null,
                          (S = !0)),
                        (!l && !k.drag) ||
                          n.equals(d) ||
                          (A(this, b, s ? t : 'mousemove', e, n, d), (S = !0)),
                        (C = l),
                        (k.down && l) || (k.up && f))
                      ) {
                        if ((A(this, b, t, e, n, f), k.down)) {
                          if (
                            ((y = b === p && Date.now() - m < 300),
                            (_ = p = b),
                            !x && b)
                          ) {
                            for (var I = b; I && !I.responds('mousedrag'); )
                              I = I._parent;
                            I && (v = b);
                          }
                          f = n;
                        } else
                          k.up &&
                            (x ||
                              b !== _ ||
                              ((m = Date.now()),
                              A(this, b, y ? 'doubleclick' : 'click', e, n, f),
                              (y = !1)),
                            (_ = v = null));
                        (C = !1), (S = !0);
                      }
                      (d = n),
                        S && a && (w = a._handleMouseEvent(t, e, n, k) || w),
                        !1 !== e.cancelable &&
                          ((w && !k.move) || (k.down && u('mouseup'))) &&
                          e.preventDefault();
                    },
                    _handleKeyEvent: function (t, e, n, i) {
                      var r,
                        s = this._scope,
                        a = s.tool;
                      function o(a) {
                        a.responds(t) &&
                          ((ht = s), a.emit(t, (r = r || new K(t, e, n, i))));
                      }
                      this.isVisible() && (o(this), a && a.responds(t) && o(a));
                    },
                    _countItemEvent: function (t, e) {
                      var n = this._itemEvents,
                        i = n.native,
                        r = n.virtual;
                      for (var s in S) i[s] = (i[s] || 0) + (S[s][t] || 0) * e;
                      r[t] = (r[t] || 0) + e;
                    },
                    statics: {
                      updateFocus: I,
                      _resetState: function () {
                        (o = h = w = C = !1),
                          (t = e = f = d = _ = g = v = p = m = y = null);
                      },
                    },
                  };
                }
                function k(t) {
                  var e = $.getTarget(t);
                  return e.getAttribute && G._viewsById[e.getAttribute('id')];
                }
                function I() {
                  var t = G._focused;
                  if (!t || !t.isVisible())
                    for (var n = 0, i = G._views.length; n < i; n++)
                      if ((t = G._views[n]).isVisible()) {
                        G._focused = e = t;
                        break;
                      }
                }
                function P(t, e, n) {
                  t._handleMouseEvent('mousemove', e, n);
                }
                function M(t, e, n, i, r, s, a) {
                  var o,
                    h = !1;
                  function u(t, n) {
                    if (t.responds(n)) {
                      if (
                        (o ||
                          (o = new Y(
                            n,
                            i,
                            r,
                            e || t,
                            s ? r.subtract(s) : null,
                          )),
                        t.emit(n, o) &&
                          ((w = !0), o.prevented && (x = !0), o.stopped))
                      )
                        return (h = !0);
                    } else {
                      var a = b[n];
                      if (a) return u(t, a);
                    }
                  }
                  for (; t && t !== a && !u(t, n); ) t = t._parent;
                  return h;
                }
                function A(t, e, n, i, r, s) {
                  return (
                    t._project.removeOn(n),
                    (x = w = !1),
                    (v && M(v, null, n, i, r, s)) ||
                      (e &&
                        e !== v &&
                        !e.isDescendant(v) &&
                        M(
                          e,
                          null,
                          'mousedrag' === n ? 'mousemove' : n,
                          i,
                          r,
                          s,
                          v,
                        )) ||
                      M(t, v || e || t, n, i, r, s)
                  );
                }
              })(),
            ),
            J = G.extend({
              _class: 'CanvasView',
              initialize: function (t, e) {
                if (!(e instanceof r.HTMLCanvasElement)) {
                  var n = v.read(arguments, 1);
                  if (n.isZero())
                    throw new Error(
                      'Cannot create CanvasView with the provided argument: ' +
                        a.slice(arguments, 1),
                    );
                  e = rt.getCanvas(n);
                }
                var i = (this._context = e.getContext('2d'));
                if (
                  (i.save(),
                  (this._pixelRatio = 1),
                  !/^off|false$/.test(h.getAttribute(e, 'hidpi')))
                ) {
                  var s = r.devicePixelRatio || 1,
                    o = W.getPrefixed(i, 'backingStorePixelRatio') || 1;
                  this._pixelRatio = s / o;
                }
                G.call(this, t, e), (this._needsUpdate = !0);
              },
              remove: function t() {
                return this._context.restore(), t.base.call(this);
              },
              _setElementSize: function t(e, n) {
                var i = this._pixelRatio;
                if ((t.base.call(this, e * i, n * i), 1 !== i)) {
                  var r = this._element,
                    s = this._context;
                  if (!h.hasAttribute(r, 'resize')) {
                    var a = r.style;
                    (a.width = e + 'px'), (a.height = n + 'px');
                  }
                  s.restore(), s.save(), s.scale(i, i);
                }
              },
              getContext: function () {
                return this._context;
              },
              getPixelSize: function t(e) {
                var n,
                  i = ht.agent;
                if (i && i.firefox) n = t.base.call(this, e);
                else {
                  var r = this._context,
                    s = r.font;
                  (r.font = e + ' serif'),
                    (n = parseFloat(r.font)),
                    (r.font = s);
                }
                return n;
              },
              getTextWidth: function (t, e) {
                var n = this._context,
                  i = n.font,
                  r = 0;
                n.font = t;
                for (var s = 0, a = e.length; s < a; s++)
                  r = Math.max(r, n.measureText(e[s]).width);
                return (n.font = i), r;
              },
              update: function () {
                if (!this._needsUpdate) return !1;
                var t = this._project,
                  e = this._context,
                  n = this._viewSize;
                return (
                  e.clearRect(0, 0, n.width + 1, n.height + 1),
                  t && t.draw(e, this._matrix, this._pixelRatio),
                  (this._needsUpdate = !1),
                  !0
                );
              },
            }),
            X = a.extend({
              _class: 'Event',
              initialize: function (t) {
                (this.event = t), (this.type = t && t.type);
              },
              prevented: !1,
              stopped: !1,
              preventDefault: function () {
                (this.prevented = !0), this.event.preventDefault();
              },
              stopPropagation: function () {
                (this.stopped = !0), this.event.stopPropagation();
              },
              stop: function () {
                this.stopPropagation(), this.preventDefault();
              },
              getTimeStamp: function () {
                return this.event.timeStamp;
              },
              getModifiers: function () {
                return Q.modifiers;
              },
            }),
            K = X.extend({
              _class: 'KeyEvent',
              initialize: function (t, e, n, i) {
                (this.type = t),
                  (this.event = e),
                  (this.key = n),
                  (this.character = i);
              },
              toString: function () {
                return (
                  "{ type: '" +
                  this.type +
                  "', key: '" +
                  this.key +
                  "', character: '" +
                  this.character +
                  "', modifiers: " +
                  this.getModifiers() +
                  ' }'
                );
              },
            }),
            Q = new (function () {
              var t,
                e,
                i = {
                  '\t': 'tab',
                  ' ': 'space',
                  '\b': 'backspace',
                  '': 'delete',
                  Spacebar: 'space',
                  Del: 'delete',
                  Win: 'meta',
                  Esc: 'escape',
                },
                o = { tab: '\t', space: ' ', enter: '\r' },
                h = {},
                u = {},
                l = new a({
                  shift: !1,
                  control: !1,
                  alt: !1,
                  meta: !1,
                  capsLock: !1,
                  space: !1,
                }).inject({
                  option: {
                    get: function () {
                      return this.alt;
                    },
                  },
                  command: {
                    get: function () {
                      var t = ht && ht.agent;
                      return t && t.mac ? this.meta : this.control;
                    },
                  },
                });
              function c(t) {
                var e = t.key || t.keyIdentifier;
                return (
                  (e = /^U\+/.test(e)
                    ? String.fromCharCode(parseInt(e.substr(2), 16))
                    : /^Arrow[A-Z]/.test(e)
                    ? e.substr(5)
                    : 'Unidentified' === e || e === n
                    ? String.fromCharCode(t.keyCode)
                    : e),
                  i[e] || (e.length > 1 ? a.hyphenate(e) : e.toLowerCase())
                );
              }
              function f(e, n, i, r) {
                var s,
                  o = G._focused;
                if (
                  ((h[n] = e),
                  e ? (u[n] = i) : delete u[n],
                  n.length > 1 && (s = a.camelize(n)) in l)
                ) {
                  l[s] = e;
                  var c = ht && ht.agent;
                  if ('meta' === s && c && c.mac)
                    if (e) t = {};
                    else {
                      for (var d in t) d in u && f(!1, d, t[d], r);
                      t = null;
                    }
                } else e && t && (t[n] = i);
                o && o._handleKeyEvent(e ? 'keydown' : 'keyup', r, n, i);
              }
              return (
                $.add(s, {
                  keydown: function (t) {
                    var n = c(t),
                      i = ht && ht.agent;
                    n.length > 1 ||
                    (i &&
                      i.chrome &&
                      (t.altKey ||
                        (i.mac && t.metaKey) ||
                        (!i.mac && t.ctrlKey)))
                      ? f(!0, n, o[n] || (n.length > 1 ? '' : n), t)
                      : (e = n);
                  },
                  keypress: function (t) {
                    if (e) {
                      var n = c(t),
                        i = t.charCode,
                        r =
                          i >= 32
                            ? String.fromCharCode(i)
                            : n.length > 1
                            ? ''
                            : n;
                      n !== e && (n = r.toLowerCase()),
                        f(!0, n, r, t),
                        (e = null);
                    }
                  },
                  keyup: function (t) {
                    var e = c(t);
                    e in u && f(!1, e, u[e], t);
                  },
                }),
                $.add(r, {
                  blur: function (t) {
                    for (var e in u) f(!1, e, u[e], t);
                  },
                }),
                {
                  modifiers: l,
                  isDown: function (t) {
                    return !!h[t];
                  },
                }
              );
            })(),
            Y = X.extend({
              _class: 'MouseEvent',
              initialize: function (t, e, n, i, r) {
                (this.type = t),
                  (this.event = e),
                  (this.point = n),
                  (this.target = i),
                  (this.delta = r);
              },
              toString: function () {
                return (
                  "{ type: '" +
                  this.type +
                  "', point: " +
                  this.point +
                  ', target: ' +
                  this.target +
                  (this.delta ? ', delta: ' + this.delta : '') +
                  ', modifiers: ' +
                  this.getModifiers() +
                  ' }'
                );
              },
            }),
            tt = X.extend({
              _class: 'ToolEvent',
              _item: null,
              initialize: function (t, e, n) {
                (this.tool = t), (this.type = e), (this.event = n);
              },
              _choosePoint: function (t, e) {
                return t || (e ? e.clone() : null);
              },
              getPoint: function () {
                return this._choosePoint(this._point, this.tool._point);
              },
              setPoint: function (t) {
                this._point = t;
              },
              getLastPoint: function () {
                return this._choosePoint(this._lastPoint, this.tool._lastPoint);
              },
              setLastPoint: function (t) {
                this._lastPoint = t;
              },
              getDownPoint: function () {
                return this._choosePoint(this._downPoint, this.tool._downPoint);
              },
              setDownPoint: function (t) {
                this._downPoint = t;
              },
              getMiddlePoint: function () {
                return !this._middlePoint && this.tool._lastPoint
                  ? this.tool._point.add(this.tool._lastPoint).divide(2)
                  : this._middlePoint;
              },
              setMiddlePoint: function (t) {
                this._middlePoint = t;
              },
              getDelta: function () {
                return !this._delta && this.tool._lastPoint
                  ? this.tool._point.subtract(this.tool._lastPoint)
                  : this._delta;
              },
              setDelta: function (t) {
                this._delta = t;
              },
              getCount: function () {
                return this.tool[
                  /^mouse(down|up)$/.test(this.type)
                    ? '_downCount'
                    : '_moveCount'
                ];
              },
              setCount: function (t) {
                this.tool[
                  /^mouse(down|up)$/.test(this.type) ? 'downCount' : 'count'
                ] = t;
              },
              getItem: function () {
                if (!this._item) {
                  var t = this.tool._scope.project.hitTest(this.getPoint());
                  if (t) {
                    for (
                      var e = t.item, n = e._parent;
                      /^(Group|CompoundPath)$/.test(n._class);

                    )
                      (e = n), (n = n._parent);
                    this._item = e;
                  }
                }
                return this._item;
              },
              setItem: function (t) {
                this._item = t;
              },
              toString: function () {
                return (
                  '{ type: ' +
                  this.type +
                  ', point: ' +
                  this.getPoint() +
                  ', count: ' +
                  this.getCount() +
                  ', modifiers: ' +
                  this.getModifiers() +
                  ' }'
                );
              },
            }),
            et = u.extend({
              _class: 'Tool',
              _list: 'tools',
              _reference: 'tool',
              _events: [
                'onMouseDown',
                'onMouseUp',
                'onMouseDrag',
                'onMouseMove',
                'onActivate',
                'onDeactivate',
                'onEditOptions',
                'onKeyDown',
                'onKeyUp',
              ],
              initialize: function (t) {
                u.call(this),
                  (this._moveCount = -1),
                  (this._downCount = -1),
                  this.set(t);
              },
              getMinDistance: function () {
                return this._minDistance;
              },
              setMinDistance: function (t) {
                (this._minDistance = t),
                  null != t &&
                    null != this._maxDistance &&
                    t > this._maxDistance &&
                    (this._maxDistance = t);
              },
              getMaxDistance: function () {
                return this._maxDistance;
              },
              setMaxDistance: function (t) {
                (this._maxDistance = t),
                  null != this._minDistance &&
                    null != t &&
                    t < this._minDistance &&
                    (this._minDistance = t);
              },
              getFixedDistance: function () {
                return this._minDistance == this._maxDistance
                  ? this._minDistance
                  : null;
              },
              setFixedDistance: function (t) {
                this._minDistance = this._maxDistance = t;
              },
              _handleMouseEvent: function (t, e, n, i) {
                (ht = this._scope),
                  i.drag && !this.responds(t) && (t = 'mousemove');
                var r = i.move || i.drag,
                  s = this.responds(t),
                  a = this.minDistance,
                  o = this.maxDistance,
                  h = !1,
                  u = this;
                function l(t, e) {
                  var s = n,
                    a = r ? u._point : u._downPoint || s;
                  if (r) {
                    if (u._moveCount >= 0 && s.equals(a)) return !1;
                    if (a && (null != t || null != e)) {
                      var o = s.subtract(a),
                        h = o.getLength();
                      if (h < (t || 0)) return !1;
                      e && (s = a.add(o.normalize(Math.min(h, e))));
                    }
                    u._moveCount++;
                  }
                  return (
                    (u._point = s),
                    (u._lastPoint = a || s),
                    i.down &&
                      ((u._moveCount = -1), (u._downPoint = s), u._downCount++),
                    !0
                  );
                }
                function c() {
                  s && (h = u.emit(t, new tt(u, t, e)) || h);
                }
                if (i.down) l(), c();
                else if (i.up) l(null, o), c();
                else if (s) for (; l(a, o); ) c();
                return h;
              },
            }),
            nt = a.extend(o, {
              _class: 'Tween',
              statics: {
                easings: {
                  linear: function (t) {
                    return t;
                  },
                  easeInQuad: function (t) {
                    return t * t;
                  },
                  easeOutQuad: function (t) {
                    return t * (2 - t);
                  },
                  easeInOutQuad: function (t) {
                    return t < 0.5 ? 2 * t * t : 2 * (2 - t) * t - 1;
                  },
                  easeInCubic: function (t) {
                    return t * t * t;
                  },
                  easeOutCubic: function (t) {
                    return --t * t * t + 1;
                  },
                  easeInOutCubic: function (t) {
                    return t < 0.5
                      ? 4 * t * t * t
                      : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
                  },
                  easeInQuart: function (t) {
                    return t * t * t * t;
                  },
                  easeOutQuart: function (t) {
                    return 1 - --t * t * t * t;
                  },
                  easeInOutQuart: function (t) {
                    return t < 0.5
                      ? 8 * t * t * t * t
                      : 1 - 8 * --t * t * t * t;
                  },
                  easeInQuint: function (t) {
                    return t * t * t * t * t;
                  },
                  easeOutQuint: function (t) {
                    return 1 + --t * t * t * t * t;
                  },
                  easeInOutQuint: function (t) {
                    return t < 0.5
                      ? 16 * t * t * t * t * t
                      : 1 + 16 * --t * t * t * t * t;
                  },
                },
              },
              initialize: function t(e, n, r, s, a, o) {
                this.object = e;
                var h = i(a),
                  u = 'function' === h;
                (this.type = u ? h : 'string' === h ? a : 'linear'),
                  (this.easing = u ? a : t.easings[this.type]),
                  (this.duration = s),
                  (this.running = !1),
                  (this._then = null),
                  (this._startTime = null);
                var l = n || r;
                (this._keys = l ? Object.keys(l) : []),
                  (this._parsedKeys = this._parseKeys(this._keys)),
                  (this._from = l && this._getState(n)),
                  (this._to = l && this._getState(r)),
                  !1 !== o && this.start();
              },
              then: function (t) {
                return (this._then = t), this;
              },
              start: function () {
                return (this._startTime = null), (this.running = !0), this;
              },
              stop: function () {
                return (this.running = !1), this;
              },
              update: function (t) {
                if (this.running) {
                  t >= 1 && ((t = 1), (this.running = !1));
                  for (
                    var e = this.easing(t),
                      n = this._keys,
                      i = function (n) {
                        return 'function' == typeof n ? n(e, t) : n;
                      },
                      r = 0,
                      s = n && n.length;
                    r < s;
                    r++
                  ) {
                    var o = n[r],
                      h = i(this._from[o]),
                      u = i(this._to[o]),
                      l =
                        h && u && h.__add && u.__add
                          ? u.__subtract(h).__multiply(e).__add(h)
                          : (u - h) * e + h;
                    this._setProperty(this._parsedKeys[o], l);
                  }
                  this.responds('update') &&
                    this.emit('update', new a({ progress: t, factor: e })),
                    !this.running && this._then && this._then(this.object);
                }
                return this;
              },
              _events: { onUpdate: {} },
              _handleFrame: function (t) {
                var e = this._startTime,
                  n = e ? (t - e) / this.duration : 0;
                e || (this._startTime = t), this.update(n);
              },
              _getState: function (t) {
                for (
                  var e = this._keys, n = {}, i = 0, r = e.length;
                  i < r;
                  i++
                ) {
                  var s,
                    a = e[i],
                    o = this._parsedKeys[a],
                    h = this._getProperty(o);
                  if (t) {
                    var u = this._resolveValue(h, t[a]);
                    this._setProperty(o, u),
                      (s =
                        (s = this._getProperty(o)) && s.clone ? s.clone() : s),
                      this._setProperty(o, h);
                  } else s = h && h.clone ? h.clone() : h;
                  n[a] = s;
                }
                return n;
              },
              _resolveValue: function (t, e) {
                if (e) {
                  if (Array.isArray(e) && 2 === e.length) {
                    var n = e[0];
                    return n && n.match && n.match(/^[+\-\*\/]=/)
                      ? this._calculate(t, n[0], e[1])
                      : e;
                  }
                  if ('string' == typeof e) {
                    var i = e.match(/^[+\-*/]=(.*)/);
                    if (i) {
                      var r = JSON.parse(
                        i[1].replace(
                          /(['"])?([a-zA-Z0-9_]+)(['"])?:/g,
                          '"$2": ',
                        ),
                      );
                      return this._calculate(t, e[0], r);
                    }
                  }
                }
                return e;
              },
              _calculate: function (t, e, n) {
                return ht.PaperScript.calculateBinary(t, e, n);
              },
              _parseKeys: function (t) {
                for (var e = {}, n = 0, i = t.length; n < i; n++) {
                  var r = t[n],
                    s = r
                      .replace(/\.([^.]*)/g, '/$1')
                      .replace(/\[['"]?([^'"\]]*)['"]?\]/g, '/$1');
                  e[r] = s.split('/');
                }
                return e;
              },
              _getProperty: function (t, e) {
                for (
                  var n = this.object, i = 0, r = t.length - (e || 0);
                  i < r && n;
                  i++
                )
                  n = n[t[i]];
                return n;
              },
              _setProperty: function (t, e) {
                var n = this._getProperty(t, 1);
                n && (n[t[t.length - 1]] = e);
              },
            }),
            it = {
              request: function (t) {
                var n = new e.XMLHttpRequest();
                return (
                  n.open(
                    (t.method || 'get').toUpperCase(),
                    t.url,
                    a.pick(t.async, !0),
                  ),
                  t.mimeType && n.overrideMimeType(t.mimeType),
                  (n.onload = function () {
                    var e = n.status;
                    0 === e || 200 === e
                      ? t.onLoad && t.onLoad.call(n, n.responseText)
                      : n.onerror();
                  }),
                  (n.onerror = function () {
                    var e = n.status,
                      i = 'Could not load "' + t.url + '" (Status: ' + e + ')';
                    if (!t.onError) throw new Error(i);
                    t.onError(i, e);
                  }),
                  n.send(null)
                );
              },
            },
            rt = (a.exports.CanvasProvider = {
              canvases: [],
              getCanvas: function (t, e) {
                if (!r) return null;
                var n,
                  a = !0;
                'object' === i(t) && ((e = t.height), (t = t.width)),
                  this.canvases.length
                    ? (n = this.canvases.pop())
                    : ((n = s.createElement('canvas')), (a = !1));
                var o = n.getContext('2d');
                if (!o)
                  throw new Error(
                    'Canvas ' + n + ' is unable to provide a 2D context.',
                  );
                return (
                  n.width === t && n.height === e
                    ? a && o.clearRect(0, 0, t + 1, e + 1)
                    : ((n.width = t), (n.height = e)),
                  o.save(),
                  n
                );
              },
              getContext: function (t, e) {
                var n = this.getCanvas(t, e);
                return n ? n.getContext('2d') : null;
              },
              release: function (t) {
                var e = t && t.canvas ? t.canvas : t;
                e &&
                  e.getContext &&
                  (e.getContext('2d').restore(), this.canvases.push(e));
              },
            }),
            st = new (function () {
              var t,
                e,
                n,
                i,
                r,
                s,
                o,
                h,
                u,
                l,
                c,
                f = Math.min,
                d = Math.max,
                _ = Math.abs;
              function g(t, e, n) {
                return 0.2989 * t + 0.587 * e + 0.114 * n;
              }
              function v(t, e, n, i) {
                var r = i - g(t, e, n),
                  s =
                    ((i = g((u = t + r), (l = e + r), (c = n + r))),
                    f(u, l, c)),
                  a = d(u, l, c);
                if (s < 0) {
                  var o = i - s;
                  (u = i + ((u - i) * i) / o),
                    (l = i + ((l - i) * i) / o),
                    (c = i + ((c - i) * i) / o);
                }
                if (a > 255) {
                  var h = 255 - i,
                    _ = a - i;
                  (u = i + ((u - i) * h) / _),
                    (l = i + ((l - i) * h) / _),
                    (c = i + ((c - i) * h) / _);
                }
              }
              function p(t, e, n) {
                return d(t, e, n) - f(t, e, n);
              }
              function m(t, e, n, i) {
                var r,
                  s = [t, e, n],
                  a = d(t, e, n),
                  o = f(t, e, n);
                (r =
                  0 ===
                  f(
                    (o = o === t ? 0 : o === e ? 1 : 2),
                    (a = a === t ? 0 : a === e ? 1 : 2),
                  )
                    ? 1 === d(o, a)
                      ? 2
                      : 1
                    : 0),
                  s[a] > s[o]
                    ? ((s[r] = ((s[r] - s[o]) * i) / (s[a] - s[o])), (s[a] = i))
                    : (s[r] = s[a] = 0),
                  (s[o] = 0),
                  (u = s[0]),
                  (l = s[1]),
                  (c = s[2]);
              }
              var y = {
                  multiply: function () {
                    (u = (r * t) / 255),
                      (l = (s * e) / 255),
                      (c = (o * n) / 255);
                  },
                  screen: function () {
                    (u = r + t - (r * t) / 255),
                      (l = s + e - (s * e) / 255),
                      (c = o + n - (o * n) / 255);
                  },
                  overlay: function () {
                    (u =
                      r < 128
                        ? (2 * r * t) / 255
                        : 255 - (2 * (255 - r) * (255 - t)) / 255),
                      (l =
                        s < 128
                          ? (2 * s * e) / 255
                          : 255 - (2 * (255 - s) * (255 - e)) / 255),
                      (c =
                        o < 128
                          ? (2 * o * n) / 255
                          : 255 - (2 * (255 - o) * (255 - n)) / 255);
                  },
                  'soft-light': function () {
                    var i = (t * r) / 255;
                    (u =
                      i +
                      (r * (255 - ((255 - r) * (255 - t)) / 255 - i)) / 255),
                      (l =
                        (i = (e * s) / 255) +
                        (s * (255 - ((255 - s) * (255 - e)) / 255 - i)) / 255),
                      (c =
                        (i = (n * o) / 255) +
                        (o * (255 - ((255 - o) * (255 - n)) / 255 - i)) / 255);
                  },
                  'hard-light': function () {
                    (u =
                      t < 128
                        ? (2 * t * r) / 255
                        : 255 - (2 * (255 - t) * (255 - r)) / 255),
                      (l =
                        e < 128
                          ? (2 * e * s) / 255
                          : 255 - (2 * (255 - e) * (255 - s)) / 255),
                      (c =
                        n < 128
                          ? (2 * n * o) / 255
                          : 255 - (2 * (255 - n) * (255 - o)) / 255);
                  },
                  'color-dodge': function () {
                    (u =
                      0 === r
                        ? 0
                        : 255 === t
                        ? 255
                        : f(255, (255 * r) / (255 - t))),
                      (l =
                        0 === s
                          ? 0
                          : 255 === e
                          ? 255
                          : f(255, (255 * s) / (255 - e))),
                      (c =
                        0 === o
                          ? 0
                          : 255 === n
                          ? 255
                          : f(255, (255 * o) / (255 - n)));
                  },
                  'color-burn': function () {
                    (u =
                      255 === r
                        ? 255
                        : 0 === t
                        ? 0
                        : d(0, 255 - (255 * (255 - r)) / t)),
                      (l =
                        255 === s
                          ? 255
                          : 0 === e
                          ? 0
                          : d(0, 255 - (255 * (255 - s)) / e)),
                      (c =
                        255 === o
                          ? 255
                          : 0 === n
                          ? 0
                          : d(0, 255 - (255 * (255 - o)) / n));
                  },
                  darken: function () {
                    (u = r < t ? r : t),
                      (l = s < e ? s : e),
                      (c = o < n ? o : n);
                  },
                  lighten: function () {
                    (u = r > t ? r : t),
                      (l = s > e ? s : e),
                      (c = o > n ? o : n);
                  },
                  difference: function () {
                    (u = r - t) < 0 && (u = -u),
                      (l = s - e) < 0 && (l = -l),
                      (c = o - n) < 0 && (c = -c);
                  },
                  exclusion: function () {
                    (u = r + (t * (255 - r - r)) / 255),
                      (l = s + (e * (255 - s - s)) / 255),
                      (c = o + (n * (255 - o - o)) / 255);
                  },
                  hue: function () {
                    m(t, e, n, p(r, s, o)), v(u, l, c, g(r, s, o));
                  },
                  saturation: function () {
                    m(r, s, o, p(t, e, n)), v(u, l, c, g(r, s, o));
                  },
                  luminosity: function () {
                    v(r, s, o, g(t, e, n));
                  },
                  color: function () {
                    v(t, e, n, g(r, s, o));
                  },
                  add: function () {
                    (u = f(r + t, 255)),
                      (l = f(s + e, 255)),
                      (c = f(o + n, 255));
                  },
                  subtract: function () {
                    (u = d(r - t, 0)), (l = d(s - e, 0)), (c = d(o - n, 0));
                  },
                  average: function () {
                    (u = (r + t) / 2), (l = (s + e) / 2), (c = (o + n) / 2);
                  },
                  negation: function () {
                    (u = 255 - _(255 - t - r)),
                      (l = 255 - _(255 - e - s)),
                      (c = 255 - _(255 - n - o));
                  },
                },
                w = (this.nativeModes = a.each(
                  [
                    'source-over',
                    'source-in',
                    'source-out',
                    'source-atop',
                    'destination-over',
                    'destination-in',
                    'destination-out',
                    'destination-atop',
                    'lighter',
                    'darker',
                    'copy',
                    'xor',
                  ],
                  function (t) {
                    this[t] = !0;
                  },
                  {},
                )),
                x = rt.getContext(1, 1);
              x &&
                (a.each(y, function (t, e) {
                  var n = 'darken' === e,
                    i = !1;
                  x.save();
                  try {
                    (x.fillStyle = n ? '#300' : '#a00'),
                      x.fillRect(0, 0, 1, 1),
                      (x.globalCompositeOperation = e),
                      x.globalCompositeOperation === e &&
                        ((x.fillStyle = n ? '#a00' : '#300'),
                        x.fillRect(0, 0, 1, 1),
                        (i =
                          x.getImageData(0, 0, 1, 1).data[0] !== n ? 170 : 51));
                  } catch (r) {}
                  x.restore(), (w[e] = i);
                }),
                rt.release(x)),
                (this.process = function (a, f, d, _, g) {
                  var v = f.canvas,
                    p = 'normal' === a;
                  if (p || w[a])
                    d.save(),
                      d.setTransform(1, 0, 0, 1, 0, 0),
                      (d.globalAlpha = _),
                      p || (d.globalCompositeOperation = a),
                      d.drawImage(v, g.x, g.y),
                      d.restore();
                  else {
                    var m = y[a];
                    if (!m) return;
                    for (
                      var x = d.getImageData(g.x, g.y, v.width, v.height),
                        b = x.data,
                        C = f.getImageData(0, 0, v.width, v.height).data,
                        S = 0,
                        k = b.length;
                      S < k;
                      S += 4
                    ) {
                      (t = C[S]),
                        (r = b[S]),
                        (e = C[S + 1]),
                        (s = b[S + 1]),
                        (n = C[S + 2]),
                        (o = b[S + 2]),
                        (i = C[S + 3]),
                        (h = b[S + 3]),
                        m();
                      var I = (i * _) / 255,
                        P = 1 - I;
                      (b[S] = I * u + P * r),
                        (b[S + 1] = I * l + P * s),
                        (b[S + 2] = I * c + P * o),
                        (b[S + 3] = i * _ + P * h);
                    }
                    d.putImageData(x, g.x, g.y);
                  }
                });
            })(),
            at = new (function () {
              var t = 'http://www.w3.org/2000/svg',
                e = 'http://www.w3.org/2000/xmlns',
                n = 'http://www.w3.org/1999/xlink',
                i = {
                  href: n,
                  xlink: e,
                  xmlns: e + '/',
                  'xmlns:xlink': e + '/',
                };
              function r(t, e, n) {
                for (var r in e) {
                  var s = e[r],
                    a = i[r];
                  'number' == typeof s && n && (s = n.number(s)),
                    a ? t.setAttributeNS(a, r, s) : t.setAttribute(r, s);
                }
                return t;
              }
              return {
                svg: t,
                xmlns: e,
                xlink: n,
                create: function (e, n, i) {
                  return r(s.createElementNS(t, e), n, i);
                },
                get: function (t, e) {
                  var n = i[e],
                    r = n ? t.getAttributeNS(n, e) : t.getAttribute(e);
                  return 'null' === r ? null : r;
                },
                set: r,
              };
            })(),
            ot = a.each(
              {
                fillColor: ['fill', 'color'],
                fillRule: ['fill-rule', 'string'],
                strokeColor: ['stroke', 'color'],
                strokeWidth: ['stroke-width', 'number'],
                strokeCap: ['stroke-linecap', 'string'],
                strokeJoin: ['stroke-linejoin', 'string'],
                strokeScaling: [
                  'vector-effect',
                  'lookup',
                  { true: 'none', false: 'non-scaling-stroke' },
                  function (t, e) {
                    return (
                      !e && (t instanceof N || t instanceof I || t instanceof D)
                    );
                  },
                ],
                miterLimit: ['stroke-miterlimit', 'number'],
                dashArray: ['stroke-dasharray', 'array'],
                dashOffset: ['stroke-dashoffset', 'number'],
                fontFamily: ['font-family', 'string'],
                fontWeight: ['font-weight', 'string'],
                fontSize: ['font-size', 'number'],
                justification: [
                  'text-anchor',
                  'lookup',
                  { left: 'start', center: 'middle', right: 'end' },
                ],
                opacity: ['opacity', 'number'],
                blendMode: ['mix-blend-mode', 'style'],
              },
              function (t, e) {
                var n = a.capitalize(e),
                  i = t[2];
                this[e] = {
                  type: t[1],
                  property: e,
                  attribute: t[0],
                  toSVG: i,
                  fromSVG:
                    i &&
                    a.each(
                      i,
                      function (t, e) {
                        this[t] = e;
                      },
                      {},
                    ),
                  exportFilter: t[3],
                  get: 'get' + n,
                  set: 'set' + n,
                };
              },
              {},
            );
          new (function () {
            var t;
            function n(e, n, i) {
              var r,
                s = new a(),
                o = e.getTranslation();
              n &&
                (e.isInvertible()
                  ? ((r = (e = e._shiftless())._inverseTransform(o)),
                    (o = null))
                  : (r = new _()),
                (s[i ? 'cx' : 'x'] = r.x),
                (s[i ? 'cy' : 'y'] = r.y));
              if (!e.isIdentity()) {
                var h = e.decompose();
                if (h) {
                  var u = [],
                    l = h.rotation,
                    c = h.scaling,
                    d = h.skewing;
                  o && !o.isZero() && u.push('translate(' + t.point(o) + ')'),
                    l && u.push('rotate(' + t.number(l) + ')'),
                    (f.isZero(c.x - 1) && f.isZero(c.y - 1)) ||
                      u.push('scale(' + t.point(c) + ')'),
                    d.x && u.push('skewX(' + t.number(d.x) + ')'),
                    d.y && u.push('skewY(' + t.number(d.y) + ')'),
                    (s.transform = u.join(' '));
                } else s.transform = 'matrix(' + e.getValues().join(',') + ')';
              }
              return s;
            }
            function i(e, i) {
              for (
                var r = n(e._matrix),
                  s = e._children,
                  a = at.create('g', r, t),
                  o = 0,
                  h = s.length;
                o < h;
                o++
              ) {
                var u = s[o],
                  c = v(u, i);
                if (c)
                  if (u.isClipMask()) {
                    var f = at.create('clipPath');
                    f.appendChild(c),
                      l(u, f, 'clip'),
                      at.set(a, { 'clip-path': 'url(#' + f.id + ')' });
                  } else a.appendChild(c);
              }
              return a;
            }
            function r(e) {
              var i = e._type,
                r = e._radius,
                s = n(e._matrix, !0, 'rectangle' !== i);
              if ('rectangle' === i) {
                i = 'rect';
                var a = e._size,
                  o = a.width,
                  h = a.height;
                (s.x -= o / 2),
                  (s.y -= h / 2),
                  (s.width = o),
                  (s.height = h),
                  r.isZero() && (r = null);
              }
              return (
                r &&
                  ('circle' === i
                    ? (s.r = r)
                    : ((s.rx = r.width), (s.ry = r.height))),
                at.create(i, s, t)
              );
            }
            var s,
              o = {
                Group: i,
                Layer: i,
                Raster: function (e, i) {
                  var r = n(e._matrix, !0),
                    s = e.getSize(),
                    a = e.getImage();
                  return (
                    (r.x -= s.width / 2),
                    (r.y -= s.height / 2),
                    (r.width = s.width),
                    (r.height = s.height),
                    (r.href =
                      (0 == i.embedImages && a && a.src) || e.toDataURL()),
                    at.create('image', r, t)
                  );
                },
                Path: function (e, i) {
                  var s = i.matchShapes;
                  if (s) {
                    var a = e.toShape(!1);
                    if (a) return r(a);
                  }
                  var o,
                    h = e._segments,
                    u = h.length,
                    l = n(e._matrix);
                  if (s && u >= 2 && !e.hasHandles())
                    if (u > 2) {
                      o = e._closed ? 'polygon' : 'polyline';
                      for (var c = [], f = 0; f < u; f++)
                        c.push(t.point(h[f]._point));
                      l.points = c.join(' ');
                    } else {
                      o = 'line';
                      var d = h[0]._point,
                        _ = h[1]._point;
                      l.set({ x1: d.x, y1: d.y, x2: _.x, y2: _.y });
                    }
                  else (o = 'path'), (l.d = e.getPathData(null, i.precision));
                  return at.create(o, l, t);
                },
                Shape: r,
                CompoundPath: function (e, i) {
                  var r = n(e._matrix),
                    s = e.getPathData(null, i.precision);
                  return s && (r.d = s), at.create('path', r, t);
                },
                SymbolItem: function (e, i) {
                  var r = n(e._matrix, !0),
                    s = e._definition,
                    a = u(s, 'symbol'),
                    o = s._item,
                    h = o.getStrokeBounds();
                  return (
                    a ||
                      ((a = at.create('symbol', {
                        viewBox: t.rectangle(h),
                      })).appendChild(v(o, i)),
                      l(s, a, 'symbol')),
                    (r.href = '#' + a.id),
                    (r.x += h.x),
                    (r.y += h.y),
                    (r.width = h.width),
                    (r.height = h.height),
                    (r.overflow = 'visible'),
                    at.create('use', r, t)
                  );
                },
                PointText: function (e) {
                  var i = at.create('text', n(e._matrix, !0), t);
                  return (i.textContent = e._content), i;
                },
              };
            function h(e, n, i) {
              var r = {},
                s = !i && e.getParent(),
                o = [];
              return (
                null != e._name && (r.id = e._name),
                a.each(ot, function (n) {
                  var i = n.get,
                    h = n.type,
                    c = e[i]();
                  if (
                    n.exportFilter
                      ? n.exportFilter(e, c)
                      : !s || !a.equals(s[i](), c)
                  ) {
                    if ('color' === h && null != c) {
                      var f = c.getAlpha();
                      f < 1 && (r[n.attribute + '-opacity'] = f);
                    }
                    'style' === h
                      ? o.push(n.attribute + ': ' + c)
                      : (r[n.attribute] =
                          null == c
                            ? 'none'
                            : 'color' === h
                            ? c.gradient
                              ? (function (e) {
                                  var n = u(e, 'color');
                                  if (!n) {
                                    var i,
                                      r = e.getGradient(),
                                      s = r._radial,
                                      a = e.getOrigin(),
                                      o = e.getDestination();
                                    if (s) {
                                      i = {
                                        cx: a.x,
                                        cy: a.y,
                                        r: a.getDistance(o),
                                      };
                                      var h = e.getHighlight();
                                      h && ((i.fx = h.x), (i.fy = h.y));
                                    } else
                                      i = {
                                        x1: a.x,
                                        y1: a.y,
                                        x2: o.x,
                                        y2: o.y,
                                      };
                                    (i.gradientUnits = 'userSpaceOnUse'),
                                      (n = at.create(
                                        (s ? 'radial' : 'linear') + 'Gradient',
                                        i,
                                        t,
                                      ));
                                    for (
                                      var c = r._stops, f = 0, d = c.length;
                                      f < d;
                                      f++
                                    ) {
                                      var _ = c[f],
                                        g = _._color,
                                        v = g.getAlpha(),
                                        p = _._offset;
                                      (i = {
                                        offset: null == p ? f / (d - 1) : p,
                                      }),
                                        g && (i['stop-color'] = g.toCSS(!0)),
                                        v < 1 && (i['stop-opacity'] = v),
                                        n.appendChild(at.create('stop', i, t));
                                    }
                                    l(e, n, 'color');
                                  }
                                  return 'url(#' + n.id + ')';
                                })(c)
                              : c.toCSS(!0)
                            : 'array' === h
                            ? c.join(',')
                            : 'lookup' === h
                            ? n.toSVG[c]
                            : c);
                  }
                }),
                o.length && (r.style = o.join(';')),
                1 === r.opacity && delete r.opacity,
                e._visible || (r.visibility = 'hidden'),
                at.set(n, r, t)
              );
            }
            function u(t, e) {
              return (
                s || (s = { ids: {}, svgs: {} }),
                t &&
                  s.svgs[e + '-' + (t._id || t.__id || (t.__id = d.get('svg')))]
              );
            }
            function l(t, e, n) {
              s || u();
              var i = (s.ids[n] = (s.ids[n] || 0) + 1);
              (e.id = n + '-' + i), (s.svgs[n + '-' + (t._id || t.__id)] = e);
            }
            function g(t, n) {
              var i = t,
                r = null;
              if (s) {
                for (var a in ((i = 'svg' === t.nodeName.toLowerCase() && t),
                s.svgs))
                  r ||
                    (i || (i = at.create('svg')).appendChild(t),
                    (r = i.insertBefore(at.create('defs'), i.firstChild))),
                    r.appendChild(s.svgs[a]);
                s = null;
              }
              return n.asString
                ? new e.XMLSerializer().serializeToString(i)
                : i;
            }
            function v(t, e, n) {
              var i = o[t._class],
                r = i && i(t, e);
              if (r) {
                var s = e.onExport;
                s && (r = s(t, r, e) || r);
                var a = JSON.stringify(t._data);
                a &&
                  '{}' !== a &&
                  'null' !== a &&
                  r.setAttribute('data-paper-data', a);
              }
              return r && h(t, r, n);
            }
            function p(e) {
              return e || (e = {}), (t = new c(e.precision)), e;
            }
            C.inject({
              exportSVG: function (t) {
                return g(v(this, (t = p(t)), !0), t);
              },
            }),
              b.inject({
                exportSVG: function (e) {
                  e = p(e);
                  var i = this._children,
                    r = this.getView(),
                    s = a.pick(e.bounds, 'view'),
                    o = e.matrix || ('view' === s && r._matrix),
                    h = o && w.read([o]),
                    u =
                      'view' === s
                        ? new m([0, 0], r.getViewSize())
                        : 'content' === s
                        ? C._getBounds(i, h, { stroke: !0 }).rect
                        : m.read([s], 0, { readNull: !0 }),
                    l = {
                      version: '1.1',
                      xmlns: at.svg,
                      'xmlns:xlink': at.xlink,
                    };
                  u &&
                    ((l.width = u.width),
                    (l.height = u.height),
                    (u.x || 0 === u.x || u.y || 0 === u.y) &&
                      (l.viewBox = t.rectangle(u)));
                  var c = at.create('svg', l, t),
                    f = c;
                  h &&
                    !h.isIdentity() &&
                    (f = c.appendChild(at.create('g', n(h), t)));
                  for (var d = 0, _ = i.length; d < _; d++)
                    f.appendChild(v(i[d], e, !0));
                  return g(c, e);
                },
              });
          })(),
            new (function () {
              var t,
                o = {};
              function h(e, n, i, r, s, a) {
                var o = at.get(e, n) || a,
                  h =
                    null == o ? (r ? null : i ? '' : 0) : i ? o : parseFloat(o);
                return /%\s*$/.test(o)
                  ? (h / 100) *
                      (s ? 1 : t[/x|^width/.test(n) ? 'width' : 'height'])
                  : h;
              }
              function u(t, e, n, i, r, s, a) {
                return (
                  (e = h(t, e || 'x', !1, i, r, s)),
                  (n = h(t, n || 'y', !1, i, r, a)),
                  !i || (null != e && null != n) ? new _(e, n) : null
                );
              }
              function l(t, e, n, i, r) {
                return (
                  (e = h(t, e || 'width', !1, i, r)),
                  (n = h(t, n || 'height', !1, i, r)),
                  !i || (null != e && null != n) ? new v(e, n) : null
                );
              }
              function c(t, e, n) {
                return 'none' === t
                  ? null
                  : 'number' === e
                  ? parseFloat(t)
                  : 'array' === e
                  ? t
                    ? t.split(/[\s,]+/g).map(parseFloat)
                    : []
                  : 'color' === e
                  ? O(t) || t
                  : 'lookup' === e
                  ? n[t]
                  : t;
              }
              function f(t, e, n, i) {
                var r = t.childNodes,
                  s = 'clippath' === e,
                  a = 'defs' === e,
                  o = new S(),
                  h = o._project,
                  u = h._currentStyle,
                  l = [];
                if (
                  (s ||
                    a ||
                    ((o = T(o, t, i)), (h._currentStyle = o._style.clone())),
                  i)
                )
                  for (
                    var c = t.querySelectorAll('defs'), f = 0, d = c.length;
                    f < d;
                    f++
                  )
                    z(c[f], n, !1);
                for (f = 0, d = r.length; f < d; f++) {
                  var _,
                    g = r[f];
                  1 !== g.nodeType ||
                    /^defs$/i.test(g.nodeName) ||
                    !(_ = z(g, n, !1)) ||
                    _ instanceof A ||
                    l.push(_);
                }
                return (
                  o.addChildren(l),
                  s && (o = T(o.reduce(), t, i)),
                  (h._currentStyle = u),
                  (s || a) && (o.remove(), (o = null)),
                  o
                );
              }
              function d(t, e) {
                for (
                  var n = t
                      .getAttribute('points')
                      .match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g),
                    i = [],
                    r = 0,
                    s = n.length;
                  r < s;
                  r += 2
                )
                  i.push(new _(parseFloat(n[r]), parseFloat(n[r + 1])));
                var a = new B(i);
                return 'polygon' === e && a.closePath(), a;
              }
              function g(t, e) {
                var n,
                  i = (h(t, 'href', !0) || '').substring(1),
                  r = 'radialgradient' === e;
                if (i)
                  (n = o[i].getGradient())._radial ^ r &&
                    ((n = n.clone())._radial = r);
                else {
                  for (
                    var s = t.childNodes, a = [], l = 0, c = s.length;
                    l < c;
                    l++
                  ) {
                    var f = s[l];
                    1 === f.nodeType && a.push(T(new H(), f));
                  }
                  n = new U(a, r);
                }
                var d,
                  _,
                  g,
                  v = 'userSpaceOnUse' !== h(t, 'gradientUnits', !0);
                return (
                  r
                    ? ((_ = (d = u(t, 'cx', 'cy', !1, v, '50%', '50%')).add(
                        h(t, 'r', !1, !1, v, '50%'),
                        0,
                      )),
                      (g = u(t, 'fx', 'fy', !0, v)))
                    : ((d = u(t, 'x1', 'y1', !1, v, '0%', '0%')),
                      (_ = u(t, 'x2', 'y2', !1, v, '100%', '0%'))),
                  (T(new V(n, d, _, g), t)._scaleToBounds = v),
                  null
                );
              }
              var p = {
                '#document': function (t, e, n, i) {
                  for (var r = t.childNodes, s = 0, a = r.length; s < a; s++) {
                    var o = r[s];
                    if (1 === o.nodeType) return z(o, n, i);
                  }
                },
                g: f,
                svg: f,
                clippath: f,
                polygon: d,
                polyline: d,
                path: function (t) {
                  return N.create(t.getAttribute('d'));
                },
                lineargradient: g,
                radialgradient: g,
                image: function (t) {
                  var e = new P(h(t, 'href', !0));
                  return (
                    e.on('load', function () {
                      var e = l(t);
                      this.setSize(e);
                      var n = u(t).add(e.divide(2));
                      this._matrix.append(new w().translate(n));
                    }),
                    e
                  );
                },
                symbol: function (t, e, n, i) {
                  return new A(f(t, e, n, i), !0);
                },
                defs: f,
                use: function (t) {
                  var e = (h(t, 'href', !0) || '').substring(1),
                    n = o[e],
                    i = u(t);
                  return n
                    ? n instanceof A
                      ? n.place(i)
                      : n.clone().translate(i)
                    : null;
                },
                circle: function (t) {
                  return new I.Circle(u(t, 'cx', 'cy'), h(t, 'r'));
                },
                ellipse: function (t) {
                  return new I.Ellipse({
                    center: u(t, 'cx', 'cy'),
                    radius: l(t, 'rx', 'ry'),
                  });
                },
                rect: function (t) {
                  return new I.Rectangle(new m(u(t), l(t)), l(t, 'rx', 'ry'));
                },
                line: function (t) {
                  return new B.Line(u(t, 'x1', 'y1'), u(t, 'x2', 'y2'));
                },
                text: function (t) {
                  var e = new q(u(t).add(u(t, 'dx', 'dy')));
                  return e.setContent(t.textContent.trim() || ''), e;
                },
                switch: f,
              };
              function y(t, e, n, i) {
                if (t.transform) {
                  for (
                    var r = (i.getAttribute(n) || '').split(/\)\s*/g),
                      s = new w(),
                      a = 0,
                      o = r.length;
                    a < o;
                    a++
                  ) {
                    var h = r[a];
                    if (!h) break;
                    for (
                      var u = h.split(/\(\s*/),
                        l = u[0],
                        c = u[1].split(/[\s,]+/g),
                        f = 0,
                        d = c.length;
                      f < d;
                      f++
                    )
                      c[f] = parseFloat(c[f]);
                    switch (l) {
                      case 'matrix':
                        s.append(new w(c[0], c[1], c[2], c[3], c[4], c[5]));
                        break;
                      case 'rotate':
                        s.rotate(c[0], c[1] || 0, c[2] || 0);
                        break;
                      case 'translate':
                        s.translate(c[0], c[1] || 0);
                        break;
                      case 'scale':
                        s.scale(c);
                        break;
                      case 'skewX':
                        s.skew(c[0], 0);
                        break;
                      case 'skewY':
                        s.skew(0, c[0]);
                    }
                  }
                  t.transform(s);
                }
              }
              function x(t, e, n) {
                var i =
                    'fill-opacity' === n ? 'getFillColor' : 'getStrokeColor',
                  r = t[i] && t[i]();
                r && r.setAlpha(parseFloat(e));
              }
              var k = a.set(
                a.each(
                  ot,
                  function (t) {
                    this[t.attribute] = function (e, n) {
                      if (
                        e[t.set] &&
                        (e[t.set](c(n, t.type, t.fromSVG)), 'color' === t.type)
                      ) {
                        var i = e[t.get]();
                        if (i && i._scaleToBounds) {
                          var r = e.getBounds();
                          i.transform(
                            new w().translate(r.getPoint()).scale(r.getSize()),
                          );
                        }
                      }
                    };
                  },
                  {},
                ),
                {
                  id: function (t, e) {
                    (o[e] = t), t.setName && t.setName(e);
                  },
                  'clip-path': function (t, e) {
                    var n = O(e);
                    if (n) {
                      if (((n = n.clone()).setClipMask(!0), !(t instanceof S)))
                        return new S(n, t);
                      t.insertChild(0, n);
                    }
                  },
                  gradientTransform: y,
                  transform: y,
                  'fill-opacity': x,
                  'stroke-opacity': x,
                  visibility: function (t, e) {
                    t.setVisible && t.setVisible('visible' === e);
                  },
                  display: function (t, e) {
                    t.setVisible && t.setVisible(null !== e);
                  },
                  'stop-color': function (t, e) {
                    t.setColor && t.setColor(e);
                  },
                  'stop-opacity': function (t, e) {
                    t._color && t._color.setAlpha(parseFloat(e));
                  },
                  offset: function (t, e) {
                    if (t.setOffset) {
                      var n = e.match(/(.*)%$/);
                      t.setOffset(n ? n[1] / 100 : parseFloat(e));
                    }
                  },
                  viewBox: function (t, e, n, i, r) {
                    var s,
                      a = new m(c(e, 'array')),
                      o = l(i, null, null, !0);
                    if (t instanceof S) {
                      var h = o ? o.divide(a.getSize()) : 1,
                        u = new w().scale(h).translate(a.getPoint().negate());
                      s = t;
                    } else t instanceof A && (o && a.setSize(o), (s = t._item));
                    if (s) {
                      if ('visible' !== M(i, 'overflow', r)) {
                        var f = new I.Rectangle(a);
                        f.setClipMask(!0), s.addChild(f);
                      }
                      u && s.transform(u);
                    }
                  },
                },
              );
              function M(t, e, i) {
                var r = t.attributes[e],
                  s = r && r.value;
                if (!s && t.style) {
                  var o = a.camelize(e);
                  (s = t.style[o]) ||
                    i.node[o] === i.parent[o] ||
                    (s = i.node[o]);
                }
                return s ? ('none' === s ? null : s) : n;
              }
              function T(t, e, i) {
                var r = e.parentNode,
                  s = {
                    node: W.getStyles(e) || {},
                    parent:
                      (!i && !/^defs$/i.test(r.tagName) && W.getStyles(r)) ||
                      {},
                  };
                return (
                  a.each(k, function (i, r) {
                    var a = M(e, r, s);
                    t = (a !== n && i(t, a, r, e, s)) || t;
                  }),
                  t
                );
              }
              function O(t) {
                var e = t && t.match(/\((?:["'#]*)([^"')]+)/),
                  n = e && e[1],
                  i =
                    n &&
                    o[
                      r ? n.replace(r.location.href.split('#')[0] + '#', '') : n
                    ];
                return (
                  i &&
                    i._scaleToBounds &&
                    ((i = i.clone())._scaleToBounds = !0),
                  i
                );
              }
              function z(e, n, i) {
                var r,
                  h,
                  u,
                  c = e.nodeName.toLowerCase(),
                  f = '#document' !== c,
                  d = s.body;
                i &&
                  f &&
                  ((t = ht.getView().getSize()),
                  (t = l(e, null, null, !0) || t),
                  (r = at.create('svg', {
                    style: 'stroke-width: 1px; stroke-miterlimit: 10',
                  })),
                  (h = e.parentNode),
                  (u = e.nextSibling),
                  r.appendChild(e),
                  d.appendChild(r));
                var _ = ht.settings,
                  g = _.applyMatrix,
                  v = _.insertItems;
                (_.applyMatrix = !1), (_.insertItems = !1);
                var m = p[c],
                  y = (m && m(e, c, n, i)) || null;
                if (((_.insertItems = v), (_.applyMatrix = g), y)) {
                  !f || y instanceof S || (y = T(y, e, i));
                  var w = n.onImport,
                    x = f && e.getAttribute('data-paper-data');
                  w && (y = w(e, y, n) || y),
                    n.expandShapes &&
                      y instanceof I &&
                      (y.remove(), (y = y.toPath())),
                    x && (y._data = JSON.parse(x));
                }
                return (
                  r &&
                    (d.removeChild(r),
                    h && (u ? h.insertBefore(e, u) : h.appendChild(e))),
                  i &&
                    ((o = {}),
                    y && a.pick(n.applyMatrix, g) && y.matrix.apply(!0, !0)),
                  y
                );
              }
              function E(t, r, a) {
                if (!t) return null;
                r = 'function' == typeof r ? { onLoad: r } : r || {};
                var o = ht,
                  h = null;
                function u(s) {
                  try {
                    var u =
                      'object' === i(s)
                        ? s
                        : new e.DOMParser().parseFromString(
                            s.trim(),
                            'image/svg+xml',
                          );
                    if (!u.nodeName)
                      throw (
                        ((u = null), new Error('Unsupported SVG source: ' + t))
                      );
                    (ht = o),
                      (h = z(u, r, !0)),
                      (r && !1 === r.insert) || a._insertItem(n, h);
                    var c = r.onLoad;
                    c && c(h, s);
                  } catch (f) {
                    l(f);
                  }
                }
                function l(t, e) {
                  var n = r.onError;
                  if (!n) throw new Error(t);
                  n(t, e);
                }
                if ('string' != typeof t || /^[\s\S]*</.test(t)) {
                  if ('undefined' != typeof File && t instanceof File) {
                    var c = new FileReader();
                    return (
                      (c.onload = function () {
                        u(c.result);
                      }),
                      (c.onerror = function () {
                        l(c.error);
                      }),
                      c.readAsText(t)
                    );
                  }
                  u(t);
                } else {
                  var f = s.getElementById(t);
                  f
                    ? u(f)
                    : it.request({ url: t, async: !0, onLoad: u, onError: l });
                }
                return h;
              }
              C.inject({
                importSVG: function (t, e) {
                  return E(t, e, this);
                },
              }),
                b.inject({
                  importSVG: function (t, e) {
                    return this.activate(), E(t, e, this);
                  },
                });
            })(),
            (a.exports.PaperScript = function () {
              var n,
                o,
                u,
                l,
                c = this,
                f = c.acorn;
              if (!f && 'undefined' != typeof require)
                try {
                  f = require('acorn');
                } catch (k) {}
              f ||
                ((f = n = o = {}),
                (u = this),
                (l = function (t) {
                  'use strict';
                  var e, n, i, r;
                  (t.version = '0.5.0'),
                    (t.parse = function (t, r) {
                      return (
                        (n = String(t)),
                        (i = n.length),
                        a(r),
                        $t(),
                        (function (t) {
                          (p = m = o), e.locations && (y = new Wt());
                          (w = b = null), (x = []), Yt();
                          var n = t || ce(),
                            i = !0;
                          t || (n.body = []);
                          for (; f !== O; ) {
                            var r = Ce();
                            n.body.push(r), i && _e(r) && he(!0), (i = !1);
                          }
                          return de(n, 'Program');
                        })(e.program)
                      );
                    });
                  var s = (t.defaultOptions = {
                    ecmaVersion: 5,
                    strictSemicolons: !1,
                    allowTrailingCommas: !0,
                    forbidReserved: !1,
                    allowReturnOutsideFunction: !1,
                    locations: !1,
                    onComment: null,
                    ranges: !1,
                    program: null,
                    sourceFile: null,
                    directSourceFile: null,
                  });
                  function a(t) {
                    for (var n in ((e = t || {}), s))
                      Object.prototype.hasOwnProperty.call(e, n) ||
                        (e[n] = s[n]);
                    r = e.sourceFile || null;
                  }
                  var o,
                    h,
                    u,
                    l,
                    c,
                    f,
                    d,
                    _,
                    g,
                    v,
                    p,
                    m,
                    y,
                    w,
                    x,
                    b,
                    C = (t.getLineInfo = function (t, e) {
                      for (var n = 1, i = 0; ; ) {
                        Ut.lastIndex = i;
                        var r = Ut.exec(t);
                        if (!(r && r.index < e)) break;
                        ++n, (i = r.index + r[0].length);
                      }
                      return { line: n, column: e - i };
                    });
                  function S(t, e) {
                    var i = C(n, t);
                    e += ' (' + i.line + ':' + i.column + ')';
                    var r = new SyntaxError(e);
                    throw ((r.pos = t), (r.loc = i), (r.raisedAt = o), r);
                  }
                  t.tokenize = function (t, r) {
                    (n = String(t)), (i = n.length), a(r), $t();
                    var s = {};
                    function p(t) {
                      return (
                        (m = u),
                        Yt(t),
                        (s.start = h),
                        (s.end = u),
                        (s.startLoc = l),
                        (s.endLoc = c),
                        (s.type = f),
                        (s.value = d),
                        s
                      );
                    }
                    return (
                      (p.jumpTo = function (t, i) {
                        var r;
                        if (((o = t), e.locations))
                          for (
                            g = 1, v = Ut.lastIndex = 0;
                            (r = Ut.exec(n)) && r.index < t;

                          )
                            ++g, (v = r.index + r[0].length);
                        (_ = i), Kt();
                      }),
                      p
                    );
                  };
                  var I = [],
                    P = { type: 'num' },
                    M = { type: 'regexp' },
                    A = { type: 'string' },
                    T = { type: 'name' },
                    O = { type: 'eof' },
                    z = { keyword: 'break' },
                    E = { keyword: 'case', beforeExpr: !0 },
                    L = { keyword: 'catch' },
                    N = { keyword: 'continue' },
                    B = { keyword: 'debugger' },
                    F = { keyword: 'default' },
                    j = { keyword: 'do', isLoop: !0 },
                    R = { keyword: 'else', beforeExpr: !0 },
                    D = { keyword: 'finally' },
                    q = { keyword: 'for', isLoop: !0 },
                    V = { keyword: 'function' },
                    U = { keyword: 'if' },
                    H = { keyword: 'return', beforeExpr: !0 },
                    Z = { keyword: 'switch' },
                    W = { keyword: 'throw', beforeExpr: !0 },
                    $ = { keyword: 'try' },
                    G = { keyword: 'var' },
                    J = { keyword: 'while', isLoop: !0 },
                    X = { keyword: 'with' },
                    K = { keyword: 'new', beforeExpr: !0 },
                    Q = { keyword: 'this' },
                    Y = { keyword: 'null', atomValue: null },
                    tt = { keyword: 'true', atomValue: !0 },
                    et = { keyword: 'false', atomValue: !1 },
                    nt = { keyword: 'in', binop: 7, beforeExpr: !0 },
                    it = {
                      break: z,
                      case: E,
                      catch: L,
                      continue: N,
                      debugger: B,
                      default: F,
                      do: j,
                      else: R,
                      finally: D,
                      for: q,
                      function: V,
                      if: U,
                      return: H,
                      switch: Z,
                      throw: W,
                      try: $,
                      var: G,
                      while: J,
                      with: X,
                      null: Y,
                      true: tt,
                      false: et,
                      new: K,
                      in: nt,
                      instanceof: {
                        keyword: 'instanceof',
                        binop: 7,
                        beforeExpr: !0,
                      },
                      this: Q,
                      typeof: { keyword: 'typeof', prefix: !0, beforeExpr: !0 },
                      void: { keyword: 'void', prefix: !0, beforeExpr: !0 },
                      delete: { keyword: 'delete', prefix: !0, beforeExpr: !0 },
                    },
                    rt = { type: '[', beforeExpr: !0 },
                    st = { type: ']' },
                    at = { type: '{', beforeExpr: !0 },
                    ot = { type: '}' },
                    ht = { type: '(', beforeExpr: !0 },
                    ut = { type: ')' },
                    lt = { type: ',', beforeExpr: !0 },
                    ct = { type: ';', beforeExpr: !0 },
                    ft = { type: ':', beforeExpr: !0 },
                    dt = { type: '.' },
                    _t = { type: '?', beforeExpr: !0 },
                    gt = { binop: 10, beforeExpr: !0 },
                    vt = { isAssign: !0, beforeExpr: !0 },
                    pt = { isAssign: !0, beforeExpr: !0 },
                    mt = { postfix: !0, prefix: !0, isUpdate: !0 },
                    yt = { prefix: !0, beforeExpr: !0 },
                    wt = { binop: 1, beforeExpr: !0 },
                    xt = { binop: 2, beforeExpr: !0 },
                    bt = { binop: 3, beforeExpr: !0 },
                    Ct = { binop: 4, beforeExpr: !0 },
                    St = { binop: 5, beforeExpr: !0 },
                    kt = { binop: 6, beforeExpr: !0 },
                    It = { binop: 7, beforeExpr: !0 },
                    Pt = { binop: 8, beforeExpr: !0 },
                    Mt = { binop: 9, prefix: !0, beforeExpr: !0 },
                    At = { binop: 10, beforeExpr: !0 };
                  for (var Tt in ((t.tokTypes = {
                    bracketL: rt,
                    bracketR: st,
                    braceL: at,
                    braceR: ot,
                    parenL: ht,
                    parenR: ut,
                    comma: lt,
                    semi: ct,
                    colon: ft,
                    dot: dt,
                    question: _t,
                    slash: gt,
                    eq: vt,
                    name: T,
                    eof: O,
                    num: P,
                    regexp: M,
                    string: A,
                  }),
                  it))
                    t.tokTypes['_' + Tt] = it[Tt];
                  function Ot(t) {
                    t = t.split(' ');
                    var e = '',
                      n = [];
                    t: for (var i = 0; i < t.length; ++i) {
                      for (var r = 0; r < n.length; ++r)
                        if (n[r][0].length == t[i].length) {
                          n[r].push(t[i]);
                          continue t;
                        }
                      n.push([t[i]]);
                    }
                    function s(t) {
                      if (1 == t.length)
                        return (e +=
                          'return str === ' + JSON.stringify(t[0]) + ';');
                      e += 'switch(str){';
                      for (var n = 0; n < t.length; ++n)
                        e += 'case ' + JSON.stringify(t[n]) + ':';
                      e += 'return true}return false;';
                    }
                    if (n.length > 3) {
                      n.sort(function (t, e) {
                        return e.length - t.length;
                      }),
                        (e += 'switch(str.length){');
                      for (i = 0; i < n.length; ++i) {
                        var a = n[i];
                        (e += 'case ' + a[0].length + ':'), s(a);
                      }
                      e += '}';
                    } else s(t);
                    return new Function('str', e);
                  }
                  var zt,
                    Et = Ot(
                      'abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile',
                    ),
                    Lt = Ot('class enum extends super const export import'),
                    Nt = Ot(
                      'implements interface let package private protected public static yield',
                    ),
                    Bt = Ot('eval arguments'),
                    Ft = Ot(
                      'break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this',
                    ),
                    jt = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
                    Rt =
                      'ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ',
                    Dt = new RegExp('[' + Rt + ']'),
                    qt = new RegExp(
                      '[' +
                        Rt +
                        '̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ؚؠ-ىٲ-ۓۧ-ۨۻ-ۼܰ-݊ࠀ-ࠔࠛ-ࠣࠥ-ࠧࠩ-࠭ࡀ-ࡗࣤ-ࣾऀ-ःऺ-़ा-ॏ॑-ॗॢ-ॣ०-९ঁ-ঃ়া-ৄেৈৗয়-ৠਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢ-ૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୟ-ୠ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఁ-ఃె-ైొ-్ౕౖౢ-ౣ౦-౯ಂಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢ-ೣ೦-೯ംഃെ-ൈൗൢ-ൣ൦-൯ංඃ්ා-ුූෘ-ෟෲෳิ-ฺเ-ๅ๐-๙ິ-ູ່-ໍ໐-໙༘༙༠-༩༹༵༷ཁ-ཇཱ-྄྆-྇ྍ-ྗྙ-ྼ࿆က-ဩ၀-၉ၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟ᜎ-ᜐᜠ-ᜰᝀ-ᝐᝲᝳក-ឲ៝០-៩᠋-᠍᠐-᠙ᤠ-ᤫᤰ-᤻ᥑ-ᥭᦰ-ᧀᧈ-ᧉ᧐-᧙ᨀ-ᨕᨠ-ᩓ᩠-᩿᩼-᪉᪐-᪙ᭆ-ᭋ᭐-᭙᭫-᭳᮰-᮹᯦-᯳ᰀ-ᰢ᱀-᱉ᱛ-ᱽ᳐-᳒ᴀ-ᶾḁ-ἕ‌‍‿⁀⁔⃐-⃥⃜⃡-⃰ⶁ-ⶖⷠ-ⷿ〡-〨゙゚Ꙁ-ꙭꙴ-꙽ꚟ꛰-꛱ꟸ-ꠀ꠆ꠋꠣ-ꠧꢀ-ꢁꢴ-꣄꣐-꣙ꣳ-ꣷ꤀-꤉ꤦ-꤭ꤰ-ꥅꦀ-ꦃ꦳-꧀ꨀ-ꨧꩀ-ꩁꩌ-ꩍ꩐-꩙ꩻꫠ-ꫩꫲ-ꫳꯀ-ꯡ꯬꯭꯰-꯹ﬠ-ﬨ︀-️︠-︦︳︴﹍-﹏０-９＿]',
                    ),
                    Vt = /[\n\r\u2028\u2029]/,
                    Ut = /\r\n|[\n\r\u2028\u2029]/g,
                    Ht = (t.isIdentifierStart = function (t) {
                      return t < 65
                        ? 36 === t
                        : t < 91 ||
                            (t < 97
                              ? 95 === t
                              : t < 123 ||
                                (t >= 170 && Dt.test(String.fromCharCode(t))));
                    }),
                    Zt = (t.isIdentifierChar = function (t) {
                      return t < 48
                        ? 36 === t
                        : t < 58 ||
                            (!(t < 65) &&
                              (t < 91 ||
                                (t < 97
                                  ? 95 === t
                                  : t < 123 ||
                                    (t >= 170 &&
                                      qt.test(String.fromCharCode(t))))));
                    });
                  function Wt() {
                    (this.line = g), (this.column = o - v);
                  }
                  function $t() {
                    (g = 1), (o = v = 0), (_ = !0), Kt();
                  }
                  function Gt(t, n) {
                    (u = o),
                      e.locations && (c = new Wt()),
                      (f = t),
                      Kt(),
                      (d = n),
                      (_ = t.beforeExpr);
                  }
                  function Jt() {
                    var t,
                      i = e.onComment && e.locations && new Wt(),
                      r = o,
                      s = n.indexOf('*/', (o += 2));
                    if (
                      (-1 === s && S(o - 2, 'Unterminated comment'),
                      (o = s + 2),
                      e.locations)
                    )
                      for (Ut.lastIndex = r; (t = Ut.exec(n)) && t.index < o; )
                        ++g, (v = t.index + t[0].length);
                    e.onComment &&
                      e.onComment(
                        !0,
                        n.slice(r + 2, s),
                        r,
                        o,
                        i,
                        e.locations && new Wt(),
                      );
                  }
                  function Xt() {
                    for (
                      var t = o,
                        r = e.onComment && e.locations && new Wt(),
                        s = n.charCodeAt((o += 2));
                      o < i && 10 !== s && 13 !== s && 8232 !== s && 8233 !== s;

                    )
                      ++o, (s = n.charCodeAt(o));
                    e.onComment &&
                      e.onComment(
                        !1,
                        n.slice(t + 2, o),
                        t,
                        o,
                        r,
                        e.locations && new Wt(),
                      );
                  }
                  function Kt() {
                    for (; o < i; ) {
                      var t = n.charCodeAt(o);
                      if (32 === t) ++o;
                      else if (13 === t) {
                        ++o,
                          10 === (r = n.charCodeAt(o)) && ++o,
                          e.locations && (++g, (v = o));
                      } else if (10 === t || 8232 === t || 8233 === t)
                        ++o, e.locations && (++g, (v = o));
                      else if (t > 8 && t < 14) ++o;
                      else if (47 === t) {
                        var r;
                        if (42 === (r = n.charCodeAt(o + 1))) Jt();
                        else {
                          if (47 !== r) break;
                          Xt();
                        }
                      } else if (160 === t) ++o;
                      else {
                        if (!(t >= 5760 && jt.test(String.fromCharCode(t))))
                          break;
                        ++o;
                      }
                    }
                  }
                  function Qt(t) {
                    switch (t) {
                      case 46:
                        return (function () {
                          var t = n.charCodeAt(o + 1);
                          return t >= 48 && t <= 57 ? ie(!0) : (++o, Gt(dt));
                        })();
                      case 40:
                        return ++o, Gt(ht);
                      case 41:
                        return ++o, Gt(ut);
                      case 59:
                        return ++o, Gt(ct);
                      case 44:
                        return ++o, Gt(lt);
                      case 91:
                        return ++o, Gt(rt);
                      case 93:
                        return ++o, Gt(st);
                      case 123:
                        return ++o, Gt(at);
                      case 125:
                        return ++o, Gt(ot);
                      case 58:
                        return ++o, Gt(ft);
                      case 63:
                        return ++o, Gt(_t);
                      case 48:
                        var r = n.charCodeAt(o + 1);
                        if (120 === r || 88 === r)
                          return (function () {
                            o += 2;
                            var t = ne(16);
                            null == t &&
                              S(h + 2, 'Expected hexadecimal number');
                            Ht(n.charCodeAt(o)) &&
                              S(o, 'Identifier directly after number');
                            return Gt(P, t);
                          })();
                      case 49:
                      case 50:
                      case 51:
                      case 52:
                      case 53:
                      case 54:
                      case 55:
                      case 56:
                      case 57:
                        return ie(!1);
                      case 34:
                      case 39:
                        return (function (t) {
                          o++;
                          for (var r = ''; ; ) {
                            o >= i && S(h, 'Unterminated string constant');
                            var s = n.charCodeAt(o);
                            if (s === t) return ++o, Gt(A, r);
                            if (92 === s) {
                              s = n.charCodeAt(++o);
                              var a = /^[0-7]+/.exec(n.slice(o, o + 3));
                              for (a && (a = a[0]); a && parseInt(a, 8) > 255; )
                                a = a.slice(0, -1);
                              if (('0' === a && (a = null), ++o, a))
                                b && S(o - 2, 'Octal literal in strict mode'),
                                  (r += String.fromCharCode(parseInt(a, 8))),
                                  (o += a.length - 1);
                              else
                                switch (s) {
                                  case 110:
                                    r += '\n';
                                    break;
                                  case 114:
                                    r += '\r';
                                    break;
                                  case 120:
                                    r += String.fromCharCode(re(2));
                                    break;
                                  case 117:
                                    r += String.fromCharCode(re(4));
                                    break;
                                  case 85:
                                    r += String.fromCharCode(re(8));
                                    break;
                                  case 116:
                                    r += '\t';
                                    break;
                                  case 98:
                                    r += '\b';
                                    break;
                                  case 118:
                                    r += '\v';
                                    break;
                                  case 102:
                                    r += '\f';
                                    break;
                                  case 48:
                                    r += '\0';
                                    break;
                                  case 13:
                                    10 === n.charCodeAt(o) && ++o;
                                  case 10:
                                    e.locations && ((v = o), ++g);
                                    break;
                                  default:
                                    r += String.fromCharCode(s);
                                }
                            } else
                              (13 !== s &&
                                10 !== s &&
                                8232 !== s &&
                                8233 !== s) ||
                                S(h, 'Unterminated string constant'),
                                (r += String.fromCharCode(s)),
                                ++o;
                          }
                        })(t);
                      case 47:
                        return (function () {
                          var t = n.charCodeAt(o + 1);
                          return _
                            ? (++o, ee())
                            : 61 === t
                            ? te(pt, 2)
                            : te(gt, 1);
                        })();
                      case 37:
                      case 42:
                        return 61 === n.charCodeAt(o + 1)
                          ? te(pt, 2)
                          : te(At, 1);
                      case 124:
                      case 38:
                        return (function (t) {
                          var e = n.charCodeAt(o + 1);
                          return e === t
                            ? te(124 === t ? wt : xt, 2)
                            : 61 === e
                            ? te(pt, 2)
                            : te(124 === t ? bt : St, 1);
                        })(t);
                      case 94:
                        return 61 === n.charCodeAt(o + 1)
                          ? te(pt, 2)
                          : te(Ct, 1);
                      case 43:
                      case 45:
                        return (function (t) {
                          var e = n.charCodeAt(o + 1);
                          return e === t
                            ? 45 == e &&
                              62 == n.charCodeAt(o + 2) &&
                              Vt.test(n.slice(m, o))
                              ? ((o += 3), Xt(), Kt(), Yt())
                              : te(mt, 2)
                            : 61 === e
                            ? te(pt, 2)
                            : te(Mt, 1);
                        })(t);
                      case 60:
                      case 62:
                        return (function (t) {
                          var e = n.charCodeAt(o + 1),
                            i = 1;
                          return e === t
                            ? ((i =
                                62 === t && 62 === n.charCodeAt(o + 2) ? 3 : 2),
                              61 === n.charCodeAt(o + i)
                                ? te(pt, i + 1)
                                : te(Pt, i))
                            : 33 == e &&
                              60 == t &&
                              45 == n.charCodeAt(o + 2) &&
                              45 == n.charCodeAt(o + 3)
                            ? ((o += 4), Xt(), Kt(), Yt())
                            : (61 === e &&
                                (i = 61 === n.charCodeAt(o + 2) ? 3 : 2),
                              te(It, i));
                        })(t);
                      case 61:
                      case 33:
                        return (function (t) {
                          return 61 === n.charCodeAt(o + 1)
                            ? te(kt, 61 === n.charCodeAt(o + 2) ? 3 : 2)
                            : te(61 === t ? vt : yt, 1);
                        })(t);
                      case 126:
                        return te(yt, 1);
                    }
                    return !1;
                  }
                  function Yt(t) {
                    if (
                      (t ? (o = h + 1) : (h = o),
                      e.locations && (l = new Wt()),
                      t)
                    )
                      return ee();
                    if (o >= i) return Gt(O);
                    var r = n.charCodeAt(o);
                    if (Ht(r) || 92 === r) return ae();
                    var s = Qt(r);
                    if (!1 === s) {
                      var a = String.fromCharCode(r);
                      if ('\\' === a || Dt.test(a)) return ae();
                      S(o, "Unexpected character '" + a + "'");
                    }
                    return s;
                  }
                  function te(t, e) {
                    var i = n.slice(o, o + e);
                    (o += e), Gt(t, i);
                  }
                  function ee() {
                    for (var t, e, r = o; ; ) {
                      o >= i && S(r, 'Unterminated regular expression');
                      var s = n.charAt(o);
                      if (
                        (Vt.test(s) && S(r, 'Unterminated regular expression'),
                        t)
                      )
                        t = !1;
                      else {
                        if ('[' === s) e = !0;
                        else if (']' === s && e) e = !1;
                        else if ('/' === s && !e) break;
                        t = '\\' === s;
                      }
                      ++o;
                    }
                    var a = n.slice(r, o);
                    ++o;
                    var h = se();
                    h && !/^[gmsiy]*$/.test(h) && S(r, 'Invalid regexp flag');
                    try {
                      var u = new RegExp(a, h);
                    } catch (k) {
                      k instanceof SyntaxError && S(r, k.message), S(k);
                    }
                    return Gt(M, u);
                  }
                  function ne(t, e) {
                    for (
                      var i = o, r = 0, s = 0, a = null == e ? 1 / 0 : e;
                      s < a;
                      ++s
                    ) {
                      var h,
                        u = n.charCodeAt(o);
                      if (
                        (h =
                          u >= 97
                            ? u - 97 + 10
                            : u >= 65
                            ? u - 65 + 10
                            : u >= 48 && u <= 57
                            ? u - 48
                            : 1 / 0) >= t
                      )
                        break;
                      ++o, (r = r * t + h);
                    }
                    return o === i || (null != e && o - i !== e) ? null : r;
                  }
                  function ie(t) {
                    var e = o,
                      i = !1,
                      r = 48 === n.charCodeAt(o);
                    t || null !== ne(10) || S(e, 'Invalid number'),
                      46 === n.charCodeAt(o) && (++o, ne(10), (i = !0));
                    var s = n.charCodeAt(o);
                    (69 !== s && 101 !== s) ||
                      ((43 !== (s = n.charCodeAt(++o)) && 45 !== s) || ++o,
                      null === ne(10) && S(e, 'Invalid number'),
                      (i = !0)),
                      Ht(n.charCodeAt(o)) &&
                        S(o, 'Identifier directly after number');
                    var a,
                      h = n.slice(e, o);
                    return (
                      i
                        ? (a = parseFloat(h))
                        : r && 1 !== h.length
                        ? /[89]/.test(h) || b
                          ? S(e, 'Invalid number')
                          : (a = parseInt(h, 8))
                        : (a = parseInt(h, 10)),
                      Gt(P, a)
                    );
                  }
                  function re(t) {
                    var e = ne(16, t);
                    return (
                      null === e && S(h, 'Bad character escape sequence'), e
                    );
                  }
                  function se() {
                    zt = !1;
                    for (var t, e = !0, i = o; ; ) {
                      var r = n.charCodeAt(o);
                      if (Zt(r)) zt && (t += n.charAt(o)), ++o;
                      else {
                        if (92 !== r) break;
                        zt || (t = n.slice(i, o)),
                          (zt = !0),
                          117 != n.charCodeAt(++o) &&
                            S(o, 'Expecting Unicode escape sequence \\uXXXX'),
                          ++o;
                        var s = re(4),
                          a = String.fromCharCode(s);
                        a || S(o - 1, 'Invalid Unicode escape'),
                          (e ? Ht(s) : Zt(s)) ||
                            S(o - 4, 'Invalid Unicode escape'),
                          (t += a);
                      }
                      e = !1;
                    }
                    return zt ? t : n.slice(i, o);
                  }
                  function ae() {
                    var t = se(),
                      e = T;
                    return !zt && Ft(t) && (e = it[t]), Gt(e, t);
                  }
                  function oe() {
                    (p = h), (m = u), (y = c), Yt();
                  }
                  function he(t) {
                    if (((b = t), (o = h), e.locations))
                      for (; o < v; ) (v = n.lastIndexOf('\n', v - 2) + 1), --g;
                    Kt(), Yt();
                  }
                  function ue() {
                    (this.type = null), (this.start = h), (this.end = null);
                  }
                  function le() {
                    (this.start = l),
                      (this.end = null),
                      null !== r && (this.source = r);
                  }
                  function ce() {
                    var t = new ue();
                    return (
                      e.locations && (t.loc = new le()),
                      e.directSourceFile && (t.sourceFile = e.directSourceFile),
                      e.ranges && (t.range = [h, 0]),
                      t
                    );
                  }
                  function fe(t) {
                    var n = new ue();
                    return (
                      (n.start = t.start),
                      e.locations &&
                        ((n.loc = new le()), (n.loc.start = t.loc.start)),
                      e.ranges && (n.range = [t.range[0], 0]),
                      n
                    );
                  }
                  function de(t, n) {
                    return (
                      (t.type = n),
                      (t.end = m),
                      e.locations && (t.loc.end = y),
                      e.ranges && (t.range[1] = m),
                      t
                    );
                  }
                  function _e(t) {
                    return (
                      e.ecmaVersion >= 5 &&
                      'ExpressionStatement' === t.type &&
                      'Literal' === t.expression.type &&
                      'use strict' === t.expression.value
                    );
                  }
                  function ge(t) {
                    if (f === t) return oe(), !0;
                  }
                  function ve() {
                    return (
                      !e.strictSemicolons &&
                      (f === O || f === ot || Vt.test(n.slice(m, h)))
                    );
                  }
                  function pe() {
                    ge(ct) || ve() || ye();
                  }
                  function me(t) {
                    f === t ? oe() : ye();
                  }
                  function ye() {
                    S(h, 'Unexpected token');
                  }
                  function we(t) {
                    'Identifier' !== t.type &&
                      'MemberExpression' !== t.type &&
                      S(t.start, 'Assigning to rvalue'),
                      b &&
                        'Identifier' === t.type &&
                        Bt(t.name) &&
                        S(
                          t.start,
                          'Assigning to ' + t.name + ' in strict mode',
                        );
                  }
                  var xe = { kind: 'loop' },
                    be = { kind: 'switch' };
                  function Ce() {
                    (f === gt || (f === pt && '/=' == d)) && Yt(!0);
                    var t = f,
                      i = ce();
                    switch (t) {
                      case z:
                      case N:
                        oe();
                        var r = t === z;
                        ge(ct) || ve()
                          ? (i.label = null)
                          : f !== T
                          ? ye()
                          : ((i.label = Fe()), pe());
                        for (var s = 0; s < x.length; ++s) {
                          var a = x[s];
                          if (null == i.label || a.name === i.label.name) {
                            if (null != a.kind && (r || 'loop' === a.kind))
                              break;
                            if (i.label && r) break;
                          }
                        }
                        return (
                          s === x.length &&
                            S(i.start, 'Unsyntactic ' + t.keyword),
                          de(i, r ? 'BreakStatement' : 'ContinueStatement')
                        );
                      case B:
                        return oe(), pe(), de(i, 'DebuggerStatement');
                      case j:
                        return (
                          oe(),
                          x.push(xe),
                          (i.body = Ce()),
                          x.pop(),
                          me(J),
                          (i.test = Se()),
                          pe(),
                          de(i, 'DoWhileStatement')
                        );
                      case q:
                        if ((oe(), x.push(xe), me(ht), f === ct))
                          return Ie(i, null);
                        if (f === G) {
                          var o = ce();
                          return (
                            oe(),
                            Me(o, !0),
                            de(o, 'VariableDeclaration'),
                            1 === o.declarations.length && ge(nt)
                              ? Pe(i, o)
                              : Ie(i, o)
                          );
                        }
                        o = Ae(!1, !0);
                        return ge(nt) ? (we(o), Pe(i, o)) : Ie(i, o);
                      case V:
                        return oe(), Ne(i, !0);
                      case U:
                        return (
                          oe(),
                          (i.test = Se()),
                          (i.consequent = Ce()),
                          (i.alternate = ge(R) ? Ce() : null),
                          de(i, 'IfStatement')
                        );
                      case H:
                        return (
                          w ||
                            e.allowReturnOutsideFunction ||
                            S(h, "'return' outside of function"),
                          oe(),
                          ge(ct) || ve()
                            ? (i.argument = null)
                            : ((i.argument = Ae()), pe()),
                          de(i, 'ReturnStatement')
                        );
                      case Z:
                        oe(),
                          (i.discriminant = Se()),
                          (i.cases = []),
                          me(at),
                          x.push(be);
                        for (var u, l; f != ot; )
                          if (f === E || f === F) {
                            var c = f === E;
                            u && de(u, 'SwitchCase'),
                              i.cases.push((u = ce())),
                              (u.consequent = []),
                              oe(),
                              c
                                ? (u.test = Ae())
                                : (l && S(p, 'Multiple default clauses'),
                                  (l = !0),
                                  (u.test = null)),
                              me(ft);
                          } else u || ye(), u.consequent.push(Ce());
                        return (
                          u && de(u, 'SwitchCase'),
                          oe(),
                          x.pop(),
                          de(i, 'SwitchStatement')
                        );
                      case W:
                        return (
                          oe(),
                          Vt.test(n.slice(m, h)) &&
                            S(m, 'Illegal newline after throw'),
                          (i.argument = Ae()),
                          pe(),
                          de(i, 'ThrowStatement')
                        );
                      case $:
                        if (
                          (oe(), (i.block = ke()), (i.handler = null), f === L)
                        ) {
                          var _ = ce();
                          oe(),
                            me(ht),
                            (_.param = Fe()),
                            b &&
                              Bt(_.param.name) &&
                              S(
                                _.param.start,
                                'Binding ' + _.param.name + ' in strict mode',
                              ),
                            me(ut),
                            (_.guard = null),
                            (_.body = ke()),
                            (i.handler = de(_, 'CatchClause'));
                        }
                        return (
                          (i.guardedHandlers = I),
                          (i.finalizer = ge(D) ? ke() : null),
                          i.handler ||
                            i.finalizer ||
                            S(i.start, 'Missing catch or finally clause'),
                          de(i, 'TryStatement')
                        );
                      case G:
                        return oe(), Me(i), pe(), de(i, 'VariableDeclaration');
                      case J:
                        return (
                          oe(),
                          (i.test = Se()),
                          x.push(xe),
                          (i.body = Ce()),
                          x.pop(),
                          de(i, 'WhileStatement')
                        );
                      case X:
                        return (
                          b && S(h, "'with' in strict mode"),
                          oe(),
                          (i.object = Se()),
                          (i.body = Ce()),
                          de(i, 'WithStatement')
                        );
                      case at:
                        return ke();
                      case ct:
                        return oe(), de(i, 'EmptyStatement');
                      default:
                        var g = d,
                          v = Ae();
                        if (t === T && 'Identifier' === v.type && ge(ft)) {
                          for (s = 0; s < x.length; ++s)
                            x[s].name === g &&
                              S(
                                v.start,
                                "Label '" + g + "' is already declared",
                              );
                          var y = f.isLoop ? 'loop' : f === Z ? 'switch' : null;
                          return (
                            x.push({ name: g, kind: y }),
                            (i.body = Ce()),
                            x.pop(),
                            (i.label = v),
                            de(i, 'LabeledStatement')
                          );
                        }
                        return (
                          (i.expression = v), pe(), de(i, 'ExpressionStatement')
                        );
                    }
                  }
                  function Se() {
                    me(ht);
                    var t = Ae();
                    return me(ut), t;
                  }
                  function ke(t) {
                    var e,
                      n = ce(),
                      i = !0,
                      r = !1;
                    for (n.body = [], me(at); !ge(ot); ) {
                      var s = Ce();
                      n.body.push(s),
                        i && t && _e(s) && ((e = r), he((r = !0))),
                        (i = !1);
                    }
                    return r && !e && he(!1), de(n, 'BlockStatement');
                  }
                  function Ie(t, e) {
                    return (
                      (t.init = e),
                      me(ct),
                      (t.test = f === ct ? null : Ae()),
                      me(ct),
                      (t.update = f === ut ? null : Ae()),
                      me(ut),
                      (t.body = Ce()),
                      x.pop(),
                      de(t, 'ForStatement')
                    );
                  }
                  function Pe(t, e) {
                    return (
                      (t.left = e),
                      (t.right = Ae()),
                      me(ut),
                      (t.body = Ce()),
                      x.pop(),
                      de(t, 'ForInStatement')
                    );
                  }
                  function Me(t, e) {
                    for (t.declarations = [], t.kind = 'var'; ; ) {
                      var n = ce();
                      if (
                        ((n.id = Fe()),
                        b &&
                          Bt(n.id.name) &&
                          S(
                            n.id.start,
                            'Binding ' + n.id.name + ' in strict mode',
                          ),
                        (n.init = ge(vt) ? Ae(!0, e) : null),
                        t.declarations.push(de(n, 'VariableDeclarator')),
                        !ge(lt))
                      )
                        break;
                    }
                    return t;
                  }
                  function Ae(t, e) {
                    var n = Te(e);
                    if (!t && f === lt) {
                      var i = fe(n);
                      for (i.expressions = [n]; ge(lt); )
                        i.expressions.push(Te(e));
                      return de(i, 'SequenceExpression');
                    }
                    return n;
                  }
                  function Te(t) {
                    var e = (function (t) {
                      var e = (function (t) {
                        return (function t(e, n, i) {
                          var r = f.binop;
                          if (null != r && (!i || f !== nt) && r > n) {
                            var s = fe(e);
                            (s.left = e), (s.operator = d);
                            var a = f;
                            oe(), (s.right = t(Oe(), r, i));
                            var o = de(
                              s,
                              a === wt || a === xt
                                ? 'LogicalExpression'
                                : 'BinaryExpression',
                            );
                            return t(o, n, i);
                          }
                          return e;
                        })(Oe(), -1, t);
                      })(t);
                      if (ge(_t)) {
                        var n = fe(e);
                        return (
                          (n.test = e),
                          (n.consequent = Ae(!0)),
                          me(ft),
                          (n.alternate = Ae(!0, t)),
                          de(n, 'ConditionalExpression')
                        );
                      }
                      return e;
                    })(t);
                    if (f.isAssign) {
                      var n = fe(e);
                      return (
                        (n.operator = d),
                        (n.left = e),
                        oe(),
                        (n.right = Te(t)),
                        we(e),
                        de(n, 'AssignmentExpression')
                      );
                    }
                    return e;
                  }
                  function Oe() {
                    if (f.prefix) {
                      var t = ce(),
                        e = f.isUpdate;
                      return (
                        (t.operator = d),
                        (t.prefix = !0),
                        (_ = !0),
                        oe(),
                        (t.argument = Oe()),
                        e
                          ? we(t.argument)
                          : b &&
                            'delete' === t.operator &&
                            'Identifier' === t.argument.type &&
                            S(
                              t.start,
                              'Deleting local variable in strict mode',
                            ),
                        de(t, e ? 'UpdateExpression' : 'UnaryExpression')
                      );
                    }
                    for (var n = ze(Ee()); f.postfix && !ve(); ) {
                      ((t = fe(n)).operator = d),
                        (t.prefix = !1),
                        (t.argument = n),
                        we(n),
                        oe(),
                        (n = de(t, 'UpdateExpression'));
                    }
                    return n;
                  }
                  function ze(t, e) {
                    var n;
                    return ge(dt)
                      ? (((n = fe(t)).object = t),
                        (n.property = Fe(!0)),
                        (n.computed = !1),
                        ze(de(n, 'MemberExpression'), e))
                      : ge(rt)
                      ? (((n = fe(t)).object = t),
                        (n.property = Ae()),
                        (n.computed = !0),
                        me(st),
                        ze(de(n, 'MemberExpression'), e))
                      : !e && ge(ht)
                      ? (((n = fe(t)).callee = t),
                        (n.arguments = Be(ut, !1)),
                        ze(de(n, 'CallExpression'), e))
                      : t;
                  }
                  function Ee() {
                    switch (f) {
                      case Q:
                        var t = ce();
                        return oe(), de(t, 'ThisExpression');
                      case T:
                        return Fe();
                      case P:
                      case A:
                      case M:
                        return (
                          ((t = ce()).value = d),
                          (t.raw = n.slice(h, u)),
                          oe(),
                          de(t, 'Literal')
                        );
                      case Y:
                      case tt:
                      case et:
                        return (
                          ((t = ce()).value = f.atomValue),
                          (t.raw = f.keyword),
                          oe(),
                          de(t, 'Literal')
                        );
                      case ht:
                        var i = l,
                          r = h;
                        oe();
                        var s = Ae();
                        return (
                          (s.start = r),
                          (s.end = u),
                          e.locations && ((s.loc.start = i), (s.loc.end = c)),
                          e.ranges && (s.range = [r, u]),
                          me(ut),
                          s
                        );
                      case rt:
                        t = ce();
                        return (
                          oe(),
                          (t.elements = Be(st, !0, !0)),
                          de(t, 'ArrayExpression')
                        );
                      case at:
                        return (function () {
                          var t = ce(),
                            n = !0,
                            i = !1;
                          (t.properties = []), oe();
                          for (; !ge(ot); ) {
                            if (n) n = !1;
                            else if ((me(lt), e.allowTrailingCommas && ge(ot)))
                              break;
                            var r,
                              s = { key: Le() },
                              a = !1;
                            if (
                              (ge(ft)
                                ? ((s.value = Ae(!0)), (r = s.kind = 'init'))
                                : e.ecmaVersion >= 5 &&
                                  'Identifier' === s.key.type &&
                                  ('get' === s.key.name || 'set' === s.key.name)
                                ? ((a = i = !0),
                                  (r = s.kind = s.key.name),
                                  (s.key = Le()),
                                  f !== ht && ye(),
                                  (s.value = Ne(ce(), !1)))
                                : ye(),
                              'Identifier' === s.key.type && (b || i))
                            )
                              for (var o = 0; o < t.properties.length; ++o) {
                                var h = t.properties[o];
                                if (h.key.name === s.key.name) {
                                  var u =
                                    r == h.kind ||
                                    (a && 'init' === h.kind) ||
                                    ('init' === r &&
                                      ('get' === h.kind || 'set' === h.kind));
                                  u &&
                                    !b &&
                                    'init' === r &&
                                    'init' === h.kind &&
                                    (u = !1),
                                    u &&
                                      S(
                                        s.key.start,
                                        'Redefinition of property',
                                      );
                                }
                              }
                            t.properties.push(s);
                          }
                          return de(t, 'ObjectExpression');
                        })();
                      case V:
                        t = ce();
                        return oe(), Ne(t, !1);
                      case K:
                        return (function () {
                          var t = ce();
                          oe(),
                            (t.callee = ze(Ee(), !0)),
                            ge(ht)
                              ? (t.arguments = Be(ut, !1))
                              : (t.arguments = I);
                          return de(t, 'NewExpression');
                        })();
                      default:
                        ye();
                    }
                  }
                  function Le() {
                    return f === P || f === A ? Ee() : Fe(!0);
                  }
                  function Ne(t, e) {
                    f === T ? (t.id = Fe()) : e ? ye() : (t.id = null),
                      (t.params = []);
                    var n = !0;
                    for (me(ht); !ge(ut); )
                      n ? (n = !1) : me(lt), t.params.push(Fe());
                    var i = w,
                      r = x;
                    if (
                      ((w = !0),
                      (x = []),
                      (t.body = ke(!0)),
                      (w = i),
                      (x = r),
                      b || (t.body.body.length && _e(t.body.body[0])))
                    )
                      for (var s = t.id ? -1 : 0; s < t.params.length; ++s) {
                        var a = s < 0 ? t.id : t.params[s];
                        if (
                          ((Nt(a.name) || Bt(a.name)) &&
                            S(
                              a.start,
                              "Defining '" + a.name + "' in strict mode",
                            ),
                          s >= 0)
                        )
                          for (var o = 0; o < s; ++o)
                            a.name === t.params[o].name &&
                              S(a.start, 'Argument name clash in strict mode');
                      }
                    return de(
                      t,
                      e ? 'FunctionDeclaration' : 'FunctionExpression',
                    );
                  }
                  function Be(t, n, i) {
                    for (var r = [], s = !0; !ge(t); ) {
                      if (s) s = !1;
                      else if ((me(lt), n && e.allowTrailingCommas && ge(t)))
                        break;
                      i && f === lt ? r.push(null) : r.push(Ae(!0));
                    }
                    return r;
                  }
                  function Fe(t) {
                    var i = ce();
                    return (
                      t && 'everywhere' == e.forbidReserved && (t = !1),
                      f === T
                        ? (!t &&
                            ((e.forbidReserved &&
                              (3 === e.ecmaVersion ? Et : Lt)(d)) ||
                              (b && Nt(d))) &&
                            -1 == n.slice(h, u).indexOf('\\') &&
                            S(h, "The keyword '" + d + "' is reserved"),
                          (i.name = d))
                        : t && f.keyword
                        ? (i.name = f.keyword)
                        : ye(),
                      (_ = !1),
                      oe(),
                      de(i, 'Identifier')
                    );
                  }
                }),
                'object' == i(n) && 'object' == i(o)
                  ? l(n)
                  : 'function' == typeof t && t.amd
                  ? t(['exports'], l)
                  : l(u.acorn || (u.acorn = {})),
                f.version || (f = null));
              function d(t, e) {
                return (c.acorn || f).parse(t, e);
              }
              var g = {
                  '+': '__add',
                  '-': '__subtract',
                  '*': '__multiply',
                  '/': '__divide',
                  '%': '__modulo',
                  '==': '__equals',
                  '!=': '__equals',
                },
                p = { '-': '__negate', '+': '__self' },
                m = a.each(
                  [
                    'add',
                    'subtract',
                    'multiply',
                    'divide',
                    'modulo',
                    'equals',
                    'negate',
                  ],
                  function (t) {
                    this['__' + t] = '#' + t;
                  },
                  {
                    __self: function () {
                      return this;
                    },
                  },
                );
              function y(t, e, n) {
                var i = g[e];
                if (t && t[i]) {
                  var r = t[i](n);
                  return '!=' === e ? !r : r;
                }
                switch (e) {
                  case '+':
                    return t + n;
                  case '-':
                    return t - n;
                  case '*':
                    return t * n;
                  case '/':
                    return t / n;
                  case '%':
                    return t % n;
                  case '==':
                    return t == n;
                  case '!=':
                    return t != n;
                }
              }
              function w(t, e) {
                var n = p[t];
                if (e && e[n]) return e[n]();
                switch (t) {
                  case '+':
                    return +e;
                  case '-':
                    return -e;
                }
              }
              function x(t, n) {
                if (!t) return '';
                var a = [];
                function o(t) {
                  for (var e = 0, n = a.length; e < n; e++) {
                    var i = a[e];
                    if (i[0] >= t) break;
                    t += i[1];
                  }
                  return t;
                }
                function h(e) {
                  return t.substring(o(e.range[0]), o(e.range[1]));
                }
                function u(e, n) {
                  for (
                    var i = o(e.range[0]),
                      r = o(e.range[1]),
                      s = 0,
                      h = a.length - 1;
                    h >= 0;
                    h--
                  )
                    if (i > a[h][0]) {
                      s = h + 1;
                      break;
                    }
                  a.splice(s, 0, [i, n.length - r + i]),
                    (t = t.substring(0, i) + n + t.substring(r));
                }
                function l(e, n) {
                  switch (e.type) {
                    case 'UnaryExpression':
                      if (e.operator in p && 'Literal' !== e.argument.type) {
                        var i = h(e.argument);
                        u(e, '$__("' + e.operator + '", ' + i + ')');
                      }
                      break;
                    case 'BinaryExpression':
                      if (e.operator in g && 'Literal' !== e.left.type) {
                        var r = h(e.left),
                          s = h(e.right),
                          a = (function (e, n) {
                            return t.substring(o(e.range[1]), o(n.range[0]));
                          })(e.left, e.right),
                          l = e.operator;
                        u(
                          e,
                          '__$__(' +
                            r +
                            ',' +
                            a.replace(new RegExp('\\' + l), '"' + l + '"') +
                            ', ' +
                            s +
                            ')',
                        );
                      }
                      break;
                    case 'UpdateExpression':
                    case 'AssignmentExpression':
                      var c = n && n.type;
                      if (
                        !(
                          'ForStatement' === c ||
                          ('BinaryExpression' === c &&
                            /^[=!<>]/.test(n.operator)) ||
                          ('MemberExpression' === c && n.computed)
                        )
                      )
                        if ('UpdateExpression' === e.type) {
                          var f =
                            (i = h(e.argument)) +
                            ' = ' +
                            (d =
                              '__$__(' + i + ', "' + e.operator[0] + '", 1)');
                          e.prefix
                            ? (f = '(' + f + ')')
                            : ('AssignmentExpression' !== c &&
                                'VariableDeclarator' !== c &&
                                'BinaryExpression' !== c) ||
                              (h(n.left || n.id) === i && (f = d),
                              (f = i + '; ' + f)),
                            u(e, f);
                        } else if (
                          /^.=$/.test(e.operator) &&
                          'Literal' !== e.left.type
                        ) {
                          (r = h(e.left)), (s = h(e.right));
                          var d =
                            r +
                            ' = __$__(' +
                            r +
                            ', "' +
                            e.operator[0] +
                            '", ' +
                            s +
                            ')';
                          u(e, /^\(.*\)$/.test(h(e)) ? '(' + d + ')' : d);
                        }
                  }
                }
                var c,
                  f = (n = n || {}).url || '',
                  _ = n.sourceMaps,
                  v = n.paperFeatures || {},
                  m = n.source || t,
                  y = n.offset || 0,
                  w = ht.agent,
                  x = w.versionNumber,
                  b = !1,
                  C = /\r\n|\n|\r/gm;
                if (
                  _ &&
                  ((w.chrome && x >= 30) ||
                    (w.webkit && x >= 537.76) ||
                    (w.firefox && x >= 23) ||
                    w.node)
                ) {
                  if (w.node) y -= 2;
                  else if (r && f && !r.location.href.indexOf(f)) {
                    var S = s.getElementsByTagName('html')[0].innerHTML;
                    y = S.substr(0, S.indexOf(t) + 1).match(C).length + 1;
                  }
                  var k = [
                    'AA' +
                      (function (t) {
                        var e = '';
                        for (
                          t = (Math.abs(t) << 1) + (t < 0 ? 1 : 0);
                          t || !e;

                        ) {
                          var n = 31 & t;
                          (t >>= 5) && (n |= 32),
                            (e += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'[
                              n
                            ]);
                        }
                        return e;
                      })(
                        (b =
                          y > 0 &&
                          !(
                            (w.chrome && x >= 36) ||
                            (w.safari && x >= 600) ||
                            (w.firefox && x >= 40) ||
                            w.node
                          ))
                          ? 0
                          : y,
                      ) +
                      'A',
                  ];
                  (k.length = (t.match(C) || []).length + 1 + (b ? y : 0)),
                    (c = {
                      version: 3,
                      file: f,
                      names: [],
                      mappings: k.join(';AACA'),
                      sourceRoot: '',
                      sources: [f],
                      sourcesContent: [m],
                    });
                }
                return (
                  (!1 === v.operatorOverloading && !1 === v.moduleExports) ||
                    (function t(e, n, r) {
                      if (e) {
                        for (var s in e)
                          if ('range' !== s && 'loc' !== s) {
                            var a = e[s];
                            if (Array.isArray(a))
                              for (var o = 0, c = a.length; o < c; o++)
                                t(a[o], e, r);
                            else a && 'object' === i(a) && t(a, e, r);
                          }
                        !1 !== r.operatorOverloading && l(e, n),
                          !1 !== r.moduleExports &&
                            (function (t) {
                              switch (t.type) {
                                case 'ExportDefaultDeclaration':
                                  u(
                                    { range: [t.start, t.declaration.start] },
                                    'module.exports = ',
                                  );
                                  break;
                                case 'ExportNamedDeclaration':
                                  var e = t.declaration,
                                    n = t.specifiers;
                                  if (e) {
                                    var i = e.declarations;
                                    i &&
                                      (i.forEach(function (t) {
                                        u(t, 'module.exports.' + h(t));
                                      }),
                                      u(
                                        {
                                          range: [
                                            t.start,
                                            e.start + e.kind.length,
                                          ],
                                        },
                                        '',
                                      ));
                                  } else if (n) {
                                    var r = n
                                      .map(function (t) {
                                        var e = h(t);
                                        return (
                                          'module.exports.' +
                                          e +
                                          ' = ' +
                                          e +
                                          '; '
                                        );
                                      })
                                      .join('');
                                    r && u(t, r);
                                  }
                              }
                            })(e);
                      }
                    })(
                      d(t, {
                        ranges: !0,
                        preserveParens: !0,
                        sourceType: 'module',
                      }),
                      null,
                      v,
                    ),
                  c &&
                    (b && (t = new Array(y + 1).join('\n') + t),
                    /^(inline|both)$/.test(_) &&
                      (t +=
                        '\n//# sourceMappingURL=data:application/json;base64,' +
                        e.btoa(
                          unescape(encodeURIComponent(JSON.stringify(c))),
                        )),
                    (t += '\n//# sourceURL=' + (f || 'paperscript'))),
                  { url: f, source: m, code: t, map: c }
                );
              }
              function b(t, e, n) {
                ht = e;
                var r,
                  o = e.getView(),
                  h =
                    /\btool\.\w+|\s+on(?:Key|Mouse)(?:Up|Down|Move|Drag)\b/.test(
                      t,
                    ) && !/\bnew\s+Tool\b/.test(t)
                      ? new et()
                      : null,
                  u = h ? h._events : [],
                  l = ['onFrame', 'onResize'].concat(u),
                  c = [],
                  f = [],
                  d = 'object' === i(t) ? t : x(t, n);
                function g(e, n) {
                  for (var i in e)
                    (!n && /^_/.test(i)) ||
                      !new RegExp(
                        '([\\b\\s\\W]|^)' + i.replace(/\$/g, '\\$') + '\\b',
                      ).test(t) ||
                      (c.push(i), f.push(e[i]));
                }
                (t = d.code),
                  g({ __$__: y, $__: w, paper: e, tool: h }, !0),
                  g(e),
                  (t = 'var module = { exports: {} }; ' + t),
                  (b = a
                    .each(
                      l,
                      function (e) {
                        new RegExp('\\s+' + e + '\\b').test(t) &&
                          (c.push(e),
                          this.push('module.exports.' + e + ' = ' + e + ';'));
                      },
                      [],
                    )
                    .join('\n')) && (t += '\n' + b),
                  (t += '\nreturn module.exports;');
                var v = ht.agent;
                if (s && (v.chrome || (v.firefox && v.versionNumber < 40))) {
                  var p = s.createElement('script'),
                    m = s.head || s.getElementsByTagName('head')[0];
                  v.firefox && (t = '\n' + t),
                    p.appendChild(
                      s.createTextNode(
                        'document.__paperscript__ = function(' +
                          c +
                          ') {' +
                          t +
                          '\n}',
                      ),
                    ),
                    m.appendChild(p),
                    (r = s.__paperscript__),
                    delete s.__paperscript__,
                    m.removeChild(p);
                } else r = Function(c, t);
                var b,
                  C = (b = r && r.apply(e, f)) || {};
                return (
                  a.each(u, function (t) {
                    var e = C[t];
                    e && (h[t] = e);
                  }),
                  o &&
                    (C.onResize && o.setOnResize(C.onResize),
                    o.emit('resize', { size: o.size, delta: new _() }),
                    C.onFrame && o.setOnFrame(C.onFrame),
                    o.requestUpdate()),
                  b
                );
              }
              function C(t) {
                if (
                  /^text\/(?:x-|)paperscript$/.test(t.type) &&
                  'true' !== h.getAttribute(t, 'ignore')
                ) {
                  var e = h.getAttribute(t, 'canvas'),
                    n = s.getElementById(e),
                    i = t.src || t.getAttribute('data-src'),
                    r = h.hasAttribute(t, 'async');
                  if (!n)
                    throw new Error(
                      'Unable to find canvas with id "' + e + '"',
                    );
                  var a =
                    h.get(n.getAttribute('data-paper-scope')) ||
                    new h().setup(n);
                  return (
                    n.setAttribute('data-paper-scope', a._id),
                    i
                      ? it.request({
                          url: i,
                          async: r,
                          mimeType: 'text/plain',
                          onLoad: function (t) {
                            b(t, a, i);
                          },
                        })
                      : b(t.innerHTML, a, t.baseURI),
                    t.setAttribute('data-paper-ignore', 'true'),
                    a
                  );
                }
              }
              function S() {
                a.each(s && s.getElementsByTagName('script'), C);
              }
              return (
                _.inject(m),
                v.inject(m),
                V.inject(m),
                r &&
                  ('complete' === s.readyState
                    ? setTimeout(S)
                    : $.add(r, { load: S })),
                {
                  compile: x,
                  execute: b,
                  load: function (t) {
                    return t ? C(t) : S();
                  },
                  parse: d,
                  calculateBinary: y,
                  calculateUnary: w,
                }
              );
            }.call(this));
          var ht = new (h.inject(a.exports, {
            Base: a,
            Numerical: f,
            Key: Q,
            DomEvent: $,
            DomElement: W,
            document: s,
            window: r,
            Symbol: A,
            PlacedSymbol: M,
          }))();
          return (
            ht.agent.node && require('./node/extend.js')(ht),
            'function' == typeof t && t.amd
              ? t('paper', ht)
              : 'object' ===
                  ('undefined' == typeof module ? 'undefined' : i(module)) &&
                module &&
                (module.exports = ht),
            ht
          );
        }.call(
          this,
          'object' === ('undefined' == typeof self ? 'undefined' : i(self))
            ? self
            : null,
        );
      },
      {
        './node/self.js': 'cLff',
        acorn: 'wxgJ',
        './node/extend.js': 'cLff',
        process: 'FT5O',
      },
    ],
    LKvk: [
      function (require, module, exports) {
        !(function (r) {
          function t(r, n) {
            if (!(r = e(r))) return null;
            var o,
              a,
              f,
              u = 1 / 0;
            n || (n = t.DEFAULT_COLORS);
            for (var c = 0; c < n.length; ++c)
              (a = n[c].rgb),
                (o =
                  Math.pow(r.r - a.r, 2) +
                  Math.pow(r.g - a.g, 2) +
                  Math.pow(r.b - a.b, 2)) < u && ((u = o), (f = n[c]));
            return f.name
              ? {
                  name: f.name,
                  value: f.source,
                  rgb: f.rgb,
                  distance: Math.sqrt(u),
                }
              : f.source;
          }
          function n(r) {
            return r instanceof Array
              ? r.map(function (r) {
                  return o(r);
                })
              : Object.keys(r).map(function (t) {
                  return o(r[t], t);
                });
          }
          function e(r) {
            if ('object' == typeof r) return r;
            if (r in t.STANDARD_COLORS) return e(t.STANDARD_COLORS[r]);
            var n = r.match(/^#?((?:[0-9a-f]{3}){1,2})$/i);
            if (n)
              return (
                (n =
                  3 === (n = n[1]).length
                    ? [
                        n.charAt(0) + n.charAt(0),
                        n.charAt(1) + n.charAt(1),
                        n.charAt(2) + n.charAt(2),
                      ]
                    : [
                        n.substring(0, 2),
                        n.substring(2, 4),
                        n.substring(4, 6),
                      ]),
                {
                  r: parseInt(n[0], 16),
                  g: parseInt(n[1], 16),
                  b: parseInt(n[2], 16),
                }
              );
            var o = r.match(
              /^rgb\(\s*(\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?)\s*\)$/i,
            );
            if (o) return { r: a(o[1]), g: a(o[2]), b: a(o[3]) };
            throw Error('"' + r + '" is not a valid color');
          }
          function o(r, t) {
            var n,
              a = {};
            if ((t && (a.name = t), 'string' == typeof r))
              (a.source = r), (a.rgb = e(r));
            else if ('object' == typeof r) {
              if (r.source) return o(r.source, r.name);
              (a.rgb = r),
                (a.source =
                  '#' +
                  f((n = r).r.toString(16)) +
                  f(n.g.toString(16)) +
                  f(n.b.toString(16)));
            }
            return a;
          }
          function a(r) {
            return '%' === r.charAt(r.length - 1)
              ? Math.round((255 * parseInt(r, 10)) / 100)
              : Number(r);
          }
          function f(r) {
            return 1 === r.length && (r = '0' + r), r;
          }
          (t.from = function r(e) {
            var o = n(e),
              a = t,
              f = function (r) {
                return a(r, o);
              };
            return (
              (f.from = r),
              (f.or = function (r) {
                var e = o.concat(n(r));
                return t.from(e);
              }),
              f
            );
          }),
            (t.STANDARD_COLORS = {
              aqua: '#0ff',
              black: '#000',
              blue: '#00f',
              fuchsia: '#f0f',
              gray: '#808080',
              green: '#008000',
              lime: '#0f0',
              maroon: '#800000',
              navy: '#000080',
              olive: '#808000',
              orange: '#ffa500',
              purple: '#800080',
              red: '#f00',
              silver: '#c0c0c0',
              teal: '#008080',
              white: '#fff',
              yellow: '#ff0',
            }),
            (t.DEFAULT_COLORS = n([
              '#f00',
              '#f80',
              '#ff0',
              '#0f0',
              '#00f',
              '#008',
              '#808',
            ])),
            (t.VERSION = '0.4.4'),
            'object' == typeof module && module && module.exports
              ? (module.exports = t)
              : (r.nearestColor = t);
        })(this);
      },
      {},
    ],
    hSxs: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.PixelCell = void 0);
        var e = t(require('paper'));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }
        function o(e, t) {
          for (var r = 0; r < t.length; r++) {
            var o = t[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        function n(e, t, r) {
          return t && o(e.prototype, t), r && o(e, r), e;
        }
        var i = new e.default.Color('#646464'),
          l = new e.default.Color('#ff2020'),
          u = 3,
          c = (function () {
            function t(o) {
              var n = o.pixelAt,
                l = o.pivot,
                u = o.size;
              r(this, t),
                (this.rect = new e.default.Path.Rectangle({
                  point: n.multiply(u),
                  size: [u, u],
                  strokeColor: i,
                })),
                (this.rect.pivot = l);
            }
            return (
              n(
                t,
                [
                  {
                    key: 'setColor',
                    value: function (e) {
                      this.rect.fillColor = e;
                    },
                  },
                  {
                    key: 'highlight',
                    value: function () {
                      this.rect.bringToFront(),
                        (this.rect.strokeColor = l),
                        (this.rect.strokeWidth = u);
                    },
                  },
                  {
                    key: 'raw',
                    get: function () {
                      return this.rect;
                    },
                  },
                  {
                    key: 'position',
                    get: function () {
                      return this.rect.position;
                    },
                  },
                  {
                    key: 'color',
                    get: function () {
                      return this.rect.fillColor.toCSS(!0);
                    },
                  },
                ],
                [
                  {
                    key: 'create',
                    value: function (e) {
                      return new t(e);
                    },
                  },
                ],
              ),
              t
            );
          })();
        exports.PixelCell = c;
      },
      { paper: 'GYcQ' },
    ],
    XcBK: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.createCursor = c),
          (exports.createCircleMask = h);
        var e = r(require('paper'));
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function t(e) {
          return a(e) || n(e) || o();
        }
        function o() {
          throw new TypeError(
            'Invalid attempt to spread non-iterable instance',
          );
        }
        function n(e) {
          if (
            Symbol.iterator in Object(e) ||
            '[object Arguments]' === Object.prototype.toString.call(e)
          )
            return Array.from(e);
        }
        function a(e) {
          if (Array.isArray(e)) {
            for (var r = 0, t = new Array(e.length); r < e.length; r++)
              t[r] = e[r];
            return t;
          }
        }
        var i = 14,
          u = 18,
          l = 14,
          d = 3,
          s = new e.default.Color('#777777'),
          f = 5;
        function c() {
          return new e.default.Group([
            new e.default.Path.Circle({
              center: new e.default.Point(u, u),
              radius: i,
              strokeWidth: 1.2 * f,
              strokeColor: s,
            }),
            new e.default.Path.Line({
              from: [u, u - i],
              to: [u, u - i - l],
              strokeWidth: d,
              strokeColor: s,
            }),
            new e.default.Path.Line({
              from: [u, u + i],
              to: [u, u + i + l],
              strokeWidth: d,
              strokeColor: s,
            }),
            new e.default.Path.Line({
              from: [u - i, u],
              to: [u - i - l, u],
              strokeWidth: d,
              strokeColor: s,
            }),
            new e.default.Path.Line({
              from: [u + i, u],
              to: [u + i + l, u],
              strokeWidth: d,
              strokeColor: s,
            }),
          ]);
        }
        function h(r) {
          var o = r.radius,
            n = r.children,
            a = new e.default.Shape.Circle({ center: [o, o], radius: o }),
            i = new e.default.Shape.Circle({
              center: [o, o],
              radius: o,
              strokeColor: s,
              strokeWidth: f,
            }),
            u = new e.default.Group([a].concat(t(n), [i]));
          return (u.clipped = !0), u;
        }
      },
      { paper: 'GYcQ' },
    ],
    N6d1: [
      function (require, module, exports) {
        'use strict';
        function e(e) {
          var t = document.createElement('textarea');
          (t.innerHTML = e), document.body.appendChild(t), t.select();
          var o = document.execCommand('copy');
          return document.body.removeChild(t), o;
        }
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.copy = e);
      },
      {},
    ],
    kPyX: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }),
          (exports.Inspector = void 0);
        var e = o(require('nearest-color')),
          f = c(require('paper')),
          t = require('./pixel-cell'),
          a = require('./primitive-factory'),
          r = require('./utils');
        function c(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function i() {
          if ('function' != typeof WeakMap) return null;
          var e = new WeakMap();
          return (
            (i = function () {
              return e;
            }),
            e
          );
        }
        function o(e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' != typeof e && 'function' != typeof e))
            return { default: e };
          var f = i();
          if (f && f.has(e)) return f.get(e);
          var t = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if (Object.prototype.hasOwnProperty.call(e, r)) {
              var c = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              c && (c.get || c.set)
                ? Object.defineProperty(t, r, c)
                : (t[r] = e[r]);
            }
          return (t.default = e), f && f.set(e, t), t;
        }
        function n(e, f) {
          if (!(e instanceof f))
            throw new TypeError('Cannot call a class as a function');
        }
        function d(e, f) {
          for (var t = 0; t < f.length; t++) {
            var a = f[t];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              'value' in a && (a.writable = !0),
              Object.defineProperty(e, a.key, a);
          }
        }
        function l(e, f, t) {
          return f && d(e.prototype, f), t && d(e, t), e;
        }
        var u = 11,
          s = 30,
          b = {
            black: '#000',
            white: '#fff',
            slate: {
              50: '#f8fafc',
              100: '#f1f5f9',
              200: '#e2e8f0',
              300: '#cbd5e1',
              400: '#94a3b8',
              500: '#64748b',
              600: '#475569',
              700: '#334155',
              800: '#1e293b',
              900: '#0f172a',
            },
            gray: {
              50: '#f9fafb',
              100: '#f3f4f6',
              200: '#e5e7eb',
              300: '#d1d5db',
              400: '#9ca3af',
              500: '#6b7280',
              600: '#4b5563',
              700: '#374151',
              800: '#1f2937',
              900: '#111827',
            },
            zinc: {
              50: '#fafafa',
              100: '#f4f4f5',
              200: '#e4e4e7',
              300: '#d4d4d8',
              400: '#a1a1aa',
              500: '#71717a',
              600: '#52525b',
              700: '#3f3f46',
              800: '#27272a',
              900: '#18181b',
            },
            neutral: {
              50: '#fafafa',
              100: '#f5f5f5',
              200: '#e5e5e5',
              300: '#d4d4d4',
              400: '#a3a3a3',
              500: '#737373',
              600: '#525252',
              700: '#404040',
              800: '#262626',
              900: '#171717',
            },
            stone: {
              50: '#fafaf9',
              100: '#f5f5f4',
              200: '#e7e5e4',
              300: '#d6d3d1',
              400: '#a8a29e',
              500: '#78716c',
              600: '#57534e',
              700: '#44403c',
              800: '#292524',
              900: '#1c1917',
            },
            red: {
              50: '#fef2f2',
              100: '#fee2e2',
              200: '#fecaca',
              300: '#fca5a5',
              400: '#f87171',
              500: '#ef4444',
              600: '#dc2626',
              700: '#b91c1c',
              800: '#991b1b',
              900: '#7f1d1d',
            },
            orange: {
              50: '#fff7ed',
              100: '#ffedd5',
              200: '#fed7aa',
              300: '#fdba74',
              400: '#fb923c',
              500: '#f97316',
              600: '#ea580c',
              700: '#c2410c',
              800: '#9a3412',
              900: '#7c2d12',
            },
            amber: {
              50: '#fffbeb',
              100: '#fef3c7',
              200: '#fde68a',
              300: '#fcd34d',
              400: '#fbbf24',
              500: '#f59e0b',
              600: '#d97706',
              700: '#b45309',
              800: '#92400e',
              900: '#78350f',
            },
            yellow: {
              50: '#fefce8',
              100: '#fef9c3',
              200: '#fef08a',
              300: '#fde047',
              400: '#facc15',
              500: '#eab308',
              600: '#ca8a04',
              700: '#a16207',
              800: '#854d0e',
              900: '#713f12',
            },
            lime: {
              50: '#f7fee7',
              100: '#ecfccb',
              200: '#d9f99d',
              300: '#bef264',
              400: '#a3e635',
              500: '#84cc16',
              600: '#65a30d',
              700: '#4d7c0f',
              800: '#3f6212',
              900: '#365314',
            },
            green: {
              50: '#f0fdf4',
              100: '#dcfce7',
              200: '#bbf7d0',
              300: '#86efac',
              400: '#4ade80',
              500: '#22c55e',
              600: '#16a34a',
              700: '#15803d',
              800: '#166534',
              900: '#14532d',
            },
            emerald: {
              50: '#ecfdf5',
              100: '#d1fae5',
              200: '#a7f3d0',
              300: '#6ee7b7',
              400: '#34d399',
              500: '#10b981',
              600: '#059669',
              700: '#047857',
              800: '#065f46',
              900: '#064e3b',
            },
            teal: {
              50: '#f0fdfa',
              100: '#ccfbf1',
              200: '#99f6e4',
              300: '#5eead4',
              400: '#2dd4bf',
              500: '#14b8a6',
              600: '#0d9488',
              700: '#0f766e',
              800: '#115e59',
              900: '#134e4a',
            },
            cyan: {
              50: '#ecfeff',
              100: '#cffafe',
              200: '#a5f3fc',
              300: '#67e8f9',
              400: '#22d3ee',
              500: '#06b6d4',
              600: '#0891b2',
              700: '#0e7490',
              800: '#155e75',
              900: '#164e63',
            },
            sky: {
              50: '#f0f9ff',
              100: '#e0f2fe',
              200: '#bae6fd',
              300: '#7dd3fc',
              400: '#38bdf8',
              500: '#0ea5e9',
              600: '#0284c7',
              700: '#0369a1',
              800: '#075985',
              900: '#0c4a6e',
            },
            blue: {
              50: '#eff6ff',
              100: '#dbeafe',
              200: '#bfdbfe',
              300: '#93c5fd',
              400: '#60a5fa',
              500: '#3b82f6',
              600: '#2563eb',
              700: '#1d4ed8',
              800: '#1e40af',
              900: '#1e3a8a',
            },
            indigo: {
              50: '#eef2ff',
              100: '#e0e7ff',
              200: '#c7d2fe',
              300: '#a5b4fc',
              400: '#818cf8',
              500: '#6366f1',
              600: '#4f46e5',
              700: '#4338ca',
              800: '#3730a3',
              900: '#312e81',
            },
            violet: {
              50: '#f5f3ff',
              100: '#ede9fe',
              200: '#ddd6fe',
              300: '#c4b5fd',
              400: '#a78bfa',
              500: '#8b5cf6',
              600: '#7c3aed',
              700: '#6d28d9',
              800: '#5b21b6',
              900: '#4c1d95',
            },
            purple: {
              50: '#faf5ff',
              100: '#f3e8ff',
              200: '#e9d5ff',
              300: '#d8b4fe',
              400: '#c084fc',
              500: '#a855f7',
              600: '#9333ea',
              700: '#7e22ce',
              800: '#6b21a8',
              900: '#581c87',
            },
            fuchsia: {
              50: '#fdf4ff',
              100: '#fae8ff',
              200: '#f5d0fe',
              300: '#f0abfc',
              400: '#e879f9',
              500: '#d946ef',
              600: '#c026d3',
              700: '#a21caf',
              800: '#86198f',
              900: '#701a75',
            },
            pink: {
              50: '#fdf2f8',
              100: '#fce7f3',
              200: '#fbcfe8',
              300: '#f9a8d4',
              400: '#f472b6',
              500: '#ec4899',
              600: '#db2777',
              700: '#be185d',
              800: '#9d174d',
              900: '#831843',
            },
            rose: {
              50: '#fff1f2',
              100: '#ffe4e6',
              200: '#fecdd3',
              300: '#fda4af',
              400: '#fb7185',
              500: '#f43f5e',
              600: '#e11d48',
              700: '#be123c',
              800: '#9f1239',
              900: '#881337',
            },
          },
          p = {};
        for (var h in b)
          if ('string' == typeof b[h]) p[h] = b[h];
          else for (var v in b[h]) p[''.concat(h, '-').concat(v)] = b[h][v];
        var y = (function () {
          function c(e) {
            n(this, c),
              (this.project = e),
              (this.onCopy = function (e) {}),
              (this.cells = []),
              this.initUI(),
              this.trackMouse(),
              this.handleColorCopy();
          }
          return (
            l(c, [
              {
                key: 'loadImage',
                value: function (e) {
                  var t = this;
                  this.project.view.viewSize = new f.default.Size(
                    e.width,
                    e.height,
                  );
                  var a = function () {
                    var a = new f.default.Raster(e);
                    (a.position = new f.default.Point(
                      e.width / 2,
                      e.height / 2,
                    )),
                      (a.width = e.width),
                      (a.height = e.height),
                      (a.visible = !1),
                      (t.raster = a),
                      t.moveTo(t.group.position);
                  };
                  e.complete ? a() : e.addEventListener('load', a);
                },
              },
              {
                key: 'moveTo',
                value: function (e) {
                  var f = this;
                  (this.group.position = e),
                    this.raster &&
                      this.cells.forEach(function (e) {
                        e.setColor(f.raster.getPixel(e.position));
                      });
                },
              },
              {
                key: 'initUI',
                value: function () {
                  for (
                    var e = (0, a.createCursor)(),
                      r = e.position.subtract((u - 1) / 2),
                      c = 0;
                    c < u;
                    c++
                  )
                    for (var i = 0; i < u; i++)
                      this.cells.push(
                        t.PixelCell.create({
                          pixelAt: new f.default.Point(c, i),
                          pivot: new f.default.Point(c, i).add(r),
                          size: s,
                        }),
                      );
                  var o = (0, a.createCircleMask)({
                    radius: (u * s) / 2,
                    children: this.cells.map(function (e) {
                      return e.raw;
                    }),
                  });
                  this.targetCell.highlight(),
                    (this.group = new f.default.Group([o, e])),
                    (this.group.pivot = new f.default.Point(0, 0));
                },
              },
              {
                key: 'trackMouse',
                value: function () {
                  var e = this;
                  this.project.view.on('mousemove', function (f) {
                    var t = f.point;
                    e.moveTo(t);
                  }),
                    document.body.addEventListener('mouseenter', function (t) {
                      var a = t.clientX,
                        r = t.clientY;
                      e.moveTo(new f.default.Point(a, r));
                    });
                },
              },
              {
                key: 'handleColorCopy',
                value: function () {
                  var f = this;
                  this.project.view.on('click', function () {
                    var t = f.targetCell.color,
                      a = e.from(p)(t);
                    (0, r.copy)(a.name), f.onCopy(t);
                  });
                },
              },
              {
                key: 'targetCell',
                get: function () {
                  return this.cells[(this.cells.length - 1) / 2];
                },
              },
            ]),
            c
          );
        })();
        exports.Inspector = y;
      },
      {
        'nearest-color': 'LKvk',
        paper: 'GYcQ',
        './pixel-cell': 'hSxs',
        './primitive-factory': 'XcBK',
        './utils': 'N6d1',
      },
    ],
    QCba: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 });
        var e = { inspectorFactory: !0 };
        exports.inspectorFactory = void 0;
        var r = o(require('paper')),
          t = require('./lib/inspector');
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.keys(t).forEach(function (r) {
          'default' !== r &&
            '__esModule' !== r &&
            (Object.prototype.hasOwnProperty.call(e, r) ||
              Object.defineProperty(exports, r, {
                enumerable: !0,
                get: function () {
                  return t[r];
                },
              }));
        });
        var n = function (e) {
          var o = new r.default.Project(e),
            n = new t.Inspector(o);
          return (e.style.cursor = 'none'), n;
        };
        exports.inspectorFactory = n;
      },
      { paper: 'GYcQ', './lib/inspector': 'kPyX' },
    ],
  },
  {},
  ['QCba'],
  null,
);
