{
   "source": "script",
   "version": "0.0",
   "meta": {
      "id": "appngB1YzfSFhNviY",
      "name": "Preflight Check",
      "activeCollaborators": [
      ],
      "tables": [
         {
            "id": "tblMAeMOXVHYHJ1eO",
            "name": "5/17 - 10AM - Unavaliable on BB",
            "description": "",
            "url": "https://airtable.com/tblMAeMOXVHYHJ1eO",
            "views": [
               {
                  "id": "viwb76mLpwGodln3r",
                  "name": "Grid view",
                  "type": "grid",
                  "url": "https://airtable.com/tblMAeMOXVHYHJ1eO/viwb76mLpwGodln3r"
               }
            ],
            "fields": [
               {
                  "id": "fldEmGzUNCkJxndHg",
                  "name": "BB Name",
                  "type": "singleLineText",
                  "isComputed": false,
                  "options": null,
                  "description": ""
               },
               {
                  "id": "fldCOnN2W8OpBO7N8",
                  "name": "Name",
                  "type": "singleLineText",
                  "isComputed": false,
                  "options": null,
                  "description": ""
               },
               {
                  "id": "fldHHvxIVQrxIKJ2t",
                  "name": "Instructor",
                  "type": "singleLineText",
                  "isComputed": false,
                  "options": null,
                  "description": ""
               },
               {
                  "id": "fld5m4Xy43hBaN4U1",
                  "name": "⚡️ - All eCampus courses",
                  "type": "multipleRecordLinks",
                  "isComputed": false,
                  "options": {
                     "linkedTableId": "tbl0AUF4Aqjg6lTVn",
                     "isReversed": false,
                     "inverseLinkFieldId": "fldKQKZhsWItsIiZ7",
                     "viewIdForRecordSelection": "viwfKlHrSgOiB918i"
                  },
                  "description": ""
               },
               {
                  "id": "fldeJ6w8gZo1FJXoi",
                  "name": "LMS Marker",
                  "type": "singleSelect",
                  "isComputed": false,
                  "options": {
                     "choices": [
                        {
                           "id": "selWXuBGuk3ydiHUW",
                           "name": "Canvas",
                           "color": "redBright"
                        },
                        {
                           "id": "selr6sAYVpfbCcy4w",
                           "name": "?",
                           "color": "cyanLight2"
                        },
                        {
                           "id": "seld9ph2ktv9jKdII",
                           "name": "Blackboard",
                           "color": "yellowLight2"
                        }
                     ]
                  },
                  "description": ""
               },
               {
                  "id": "fldn26zqUkG75o9WE",
                  "name": "Status",
                  "type": "singleSelect",
                  "isComputed": false,
                  "options": {
                     "choices": [
                        {
                           "id": "selUtVtTBOHDjF0Ru",
                           "name": "AVAILABLE/PUBLISHED",
                           "color": "greenBright"
                        },
                        {
                           "id": "selk953GSaRgouzYE",
                           "name": "UNAVAILABLE/UNPUBLISHED",
                           "color": "redBright"
                        },
                        {
                           "id": "selKZaYCYJ2KFJK06",
                           "name": "AVAILABLE - BUT KEEP ON LIST",
                           "color": "yellowBright"
                        }
                     ]
                  },
                  "description": "Actual status of the course - regardless of LMS\n"
               },
               {
                  "id": "fld0eI2BTbjnsh9TO",
                  "name": "Notes - From Front Desk",
                  "type": "multilineText",
                  "isComputed": false,
                  "options": null,
                  "description": ""
               },
               {
                  "id": "fldlC9ztaw0FphS9K",
                  "name": "College (from ⚡️ - All eCampus courses)",
                  "type": "multipleLookupValues",
                  "isComputed": true,
                  "options": {
                     "isValid": true,
                     "recordLinkFieldId": "fld5m4Xy43hBaN4U1",
                     "fieldIdInLinkedTable": "fldVHqDdODwPxQmJ4",
                     "result": {
                        "type": "singleLineText"
                     }
                  },
                  "description": ""
               },
               {
                  "id": "fldU8jvGN13FD6Fkg",
                  "name": "Instructor Name",
                  "type": "multipleLookupValues",
                  "isComputed": true,
                  "options": {
                     "isValid": true,
                     "recordLinkFieldId": "fld5m4Xy43hBaN4U1",
                     "fieldIdInLinkedTable": "fld4uaE9zo5OY3vHJ",
                     "result": {
                        "type": "singleLineText"
                     }
                  },
                  "description": ""
               }
            ]
         },
         {
            "id": "tbl0AUF4Aqjg6lTVn",
            "name": "⚡️ - All eCampus courses",
            "description": "",
            "url": "https://airtable.com/tbl0AUF4Aqjg6lTVn",
            "views": [
               {
                  "id": "viwfKlHrSgOiB918i",
                  "name": "Grid view",
                  "type": "grid",
                  "url": "https://airtable.com/tbl0AUF4Aqjg6lTVn/viwfKlHrSgOiB918i"
               }
            ],
            "fields": [
               {
                  "id": "fldW2LchSIxzKvGjO",
                  "name": "ID",
                  "type": "multilineText",
                  "isComputed": false,
                  "options": null,
                  "description": ""
               },
               {
                  "id": "fldVHqDdODwPxQmJ4",
                  "name": "College",
                  "type": "singleSelect",
                  "isComputed": false,
                  "options": {
                     "choices": [
                        {
                           "id": "seldvEHrzuYWonBxC",
                           "name": "UAF College of Liberal Arts",
                           "color": "blueLight2"
                        },
                        {
                           "id": "sel8jJvbgY1CCdJyP",
                           "name": "UAS School of Arts & Sciences",
                           "color": "cyanLight2"
                        },
                        {
                           "id": "selmavMjx5lej4mmG",
                           "name": "UAF School of Management",
                           "color": "tealLight2"
                        },
                        {
                           "id": "sel7XjawAPuulApCU",
                           "name": "UAF Coll of Nat Sci & Math",
                           "color": "greenLight2"
                        },
                        {
                           "id": "selH88Kkzz6WHiPBe",
                           "name": "UAF School of Education",
                           "color": "yellowLight2"
                        },
                        {
                           "id": "selBbgwAdTdfi8OWF",
                           "name": "UAF Sch of Nat Resources & Ext",
                           "color": "orangeLight2"
                        },
                        {
                           "id": "selivnoDe9HvMrWIQ",
                           "name": "Alaska College of Education",
                           "color": "redLight2"
                        },
                        {
                           "id": "selbWwBRWKKYlJ2i2",
                           "name": "UAS School of Career Education",
                           "color": "pinkLight2"
                        },
                        {
                           "id": "selNCb6BhcsgA2ZfD",
                           "name": "UAF Coll of Rural & Comm Devlp",
                           "color": "purpleLight2"
                        },
                        {
                           "id": "selMfIBdwOvZrUc10",
                           "name": "UAF Coll of Engineer & Mines",
                           "color": "grayLight2"
                        },
                        {
                           "id": "selihVHNHzT1ClR5k",
                           "name": "UAF Coll Fisheries & Ocean Sci",
                           "color": "blueLight1"
                        },
                        {
                           "id": "seljSThmrlNnHiFKN",
                           "name": "UAF Community & Tech College",
                           "color": "cyanLight1"
                        },
                        {
                           "id": "selXScrDCaptEKINW",
                           "name": "No College Designated",
                           "color": "tealLight1"
                        },
                        {
                           "id": "selq4FibMnYzcxQbK",
                           "name": "Interdisciplinary",
                           "color": "greenLight1"
                        }
                     ]
                  },
                  "description": ""
               },
               {
                  "id": "fldf5LpFZYc3u5Ser",
                  "name": "Term Code",
                  "type": "number",
                  "isComputed": false,
                  "options": {
                     "precision": 0
                  },
                  "description": ""
               },
               {
                  "id": "fldDrvtOlXieHm1Ij",
                  "name": "CRN",
                  "type": "number",
                  "isComputed": false,
                  "options": {
                     "precision": 0
                  },
                  "description": ""
               },
               {
                  "id": "fldxrlTmBmZ4hsSFH",
                  "name": "Subject",
                  "type": "singleLineText",
                  "isComputed": false,
                  "options": null,
                  "description": ""
               },
               {
                  "id": "fld3zcakSVgoXOb3Y",
                  "name": "Course Number",
                  "type": "singleLineText",
                  "isComputed": false,
                  "options": null,
                  "description": ""
               },
               {
                  "id": "fldi1rKjhvJLQoYGW",
                  "name": "Section",
                  "type": "singleSelect",
                  "isComputed": false,
                  "options": {
                     "choices": [
                        {
                           "id": "selnJQVIO7Raw8wcW",
                           "name": " II",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selOEwpABaBTxbKy6",
                           "name": "BD1",
                           "color": "grayLight1"
                        },
                        {
                           "id": "selYpafwMldawnoYB",
                           "name": "BD2",
                           "color": "greenBright"
                        },
                        {
                           "id": "selOF1pT0JqDyC260",
                           "name": "BD3",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selrfR0F96RUgfsQG",
                           "name": "BD4",
                           "color": "cyanLight2"
                        },
                        {
                           "id": "selgmFI7WJUoLnZzH",
                           "name": "BI1",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selv4IjUmRMNXgXQv",
                           "name": "BI2",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selptr11ZfRnUXdWI",
                           "name": "BK1",
                           "color": "blueBright"
                        },
                        {
                           "id": "selfvKgnxbXed6L0y",
                           "name": "BK2",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selONQzsLoUJ1SYmZ",
                           "name": "BK3",
                           "color": "cyanLight2"
                        },
                        {
                           "id": "selj2MMKiVudozTn5",
                           "name": "BV1",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selySy2242rX4iaUu",
                           "name": "BVI",
                           "color": "greenLight2"
                        },
                        {
                           "id": "selS9iq4HqQGoS5zH",
                           "name": "C01",
                           "color": "purpleDark1"
                        },
                        {
                           "id": "selSBM5qqXwwof3H2",
                           "name": "C02",
                           "color": "pinkDark1"
                        },
                        {
                           "id": "selSmChW7CLymyMnO",
                           "name": "CO1",
                           "color": "blueLight2"
                        },
                        {
                           "id": "sellHKuPm3u1LcqYJ",
                           "name": "CX1",
                           "color": "tealBright"
                        },
                        {
                           "id": "selOCq42LZ3J3H9NH",
                           "name": "CX2",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selpG7wAT1vWFllhx",
                           "name": "DD1",
                           "color": "pinkLight2"
                        },
                        {
                           "id": "selActsJtR7ajppex",
                           "name": "DD3",
                           "color": "blueLight1"
                        },
                        {
                           "id": "selQ8CEjxWjJXlEbz",
                           "name": "DD4",
                           "color": "tealBright"
                        },
                        {
                           "id": "selw5CYGlIbn6eGJq",
                           "name": "DD5",
                           "color": "yellowBright"
                        },
                        {
                           "id": "selMSkndra2ksRyQ3",
                           "name": "F01",
                           "color": "pinkLight2"
                        },
                        {
                           "id": "selyigf3F8g6XKZxM",
                           "name": "F1D",
                           "color": "grayLight1"
                        },
                        {
                           "id": "selhTVTni5phSjiD0",
                           "name": "F1M",
                           "color": "redBright"
                        },
                        {
                           "id": "selQ1EYfC0DpNVPnT",
                           "name": "F02",
                           "color": "grayBright"
                        },
                        {
                           "id": "selCZXaFHulRRMITp",
                           "name": "F03",
                           "color": "greenBright"
                        },
                        {
                           "id": "selXWUrAi1PICmg9N",
                           "name": "F04",
                           "color": "tealDark1"
                        },
                        {
                           "id": "sel8NpfGgBBmtNU9c",
                           "name": "F05",
                           "color": "orangeBright"
                        },
                        {
                           "id": "sel0OQirNTnGun6zz",
                           "name": "F06",
                           "color": "grayLight2"
                        },
                        {
                           "id": "selrGQDKELYOiwfrb",
                           "name": "F07",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selVC4SBrL79Qhkzr",
                           "name": "F08",
                           "color": "purpleBright"
                        },
                        {
                           "id": "selgEfONn4CueQqKk",
                           "name": "F09",
                           "color": "purpleDark1"
                        },
                        {
                           "id": "selo2bNn4fjN53BAs",
                           "name": "F10",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selSjOeWCz4ZBmWx1",
                           "name": "F11",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selfPhNZS2hAjItbk",
                           "name": "F12",
                           "color": "yellowLight2"
                        },
                        {
                           "id": "selEg8UBSMB3qWHah",
                           "name": "F13",
                           "color": "cyanLight2"
                        },
                        {
                           "id": "selHsmS6nUeva0msc",
                           "name": "F14",
                           "color": "tealLight2"
                        },
                        {
                           "id": "selLwaWPEAhQCFWkJ",
                           "name": "F15",
                           "color": "greenLight2"
                        },
                        {
                           "id": "selthQqYEK8FyrZpB",
                           "name": "F16",
                           "color": "yellowLight2"
                        },
                        {
                           "id": "selcmQBg8TxDcMR3E",
                           "name": "F17",
                           "color": "orangeLight2"
                        },
                        {
                           "id": "selogOkFje0kE6RZB",
                           "name": "F19",
                           "color": "redLight2"
                        },
                        {
                           "id": "selUhIU8v6ZivpwM1",
                           "name": "F20",
                           "color": "blueLight2"
                        },
                        {
                           "id": "sela8RcjyMxFu5pVi",
                           "name": "F21",
                           "color": "cyanLight2"
                        },
                        {
                           "id": "selSvRGcz6uXBS7FH",
                           "name": "F23",
                           "color": "redLight2"
                        },
                        {
                           "id": "sel9zKg54LLJMxd7L",
                           "name": "FA1",
                           "color": "grayLight2"
                        },
                        {
                           "id": "selg95sELo6aAV8ie",
                           "name": "FCA",
                           "color": "grayBright"
                        },
                        {
                           "id": "selXOx78G7g9I0gig",
                           "name": "FCB",
                           "color": "redLight1"
                        },
                        {
                           "id": "sellBRllTadODTatD",
                           "name": "FCC",
                           "color": "purpleLight1"
                        },
                        {
                           "id": "selevXJjCPmhKThrk",
                           "name": "FCD",
                           "color": "cyanLight1"
                        },
                        {
                           "id": "selciTW6dC4cphApJ",
                           "name": "FCE",
                           "color": "blueBright"
                        },
                        {
                           "id": "sel6QcC0XVLc9VznN",
                           "name": "FCF",
                           "color": "cyanBright"
                        },
                        {
                           "id": "selEnZ7R6kMsJ8jHO",
                           "name": "FCG",
                           "color": "cyanDark1"
                        },
                        {
                           "id": "selhIY94dNBQ1rrTz",
                           "name": "FCH",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selAH4zTuHYiFTIhi",
                           "name": "FE1",
                           "color": "purpleLight2"
                        },
                        {
                           "id": "selIyMSlzjMM45mVl",
                           "name": "FE2",
                           "color": "blueDark1"
                        },
                        {
                           "id": "sel00dJfdoGELFNJ4",
                           "name": "FE3",
                           "color": "cyanDark1"
                        },
                        {
                           "id": "selwLyOWEamjqDcty",
                           "name": "FH1",
                           "color": "purpleLight2"
                        },
                        {
                           "id": "selDSJLSs23NOKxUt",
                           "name": "FH2",
                           "color": "cyanBright"
                        },
                        {
                           "id": "selE23skodLicUm5v",
                           "name": "FJ1",
                           "color": "yellowBright"
                        },
                        {
                           "id": "selAKnV6JeVaFpHHo",
                           "name": "FJ3",
                           "color": "yellowDark1"
                        },
                        {
                           "id": "selxBQkYoYLelepun",
                           "name": "FM1",
                           "color": "yellowLight1"
                        },
                        {
                           "id": "selnwLyXlaB1nmx8l",
                           "name": "FM2",
                           "color": "blueLight2"
                        },
                        {
                           "id": "seltfb0WhDyFlpjEf",
                           "name": "FM3",
                           "color": "cyanLight2"
                        },
                        {
                           "id": "selBet27meAly4fnt",
                           "name": "FQ1",
                           "color": "redBright"
                        },
                        {
                           "id": "selhwlFr1sw4sRNti",
                           "name": "FQ2",
                           "color": "greenDark1"
                        },
                        {
                           "id": "selMqiu21pEC22FYO",
                           "name": "FS1",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selkNfXKe0Bg9v5wG",
                           "name": "FS2",
                           "color": "cyanLight2"
                        },
                        {
                           "id": "selM1un6OCTbCLM5W",
                           "name": "FS3",
                           "color": "tealLight2"
                        },
                        {
                           "id": "selnUGI9NjQZAtGav",
                           "name": "FS4",
                           "color": "greenLight2"
                        },
                        {
                           "id": "selxT8uc1S434JdfS",
                           "name": "FS5",
                           "color": "yellowLight2"
                        },
                        {
                           "id": "selvlV9PlEsGYqfdf",
                           "name": "FS6",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selbwdTIMwNgLjQTy",
                           "name": "FS7",
                           "color": "cyanLight2"
                        },
                        {
                           "id": "selcjNrNpRc3ts4pX",
                           "name": "FS8",
                           "color": "tealLight2"
                        },
                        {
                           "id": "selG8gb3FKzSfBumm",
                           "name": "FW1",
                           "color": "greenLight1"
                        },
                        {
                           "id": "selPNkzjBRjOrqdmk",
                           "name": "FX1",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selmAX4e2dUT7NKc0",
                           "name": "FXA",
                           "color": "blueLight1"
                        },
                        {
                           "id": "selDxGNioz0lSxV90",
                           "name": "FXB",
                           "color": "purpleLight1"
                        },
                        {
                           "id": "selC7luDLWJktXNjZ",
                           "name": "FXC",
                           "color": "blueLight2"
                        },
                        {
                           "id": "sela6EQpMbPGLtXK8",
                           "name": "FXD",
                           "color": "redLight2"
                        },
                        {
                           "id": "selTw9B0vcFs0FjDM",
                           "name": "FXE",
                           "color": "greenLight2"
                        },
                        {
                           "id": "seloXtDvAhHv78oRL",
                           "name": "FXF",
                           "color": "yellowLight2"
                        },
                        {
                           "id": "selqKVoPOryJFViOw",
                           "name": "FXG",
                           "color": "grayDark1"
                        },
                        {
                           "id": "seli70w2zoRx7unuV",
                           "name": "FXH",
                           "color": "blueLight2"
                        },
                        {
                           "id": "sele2JnCAZ4T5mepD",
                           "name": "FXI",
                           "color": "greenLight2"
                        },
                        {
                           "id": "selOv4ZEjLBjetSxX",
                           "name": "FXJ",
                           "color": "yellowBright"
                        },
                        {
                           "id": "selmjOGQZVQOSaExw",
                           "name": "FXK",
                           "color": "blueBright"
                        },
                        {
                           "id": "selnu43qLMM8IS8oT",
                           "name": "FXL",
                           "color": "cyanLight2"
                        },
                        {
                           "id": "selb7xrp4PdN4dzQg",
                           "name": "FXM",
                           "color": "tealLight2"
                        },
                        {
                           "id": "selsqgZjy9PmG9eQZ",
                           "name": "FXN",
                           "color": "orangeLight2"
                        },
                        {
                           "id": "sel4cWsMKzp5PySnE",
                           "name": "FXO",
                           "color": "grayDark1"
                        },
                        {
                           "id": "selhxIqYC0fLPyFkn",
                           "name": "FXP",
                           "color": "purpleDark1"
                        },
                        {
                           "id": "selNEFAig6eFplPLy",
                           "name": "FXQ",
                           "color": "pinkDark1"
                        },
                        {
                           "id": "selMHuV98BK5DdGGs",
                           "name": "IB1",
                           "color": "redDark1"
                        },
                        {
                           "id": "sel08PMgS3bwAnPrE",
                           "name": "IB2",
                           "color": "blueLight2"
                        },
                        {
                           "id": "sel3Fw4FeFG0f7yWi",
                           "name": "II1",
                           "color": "purpleBright"
                        },
                        {
                           "id": "selFL4oK6bBrF2ZJ7",
                           "name": "II2",
                           "color": "tealLight2"
                        },
                        {
                           "id": "selI6yp2MB1pPUBSv",
                           "name": "II3",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selFOaxOdLbjh0JfY",
                           "name": "II4",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selObb9hmdvbIDZ3i",
                           "name": "IR1",
                           "color": "cyanLight1"
                        },
                        {
                           "id": "selLNrA38ieefQjzC",
                           "name": "IR2",
                           "color": "tealLight1"
                        },
                        {
                           "id": "selQChGOpoIguoNPt",
                           "name": "IT1",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selKXWlVac4zxr4JA",
                           "name": "IX1",
                           "color": "tealLight2"
                        },
                        {
                           "id": "selmKO3TeJsZy4rKk",
                           "name": "J0_",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selH4SdC8TQP00yJ8",
                           "name": "J01",
                           "color": "orangeLight1"
                        },
                        {
                           "id": "sel768Ip91vZlVwiU",
                           "name": "J02",
                           "color": "yellowLight1"
                        },
                        {
                           "id": "selBeR9yYy965gkYZ",
                           "name": "J03",
                           "color": "redLight1"
                        },
                        {
                           "id": "selCj6JqJWfVFjPFX",
                           "name": "J04",
                           "color": "pinkLight1"
                        },
                        {
                           "id": "sel7mphZBZGaP2dnN",
                           "name": "J12",
                           "color": "pinkLight1"
                        },
                        {
                           "id": "selANPhse9MeJpFZJ",
                           "name": "J14",
                           "color": "cyanBright"
                        },
                        {
                           "id": "selcU1RLhlNIQWgKm",
                           "name": "J15",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selknserIHCxTwlDL",
                           "name": "JD_",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selFUW9tJ7YXFwueX",
                           "name": "JD-",
                           "color": "blueLight2"
                        },
                        {
                           "id": "sel5S9fvUBuFKWFS6",
                           "name": "JD!",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selXYsiRBSlfRGI8x",
                           "name": "JD1",
                           "color": "grayLight2"
                        },
                        {
                           "id": "selaivAKn31LNJZ8Q",
                           "name": "JD2",
                           "color": "blueLight1"
                        },
                        {
                           "id": "seliTI2DkWzwYrYrF",
                           "name": "JD3",
                           "color": "tealLight1"
                        },
                        {
                           "id": "selvyns6M6Zqi0Ydz",
                           "name": "JD4",
                           "color": "orangeLight1"
                        },
                        {
                           "id": "selj1d034gKDOgZb9",
                           "name": "JD5",
                           "color": "tealDark1"
                        },
                        {
                           "id": "sel2sXVf4WSr6uqry",
                           "name": "JD6",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selyVkiH7eNnRlXQY",
                           "name": "JD7",
                           "color": "cyanLight2"
                        },
                        {
                           "id": "selJU4FmIOVz89rp8",
                           "name": "JD8",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selwkdLBFMA0558Jz",
                           "name": "JH1",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selhOgSbRTiin2llQ",
                           "name": "JH2",
                           "color": "cyanLight2"
                        },
                        {
                           "id": "sel42tlEmTgWVOgkI",
                           "name": "JH3",
                           "color": "tealLight2"
                        },
                        {
                           "id": "selF2TedsupT4N1YN",
                           "name": "JH4",
                           "color": "greenLight2"
                        },
                        {
                           "id": "selrlnQitWsWvGj9D",
                           "name": "JH5",
                           "color": "yellowLight2"
                        },
                        {
                           "id": "selyEASrCHaa8lHzr",
                           "name": "JH6",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selG5H9DuxSiUlQOR",
                           "name": "JH7",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selbpBNFdvIr3JfKA",
                           "name": "K01",
                           "color": "cyanLight1"
                        },
                        {
                           "id": "selkWaFYsBvyoR7i9",
                           "name": "K02",
                           "color": "greenLight1"
                        },
                        {
                           "id": "sel9DtZ9Hnq8TbwM1",
                           "name": "K03",
                           "color": "purpleLight1"
                        },
                        {
                           "id": "selqupWMlekRGtIvH",
                           "name": "K04",
                           "color": "grayLight1"
                        },
                        {
                           "id": "selRDfGfXkOLyqTbL",
                           "name": "K05",
                           "color": "orangeLight1"
                        },
                        {
                           "id": "sel2hnHib71AQHHyI",
                           "name": "K06",
                           "color": "yellowLight1"
                        },
                        {
                           "id": "selgwsMOXJ86QHhSg",
                           "name": "K07",
                           "color": "tealLight1"
                        },
                        {
                           "id": "selEYkMroGOTpFxX9",
                           "name": "K08",
                           "color": "redLight1"
                        },
                        {
                           "id": "sellvCDn3PgTh9VXl",
                           "name": "K09",
                           "color": "grayLight1"
                        },
                        {
                           "id": "sel0SGpFPIRxogUDc",
                           "name": "K10",
                           "color": "yellowBright"
                        },
                        {
                           "id": "selP9YqQtf5vno2QT",
                           "name": "K11",
                           "color": "orangeBright"
                        },
                        {
                           "id": "selyTAEQpUglHTkQc",
                           "name": "KA1",
                           "color": "blueLight2"
                        },
                        {
                           "id": "sel4AccgCccHIllfG",
                           "name": "KD1",
                           "color": "tealLight1"
                        },
                        {
                           "id": "selbu0PuqKj0eDLPI",
                           "name": "KD2",
                           "color": "greenBright"
                        },
                        {
                           "id": "selGtn52QIHHB2A4b",
                           "name": "KD3",
                           "color": "cyanDark1"
                        },
                        {
                           "id": "selbYcke6vHq0QRgG",
                           "name": "KD4",
                           "color": "cyanLight2"
                        },
                        {
                           "id": "selceou4vff3q4OX1",
                           "name": "KT1",
                           "color": "orangeBright"
                        },
                        {
                           "id": "selWHh1GvfI5I4EHv",
                           "name": "KT2",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selulVDXFFDwBm2bT",
                           "name": "KT3",
                           "color": "blueDark1"
                        },
                        {
                           "id": "selqQh64jEoj9MHEp",
                           "name": "KX1",
                           "color": "pinkBright"
                        },
                        {
                           "id": "selOZYaWrPWCut49x",
                           "name": "KX2",
                           "color": "purpleBright"
                        },
                        {
                           "id": "selGISm8DGA3dOjXG",
                           "name": "N01",
                           "color": "orangeLight2"
                        },
                        {
                           "id": "sel6JH7SVsa1tTnkr",
                           "name": "N02",
                           "color": "purpleBright"
                        },
                        {
                           "id": "seloOBX3JN2yTBrs8",
                           "name": "N03",
                           "color": "pinkBright"
                        },
                        {
                           "id": "sel4mZVQbqMpggBjl",
                           "name": "N04",
                           "color": "redBright"
                        },
                        {
                           "id": "selpuXoEGWcNpdBCT",
                           "name": "N05",
                           "color": "orangeBright"
                        },
                        {
                           "id": "selSDzuPs3tPd7bzr",
                           "name": "N06",
                           "color": "blueLight2"
                        },
                        {
                           "id": "sel33SHc2lqOdDYLE",
                           "name": "N07",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selAQkyvobOjaM5s1",
                           "name": "NSE",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selh5Iz5ZmuvjCHEg",
                           "name": "R01",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selUyuE2DgemIkTsP",
                           "name": "R02",
                           "color": "blueLight2"
                        },
                        {
                           "id": "seltdECJ9hoT4tbtT",
                           "name": "R03",
                           "color": "cyanLight2"
                        },
                        {
                           "id": "sel20DkTNpKctIh4c",
                           "name": "R04",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selfpMUR3cRr93oAw",
                           "name": "RX1",
                           "color": "blueBright"
                        },
                        {
                           "id": "seldciFIxIHCkgMrg",
                           "name": "RX2",
                           "color": "cyanBright"
                        },
                        {
                           "id": "selawHem6k2CKu2PR",
                           "name": "RX3",
                           "color": "cyanLight2"
                        },
                        {
                           "id": "selerNbSwAnc33lsa",
                           "name": "RX4",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selAG05Ny2ekwhiI5",
                           "name": "T01",
                           "color": "cyanLight1"
                        },
                        {
                           "id": "selA2JWaJ77lDmLTx",
                           "name": "T02",
                           "color": "grayDark1"
                        },
                        {
                           "id": "seliBY9cEsMJtHzn4",
                           "name": "T03",
                           "color": "orangeLight1"
                        },
                        {
                           "id": "selZLpMPVlNGxpiQS",
                           "name": "T04",
                           "color": "pinkBright"
                        },
                        {
                           "id": "seli7Gsr4KBB61DVD",
                           "name": "T05",
                           "color": "orangeDark1"
                        },
                        {
                           "id": "sel3vSB1En2Mj1zO4",
                           "name": "T07",
                           "color": "redDark1"
                        },
                        {
                           "id": "selSc5iXhDlQs1PF3",
                           "name": "T08",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selJV05r63UTrB9zm",
                           "name": "T70",
                           "color": "blueLight2"
                        },
                        {
                           "id": "seloriZiHipbRc0UD",
                           "name": "T71",
                           "color": "pinkLight1"
                        },
                        {
                           "id": "seloEKyaGCi7kxQzK",
                           "name": "T72",
                           "color": "blueLight2"
                        },
                        {
                           "id": "sel1TW4nqMZC7JAOy",
                           "name": "T73",
                           "color": "tealLight2"
                        },
                        {
                           "id": "sel1UqcbqwkwARsHc",
                           "name": "T74",
                           "color": "blueLight2"
                        },
                        {
                           "id": "seldnS1IB21po4I2D",
                           "name": "T75",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selDyY9SRFBHXKKrJ",
                           "name": "T76",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selN8ArbqJ4Ih85md",
                           "name": "TB1",
                           "color": "orangeLight2"
                        },
                        {
                           "id": "seliMIIlzRKoFIqMA",
                           "name": "TB2",
                           "color": "redLight2"
                        },
                        {
                           "id": "selNzzmBoBkzdqBNL",
                           "name": "TB3",
                           "color": "yellowLight2"
                        },
                        {
                           "id": "selO5WqKXy0y6noJV",
                           "name": "TB4",
                           "color": "pinkLight2"
                        },
                        {
                           "id": "sel6vhXSiJpYdPhMZ",
                           "name": "TB5",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selhjGw9vKhKnp5Fj",
                           "name": "TB6",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selhoNEUQb8Jpxsgm",
                           "name": "TB7",
                           "color": "greenLight2"
                        },
                        {
                           "id": "sel0MO2aMUWqVY5q1",
                           "name": "TD1",
                           "color": "greenLight1"
                        },
                        {
                           "id": "seljr9k7FwLZXnxhi",
                           "name": "TD2",
                           "color": "pinkLight2"
                        },
                        {
                           "id": "sel0zhbAA3BOp2oNX",
                           "name": "TD3",
                           "color": "orangeLight2"
                        },
                        {
                           "id": "sel8wPEQmzslDWv4i",
                           "name": "TE1",
                           "color": "yellowLight2"
                        },
                        {
                           "id": "selsL5X5T9WI838Bi",
                           "name": "TE2",
                           "color": "purpleLight2"
                        },
                        {
                           "id": "selDhTIQIYL4flwzf",
                           "name": "TE3",
                           "color": "blueLight2"
                        },
                        {
                           "id": "sels3lX0VHsrBc7XL",
                           "name": "TEST",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selXKhpqwu131nKHb",
                           "name": "TF1",
                           "color": "redDark1"
                        },
                        {
                           "id": "selATtrgQSGLRLsUT",
                           "name": "TH1",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selOkAaiW212yA06F",
                           "name": "THA",
                           "color": "cyanLight2"
                        },
                        {
                           "id": "selVd6wH7CslA8GYk",
                           "name": "THR",
                           "color": "yellowLight1"
                        },
                        {
                           "id": "selrBeWNAVROZlGri",
                           "name": "THS",
                           "color": "pinkBright"
                        },
                        {
                           "id": "selYrhf4qv2Yy1dzt",
                           "name": "THT",
                           "color": "redLight1"
                        },
                        {
                           "id": "selGgsMvr5FJlMZGb",
                           "name": "TL1",
                           "color": "orangeDark1"
                        },
                        {
                           "id": "selOLeAjOV21F8r5h",
                           "name": "TT1",
                           "color": "redBright"
                        },
                        {
                           "id": "sel6XpezyE4XtjDLF",
                           "name": "TT2",
                           "color": "yellowDark1"
                        },
                        {
                           "id": "selXxc6QQCo0NAOGd",
                           "name": "TT3",
                           "color": "blueDark1"
                        },
                        {
                           "id": "selA6x3aMAriKYCj3",
                           "name": "TT4",
                           "color": "orangeDark1"
                        },
                        {
                           "id": "selHEdhp0i0y3bJ8O",
                           "name": "TT5",
                           "color": "grayBright"
                        },
                        {
                           "id": "seljH0I245KWpNWfF",
                           "name": "TT6",
                           "color": "greenLight2"
                        },
                        {
                           "id": "selV1ZAtBqYH8ewmx",
                           "name": "TT7",
                           "color": "grayLight2"
                        },
                        {
                           "id": "selfW3KeQnvM9qij1",
                           "name": "TT8",
                           "color": "blueLight1"
                        },
                        {
                           "id": "selR8yoDyRoHjHjae",
                           "name": "TT9",
                           "color": "blueLight2"
                        },
                        {
                           "id": "seltad0ic6tPdZe4Q",
                           "name": "TW1",
                           "color": "blueDark1"
                        },
                        {
                           "id": "selHkIyhKWxZS1BPg",
                           "name": "TW2",
                           "color": "grayBright"
                        },
                        {
                           "id": "selQX3aFVYrJ3GVjj",
                           "name": "TW3",
                           "color": "cyanDark1"
                        },
                        {
                           "id": "seleQ87K0fc64ApT1",
                           "name": "TX1",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selUF4ALxNHwN51ft",
                           "name": "TX2",
                           "color": "pinkDark1"
                        },
                        {
                           "id": "selOessoD5dMguKAs",
                           "name": "TX3",
                           "color": "purpleLight2"
                        },
                        {
                           "id": "selZ3hJxgo9e8J7UD",
                           "name": "TX4",
                           "color": "tealLight2"
                        },
                        {
                           "id": "selD57vepQXTT1doi",
                           "name": "TXA",
                           "color": "cyanLight2"
                        },
                        {
                           "id": "sel3I69K7RGyEmxOM",
                           "name": "TXB",
                           "color": "greenDark1"
                        },
                        {
                           "id": "selqQ1syrwPNn6lp6",
                           "name": "TXC",
                           "color": "blueLight2"
                        },
                        {
                           "id": "seldCBTTgw8SHWyih",
                           "name": "TXD",
                           "color": "orangeDark1"
                        },
                        {
                           "id": "selk77A7xyCnJBbEW",
                           "name": "TXE",
                           "color": "redDark1"
                        },
                        {
                           "id": "sels3FvyYPdubzXdt",
                           "name": "TXF",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selPDB5D1Lz30Mjzb",
                           "name": "UB1",
                           "color": "tealBright"
                        },
                        {
                           "id": "sel6TypBOk8A6Um4V",
                           "name": "UB2",
                           "color": "blueLight2"
                        },
                        {
                           "id": "sel6SA0zU3exsa4XF",
                           "name": "UB3",
                           "color": "cyanLight2"
                        },
                        {
                           "id": "sel2UMsm5zKJXcQkh",
                           "name": "UB4",
                           "color": "tealLight2"
                        },
                        {
                           "id": "selMjGsBdmvSAuUNG",
                           "name": "UC1",
                           "color": "tealDark1"
                        },
                        {
                           "id": "selfb7gVcLvrSENdb",
                           "name": "UI1",
                           "color": "cyanLight2"
                        },
                        {
                           "id": "sel2ZJMncFXppR1MC",
                           "name": "UK1",
                           "color": "pinkLight1"
                        },
                        {
                           "id": "selOPOldlbe0z6jU8",
                           "name": "UK2",
                           "color": "greenBright"
                        },
                        {
                           "id": "selW5BaHA4SvM1Lng",
                           "name": "UN1",
                           "color": "tealLight2"
                        },
                        {
                           "id": "sel5Lj6xF7uRdUEt5",
                           "name": "UR1",
                           "color": "cyanLight2"
                        },
                        {
                           "id": "selui7VoLVOpqGcNf",
                           "name": "UX0",
                           "color": "purpleLight1"
                        },
                        {
                           "id": "selC3Rx08HsUb2DN5",
                           "name": "UX1",
                           "color": "redLight2"
                        },
                        {
                           "id": "selBCPMNHqn0NQ9qC",
                           "name": "UX2",
                           "color": "purpleDark1"
                        },
                        {
                           "id": "selgBdwdBPTd1a8aU",
                           "name": "UX3",
                           "color": "yellowDark1"
                        },
                        {
                           "id": "selL3d4TXTQbHsBTv",
                           "name": "UX4",
                           "color": "pinkDark1"
                        },
                        {
                           "id": "selYGO7bCa2eAyRMp",
                           "name": "UX5",
                           "color": "greenDark1"
                        },
                        {
                           "id": "selDG1H6Vek5MpsD9",
                           "name": "UX6",
                           "color": "yellowDark1"
                        },
                        {
                           "id": "selKL8FkRgWuqu4VP",
                           "name": "UX7",
                           "color": "tealDark1"
                        },
                        {
                           "id": "selxBigFWm9yFJQJX",
                           "name": "UX8",
                           "color": "greenDark1"
                        },
                        {
                           "id": "selOKZ9NGywIlGg9z",
                           "name": "UX9",
                           "color": "greenLight1"
                        },
                        {
                           "id": "selccAVNlfmw79h5t",
                           "name": "UXX",
                           "color": "tealBright"
                        },
                        {
                           "id": "selonXmPLnOBc6XEQ",
                           "name": "X01",
                           "color": "cyanLight2"
                        },
                        {
                           "id": "selAVJzCOOlpOKoU5",
                           "name": "XCH",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selPiwBrc0u9JNMr3",
                           "name": "NP1",
                           "color": "blueLight2"
                        },
                        {
                           "id": "seliWOdhyT3OBAT0D",
                           "name": "NN1",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selqMhqw4xoAw3sv1",
                           "name": "II5",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selU7p9Cv5dYC2r86",
                           "name": "BV2",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selY2N0SWSxiCNmvF",
                           "name": "RI1",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selUZvv5n856YMLgh",
                           "name": "IT2",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selSwVT1nZZdLgb2z",
                           "name": "II6",
                           "color": "blueLight2"
                        },
                        {
                           "id": "sel7oO8Ggo6dFj8yN",
                           "name": "C03",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selsl3694KQlANkaA",
                           "name": "F91",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selUhNw8ZxhNmfb3K",
                           "name": "F81",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selERdHLwwYzdJS4w",
                           "name": "JH8",
                           "color": "blueLight2"
                        },
                        {
                           "id": "self2I3Mg7ED5UjFm",
                           "name": "TFX",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selZQ3udmbHqIhnaL",
                           "name": "BV3",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selMRWhXYGh0rynfP",
                           "name": "JD9",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selpSO4PhwRPXCQRk",
                           "name": "JXX",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selDzk4gnGEZwJ7xo",
                           "name": "JDA",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selAbAPk4zdPdsql7",
                           "name": "JDB",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selXAHV7XcfRfRWqE",
                           "name": "F41",
                           "color": "blueLight2"
                        },
                        {
                           "id": "seliQXDcDcfxJeckC",
                           "name": "F61",
                           "color": "blueLight2"
                        },
                        {
                           "id": "sel9sWBCCyNVEDySR",
                           "name": "UR2",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selpnHYqFhJ7lsahf",
                           "name": "F42",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selHIHt3Q72cLNp6J",
                           "name": "BI3",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selooOpcUMgCYTBit",
                           "name": "II7",
                           "color": "blueLight2"
                        },
                        {
                           "id": "sel2t12P5Oh06a121",
                           "name": "UR4",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selEgxmLepiUtfEPw",
                           "name": "F18",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selRg47bvPKHODOe7",
                           "name": "UR3",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selcaLoeF4BdWVum3",
                           "name": "F27",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selIuU6NmVbd2UGBO",
                           "name": "UR5",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selt4A1suwRimjn2u",
                           "name": "JDC",
                           "color": "blueLight2"
                        },
                        {
                           "id": "sel2lnwaOkg7yOOiw",
                           "name": "T77",
                           "color": "blueLight2"
                        },
                        {
                           "id": "sel8VrwlsQqwzLj5W",
                           "name": "C04",
                           "color": "blueLight2"
                        },
                        {
                           "id": "sel3wBAMyEJdJh9gx",
                           "name": "C05",
                           "color": "cyanLight2"
                        },
                        {
                           "id": "selyrpjVgjTUxZXl1",
                           "name": "RH1",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selC85QmKdSKzbwV2",
                           "name": "THQ",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selrmOKaMR2avjmjJ",
                           "name": "F43",
                           "color": "blueLight2"
                        },
                        {
                           "id": "selROj9Hs1KC9wvjn",
                           "name": "F2D",
                           "color": "cyanLight2"
                        },
                        {
                           "id": "selunCShXB5NLAQVH",
                           "name": "N08",
                           "color": "blueLight2"
                        },
                        {
                           "id": "sel7KJogJS8abesrA",
                           "name": "N09",
                           "color": "cyanLight2"
                        }
                     ]
                  },
                  "description": ""
               },
               {
                  "id": "fldXbKgFqLk9jnArf",
                  "name": "Title",
                  "type": "singleLineText",
                  "isComputed": false,
                  "options": null,
                  "description": ""
               },
               {
                  "id": "fldZ6FEWCJpxFt9b0",
                  "name": "Credits",
                  "type": "number",
                  "isComputed": false,
                  "options": {
                     "precision": 1
                  },
                  "description": ""
               },
               {
                  "id": "fldVpBgGbtVD789IV",
                  "name": "Start Date",
                  "type": "date",
                  "isComputed": false,
                  "options": {
                     "dateFormat": {
                        "name": "local",
                        "format": "l"
                     }
                  },
                  "description": ""
               },
               {
                  "id": "fldJYwBIj5JjNUDlb",
                  "name": "End Date",
                  "type": "date",
                  "isComputed": false,
                  "options": {
                     "dateFormat": {
                        "name": "local",
                        "format": "l"
                     }
                  },
                  "description": ""
               },
               {
                  "id": "fld4uaE9zo5OY3vHJ",
                  "name": "Instructor",
                  "type": "singleLineText",
                  "isComputed": false,
                  "options": null,
                  "description": ""
               },
               {
                  "id": "fldmTwguwBHntqkdN",
                  "name": "Inst Email",
                  "type": "singleLineText",
                  "isComputed": false,
                  "options": null,
                  "description": ""
               },
               {
                  "id": "fldZc92tIxud1xLd1",
                  "name": "Max Enrl",
                  "type": "number",
                  "isComputed": false,
                  "options": {
                     "precision": 0
                  },
                  "description": ""
               },
               {
                  "id": "fldc1InJErvclThh4",
                  "name": "Curr Enrl",
                  "type": "number",
                  "isComputed": false,
                  "options": {
                     "precision": 0
                  },
                  "description": ""
               },
               {
                  "id": "fldvO2pF7bGDLZcjt",
                  "name": "Waitlist Cap",
                  "type": "number",
                  "isComputed": false,
                  "options": {
                     "precision": 0
                  },
                  "description": ""
               },
               {
                  "id": "fld6RuHUYwpFsAW9r",
                  "name": "Crosslist Def",
                  "type": "singleLineText",
                  "isComputed": false,
                  "options": null,
                  "description": ""
               },
               {
                  "id": "fldd3hfLwgDYMg5ts",
                  "name": "Status",
                  "type": "singleLineText",
                  "isComputed": false,
                  "options": null,
                  "description": ""
               },
               {
                  "id": "fldLpnZfgrO2jCcVL",
                  "name": "CRN + Term",
                  "type": "multilineText",
                  "isComputed": false,
                  "options": null,
                  "description": ""
               },
               {
                  "id": "fldxUoZOGDlgI7Lw8",
                  "name": "Last Modified",
                  "type": "dateTime",
                  "isComputed": false,
                  "options": {
                     "dateFormat": {
                        "name": "local",
                        "format": "l"
                     },
                     "timeFormat": {
                        "name": "12hour",
                        "format": "h:mma"
                     },
                     "timeZone": "client"
                  },
                  "description": ""
               },
               {
                  "id": "fldFmYzEI8k5HIcLW",
                  "name": "Division",
                  "type": "multilineText",
                  "isComputed": false,
                  "options": null,
                  "description": ""
               },
               {
                  "id": "fldx7FJHmAhlYNR6O",
                  "name": "Price",
                  "type": "number",
                  "isComputed": false,
                  "options": {
                     "precision": 1
                  },
                  "description": ""
               },
               {
                  "id": "fldriOzeJ97n7UXkM",
                  "name": "Notes",
                  "type": "multilineText",
                  "isComputed": false,
                  "options": null,
                  "description": ""
               },
               {
                  "id": "fldS1eivX0FPqIW3O",
                  "name": "Session",
                  "type": "number",
                  "isComputed": false,
                  "options": {
                     "precision": 0
                  },
                  "description": ""
               },
               {
                  "id": "fldt6Fkb0z2dUFj29",
                  "name": "Instructional Method",
                  "type": "singleLineText",
                  "isComputed": false,
                  "options": null,
                  "description": ""
               },
               {
                  "id": "fld9B8bmSXg6DhBW4",
                  "name": "Meeting Type",
                  "type": "singleLineText",
                  "isComputed": false,
                  "options": null,
                  "description": ""
               },
               {
                  "id": "fldr2yr03kZtYQ5YO",
                  "name": "Print in Schedule",
                  "type": "singleLineText",
                  "isComputed": false,
                  "options": null,
                  "description": ""
               },
               {
                  "id": "fldVfuZQZmiL4vBba",
                  "name": "Web Available",
                  "type": "singleLineText",
                  "isComputed": false,
                  "options": null,
                  "description": ""
               },
               {
                  "id": "fldLwIfLku4redBiC",
                  "name": "Campus",
                  "type": "singleLineText",
                  "isComputed": false,
                  "options": null,
                  "description": ""
               },
               {
                  "id": "fld938I2OwHgzP1mG",
                  "name": "Meeting time",
                  "type": "singleLineText",
                  "isComputed": false,
                  "options": null,
                  "description": ""
               },
               {
                  "id": "fldRVsVERm9rSEpnS",
                  "name": "Description",
                  "type": "multilineText",
                  "isComputed": false,
                  "options": null,
                  "description": ""
               },
               {
                  "id": "fldFNmymzivmTGRb2",
                  "name": "Prerequisites",
                  "type": "singleLineText",
                  "isComputed": false,
                  "options": null,
                  "description": ""
               },
               {
                  "id": "fldOd9lSIYzestHIi",
                  "name": "Attendance Method",
                  "type": "singleLineText",
                  "isComputed": false,
                  "options": null,
                  "description": ""
               },
               {
                  "id": "fldcCUFDxnBpntXmM",
                  "name": "Modality",
                  "type": "singleLineText",
                  "isComputed": false,
                  "options": null,
                  "description": ""
               },
               {
                  "id": "fldvRuLterQY0v1ED",
                  "name": "BB ID",
                  "type": "formula",
                  "isComputed": true,
                  "options": {
                     "isValid": true,
                     "referencedFieldIds": [
                        "fldxrlTmBmZ4hsSFH",
                        "fld3zcakSVgoXOb3Y",
                        "fldDrvtOlXieHm1Ij",
                        "fldf5LpFZYc3u5Ser"
                     ],
                     "result": {
                        "type": "singleLineText"
                     }
                  },
                  "description": ""
               },
               {
                  "id": "fldKQKZhsWItsIiZ7",
                  "name": "5/17 - 10AM",
                  "type": "multipleRecordLinks",
                  "isComputed": false,
                  "options": {
                     "linkedTableId": "tblMAeMOXVHYHJ1eO",
                     "isReversed": false,
                     "inverseLinkFieldId": "fld5m4Xy43hBaN4U1"
                  },
                  "description": ""
               }
            ]
         }
      ]
   }
}
