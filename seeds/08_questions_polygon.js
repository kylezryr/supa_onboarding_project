/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('questions').del()
  // await knex('questions').insert([
    // {
    //   id: 325,
    //   lesson_id: 55,
    //   question_number: 1,
    //   question_text: "In polygon annotation, what does each vertex represent?",
    //   answers: ["The center of the object", "A point on the object's boundary", "The object's area", "The object's class"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 326,
    //   lesson_id: 55,
    //   question_number: 2,
    //   question_text: "What is the purpose of using polygons for annotation?",
    //   answers: ["To simplify the annotation process", "To provide precise boundaries for objects", "To reduce the file size of annotations", "To increase the speed of object detection models"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 327,
    //   lesson_id: 55,
    //   question_number: 3,
    //   question_text: "Which file formats are commonly used for storing polygon annotations?",
    //   answers: ["JSON and XML", "PNG and JPEG", "PDF and DOCX", "CSV and TXT"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 328,
    //   lesson_id: 55,
    //   question_number: 1,
    //   question_text: "What is the purpose of the bounding box that encloses a polygon annotation?",
    //   answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 329,
    //   lesson_id: 55,
    //   question_number: 2,
    //   question_text: "How does the number of vertices affect the accuracy of a polygon annotation?",
    //   answers: ["More vertices improve accuracy", "Fewer vertices improve accuracy", "The number of vertices is unrelated to accuracy", "Vertices have no impact on accuracy"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 330,
    //   lesson_id: 55,
    //   question_number: 3,
    //   question_text: "What challenges are associated with polygon annotation?",
    //   answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 331,
    //   lesson_id: 56,
    //   question_number: 1,
    //   question_text: "What is the main advantage of using polygons for object annotation?",
    //   answers: ["They are computationally efficient", "They provide precise object boundaries", "They require less storage space", "They are easier to implement in annotation tools"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 332,
    //   lesson_id: 56,
    //   question_number: 2,
    //   question_text: "Which tool is commonly used for manually annotating polygons?",
    //   answers: ["Adobe Photoshop", "Microsoft Excel", "LabelImg", "Notepad"],
    //   correct_answer: 2,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 333,
    //   lesson_id: 56,
    //   question_number: 3,
    //   question_text: "What is the primary challenge of polygon annotation?",
    //   answers: ["Inaccuracy in defining object boundaries", "Lack of support in annotation software", "Difficulty in visualizing annotations", "High computational cost"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 334,
    //   lesson_id: 56,
    //   question_number: 1,
    //   question_text: "What is the purpose of the bounding box that encloses a polygon annotation?",
    //   answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 335,
    //   lesson_id: 56,
    //   question_number: 2,
    //   question_text: "How does the number of vertices affect the accuracy of a polygon annotation?",
    //   answers: ["More vertices improve accuracy", "Fewer vertices improve accuracy", "The number of vertices is unrelated to accuracy", "Vertices have no impact on accuracy"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 336,
    //   lesson_id: 56,
    //   question_number: 3,
    //   question_text: "What challenges are associated with polygon annotation?",
    //   answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 337,
    //   lesson_id: 57,
    //   question_number: 1,
    //   question_text: "What is the main advantage of using polygons for object annotation?",
    //   answers: ["They are computationally efficient", "They provide precise object boundaries", "They require less storage space", "They are easier to implement in annotation tools"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 338,
    //   lesson_id: 57,
    //   question_number: 2,
    //   question_text: "Which tool is commonly used for manually annotating polygons?",
    //   answers: ["Adobe Photoshop", "Microsoft Excel", "LabelImg", "Notepad"],
    //   correct_answer: 2,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 339,
    //   lesson_id: 57,
    //   question_number: 3,
    //   question_text: "What is the primary challenge of polygon annotation?",
    //   answers: ["Inaccuracy in defining object boundaries", "Lack of support in annotation software", "Difficulty in visualizing annotations", "High computational cost"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 340,
    //   lesson_id: 57,
    //   question_number: 1,
    //   question_text: "What is the purpose of the bounding box that encloses a polygon annotation?",
    //   answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 341,
    //   lesson_id: 57,
    //   question_number: 2,
    //   question_text: "How does the number of vertices affect the accuracy of a polygon annotation?",
    //   answers: ["More vertices improve accuracy", "Fewer vertices improve accuracy", "The number of vertices is unrelated to accuracy", "Vertices have no impact on accuracy"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 342,
    //   lesson_id: 57,
    //   question_number: 3,
    //   question_text: "What challenges are associated with polygon annotation?",
    //   answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 343,
    //   lesson_id: 58,
    //   question_number: 1,
    //   question_text: "In polygon annotation, what is the significance of the order of vertices?",
    //   answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
    //   correct_answer: 2,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 344,
    //   lesson_id: 58,
    //   question_number: 2,
    //   question_text: "What is the advantage of using polygons over bounding boxes for annotation?",
    //   answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 345,
    //   lesson_id: 58,
    //   question_number: 3,
    //   question_text: "Which software tool is commonly used for editing polygon annotations?",
    //   answers: ["Photoshop", "Excel", "Notepad", "PowerPoint"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 346,
    //   lesson_id: 58,
    //   question_number: 1,
    //   question_text: "How does the complexity of object shapes impact the use of polygons for annotation?",
    //   answers: ["Complex shapes are easier to annotate with polygons", "Simple shapes require more vertices in polygons", "Polygons are unsuitable for complex shapes", "Polygons are preferred for simple shapes"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 347,
    //   lesson_id: 58,
    //   question_number: 2,
    //   question_text: "What is the role of the bounding box in polygon annotation?",
    //   answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 348,
    //   lesson_id: 58,
    //   question_number: 3,
    //   question_text: "What challenges do polygons pose in terms of computational complexity?",
    //   answers: ["They require more storage space", "They increase the inference time of models", "They are difficult to implement in deep learning frameworks", "They impose no additional computational burden"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 349,
    //   lesson_id: 59,
    //   question_number: 1,
    //   question_text: "What is the primary purpose of the bounding box in polygon annotation?",
    //   answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 350,
    //   lesson_id: 59,
    //   question_number: 2,
    //   question_text: "How does the number of vertices affect the precision of polygon annotations?",
    //   answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 351,
    //   lesson_id: 59,
    //   question_number: 3,
    //   question_text: "What challenges are associated with editing polygon annotations?",
    //   answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 352,
    //   lesson_id: 59,
    //   question_number: 1,
    //   question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
    //   answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 353,
    //   lesson_id: 59,
    //   question_number: 2,
    //   question_text: "What role do polygons play in object detection tasks?",
    //   answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 354,
    //   lesson_id: 59,
    //   question_number: 3,
    //   question_text: "What are the advantages of using polygons over bounding boxes?",
    //   answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 355,
    //   lesson_id: 60,
    //   question_number: 1,
    //   question_text: "What is the primary purpose of the bounding box in polygon annotation?",
    //   answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 356,
    //   lesson_id: 60,
    //   question_number: 2,
    //   question_text: "How does the number of vertices affect the precision of polygon annotations?",
    //   answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 357,
    //   lesson_id: 60,
    //   question_number: 3,
    //   question_text: "What challenges are associated with editing polygon annotations?",
    //   answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 358,
    //   lesson_id: 60,
    //   question_number: 1,
    //   question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
    //   answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 359,
    //   lesson_id: 60,
    //   question_number: 2,
    //   question_text: "What role do polygons play in object detection tasks?",
    //   answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 360,
    //   lesson_id: 60,
    //   question_number: 3,
    //   question_text: "What are the advantages of using polygons over bounding boxes?",
    //   answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 361,
    //   lesson_id: 61,
    //   question_number: 1,
    //   question_text: "What is the primary purpose of the bounding box in polygon annotation?",
    //   answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 362,
    //   lesson_id: 61,
    //   question_number: 2,
    //   question_text: "How does the number of vertices affect the precision of polygon annotations?",
    //   answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 363,
    //   lesson_id: 61,
    //   question_number: 3,
    //   question_text: "What challenges are associated with editing polygon annotations?",
    //   answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 364,
    //   lesson_id: 61,
    //   question_number: 1,
    //   question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
    //   answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 365,
    //   lesson_id: 61,
    //   question_number: 2,
    //   question_text: "What role do polygons play in object detection tasks?",
    //   answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 366,
    //   lesson_id: 61,
    //   question_number: 3,
    //   question_text: "What are the advantages of using polygons over bounding boxes?",
    //   answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 367,
    //   lesson_id: 62,
    //   question_number: 1,
    //   question_text: "What is the primary purpose of the bounding box in polygon annotation?",
    //   answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 368,
    //   lesson_id: 62,
    //   question_number: 2,
    //   question_text: "How does the number of vertices affect the precision of polygon annotations?",
    //   answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 369,
    //   lesson_id: 62,
    //   question_number: 3,
    //   question_text: "What challenges are associated with editing polygon annotations?",
    //   answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 370,
    //   lesson_id: 62,
    //   question_number: 1,
    //   question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
    //   answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 371,
    //   lesson_id: 62,
    //   question_number: 2,
    //   question_text: "What role do polygons play in object detection tasks?",
    //   answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 372,
    //   lesson_id: 62,
    //   question_number: 3,
    //   question_text: "What are the advantages of using polygons over bounding boxes?",
    //   answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 373,
    //   lesson_id: 63,
    //   question_number: 1,
    //   question_text: "What is the primary purpose of the bounding box in polygon annotation?",
    //   answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 374,
    //   lesson_id: 63,
    //   question_number: 2,
    //   question_text: "How does the number of vertices affect the precision of polygon annotations?",
    //   answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 375,
    //   lesson_id: 63,
    //   question_number: 3,
    //   question_text: "What challenges are associated with editing polygon annotations?",
    //   answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 376,
    //   lesson_id: 63,
    //   question_number: 1,
    //   question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
    //   answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 377,
    //   lesson_id: 63,
    //   question_number: 2,
    //   question_text: "What role do polygons play in object detection tasks?",
    //   answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 378,
    //   lesson_id: 63,
    //   question_number: 3,
    //   question_text: "What are the advantages of using polygons over bounding boxes?",
    //   answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 379,
    //   lesson_id: 64,
    //   question_number: 1,
    //   question_text: "What is the primary purpose of the bounding box in polygon annotation?",
    //   answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 380,
    //   lesson_id: 64,
    //   question_number: 2,
    //   question_text: "How does the number of vertices affect the precision of polygon annotations?",
    //   answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 381,
    //   lesson_id: 64,
    //   question_number: 3,
    //   question_text: "What challenges are associated with editing polygon annotations?",
    //   answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 382,
    //   lesson_id: 64,
    //   question_number: 1,
    //   question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
    //   answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 383,
    //   lesson_id: 64,
    //   question_number: 2,
    //   question_text: "What role do polygons play in object detection tasks?",
    //   answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 384,
    //   lesson_id: 64,
    //   question_number: 3,
    //   question_text: "What are the advantages of using polygons over bounding boxes?",
    //   answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 385,
    //   lesson_id: 65,
    //   question_number: 1,
    //   question_text: "What is the primary purpose of the bounding box in polygon annotation?",
    //   answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 386,
    //   lesson_id: 65,
    //   question_number: 2,
    //   question_text: "How does the number of vertices affect the precision of polygon annotations?",
    //   answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 387,
    //   lesson_id: 65,
    //   question_number: 3,
    //   question_text: "What challenges are associated with editing polygon annotations?",
    //   answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 388,
    //   lesson_id: 65,
    //   question_number: 1,
    //   question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
    //   answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 389,
    //   lesson_id: 65,
    //   question_number: 2,
    //   question_text: "What role do polygons play in object detection tasks?",
    //   answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 390,
    //   lesson_id: 65,
    //   question_number: 3,
    //   question_text: "What are the advantages of using polygons over bounding boxes?",
    //   answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 391,
    //   lesson_id: 66,
    //   question_number: 1,
    //   question_text: "What is the primary purpose of the bounding box in polygon annotation?",
    //   answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 392,
    //   lesson_id: 66,
    //   question_number: 2,
    //   question_text: "How does the number of vertices affect the precision of polygon annotations?",
    //   answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 393,
    //   lesson_id: 66,
    //   question_number: 3,
    //   question_text: "What challenges are associated with editing polygon annotations?",
    //   answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 394,
    //   lesson_id: 66,
    //   question_number: 1,
    //   question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
    //   answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 395,
    //   lesson_id: 66,
    //   question_number: 2,
    //   question_text: "What role do polygons play in object detection tasks?",
    //   answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 396,
    //   lesson_id: 66,
    //   question_number: 3,
    //   question_text: "What are the advantages of using polygons over bounding boxes?",
    //   answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 397,
    //   lesson_id: 67,
    //   question_number: 1,
    //   question_text: "What is the primary purpose of the bounding box in polygon annotation?",
    //   answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 398,
    //   lesson_id: 67,
    //   question_number: 2,
    //   question_text: "How does the number of vertices affect the precision of polygon annotations?",
    //   answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 399,
    //   lesson_id: 67,
    //   question_number: 3,
    //   question_text: "What challenges are associated with editing polygon annotations?",
    //   answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 400,
    //   lesson_id: 67,
    //   question_number: 1,
    //   question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
    //   answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 401,
    //   lesson_id: 67,
    //   question_number: 2,
    //   question_text: "What role do polygons play in object detection tasks?",
    //   answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 402,
    //   lesson_id: 67,
    //   question_number: 3,
    //   question_text: "What are the advantages of using polygons over bounding boxes?",
    //   answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 403,
    //   lesson_id: 68,
    //   question_number: 1,
    //   question_text: "What is the primary purpose of the bounding box in polygon annotation?",
    //   answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 404,
    //   lesson_id: 68,
    //   question_number: 2,
    //   question_text: "How does the number of vertices affect the precision of polygon annotations?",
    //   answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 405,
    //   lesson_id: 68,
    //   question_number: 3,
    //   question_text: "What challenges are associated with editing polygon annotations?",
    //   answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 406,
    //   lesson_id: 68,
    //   question_number: 1,
    //   question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
    //   answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 407,
    //   lesson_id: 68,
    //   question_number: 2,
    //   question_text: "What role do polygons play in object detection tasks?",
    //   answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 408,
    //   lesson_id: 68,
    //   question_number: 3,
    //   question_text: "What are the advantages of using polygons over bounding boxes?",
    //   answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 409,
    //   lesson_id: 69,
    //   question_number: 1,
    //   question_text: "What is the primary purpose of the bounding box in polygon annotation?",
    //   answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 410,
    //   lesson_id: 69,
    //   question_number: 2,
    //   question_text: "How does the number of vertices affect the precision of polygon annotations?",
    //   answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 411,
    //   lesson_id: 69,
    //   question_number: 3,
    //   question_text: "What challenges are associated with editing polygon annotations?",
    //   answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 412,
    //   lesson_id: 69,
    //   question_number: 1,
    //   question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
    //   answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 413,
    //   lesson_id: 69,
    //   question_number: 2,
    //   question_text: "What role do polygons play in object detection tasks?",
    //   answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 414,
    //   lesson_id: 69,
    //   question_number: 3,
    //   question_text: "What are the advantages of using polygons over bounding boxes?",
    //   answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 415,
    //   lesson_id: 70,
    //   question_number: 1,
    //   question_text: "What is the primary purpose of the bounding box in polygon annotation?",
    //   answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 416,
    //   lesson_id: 70,
    //   question_number: 2,
    //   question_text: "How does the number of vertices affect the precision of polygon annotations?",
    //   answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 417,
    //   lesson_id: 70,
    //   question_number: 3,
    //   question_text: "What challenges are associated with editing polygon annotations?",
    //   answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 418,
    //   lesson_id: 70,
    //   question_number: 1,
    //   question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
    //   answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 419,
    //   lesson_id: 70,
    //   question_number: 2,
    //   question_text: "What role do polygons play in object detection tasks?",
    //   answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 420,
    //   lesson_id: 70,
    //   question_number: 3,
    //   question_text: "What are the advantages of using polygons over bounding boxes?",
    //   answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 421,
    //   lesson_id: 71,
    //   question_number: 1,
    //   question_text: "What is the primary purpose of the bounding box in polygon annotation?",
    //   answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 422,
    //   lesson_id: 71,
    //   question_number: 2,
    //   question_text: "How does the number of vertices affect the precision of polygon annotations?",
    //   answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 423,
    //   lesson_id: 71,
    //   question_number: 3,
    //   question_text: "What challenges are associated with editing polygon annotations?",
    //   answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 424,
    //   lesson_id: 71,
    //   question_number: 1,
    //   question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
    //   answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 425,
    //   lesson_id: 71,
    //   question_number: 2,
    //   question_text: "What role do polygons play in object detection tasks?",
    //   answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 426,
    //   lesson_id: 71,
    //   question_number: 3,
    //   question_text: "What are the advantages of using polygons over bounding boxes?",
    //   answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 427,
    //   lesson_id: 72,
    //   question_number: 1,
    //   question_text: "What is the primary purpose of the bounding box in polygon annotation?",
    //   answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 428,
    //   lesson_id: 72,
    //   question_number: 2,
    //   question_text: "How does the number of vertices affect the precision of polygon annotations?",
    //   answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 429,
    //   lesson_id: 72,
    //   question_number: 3,
    //   question_text: "What challenges are associated with editing polygon annotations?",
    //   answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 430,
    //   lesson_id: 72,
    //   question_number: 1,
    //   question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
    //   answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 431,
    //   lesson_id: 72,
    //   question_number: 2,
    //   question_text: "What role do polygons play in object detection tasks?",
    //   answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 432,
    //   lesson_id: 72,
    //   question_number: 3,
    //   question_text: "What are the advantages of using polygons over bounding boxes?",
    //   answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 433,
    //   lesson_id: 73,
    //   question_number: 1,
    //   question_text: "What is the primary purpose of the bounding box in polygon annotation?",
    //   answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 434,
    //   lesson_id: 73,
    //   question_number: 2,
    //   question_text: "How does the number of vertices affect the precision of polygon annotations?",
    //   answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 435,
    //   lesson_id: 73,
    //   question_number: 3,
    //   question_text: "What challenges are associated with editing polygon annotations?",
    //   answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 436,
    //   lesson_id: 73,
    //   question_number: 1,
    //   question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
    //   answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 437,
    //   lesson_id: 73,
    //   question_number: 2,
    //   question_text: "What role do polygons play in object detection tasks?",
    //   answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 438,
    //   lesson_id: 73,
    //   question_number: 3,
    //   question_text: "What are the advantages of using polygons over bounding boxes?",
    //   answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 439,
    //   lesson_id: 74,
    //   question_number: 1,
    //   question_text: "What is the primary purpose of the bounding box in polygon annotation?",
    //   answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 440,
    //   lesson_id: 74,
    //   question_number: 2,
    //   question_text: "How does the number of vertices affect the precision of polygon annotations?",
    //   answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 441,
    //   lesson_id: 74,
    //   question_number: 3,
    //   question_text: "What challenges are associated with editing polygon annotations?",
    //   answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 442,
    //   lesson_id: 74,
    //   question_number: 1,
    //   question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
    //   answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 443,
    //   lesson_id: 74,
    //   question_number: 2,
    //   question_text: "What role do polygons play in object detection tasks?",
    //   answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 444,
    //   lesson_id: 74,
    //   question_number: 3,
    //   question_text: "What are the advantages of using polygons over bounding boxes?",
    //   answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 445,
    //   lesson_id: 75,
    //   question_number: 1,
    //   question_text: "What is the primary purpose of the bounding box in polygon annotation?",
    //   answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 446,
    //   lesson_id: 75,
    //   question_number: 2,
    //   question_text: "How does the number of vertices affect the precision of polygon annotations?",
    //   answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 447,
    //   lesson_id: 75,
    //   question_number: 3,
    //   question_text: "What challenges are associated with editing polygon annotations?",
    //   answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 448,
    //   lesson_id: 75,
    //   question_number: 1,
    //   question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
    //   answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 449,
    //   lesson_id: 75,
    //   question_number: 2,
    //   question_text: "What role do polygons play in object detection tasks?",
    //   answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 450,
    //   lesson_id: 75,
    //   question_number: 3,
    //   question_text: "What are the advantages of using polygons over bounding boxes?",
    //   answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 451,
    //   lesson_id: 76,
    //   question_number: 1,
    //   question_text: "What is the primary purpose of the bounding box in polygon annotation?",
    //   answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 452,
    //   lesson_id: 76,
    //   question_number: 2,
    //   question_text: "How does the number of vertices affect the precision of polygon annotations?",
    //   answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 453,
    //   lesson_id: 76,
    //   question_number: 3,
    //   question_text: "What challenges are associated with editing polygon annotations?",
    //   answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 454,
    //   lesson_id: 76,
    //   question_number: 1,
    //   question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
    //   answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 455,
    //   lesson_id: 76,
    //   question_number: 2,
    //   question_text: "What role do polygons play in object detection tasks?",
    //   answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 456,
    //   lesson_id: 76,
    //   question_number: 3,
    //   question_text: "What are the advantages of using polygons over bounding boxes?",
    //   answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 457,
    //   lesson_id: 77,
    //   question_number: 1,
    //   question_text: "What is the primary purpose of the bounding box in polygon annotation?",
    //   answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 458,
    //   lesson_id: 77,
    //   question_number: 2,
    //   question_text: "How does the number of vertices affect the precision of polygon annotations?",
    //   answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 459,
    //   lesson_id: 77,
    //   question_number: 3,
    //   question_text: "What challenges are associated with editing polygon annotations?",
    //   answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 460,
    //   lesson_id: 77,
    //   question_number: 1,
    //   question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
    //   answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 461,
    //   lesson_id: 77,
    //   question_number: 2,
    //   question_text: "What role do polygons play in object detection tasks?",
    //   answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 462,
    //   lesson_id: 77,
    //   question_number: 3,
    //   question_text: "What are the advantages of using polygons over bounding boxes?",
    //   answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 463,
    //   lesson_id: 78,
    //   question_number: 1,
    //   question_text: "What is the primary purpose of the bounding box in polygon annotation?",
    //   answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 464,
    //   lesson_id: 78,
    //   question_number: 2,
    //   question_text: "How does the number of vertices affect the precision of polygon annotations?",
    //   answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 465,
    //   lesson_id: 78,
    //   question_number: 3,
    //   question_text: "What challenges are associated with editing polygon annotations?",
    //   answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 466,
    //   lesson_id: 78,
    //   question_number: 1,
    //   question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
    //   answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    //   },
    // {
    //   id: 467,
    //   lesson_id: 78,
    //   question_number: 2,
    //   question_text: "What role do polygons play in object detection tasks?",
    //   answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 468,
    //   lesson_id: 78,
    //   question_number: 3,
    //   question_text: "What are the advantages of using polygons over bounding boxes?",
    //   answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 469,
    //   lesson_id: 79,
    //   question_number: 1,
    //   question_text: "What is the primary purpose of the bounding box in polygon annotation?",
    //   answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 470,
    //   lesson_id: 79,
    //   question_number: 2,
    //   question_text: "How does the number of vertices affect the precision of polygon annotations?",
    //   answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 471,
    //   lesson_id: 79,
    //   question_number: 3,
    //   question_text: "What challenges are associated with editing polygon annotations?",
    //   answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 472,
    //   lesson_id: 79,
    //   question_number: 1,
    //   question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
    //   answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 473,
    //   lesson_id: 79,
    //   question_number: 2,
    //   question_text: "What role do polygons play in object detection tasks?",
    //   answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 474,
    //   lesson_id: 79,
    //   question_number: 3,
    //   question_text: "What are the advantages of using polygons over bounding boxes?",
    //   answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 475,
    //   lesson_id: 80,
    //   question_number: 1,
    //   question_text: "What is the primary purpose of the bounding box in polygon annotation?",
    //   answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 476,
    //   lesson_id: 80,
    //   question_number: 2,
    //   question_text: "How does the number of vertices affect the precision of polygon annotations?",
    //   answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 477,
    //   lesson_id: 80,
    //   question_number: 3,
    //   question_text: "What challenges are associated with editing polygon annotations?",
    //   answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 478,
    //   lesson_id: 80,
    //   question_number: 1,
    //   question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
    //   answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 479,
    //   lesson_id: 80,
    //   question_number: 2,
    //   question_text: "What role do polygons play in object detection tasks?",
    //   answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 480,
    //   lesson_id: 80,
    //   question_number: 3,
    //   question_text: "What are the advantages of using polygons over bounding boxes?",
    //   answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 481,
    //   lesson_id: 81,
    //   question_number: 1,
    //   question_text: "What is the primary purpose of the bounding box in polygon annotation?",
    //   answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 482,
    //   lesson_id: 81,
    //   question_number: 2,
    //   question_text: "How does the number of vertices affect the precision of polygon annotations?",
    //   answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 483,
    //   lesson_id: 81,
    //   question_number: 3,
    //   question_text: "What challenges are associated with editing polygon annotations?",
    //   answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 484,
    //   lesson_id: 81,
    //   question_number: 1,
    //   question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
    //   answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 485,
    //   lesson_id: 81,
    //   question_number: 2,
    //   question_text: "What role do polygons play in object detection tasks?",
    //   answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 486,
    //   lesson_id: 81,
    //   question_number: 3,
    //   question_text: "What are the advantages of using polygons over bounding boxes?",
    //   answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // }
  // ]);
};
