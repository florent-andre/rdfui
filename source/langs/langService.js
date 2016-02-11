/* jshint -W100 */
(function () {
  'use strict';
  angular.module('rdf.ui')
  
  .factory('langService', [
      function () {
        var langService = {};
        
        langService.getLanguagesFromMetadata = function(/*jsonLD*/ graph, /*String*/ langProperty){
            if(!langProperty) {langProperty = 'language';}
            console.log('$$$$$$$$$$$$$$$$$$$$$');
            console.log(graph['@graph']);
            var langs = graph['@graph'][0][langProperty];
            console.log(langs);
            return langs ?
                        Array.isArray(langs) ? langs : [langs]
                        : null;
        };
        
        langService.getIsoLangsAsArray = function(){
            var result = [];
            
            Object.keys(isoLangs).forEach(function(d){
                var val = isoLangs[d];
                val.code = d;
                result.push(val);
            });
            
            return result;
        };
        
        langService.getIsoLangs = function(){
            return isoLangs;
        };
        
        /**
         * from : http://stackoverflow.com/a/4900304
         * improvment ? : parse this file : http://loc.gov/standards/iso639-2/ISO-639-2_utf-8.txt
         * or more nice, use the thesaurus from the librairie of congres : http://id.loc.gov/download/
         * ==> and do a webservice for it
         * 
         * ATTENTION : a property was added for right to left language. Keep this somewhere
         * 
         */
        
            var isoLangs = {
                ab : {
                    name : 'Abkhaz',
                    nativeName : 'аҧсуа'
                },
                aa : {
                    name : 'Afar ',
                    nativeName : 'Afaraf '
                },
                af : {
                    name : 'Afrikaans ',
                    nativeName : 'Afrikaans '
                },
                ak : {
                    name : 'Akan ',
                    nativeName : 'Akan '
                },
                sq : {
                    name : 'Albanian ',
                    nativeName : 'Shqip '
                },
                am : {
                    name : 'Amharic ',
                    nativeName : 'አማርኛ '
                },
                ar : {
                    name : 'Arabic ',
                    nativeName : 'العربية ',
                    dir : 'rtl'
                },
                an : {
                    name : 'Aragonese ',
                    nativeName : 'Aragonés '
                },
                hy : {
                    name : 'Armenian ',
                    nativeName : 'Հայերեն '
                },
                as : {
                    name : 'Assamese ',
                    nativeName : 'অসমীয়া '
                },
                av : {
                    name : 'Avaric ',
                    nativeName : 'авар мацӀ, магӀарул мацӀ '
                },
                ae : {
                    name : 'Avestan ',
                    nativeName : 'avesta '
                },
                ay : {
                    name : 'Aymara ',
                    nativeName : 'aymar aru '
                },
                az : {
                    name : 'Azerbaijani ',
                    nativeName : 'azərbaycan dili '
                },
                bm : {
                    name : 'Bambara ',
                    nativeName : 'bamanankan '
                },
                ba : {
                    name : 'Bashkir ',
                    nativeName : 'башҡорт теле '
                },
                eu : {
                    name : 'Basque ',
                    nativeName : 'euskara, euskera '
                },
                be : {
                    name : 'Belarusian ',
                    nativeName : 'Беларуская '
                },
                bn : {
                    name : 'Bengali ',
                    nativeName : 'বাংলা '
                },
                bh : {
                    name : 'Bihari ',
                    nativeName : 'भोजपुरी '
                },
                bi : {
                    name : 'Bislama ',
                    nativeName : 'Bislama '
                },
                bs : {
                    name : 'Bosnian ',
                    nativeName : 'bosanski jezik '
                },
                br : {
                    name : 'Breton ',
                    nativeName : 'brezhoneg '
                },
                bg : {
                    name : 'Bulgarian ',
                    nativeName : 'български език '
                },
                my : {
                    name : 'Burmese ',
                    nativeName : 'ဗမာစာ '
                },
                ca : {
                    name : 'Catalan',
                    nativeName : 'Català '
                },
                ch : {
                    name : 'Chamorro ',
                    nativeName : 'Chamoru '
                },
                ce : {
                    name : 'Chechen ',
                    nativeName : 'нохчийн мотт '
                },
                ny : {
                    name : 'Chichewa',
                    nativeName : 'chiCheŵa, chinyanja '
                },
                zh : {
                    name : 'Chinese ',
                    nativeName : '中文 (Zhōngwén), 汉语, 漢語 '
                },
                cv : {
                    name : 'Chuvash ',
                    nativeName : 'чӑваш чӗлхи '
                },
                kw : {
                    name : 'Cornish ',
                    nativeName : 'Kernewek '
                },
                co : {
                    name : 'Corsican ',
                    nativeName : 'corsu, lingua corsa '
                },
                cr : {
                    name : 'Cree ',
                    nativeName : 'ᓀᐦᐃᔭᐍᐏᐣ '
                },
                hr : {
                    name : 'Croatian ',
                    nativeName : 'hrvatski '
                },
                cs : {
                    name : 'Czech ',
                    nativeName : 'česky, čeština '
                },
                da : {
                    name : 'Danish ',
                    nativeName : 'dansk '
                },
                dv : {
                    name : 'Divehi',
                    nativeName : 'ދިވެހި '
                },
                nl : {
                    name : 'Dutch ',
                    nativeName : 'Nederlands, Vlaams '
                },
                en : {
                    name : 'English ',
                    nativeName : 'English '
                },
                eo : {
                    name : 'Esperanto ',
                    nativeName : 'Esperanto '
                },
                et : {
                    name : 'Estonian ',
                    nativeName : 'eesti, eesti keel '
                },
                ee : {
                    name : 'Ewe ',
                    nativeName : 'Eʋegbe '
                },
                fo : {
                    name : 'Faroese ',
                    nativeName : 'føroyskt '
                },
                fj : {
                    name : 'Fijian ',
                    nativeName : 'vosa Vakaviti '
                },
                fi : {
                    name : 'Finnish ',
                    nativeName : 'suomi, suomen kieli '
                },
                fr : {
                    name : 'French ',
                    nativeName : 'Français'
                },
                ff : {
                    name : 'Fula',
                    nativeName : 'Fulfulde, Pulaar, Pular '
                },
                gl : {
                    name : 'Galician ',
                    nativeName : 'Galego '
                },
                ka : {
                    name : 'Georgian ',
                    nativeName : 'ქართული '
                },
                de : {
                    name : 'German ',
                    nativeName : 'Deutsch '
                },
                el : {
                    name : 'Greek',
                    nativeName : 'Ελληνικά '
                },
                gn : {
                    name : 'Guaraní ',
                    nativeName : 'Avañeẽ '
                },
                gu : {
                    name : 'Gujarati ',
                    nativeName : 'ગુજરાતી '
                },
                ht : {
                    name : 'Haitian',
                    nativeName : 'Kreyòl ayisyen '
                },
                ha : {
                    name : 'Hausa ',
                    nativeName : 'Hausa, هَوُسَ '
                },
                he : {
                    name : 'Hebrew',
                    nativeName : 'עברית '
                },
                hz : {
                    name : 'Herero ',
                    nativeName : 'Otjiherero '
                },
                hi : {
                    name : 'Hindi ',
                    nativeName : 'हिन्दी, हिंदी '
                },
                ho : {
                    name : 'Hiri Motu ',
                    nativeName : 'Hiri Motu '
                },
                hu : {
                    name : 'Hungarian ',
                    nativeName : 'Magyar '
                },
                ia : {
                    name : 'Interlingua ',
                    nativeName : 'Interlingua '
                },
                id : {
                    name : 'Indonesian ',
                    nativeName : 'Bahasa Indonesia '
                },
                ie : {
                    name : 'Interlingue ',
                    nativeName : 'Originally called Occidental; then Interlingue after WWII '
                },
                ga : {
                    name : 'Irish ',
                    nativeName : 'Gaeilge '
                },
                ig : {
                    name : 'Igbo ',
                    nativeName : 'Asụsụ Igbo '
                },
                ik : {
                    name : 'Inupiaq ',
                    nativeName : 'Iñupiaq, Iñupiatun '
                },
                io : {
                    name : 'Ido ',
                    nativeName : 'Ido '
                },
                is : {
                    name : 'Icelandic ',
                    nativeName : 'Íslenska '
                },
                it : {
                    name : 'Italian ',
                    nativeName : 'Italiano '
                },
                iu : {
                    name : 'Inuktitut ',
                    nativeName : 'ᐃᓄᒃᑎᑐᑦ '
                },
                ja : {
                    name : 'Japanese ',
                    nativeName : '日本語 (にほんご／にっぽんご) '
               },
                jv : {
                    name : 'Javanese ',
                    nativeName : 'basa Jawa '
                },
                kl : {
                    name : 'Kalaallisut',
                    nativeName : 'kalaallisut, kalaallit oqaasii '
                },
                kn : {
                    name : 'Kannada ',
                    nativeName : 'ಕನ್ನಡ '
                },
                kr : {
                    name : 'Kanuri ',
                    nativeName : 'Kanuri '
                },
                ks : {
                    name : 'Kashmiri ',
                    nativeName : 'कश्मीरी, كشميري‎ '
                },
                kk : {
                    name : 'Kazakh ',
                    nativeName : 'Қазақ тілі '
                },
                km : {
                    name : 'Khmer ',
                    nativeName : 'ភាសាខ្មែរ '
                },
                ki : {
                    name : 'Kikuyu',
                    nativeName : 'Gĩkũyũ '
                },
                rw : {
                    name : 'Kinyarwanda ',
                    nativeName : 'Ikinyarwanda '
                },
                ky : {
                    name : 'Kirghiz',
                    nativeName : 'кыргыз тили '
                },
                kv : {
                    name : 'Komi ',
                    nativeName : 'коми кыв '
                },
                kg : {
                    name : 'Kongo ',
                    nativeName : 'KiKongo '
                },
                ko : {
                    name : 'Korean ',
                    nativeName : '한국어 (韓國語), 조선말 (朝鮮語) '
                },
                ku : {
                    name : 'Kurdish ',
                    nativeName : 'Kurdî, كوردی‎ '
                },
                kj : {
                    name : 'Kwanyama',
                    nativeName : 'Kuanyama '
                },
                la : {
                    name : 'Latin',
                    nativeName : 'latine, lingua latina '
                },
                lb : {
                    name : 'Luxembourgish',
                    nativeName : 'Lëtzebuergesch '
                },
                lg : {
                    name : 'Luganda',
                    nativeName : 'Luganda '
                },
                li : {
                    name : 'Limburgish',
                    nativeName : 'Limburgs '
                },
                ln : {
                    name : 'Lingala ',
                    nativeName : 'Lingála '
                },
                lo : {
                    name : 'Lao ',
                    nativeName : 'ພາສາລາວ '
                },
                lt : {
                    name : 'Lithuanian ',
                    nativeName : 'lietuvių kalba '
                },
                lu : {
                    name : 'Luba-Katanga ',
                    nativeName : ''
                },
                lv : {
                    name : 'Latvian ',
                    nativeName : 'latviešu valoda '
                },
                gv : {
                    name : 'Manx ',
                    nativeName : 'Gaelg, Gailck '
                },
                mk : {
                    name : 'Macedonian ',
                    nativeName : 'македонски јазик '
                },
                mg : {
                    name : 'Malagasy ',
                    nativeName : 'Malagasy fiteny '
                },
                ms : {
                    name : 'Malay ',
                    nativeName : 'bahasa Melayu, بهاس ملايو‎ '
                },
                ml : {
                    name : 'Malayalam ',
                    nativeName : 'മലയാളം '
                },
                mt : {
                    name : 'Maltese ',
                    nativeName : 'Malti '
                },
                mi : {
                    name : 'Māori ',
                    nativeName : 'te reo Māori '
                },
                mr : {
                    name : 'Marathi',
                    nativeName : 'मराठी '
                },
                mh : {
                    name : 'Marshallese ',
                    nativeName : 'Kajin M̧ajeļ '
                },
                mn : {
                    name : 'Mongolian ',
                    nativeName : 'монгол '
                },
                na : {
                    name : 'Nauru ',
                    nativeName : 'Ekakairũ Naoero '
                },
                nv : {
                    name : 'Navajo',
                    nativeName : 'Diné bizaad, Dinékʼehǰí '
                },
                nb : {
                    name : 'Norsk bokmål',
                    nativeName : 'Norsk bokmål'
                },
                nd : {
                    name : 'North Ndebele ',
                    nativeName : 'isiNdebele '
                },
                ne : {
                    name : 'Nepali ',
                    nativeName : 'नेपाली '
                },
                ng : {
                    name : 'Ndonga ',
                    nativeName : 'Owambo '
                },
                nn : {
                    name : 'Norsk nynorsk',
                    nativeName : 'Norsk nynorsk'
                },
                no : {
                    name : 'Norwegian ',
                    nativeName : 'Norsk '
                },
                ii : {
                    name : 'Nuosu ',
                    nativeName : 'ꆈꌠ꒿ Nuosuhxop '
                },
                nr : {
                    name : 'South Ndebele ',
                    nativeName : 'isiNdebele '
                },
                oc : {
                    name : 'Occitan ',
                    nativeName : 'Occitan '
                },
                oj : {
                    name : 'Ojibwe',
                    nativeName : 'ᐊᓂᔑᓈᐯᒧᐎᓐ '
                },
                cu : {
                    name : 'Church Slavic',
                    nativeName : 'ѩзыкъ словѣньскъ '
                },
                om : {
                    name : 'Oromo ',
                    nativeName : 'Afaan Oromoo '
                },
                or : {
                    name : 'Oriya ',
                    nativeName : 'ଓଡ଼ିଆ '
                },
                os : {
                    name : 'Ossetian',
                    nativeName : 'ирон æвзаг '
                },
                pa : {
                    name : 'Panjabi',
                    nativeName : 'ਪੰਜਾਬੀ, پنجابی‎ '
                },
                pi : {
                    name : 'Pāli ',
                    nativeName : 'पाऴि '
                },
                fa : {
                    name : 'Persian ',
                    nativeName : 'فارسی '
                },
                pl : {
                    name : 'Polish ',
                    nativeName : 'polski '
                },
                ps : {
                    name : 'Pashto',
                    nativeName : 'پښتو '
                },
                pt : {
                    name : 'Portuguese ',
                    nativeName : 'Português '
                },
                qu : {
                    name : 'Quechua ',
                    nativeName : 'Runa Simi, Kichwa '
                },
                rm : {
                    name : 'Romansh ',
                    nativeName : 'rumantsch grischun '
                },
                rn : {
                    name : 'Kirundi ',
                    nativeName : 'kiRundi '
                },
                ro : {
                    name : 'Romanian',
                    nativeName : 'română '
                },
                ru : {
                    name : 'Russian ',
                    nativeName : 'русский язык '
                },
                sa : {
                    name : 'Sanskrit',
                    nativeName : 'संस्कृतम् '
                },
                sc : {
                    name : 'Sardinian ',
                    nativeName : 'sardu '
                },
                sd : {
                    name : 'Sindhi ',
                    nativeName : 'सिन्धी, سنڌي، سندھی‎ '
                },
                se : {
                    name : 'Northern Sami ',
                    nativeName : 'Davvisámegiella '
                },
                sm : {
                    name : 'Samoan ',
                    nativeName : 'gagana faa Samoa '
                },
                sg : {
                    name : 'Sango ',
                    nativeName : 'yângâ tî sängö '
                },
                sr : {
                    name : 'Serbian ',
                    nativeName : 'српски језик '
                },
                gd : {
                    name : 'Gaelic ',
                    nativeName : 'Gàidhlig '
                },
                sn : {
                    name : 'Shona ',
                    nativeName : 'chiShona '
                },
                si : {
                    name : 'Sinhala',
                    nativeName : 'සිංහල '
                },
                sk : {
                    name : 'Slovak ',
                    nativeName : 'slovenčina '
                },
                sl : {
                    name : 'Slovene ',
                    nativeName : 'slovenščina '
                },
                so : {
                    name : 'Somali ',
                    nativeName : 'Soomaaliga, af Soomaali '
                },
                st : {
                    name : 'Sesotho',
                    nativeName : 'Sesotho'
                },
                es : {
                    name : 'Spanish',
                    nativeName : 'español, castellano '
                },
                su : {
                    name : 'Sundanese ',
                    nativeName : 'Basa Sunda '
                },
                sw : {
                    name : 'Swahili ',
                    nativeName : 'Kiswahili '
                },
                ss : {
                    name : 'Swati ',
                    nativeName : 'SiSwati '
                },
                sv : {
                    name : 'Swedish ',
                    nativeName : 'svenska '
                },
                ta : {
                    name : 'Tamil ',
                    nativeName : 'தமிழ் '
                },
                te : {
                    name : 'Telugu ',
                    nativeName : 'తెలుగు '
                },
                tg : {
                    name : 'Tajik ',
                    nativeName : 'тоҷикӣ, toğikī, تاجیکی‎ '
                },
                th : {
                    name : 'Thai ',
                    nativeName : 'ไทย '
                },
                ti : {
                    name : 'Tigrinya ',
                    nativeName : 'ትግርኛ '
                },
                bo : {
                    name : 'Tibetan',
                    nativeName : 'བོད་ཡིག '
                },
                tk : {
                    name : 'Turkmen ',
                    nativeName : 'Türkmen, Түркмен '
                },
                tl : {
                    name : 'Tagalog ',
                    nativeName : 'Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔ '
                },
                tn : {
                    name : 'Tswana ',
                    nativeName : 'Setswana '
                },
                to : {
                    name : 'Tonga',
                    nativeName : 'faka Tonga '
                },
                tr : {
                    name : 'Turkish ',
                    nativeName : 'Türkçe '
                },
                ts : {
                    name : 'Tsonga ',
                    nativeName : 'Xitsonga '
                },
                tt : {
                    name : 'Tatar ',
                    nativeName : 'татарча, tatarça, تاتارچا‎ '
                },
                tw : {
                    name : 'Twi ',
                    nativeName : 'Twi '
                },
                ty : {
                    name : 'Tahitian ',
                    nativeName : 'Reo Tahiti '
                },
                ug : {
                    name : 'Uighur',
                    nativeName : 'Uyƣurqə, ئۇيغۇرچە‎ '
                },
                uk : {
                    name : 'Ukrainian ',
                    nativeName : 'українська '
                },
                ur : {
                    name : 'Urdu ',
                    nativeName : 'اردو '
                },
                uz : {
                    name : 'Uzbek ',
                    nativeName : 'zbek, Ўзбек, أۇزبېك‎ '
                },
                ve : {
                    name : 'Venda ',
                    nativeName : 'Tshivenḓa '
                },
                vi : {
                    name : 'Vietnamese ',
                    nativeName : 'Tiếng Việt '
                },
                vo : {
                    name : 'Volapük ',
                    nativeName : 'Volapük '
                },
                wa : {
                    name : 'Walloon ',
                    nativeName : 'Walon '
                },
                cy : {
                    name : 'Welsh ',
                    nativeName : 'Cymraeg '
                },
                wo : {
                    name : 'Wolof ',
                    nativeName : 'Wollof '
                },
                fy : {
                    name : 'Frysk',
                    nativeName : 'Frysk'
                },
                xh : {
                    name : 'Xhosa ',
                    nativeName : 'isiXhosa '
                },
                yi : {
                    name : 'Yiddish ',
                    nativeName : 'ייִדיש '
                },
                yo : {
                    name : 'Yoruba ',
                    nativeName : 'Yorùbá '
                },
                za : {
                    name : 'Zhuang',
                    nativeName : 'Saɯ cueŋƅ, Saw cuengh '
                }
            };
            
            return langService;
        }
     ]);
})();
