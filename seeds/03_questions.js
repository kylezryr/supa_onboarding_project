/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("questions").del();
  await knex("questions").insert([
    {
      id: 1,
      lesson_id: 1,
      question_number: 1,
      question_text: "What is a Bounding Box?",
      answers: ["A box", "A tool", "An annnotation tool", "None of the above"],
      correct_answer: 2,
      practice: true,
      points: 50,
    },
    {
      id: 2,
      lesson_id: 1,
      question_number: 2,
      question_text: "Question 2",
      answers: ["A", "B", "C", "D"],
      correct_answer: 0,
      practice: true,
      points: 50,
    },
    {
      id: 3,
      lesson_id: 1,
      question_number: 3,
      question_text: "Question 3",
      answers: ["A", "B", "C", "D"],
      correct_answer: 1,
      practice: true,
      points: 50,
    },
    {
      id: 4,
      lesson_id: 1,
      question_number: 1,
      question_text: "Real Question 1",
      answers: ["A", "B", "C", "D"],
      correct_answer: 1,
      practice: false,
      points: 50,
    },
    {
      id: 5,
      lesson_id: 1,
      question_number: 2,
      question_text: "Real Question 2",
      answers: ["A", "B", "C", "D"],
      correct_answer: 3,
      practice: false,
      points: 50,
    },
    {
      id: 6,
      lesson_id: 1,
      question_number: 3,
      question_text: "Real Question 3",
      answers: ["A", "B", "C", "D"],
      correct_answer: 2,
      practice: false,
      points: 50,
    },
    {
      id: 7,
      lesson_id: 2,
      question_number: 1,
      question_text: "Draw bounding boxes around objects with a confidence level above 0.5.",
      answers: ["Option A", "Option B", "Option C", "Option D"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 8,
      lesson_id: 2,
      question_number: 2,
      question_text: "Identify overlapping bounding boxes and merge them.",
      answers: ["Option A", "Option B", "Option C", "Option D"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 9,
      lesson_id: 2,
      question_number: 3,
      question_text: "Place bounding boxes around objects of a specified color.",
      answers: ["Option A", "Option B", "Option C", "Option D"],
      correct_answer: 3,
      practice: true,
      points: 50
    },
    {
      id: 10,
      lesson_id: 2,
      question_number: 1,
      question_text: "How do you handle overlapping bounding boxes in an image?",
      answers: ["Merge them", "Ignore them", "Double count them", "Highlight them"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 11,
      lesson_id: 2,
      question_number: 2,
      question_text: "Mark bounding boxes around all animals in the image.",
      answers: ["Option A", "Option B", "Option C", "Option D"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 12,
      lesson_id: 2,
      question_number: 3,
      question_text: "Explain the concept of Intersection over Union (IoU) and its significance.",
      answers: ["Ratio of overlap to union of bounding boxes", "Difference between bounding boxes", "Sum of bounding boxes", "Product of bounding boxes"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 13,
      lesson_id: 3,
      question_number: 1,
      question_text: "Draw bounding boxes around all vehicles in a traffic image.",
      answers: ["Option A", "Option B", "Option C", "Option D"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 14,
      lesson_id: 3,
      question_number: 2,
      question_text: "Identify and mark bounding boxes for each fruit in a basket.",
      answers: ["Option A", "Option B", "Option C", "Option D"],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 15,
      lesson_id: 3,
      question_number: 3,
      question_text: "Place bounding boxes around pedestrians in a crowded street image.",
      answers: ["Option A", "Option B", "Option C", "Option D"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 16,
      lesson_id: 3,
      question_number: 1,
      question_text: "Describe a real-world application where bounding boxes are essential.",
      answers: ["Object detection in images", "Image color correction", "Image noise reduction", "Image sharpening"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 17,
      lesson_id: 3,
      question_number: 2,
      question_text: "Mark bounding boxes around all defective items in an assembly line image.",
      answers: ["Option A", "Option B", "Option C", "Option D"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 18,
      lesson_id: 3,
      question_number: 3,
      question_text: "Explain how bounding boxes can be used in autonomous driving systems.",
      answers: ["Detect and track objects on the road", "Improve fuel efficiency", "Enhance audio quality", "None of the above"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 19,
      lesson_id: 4,
      question_number: 1,
      question_text: "Draw a bounding box around the largest object in the image.",
      answers: ["Option A", "Option B", "Option C", "Option D"],
      correct_answer: 3,
      practice: true,
      points: 50
    },
    {
      id: 20,
      lesson_id: 4,
      question_number: 2,
      question_text: "Identify and mark the bounding box around all circular objects.",
      answers: ["Option A", "Option B", "Option C", "Option D"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 21,
      lesson_id: 4,
      question_number: 3,
      question_text: "Place a bounding box around the main subject of the image.",
      answers: ["Option A", "Option B", "Option C", "Option D"],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 22,
      lesson_id: 4,
      question_number: 1,
      question_text: "What is a bounding box and how is it used in image processing?",
      answers: ["A rectangular border around an object", "A type of image filter", "A type of color transformation", "None of the above"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 23,
      lesson_id: 4,
      question_number: 2,
      question_text: "Mark the bounding boxes around all faces in the image.",
      answers: ["Option A", "Option B", "Option C", "Option D"],
      correct_answer: 3,
      practice: false,
      points: 50
    },
    {
      id: 24,
      lesson_id: 4,
      question_number: 3,
      question_text: "Calculate the area of the bounding box you drew around the car.",
      answers: ["Option A", "Option B", "Option C", "Option D"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 25,
      lesson_id: 5,
      question_number: 1,
      question_text: "Draw bounding boxes around objects with a confidence level above 0.5.",
      answers: ["Option A", "Option B", "Option C", "Option D"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 26,
      lesson_id: 5,
      question_number: 2,
      question_text: "Identify overlapping bounding boxes and merge them.",
      answers: ["Option A", "Option B", "Option C", "Option D"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 27,
      lesson_id: 5,
      question_number: 3,
      question_text: "Place bounding boxes around objects of a specified color.",
      answers: ["Option A", "Option B", "Option C", "Option D"],
      correct_answer: 3,
      practice: true,
      points: 50
    },
    {
      id: 28,
      lesson_id: 5,
      question_number: 1,
      question_text: "How do you handle overlapping bounding boxes in an image?",
      answers: ["Merge them", "Ignore them", "Double count them", "Highlight them"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 29,
      lesson_id: 5,
      question_number: 2,
      question_text: "Mark bounding boxes around all animals in the image.",
      answers: ["Option A", "Option B", "Option C", "Option D"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 30,
      lesson_id: 5,
      question_number: 3,
      question_text: "Explain the concept of Intersection over Union (IoU) and its significance.",
      answers: ["Ratio of overlap to union of bounding boxes", "Difference between bounding boxes", "Sum of bounding boxes", "Product of bounding boxes"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 31,
      lesson_id: 6,
      question_number: 1,
      question_text: "Draw bounding boxes around all vehicles in a traffic image.",
      answers: ["Option A", "Option B", "Option C", "Option D"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 32,
      lesson_id: 6,
      question_number: 2,
      question_text: "Identify and mark bounding boxes for each fruit in a basket.",
      answers: ["Option A", "Option B", "Option C", "Option D"],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 33,
      lesson_id: 6,
      question_number: 3,
      question_text: "Place bounding boxes around pedestrians in a crowded street image.",
      answers: ["Option A", "Option B", "Option C", "Option D"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 34,
      lesson_id: 6,
      question_number: 1,
      question_text: "Describe a real-world application where bounding boxes are essential.",
      answers: ["Object detection in images", "Image color correction", "Image noise reduction", "Image sharpening"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 35,
      lesson_id: 6,
      question_number: 2,
      question_text: "Mark bounding boxes around all defective items in an assembly line image.",
      answers: ["Option A", "Option B", "Option C", "Option D"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 36,
      lesson_id: 6,
      question_number: 3,
      question_text: "Explain how bounding boxes can be used in autonomous driving systems.",
      answers: ["Detect and track objects on the road", "Improve fuel efficiency", "Enhance audio quality", "None of the above"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 37,
      lesson_id: 7,
      question_number: 1,
      question_text: "Draw a bounding box around the largest object in the image.",
      answers: ["Option A", "Option B", "Option C", "Option D"],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 38,
      lesson_id: 7,
      question_number: 2,
      question_text: "Identify and mark the bounding box around all circular objects.",
      answers: ["Option A", "Option B", "Option C", "Option D"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 39,
      lesson_id: 7,
      question_number: 3,
      question_text: "Place a bounding box around the main subject of the image.",
      answers: ["Option A", "Option B", "Option C", "Option D"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 40,
      lesson_id: 7,
      question_number: 1,
      question_text: "What is a bounding box and how is it used in image processing?",
      answers: ["A rectangular border around an object", "A type of image filter", "A type of color transformation", "None of the above"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 41,
      lesson_id: 7,
      question_number: 2,
      question_text: "Mark the bounding boxes around all faces in the image.",
      answers: ["Option A", "Option B", "Option C", "Option D"],
      correct_answer: 3,
      practice: false,
      points: 50
    },
    {
      id: 42,
      lesson_id: 7,
      question_number: 3,
      question_text: "Calculate the area of the bounding box you drew around the car.",
      answers: ["Option A", "Option B", "Option C", "Option D"],
      correct_answer: 2,
      practice: false,
      points: 50
    },    
    {
      id: 43,
      lesson_id: 8,
      question_number: 1,
      question_text: "Draw bounding boxes around objects with a confidence level above 0.5.",
      answers: ["Option A", "Option B", "Option C", "Option D"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 44,
      lesson_id: 8,
      question_number: 2,
      question_text: "Identify overlapping bounding boxes and merge them.",
      answers: ["Option A", "Option B", "Option C", "Option D"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 45,
      lesson_id: 8,
      question_number: 3,
      question_text: "Place bounding boxes around objects of a specified color.",
      answers: ["Option A", "Option B", "Option C", "Option D"],
      correct_answer: 3,
      practice: true,
      points: 50
    },
    {
      id: 46,
      lesson_id: 8,
      question_number: 1,
      question_text: "How do you handle overlapping bounding boxes in an image?",
      answers: ["Merge them", "Ignore them", "Double count them", "Highlight them"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 47,
      lesson_id: 8,
      question_number: 2,
      question_text: "Mark bounding boxes around all animals in the image.",
      answers: ["Option A", "Option B", "Option C", "Option D"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 48,
      lesson_id: 8,
      question_number: 3,
      question_text: "Explain the concept of Intersection over Union (IoU) and its significance.",
      answers: ["Ratio of overlap to union of bounding boxes", "Difference between bounding boxes", "Sum of bounding boxes", "Product of bounding boxes"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 49,
      lesson_id: 9,
      question_number: 1,
      question_text: "Draw bounding boxes around all vehicles in a traffic image.",
      answers: ["Option A", "Option B", "Option C", "Option D"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 50,
      lesson_id: 9,
      question_number: 2,
      question_text: "Identify and mark bounding boxes for each fruit in a basket.",
      answers: ["Option A", "Option B", "Option C", "Option D"],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 51,
      lesson_id: 9,
      question_number: 3,
      question_text: "Place bounding boxes around pedestrians in a crowded street image.",
      answers: ["Option A", "Option B", "Option C", "Option D"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 52,
      lesson_id: 9,
      question_number: 1,
      question_text: "Describe a real-world application where bounding boxes are essential.",
      answers: ["Object detection in images", "Image color correction", "Image noise reduction", "Image sharpening"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 53,
      lesson_id: 9,
      question_number: 2,
      question_text: "Mark bounding boxes around all defective items in an assembly line image.",
      answers: ["Option A", "Option B", "Option C", "Option D"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 54,
      lesson_id: 9,
      question_number: 3,
      question_text: "Explain how bounding boxes can be used in autonomous driving systems.",
      answers: ["Detect and track objects on the road", "Improve fuel efficiency", "Enhance audio quality", "None of the above"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 55,
      lesson_id: 10,
      question_number: 1,
      question_text: "What is the primary purpose of bounding box annotation?",
      answers: ["Object localization", "Object classification", "Semantic segmentation", "Instance segmentation"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 56,
      lesson_id: 10,
      question_number: 2,
      question_text: "Which of the following statements is true about bounding boxes?",
      answers: ["Bounding boxes are used only for object detection tasks.", "Bounding boxes are always rectangular in shape.", "Bounding boxes are used for pixel-level segmentation.", "Bounding boxes are used for region-based classification."],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 57,
      lesson_id: 10,
      question_number: 3,
      question_text: "In bounding box annotation, what does the width of the box represent?",
      answers: ["The horizontal extent of the object", "The vertical extent of the object", "The area covered by the object", "The object's class label"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 58,
      lesson_id: 10,
      question_number: 1,
      question_text: "Which technique is commonly used to improve the accuracy of bounding box annotation?",
      answers: ["Data augmentation", "Image downsampling", "Feature extraction", "Random cropping"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 59,
      lesson_id: 10,
      question_number: 2,
      question_text: "What is non-maximum suppression (NMS) used for in object detection?",
      answers: ["To merge overlapping bounding boxes", "To remove background noise from images", "To resize images for processing", "To generate additional training data"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 60,
      lesson_id: 10,
      question_number: 3,
      question_text: "Which of the following is a challenge often encountered in bounding box annotation?",
      answers: ["Object occlusion", "Semantic segmentation", "Binary classification", "Feature extraction"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 61,
      lesson_id: 11,
      question_number: 1,
      question_text: "What is the purpose of data augmentation in bounding box annotation?",
      answers: ["To increase the size of the training dataset", "To improve the generalization of the model", "To reduce the complexity of the model", "To decrease the training time"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 62,
      lesson_id: 11,
      question_number: 2,
      question_text: "Which of the following augmentation techniques is used to simulate rotation?",
      answers: ["Horizontal flipping", "Random cropping", "Affine transformations", "Color jittering"],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 63,
      lesson_id: 11,
      question_number: 3,
      question_text: "In bounding box annotation, what does the height of the box represent?",
      answers: ["The vertical extent of the object", "The horizontal extent of the object", "The area covered by the object", "The object's class label"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 64,
      lesson_id: 11,
      question_number: 1,
      question_text: "Which of the following is NOT a common challenge in bounding box annotation?",
      answers: ["Object occlusion", "Incorrect labeling of objects", "Inconsistent box aspect ratios", "Excessive object variability"],
      correct_answer: 3,
      practice: false,
      points: 50
    },
    {
      id: 65,
      lesson_id: 11,
      question_number: 2,
      question_text: "What role does transfer learning play in bounding box annotation?",
      answers: ["To transfer object labels between images", "To transfer knowledge from a pre-trained model", "To transfer annotations between bounding box formats", "To transfer objects between different classes"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 66,
      lesson_id: 11,
      question_number: 3,
      question_text: "Which of the following is a benefit of using anchor boxes in object detection?",
      answers: ["Improved localization accuracy", "Reduced computational complexity", "Enhanced model interpretability", "Better handling of small objects"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 67,
      lesson_id: 12,
      question_number: 1,
      question_text: "What is the significance of aspect ratio in bounding box annotation?",
      answers: ["It determines the size of the bounding box.", "It specifies the shape of the bounding box.", "It defines the class label of the object.", "It indicates the location of the bounding box."],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 68,
      lesson_id: 12,
      question_number: 2,
      question_text: "Which of the following techniques can help address class imbalance in object detection datasets?",
      answers: ["Random cropping", "Data augmentation", "Resampling techniques", "Feature extraction"],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 69,
      lesson_id: 12,
      question_number: 3,
      question_text: "What does the term 'ground truth' refer to in bounding box annotation?",
      answers: ["The true location and extent of objects in the image", "The initial guess made by annotators", "The final version of the annotated dataset", "The ratio of true positive detections"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 70,
      lesson_id: 12,
      question_number: 1,
      question_text: "Which of the following is a drawback of using traditional bounding box annotation?",
      answers: ["Difficulty in handling irregular object shapes", "Limited applicability to object detection tasks", "Inability to represent object relationships", "Lack of scalability to large datasets"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 71,
      lesson_id: 12,
      question_number: 2,
      question_text: "What is the role of anchor boxes in object detection?",
      answers: ["To anchor objects to a fixed position in the image", "To act as reference boxes for predicting object locations", "To restrict the search space for object detection", "To prioritize certain object classes over others"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 72,
      lesson_id: 12,
      question_number: 3,
      question_text: "How does the selection of anchor box sizes affect object detection performance?",
      answers: ["It has no impact on performance.", "It directly determines the recall rate.", "It influences the trade-off between localization and classification accuracy.", "It reduces the computational complexity of the model."],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 73,
      lesson_id: 13,
      question_number: 1,
      question_text: "What is the purpose of intersection over union (IoU) in object detection?",
      answers: ["To measure the overlap between predicted and ground truth bounding boxes", "To calculate the area covered by the predicted bounding box", "To estimate the object's class probability", "To determine the orientation of the object"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 74,
      lesson_id: 13,
      question_number: 2,
      question_text: "What is the role of non-maximum suppression (NMS) in object detection?",
      answers: ["To increase the recall rate of object detection models", "To reduce the number of redundant bounding box predictions", "To improve the localization accuracy of bounding boxes", "To speed up the training process of object detection models"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 75,
      lesson_id: 13,
      question_number: 3,
      question_text: "How does the choice of anchor box aspect ratios affect object detection performance?",
      answers: ["It has no significant impact on performance.", "It directly determines the precision rate.", "It affects the balance between recall and precision.", "It influences the classification accuracy of the model."],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 76,
      lesson_id: 13,
      question_number: 1,
      question_text: "Which of the following is NOT a common evaluation metric for object detection models?",
      answers: ["Mean Absolute Error (MAE)", "Average Precision (AP)", "Intersection over Union (IoU)", "Precision-Recall curve"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 77,
      lesson_id: 13,
      question_number: 2,
      question_text: "What is the purpose of anchor box clustering in object detection?",
      answers: ["To group similar object instances together", "To identify outliers in the dataset", "To improve the quality of bounding box predictions", "To reduce the number of anchor boxes"],
      correct_answer: 3,
      practice: false,
      points: 50
    },
    {
      id: 78,
      lesson_id: 13,
      question_number: 3,
      question_text: "How does the use of feature pyramid networks (FPNs) improve object detection?",
      answers: ["By reducing the computational cost of the model", "By providing multi-scale feature representations", "By enhancing the spatial resolution of the predictions", "By simplifying the training process"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 79,
      lesson_id: 14,
      question_number: 1,
      question_text: "What is the primary advantage of anchor-based object detection methods?",
      answers: ["Efficiently handle objects of varying sizes", "Achieve higher precision in object localization", "Enable real-time object detection on mobile devices", "Facilitate accurate detection of small objects"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 80,
      lesson_id: 14,
      question_number: 2,
      question_text: "How does the selection of anchor box scales impact object detection performance?",
      answers: ["It affects the recall rate but not the precision rate.", "It has no significant impact on performance.", "It directly determines the object classification accuracy.", "It influences the trade-off between recall and precision."],
      correct_answer: 3,
      practice: true,
      points: 50
    },
    {
      id: 81,
      lesson_id: 14,
      question_number: 3,
      question_text: "What is the role of hard negative mining in object detection?",
      answers: ["To focus training on difficult-to-detect objects", "To remove false positives from the training dataset", "To increase the number of positive samples in the training set", "To accelerate the convergence of the training process"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 82,
      lesson_id: 14,
      question_number: 1,
      question_text: "Which of the following techniques can help address the class imbalance problem in object detection datasets?",
      answers: ["Random cropping", "Oversampling of minority classes", "Feature extraction", "Color jittering"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 83,
      lesson_id: 14,
      question_number: 2,
      question_text: "What is the primary disadvantage of using anchor-based object detection methods?",
      answers: ["Difficulty in handling objects of varying sizes", "Limited scalability to large datasets", "Dependency on anchor box initialization", "Lower precision in object localization"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 84,
      lesson_id: 14,
      question_number: 3,
      question_text: "What is the main advantage of feature pyramid networks (FPNs) in object detection?",
      answers: ["Enhanced multi-task learning capabilities", "Improved object localization accuracy", "Efficient feature extraction at different scales", "Faster convergence during training"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 85,
      lesson_id: 15,
      question_number: 1,
      question_text: "What is the primary purpose of anchor boxes in object detection?",
      answers: ["To provide a reference for object localization", "To filter out irrelevant features in images", "To resize images for processing", "To encode object class probabilities"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 86,
      lesson_id: 15,
      question_number: 2,
      question_text: "How does the use of anchor boxes improve object detection performance?",
      answers: ["By providing scale-invariant predictions", "By reducing the computational complexity of the model", "By improving the accuracy of object localization", "By enhancing the semantic segmentation of objects"],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 87,
      lesson_id: 15,
      question_number: 3,
      question_text: "What is the role of anchor box clustering in object detection?",
      answers: ["To group similar object instances together", "To identify outliers in the dataset", "To improve the quality of bounding box predictions", "To reduce the number of anchor boxes"],
      correct_answer: 3,
      practice: true,
      points: 50
    },
    {
      id: 88,
      lesson_id: 15,
      question_number: 1,
      question_text: "Which of the following techniques is commonly used for data augmentation in object detection?",
      answers: ["Image downsampling", "Random cropping", "Principal component analysis (PCA)", "Feature extraction"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 89,
      lesson_id: 15,
      question_number: 2,
      question_text: "What is the significance of non-maximum suppression (NMS) in object detection?",
      answers: ["To increase the recall rate of object detection models", "To reduce the number of redundant bounding box predictions", "To improve the localization accuracy of bounding boxes", "To speed up the training process of object detection models"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 90,
      lesson_id: 15,
      question_number: 3,
      question_text: "How does the selection of anchor box scales affect object detection performance?",
      answers: ["It affects the recall rate but not the precision rate.", "It has no significant impact on performance.", "It directly determines the object classification accuracy.", "It influences the trade-off between recall and precision."],
      correct_answer: 3,
      practice: false,
      points: 50
    },
    {
      id: 91,
      lesson_id: 16,
      question_number: 1,
      question_text: "What is the purpose of anchor-based object detection methods?",
      answers: ["To efficiently handle objects of varying sizes", "To achieve higher precision in object localization", "To enable real-time object detection on mobile devices", "To facilitate accurate detection of small objects"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 92,
      lesson_id: 16,
      question_number: 2,
      question_text: "How does the selection of anchor box aspect ratios affect object detection performance?",
      answers: ["It has no significant impact on performance.", "It directly determines the precision rate.", "It affects the balance between recall and precision.", "It influences the classification accuracy of the model."],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 93,
      lesson_id: 16,
      question_number: 3,
      question_text: "What is the role of hard negative mining in object detection?",
      answers: ["To focus training on difficult-to-detect objects", "To remove false positives from the training dataset", "To increase the number of positive samples in the training set", "To accelerate the convergence of the training process"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 94,
      lesson_id: 16,
      question_number: 1,
      question_text: "Which of the following is NOT a common evaluation metric for object detection models?",
      answers: ["Mean Absolute Error (MAE)", "Average Precision (AP)", "Intersection over Union (IoU)", "Precision-Recall curve"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 95,
      lesson_id: 16,
      question_number: 2,
      question_text: "What is the purpose of anchor box clustering in object detection?",
      answers: ["To group similar object instances together", "To identify outliers in the dataset", "To improve the quality of bounding box predictions", "To reduce the number of anchor boxes"],
      correct_answer: 3,
      practice: false,
      points: 50
    },
    {
      id: 96,
      lesson_id: 16,
      question_number: 3,
      question_text: "How does the use of feature pyramid networks (FPNs) improve object detection?",
      answers: ["By reducing the computational cost of the model", "By providing multi-scale feature representations", "By enhancing the spatial resolution of the predictions", "By simplifying the training process"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 97,
      lesson_id: 17,
      question_number: 1,
      question_text: "What is the primary advantage of anchor-based object detection methods?",
      answers: ["Efficiently handle objects of varying sizes", "Achieve higher precision in object localization", "Enable real-time object detection on mobile devices", "Facilitate accurate detection of small objects"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 98,
      lesson_id: 17,
      question_number: 2,
      question_text: "How does the selection of anchor box scales impact object detection performance?",
      answers: ["It affects the recall rate but not the precision rate.", "It has no significant impact on performance.", "It directly determines the object classification accuracy.", "It influences the trade-off between recall and precision."],
      correct_answer: 3,
      practice: true,
      points: 50
    },
    {
      id: 99,
      lesson_id: 17,
      question_number: 3,
      question_text: "What is the role of hard negative mining in object detection?",
      answers: ["To focus training on difficult-to-detect objects", "To remove false positives from the training dataset", "To increase the number of positive samples in the training set", "To accelerate the convergence of the training process"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 100,
      lesson_id: 17,
      question_number: 1,
      question_text: "Which of the following techniques can help address the class imbalance problem in object detection datasets?",
      answers: ["Random cropping", "Oversampling of minority classes", "Feature extraction", "Color jittering"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 101,
      lesson_id: 17,
      question_number: 2,
      question_text: "What is the primary disadvantage of using anchor-based object detection methods?",
      answers: ["Difficulty in handling objects of varying sizes", "Limited scalability to large datasets", "Dependency on anchor box initialization", "Lower precision in object localization"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 102,
      lesson_id: 17,
      question_number: 3,
      question_text: "What is the main advantage of feature pyramid networks (FPNs) in object detection?",
      answers: ["Enhanced multi-task learning capabilities", "Improved object localization accuracy", "Efficient feature extraction at different scales", "Faster convergence during training"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 103,
      lesson_id: 18,
      question_number: 1,
      question_text: "What is the purpose of anchor-based object detection methods?",
      answers: ["To efficiently handle objects of varying sizes", "To achieve higher precision in object localization", "To enable real-time object detection on mobile devices", "To facilitate accurate detection of small objects"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 104,
      lesson_id: 18,
      question_number: 2,
      question_text: "How does the selection of anchor box aspect ratios affect object detection performance?",
      answers: ["It has no significant impact on performance.", "It directly determines the precision rate.", "It affects the balance between recall and precision.", "It influences the classification accuracy of the model."],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 105,
      lesson_id: 18,
      question_number: 3,
      question_text: "What is the role of hard negative mining in object detection?",
      answers: ["To focus training on difficult-to-detect objects", "To remove false positives from the training dataset", "To increase the number of positive samples in the training set", "To accelerate the convergence of the training process"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 106,
      lesson_id: 18,
      question_number: 1,
      question_text: "Which of the following is NOT a common evaluation metric for object detection models?",
      answers: ["Mean Absolute Error (MAE)", "Average Precision (AP)", "Intersection over Union (IoU)", "Precision-Recall curve"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 107,
      lesson_id: 18,
      question_number: 2,
      question_text: "What is the purpose of anchor box clustering in object detection?",
      answers: ["To group similar object instances together", "To identify outliers in the dataset", "To improve the quality of bounding box predictions", "To reduce the number of anchor boxes"],
      correct_answer: 3,
      practice: false,
      points: 50
    },
    {
      id: 108,
      lesson_id: 18,
      question_number: 3,
      question_text: "How does the use of feature pyramid networks (FPNs) improve object detection?",
      answers: ["By reducing the computational cost of the model", "By providing multi-scale feature representations", "By enhancing the spatial resolution of the predictions", "By simplifying the training process"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 109,
      lesson_id: 19,
      question_number: 1,
      question_text: "What is the primary advantage of anchor-based object detection methods?",
      answers: ["Efficiently handle objects of varying sizes", "Achieve higher precision in object localization", "Enable real-time object detection on mobile devices", "Facilitate accurate detection of small objects"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 110,
      lesson_id: 19,
      question_number: 2,
      question_text: "How does the selection of anchor box scales impact object detection performance?",
      answers: ["It affects the recall rate but not the precision rate.", "It has no significant impact on performance.", "It directly determines the object classification accuracy.", "It influences the trade-off between recall and precision."],
      correct_answer: 3,
      practice: true,
      points: 50
    },
    {
      id: 111,
      lesson_id: 19,
      question_number: 3,
      question_text: "What is the role of hard negative mining in object detection?",
      answers: ["To focus training on difficult-to-detect objects", "To remove false positives from the training dataset", "To increase the number of positive samples in the training set", "To accelerate the convergence of the training process"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 112,
      lesson_id: 19,
      question_number: 1,
      question_text: "Which of the following techniques can help address the class imbalance problem in object detection datasets?",
      answers: ["Random cropping", "Oversampling of minority classes", "Feature extraction", "Color jittering"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 113,
      lesson_id: 19,
      question_number: 2,
      question_text: "What is the primary disadvantage of using anchor-based object detection methods?",
      answers: ["Difficulty in handling objects of varying sizes", "Limited scalability to large datasets", "Dependency on anchor box initialization", "Lower precision in object localization"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 114,
      lesson_id: 19,
      question_number: 3,
      question_text: "What is the main advantage of feature pyramid networks (FPNs) in object detection?",
      answers: ["Enhanced multi-task learning capabilities", "Improved object localization accuracy", "Efficient feature extraction at different scales", "Faster convergence during training"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 115,
      lesson_id: 20,
      question_number: 1,
      question_text: "What is the purpose of anchor-based object detection methods?",
      answers: ["To efficiently handle objects of varying sizes", "To achieve higher precision in object localization", "To enable real-time object detection on mobile devices", "To facilitate accurate detection of small objects"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 116,
      lesson_id: 20,
      question_number: 2,
      question_text: "How does the selection of anchor box aspect ratios affect object detection performance?",
      answers: ["It has no significant impact on performance.", "It directly determines the precision rate.", "It affects the balance between recall and precision.", "It influences the classification accuracy of the model."],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 117,
      lesson_id: 20,
      question_number: 3,
      question_text: "What is the role of hard negative mining in object detection?",
      answers: ["To focus training on difficult-to-detect objects", "To remove false positives from the training dataset", "To increase the number of positive samples in the training set", "To accelerate the convergence of the training process"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 118,
      lesson_id: 20,
      question_number: 1,
      question_text: "Which of the following is NOT a common evaluation metric for object detection models?",
      answers: ["Mean Absolute Error (MAE)", "Average Precision (AP)", "Intersection over Union (IoU)", "Precision-Recall curve"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 119,
      lesson_id: 20,
      question_number: 2,
      question_text: "What is the purpose of anchor box clustering in object detection?",
      answers: ["To group similar object instances together", "To identify outliers in the dataset", "To improve the quality of bounding box predictions", "To reduce the number of anchor boxes"],
      correct_answer: 3,
      practice: false,
      points: 50
    },
    {
      id: 120,
      lesson_id: 20,
      question_number: 3,
      question_text: "How does the use of feature pyramid networks (FPNs) improve object detection?",
      answers: ["By reducing the computational cost of the model", "By providing multi-scale feature representations", "By enhancing the spatial resolution of the predictions", "By simplifying the training process"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 121,
      lesson_id: 21,
      question_number: 1,
      question_text: "What is the primary advantage of anchor-based object detection methods?",
      answers: ["Efficiently handle objects of varying sizes", "Achieve higher precision in object localization", "Enable real-time object detection on mobile devices", "Facilitate accurate detection of small objects"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 122,
      lesson_id: 21,
      question_number: 2,
      question_text: "How does the selection of anchor box scales impact object detection performance?",
      answers: ["It affects the recall rate but not the precision rate.", "It has no significant impact on performance.", "It directly determines the object classification accuracy.", "It influences the trade-off between recall and precision."],
      correct_answer: 3,
      practice: true,
      points: 50
    },
    {
      id: 123,
      lesson_id: 21,
      question_number: 3,
      question_text: "What is the role of hard negative mining in object detection?",
      answers: ["To focus training on difficult-to-detect objects", "To remove false positives from the training dataset", "To increase the number of positive samples in the training set", "To accelerate the convergence of the training process"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 124,
      lesson_id: 21,
      question_number: 1,
      question_text: "Which of the following techniques can help address the class imbalance problem in object detection datasets?",
      answers: ["Random cropping", "Oversampling of minority classes", "Feature extraction", "Color jittering"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 125,
      lesson_id: 21,
      question_number: 2,
      question_text: "What is the primary disadvantage of using anchor-based object detection methods?",
      answers: ["Difficulty in handling objects of varying sizes", "Limited scalability to large datasets", "Dependency on anchor box initialization", "Lower precision in object localization"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 126,
      lesson_id: 21,
      question_number: 3,
      question_text: "What is the main advantage of feature pyramid networks (FPNs) in object detection?",
      answers: ["Enhanced multi-task learning capabilities", "Improved object localization accuracy", "Efficient feature extraction at different scales", "Faster convergence during training"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 127,
      lesson_id: 22,
      question_number: 1,
      question_text: "What is the purpose of non-maximum suppression (NMS) in object detection?",
      answers: ["To increase the number of bounding boxes", "To decrease the number of false positives", "To improve the resolution of the feature maps", "To reduce the computational complexity of the model"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 128,
      lesson_id: 22,
      question_number: 2,
      question_text: "What is the main challenge of object detection in crowded scenes?",
      answers: ["Reduced variation in object appearance", "Decreased occlusions between objects", "Increased computational efficiency", "Greater ambiguity in object boundaries"],
      correct_answer: 3,
      practice: true,
      points: 50
    },
    {
      id: 129,
      lesson_id: 22,
      question_number: 3,
      question_text: "Which of the following is NOT a common technique for improving object detection accuracy?",
      answers: ["Data augmentation", "Transfer learning", "Feature reduction", "Ensemble learning"],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 130,
      lesson_id: 22,
      question_number: 1,
      question_text: "What is the primary advantage of using convolutional neural networks (CNNs) for object detection?",
      answers: ["Efficient handling of object scale variations", "Flexibility in incorporating domain-specific features", "Robustness to changes in lighting conditions", "Ease of interpretability of model predictions"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 131,
      lesson_id: 22,
      question_number: 2,
      question_text: "What role does the activation function play in a convolutional neural network (CNN)?",
      answers: ["To control the sparsity of the network", "To introduce non-linearity into the model", "To regularize the model during training", "To adjust the learning rate of the network"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 132,
      lesson_id: 22,
      question_number: 3,
      question_text: "What is the significance of anchor boxes in object detection?",
      answers: ["To define the location and scale of objects", "To filter out irrelevant regions in an image", "To adjust the learning rate during training", "To compute the loss function for model optimization"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 133,
      lesson_id: 23,
      question_number: 1,
      question_text: "What is the primary advantage of anchor-free object detection methods?",
      answers: ["Efficient handling of object scale variations", "Flexibility in incorporating domain-specific features", "Robustness to changes in lighting conditions", "Simplicity in model architecture"],
      correct_answer: 3,
      practice: true,
      points: 50
    },
    {
      id: 134,
      lesson_id: 23,
      question_number: 2,
      question_text: "How do anchor-free object detection methods address the problem of object scale variations?",
      answers: ["By using adaptive pooling layers", "By employing multi-scale feature fusion", "By directly predicting object bounding boxes", "By incorporating contextual information"],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 135,
      lesson_id: 23,
      question_number: 3,
      question_text: "Which of the following is NOT a common architecture for anchor-free object detection?",
      answers: ["YOLO (You Only Look Once)", "RetinaNet", "CenterNet", "Faster R-CNN"],
      correct_answer: 3,
      practice: true,
      points: 50
    },
    {
      id: 136,
      lesson_id: 23,
      question_number: 1,
      question_text: "What is the primary disadvantage of using anchor-free object detection methods?",
      answers: ["Difficulty in handling object scale variations", "Lower precision in object localization", "Dependency on large-scale training datasets", "Increased computational complexity"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 137,
      lesson_id: 23,
      question_number: 2,
      question_text: "What is the role of keypoint detection in object detection?",
      answers: ["To estimate the pose and orientation of objects", "To segment objects from the background", "To classify objects into predefined categories", "To generate bounding boxes around objects"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 138,
      lesson_id: 23,
      question_number: 3,
      question_text: "How do anchor-free object detection methods handle object occlusions?",
      answers: ["By using attention mechanisms", "By applying depth estimation techniques", "By incorporating temporal information", "By directly predicting object keypoints"],
      correct_answer: 3,
      practice: false,
      points: 50
    },
    {
      id: 139,
      lesson_id: 24,
      question_number: 1,
      question_text: "What is the primary advantage of single-stage object detection methods?",
      answers: ["Efficiency in inference speed", "Higher precision in object localization", "Robustness to occlusions", "Flexibility in model architecture"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 140,
      lesson_id: 24,
      question_number: 2,
      question_text: "What is the primary disadvantage of single-stage object detection methods?",
      answers: ["Lower recall rate", "Increased false positive rate", "Dependency on large-scale training datasets", "Difficulty in handling object scale variations"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 141,
      lesson_id: 24,
      question_number: 3,
      question_text: "How do single-stage object detection methods differ from two-stage methods?",
      answers: ["They utilize anchor boxes for object localization", "They perform object classification and localization simultaneously", "They incorporate region proposal networks (RPNs)", "They rely on multi-scale feature extraction"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 142,
      lesson_id: 24,
      question_number: 1,
      question_text: "What is the main advantage of using deep learning for object detection?",
      answers: ["Efficient handling of object scale variations", "Flexibility in incorporating domain-specific features", "Robustness to changes in lighting conditions", "Ability to learn complex patterns from data"],
      correct_answer: 3,
      practice: false,
      points: 50
    },
    {
      id: 143,
      lesson_id: 24,
      question_number: 2,
      question_text: "What is the significance of anchor boxes in object detection?",
      answers: ["To define the location and scale of objects", "To filter out irrelevant regions in an image", "To adjust the learning rate during training", "To compute the loss function for model optimization"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 144,
      lesson_id: 24,
      question_number: 3,
      question_text: "What role does the activation function play in a convolutional neural network (CNN)?",
      answers: ["To control the sparsity of the network", "To introduce non-linearity into the model", "To regularize the model during training", "To adjust the learning rate of the network"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 145,
      lesson_id: 25,
      question_number: 1,
      question_text: "What is the primary advantage of instance segmentation over semantic segmentation?",
      answers: ["Efficient computation on large-scale datasets", "Ability to differentiate between object instances", "Robustness to occlusions and clutter", "Flexibility in model architecture"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 146,
      lesson_id: 25,
      question_number: 2,
      question_text: "What is the primary challenge of instance segmentation?",
      answers: ["Increased computational complexity", "Difficulty in defining object boundaries", "Dependency on large-scale training datasets", "Inability to handle object occlusions"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 147,
      lesson_id: 25,
      question_number: 3,
      question_text: "How do instance segmentation methods differ from object detection methods?",
      answers: ["They predict pixel-wise object masks", "They generate bounding boxes around objects", "They classify objects into predefined categories", "They incorporate multi-scale feature extraction"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 148,
      lesson_id: 25,
      question_number: 1,
      question_text: "What is the main advantage of using deep learning for instance segmentation?",
      answers: ["Efficient handling of object scale variations", "Flexibility in incorporating domain-specific features", "Ability to capture fine-grained object details", "Robustness to changes in lighting conditions"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 149,
      lesson_id: 25,
      question_number: 2,
      question_text: "What role does the convolutional layer play in instance segmentation?",
      answers: ["To generate pixel-wise object masks", "To extract hierarchical feature representations", "To perform object classification", "To estimate object poses and orientations"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 150,
      lesson_id: 25,
      question_number: 3,
      question_text: "What is the significance of anchor boxes in instance segmentation?",
      answers: ["To define the location and scale of objects", "To filter out irrelevant regions in an image", "To adjust the learning rate during training", "To compute the loss function for model optimization"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 151,
      lesson_id: 26,
      question_number: 1,
      question_text: "What is the primary purpose of anchor boxes in object detection?",
      answers: ["To define the location and scale of objects", "To filter out irrelevant regions in an image", "To adjust the learning rate during training", "To compute the loss function for model optimization"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 152,
      lesson_id: 26,
      question_number: 2,
      question_text: "How does Non-Maximum Suppression (NMS) contribute to object detection?",
      answers: ["By reducing the number of redundant bounding box predictions", "By increasing the spatial resolution of the feature maps", "By improving the efficiency of the training process", "By minimizing the localization error of objects"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 153,
      lesson_id: 26,
      question_number: 3,
      question_text: "What is the primary advantage of using Feature Pyramid Networks (FPNs) in object detection?",
      answers: ["Improved multi-scale feature representation", "Faster convergence during training", "Reduced computational complexity", "Enhanced spatial resolution of predictions"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 154,
      lesson_id: 26,
      question_number: 1,
      question_text: "What is the primary advantage of using anchor-based object detection methods?",
      answers: ["Efficiently handle objects of varying sizes", "Achieve higher precision in object localization", "Enable real-time object detection on mobile devices", "Facilitate accurate detection of small objects"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 155,
      lesson_id: 26,
      question_number: 2,
      question_text: "How does the selection of anchor box scales impact object detection performance?",
      answers: ["It affects the recall rate but not the precision rate.", "It has no significant impact on performance.", "It directly determines the object classification accuracy.", "It influences the trade-off between recall and precision."],
      correct_answer: 3,
      practice: false,
      points: 50
    },
    {
      id: 156,
      lesson_id: 26,
      question_number: 3,
      question_text: "What is the role of hard negative mining in object detection?",
      answers: ["To focus training on difficult-to-detect objects", "To remove false positives from the training dataset", "To increase the number of positive samples in the training set", "To accelerate the convergence of the training process"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 157,
      lesson_id: 27,
      question_number: 1,
      question_text: "What is the main purpose of anchor-free object detection methods?",
      answers: ["To simplify the training process", "To improve the efficiency of inference", "To avoid the use of anchor boxes", "To enhance the quality of bounding box predictions"],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 158,
      lesson_id: 27,
      question_number: 2,
      question_text: "How do anchor-free object detection methods address the problem of object scale variations?",
      answers: ["By using adaptive pooling layers", "By employing multi-scale feature fusion", "By directly predicting object bounding boxes", "By incorporating contextual information"],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 159,
      lesson_id: 27,
      question_number: 3,
      question_text: "What role does keypoint detection play in object detection?",
      answers: ["To estimate the pose and orientation of objects", "To segment objects from the background", "To classify objects into predefined categories", "To generate bounding boxes around objects"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 160,
      lesson_id: 27,
      question_number: 1,
      question_text: "What is the primary advantage of anchor-free object detection methods?",
      answers: ["Efficiently handle objects of varying sizes", "Achieve higher precision in object localization", "Enable real-time object detection on mobile devices", "Facilitate accurate detection of small objects"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 161,
      lesson_id: 27,
      question_number: 2,
      question_text: "How does the selection of anchor box scales impact object detection performance?",
      answers: ["It affects the recall rate but not the precision rate.", "It has no significant impact on performance.", "It directly determines the object classification accuracy.", "It influences the trade-off between recall and precision."],
      correct_answer: 3,
      practice: false,
      points: 50
    },
    {
      id: 162,
      lesson_id: 27,
      question_number: 3,
      question_text: "What is the role of hard negative mining in object detection?",
      answers: ["To focus training on difficult-to-detect objects", "To remove false positives from the training dataset", "To increase the number of positive samples in the training set", "To accelerate the convergence of the training process"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 163,
      lesson_id: 28,
      question_number: 1,
      question_text: "What is the primary goal of semantic segmentation?",
      answers: ["To classify each pixel in an image into a predefined set of categories", "To detect and localize objects of interest", "To generate precise bounding boxes around objects", "To estimate the pose and orientation of objects"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 164,
      lesson_id: 28,
      question_number: 2,
      question_text: "What is the primary challenge of semantic segmentation?",
      answers: ["Increased computational complexity", "Difficulty in defining object boundaries", "Dependency on large-scale training datasets", "Inability to handle object occlusions"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 165,
      lesson_id: 28,
      question_number: 3,
      question_text: "How do fully convolutional networks (FCNs) differ from traditional CNNs?",
      answers: ["They include more layers for deeper feature extraction", "They replace fully connected layers with convolutional layers", "They utilize recurrent connections for feedback", "They apply pooling operations more aggressively"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 166,
      lesson_id: 28,
      question_number: 1,
      question_text: "What is the main purpose of the softmax function in semantic segmentation?",
      answers: ["To improve the convergence rate of the training process", "To regularize the model during training", "To generate pixel-wise probability distributions over classes", "To facilitate multi-label classification tasks"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 167,
      lesson_id: 28,
      question_number: 2,
      question_text: "How do conditional random fields (CRFs) improve the spatial consistency of semantic segmentation?",
      answers: ["By integrating contextual information into the segmentation process", "By reducing the computational complexity of the model", "By enforcing spatial constraints on predictions", "By increasing the diversity of training samples"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 168,
      lesson_id: 28,
      question_number: 3,
      question_text: "What role does dilated convolutions play in semantic segmentation?",
      answers: ["To increase the receptive field without loss of resolution", "To remove high-frequency noise from the input image", "To improve the robustness of the model to variations in lighting conditions", "To accelerate the training process by reducing computational overhead"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 169,
      lesson_id: 29,
      question_number: 1,
      question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
      answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 170,
      lesson_id: 29,
      question_number: 2,
      question_text: "How does skip connection architecture improve semantic segmentation performance?",
      answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 171,
      lesson_id: 29,
      question_number: 3,
      question_text: "What role does the softmax function play in semantic segmentation?",
      answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 172,
      lesson_id: 29,
      question_number: 1,
      question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
      answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 173,
      lesson_id: 29,
      question_number: 2,
      question_text: "How does data augmentation improve the performance of semantic segmentation models?",
      answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 174,
      lesson_id: 29,
      question_number: 3,
      question_text: "What is the significance of class imbalance in semantic segmentation?",
      answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 175,
      lesson_id: 30,
      question_number: 1,
      question_text: "What is the primary advantage of using conditional random fields (CRFs) in semantic segmentation?",
      answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 176,
      lesson_id: 30,
      question_number: 2,
      question_text: "How does data augmentation improve the performance of semantic segmentation models?",
      answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 177,
      lesson_id: 30,
      question_number: 3,
      question_text: "What is the significance of class imbalance in semantic segmentation?",
      answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 178,
      lesson_id: 30,
      question_number: 1,
      question_text: "What is the primary advantage of using conditional random fields (CRFs) in semantic segmentation?",
      answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 179,
      lesson_id: 30,
      question_number: 2,
      question_text: "How does data augmentation improve the performance of semantic segmentation models?",
      answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 180,
      lesson_id: 30,
      question_number: 3,
      question_text: "What is the significance of class imbalance in semantic segmentation?",
      answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 181,
      lesson_id: 31,
      question_number: 1,
      question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
      answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 182,
      lesson_id: 31,
      question_number: 2,
      question_text: "How does skip connection architecture improve semantic segmentation performance?",
      answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 183,
      lesson_id: 31,
      question_number: 3,
      question_text: "What role does the softmax function play in semantic segmentation?",
      answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 184,
      lesson_id: 31,
      question_number: 1,
      question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
      answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 185,
      lesson_id: 31,
      question_number: 2,
      question_text: "How does data augmentation improve the performance of semantic segmentation models?",
      answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 186,
      lesson_id: 31,
      question_number: 3,
      question_text: "What is the significance of class imbalance in semantic segmentation?",
      answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 187,
      lesson_id: 32,
      question_number: 1,
      question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
      answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 188,
      lesson_id: 32,
      question_number: 2,
      question_text: "How does skip connection architecture improve semantic segmentation performance?",
      answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 189,
      lesson_id: 32,
      question_number: 3,
      question_text: "What role does the softmax function play in semantic segmentation?",
      answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 190,
      lesson_id: 32,
      question_number: 1,
      question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
      answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 191,
      lesson_id: 32,
      question_number: 2,
      question_text: "How does data augmentation improve the performance of semantic segmentation models?",
      answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 192,
      lesson_id: 32,
      question_number: 3,
      question_text: "What is the significance of class imbalance in semantic segmentation?",
      answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 193,
      lesson_id: 33,
      question_number: 1,
      question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
      answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 194,
      lesson_id: 33,
      question_number: 2,
      question_text: "How does skip connection architecture improve semantic segmentation performance?",
      answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 195,
      lesson_id: 33,
      question_number: 3,
      question_text: "What role does the softmax function play in semantic segmentation?",
      answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 196,
      lesson_id: 33,
      question_number: 1,
      question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
      answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 197,
      lesson_id: 33,
      question_number: 2,
      question_text: "How does data augmentation improve the performance of semantic segmentation models?",
      answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 198,
      lesson_id: 33,
      question_number: 3,
      question_text: "What is the significance of class imbalance in semantic segmentation?",
      answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 199,
      lesson_id: 34,
      question_number: 1,
      question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
      answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 200,
      lesson_id: 34,
      question_number: 2,
      question_text: "How does skip connection architecture improve semantic segmentation performance?",
      answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 201,
      lesson_id: 34,
      question_number: 3,
      question_text: "What role does the softmax function play in semantic segmentation?",
      answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 202,
      lesson_id: 34,
      question_number: 1,
      question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
      answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 203,
      lesson_id: 34,
      question_number: 2,
      question_text: "How does data augmentation improve the performance of semantic segmentation models?",
      answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 204,
      lesson_id: 34,
      question_number: 3,
      question_text: "What is the significance of class imbalance in semantic segmentation?",
      answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 205,
      lesson_id: 35,
      question_number: 1,
      question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
      answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 206,
      lesson_id: 35,
      question_number: 2,
      question_text: "How does skip connection architecture improve semantic segmentation performance?",
      answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 207,
      lesson_id: 35,
      question_number: 3,
      question_text: "What role does the softmax function play in semantic segmentation?",
      answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 208,
      lesson_id: 35,
      question_number: 1,
      question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
      answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 209,
      lesson_id: 35,
      question_number: 2,
      question_text: "How does data augmentation improve the performance of semantic segmentation models?",
      answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 210,
      lesson_id: 35,
      question_number: 3,
      question_text: "What is the significance of class imbalance in semantic segmentation?",
      answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 211,
      lesson_id: 36,
      question_number: 1,
      question_text: "What is the primary advantage of using dilated convolutions in Semantic segmentation?",
      answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 212,
      lesson_id: 36,
      question_number: 2,
      question_text: "How does skip connection architecture improve semantic segmentation performance?",
      answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 213,
      lesson_id: 36,
      question_number: 3,
      question_text: "What role does the softmax function play in semantic segmentation?",
      answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 214,
      lesson_id: 36,
      question_number: 1,
      question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
      answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 215,
      lesson_id: 36,
      question_number: 2,
      question_text: "How does data augmentation improve the performance of semantic segmentation models?",
      answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 216,
      lesson_id: 36,
      question_number: 3,
      question_text: "What is the significance of class imbalance in semantic segmentation?",
      answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 217,
      lesson_id: 37,
      question_number: 1,
      question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
      answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
      correct_answer: 3,
      practice: true,
      points: 50
    },
    {
      id: 218,
      lesson_id: 37,
      question_number: 2,
      question_text: "How does skip connection architecture improve semantic segmentation performance?",
      answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 219,
      lesson_id: 37,
      question_number: 3,
      question_text: "What role does the softmax function play in semantic segmentation?",
      answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 220,
      lesson_id: 37,
      question_number: 1,
      question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
      answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 221,
      lesson_id: 37,
      question_number: 2,
      question_text: "How does data augmentation improve the performance of semantic segmentation models?",
      answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 222,
      lesson_id: 37,
      question_number: 3,
      question_text: "What is the significance of class imbalance in semantic segmentation?",
      answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 223,
      lesson_id: 38,
      question_number: 1,
      question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
      answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 224,
      lesson_id: 38,
      question_number: 2,
      question_text: "How does skip connection architecture improve semantic segmentation performance?",
      answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
      correct_answer: 3,
      practice: true,
      points: 50
    },
    {
      id: 225,
      lesson_id: 38,
      question_number: 3,
      question_text: "What role does the softmax function play in semantic segmentation?",
      answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 226,
      lesson_id: 38,
      question_number: 1,
      question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
      answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 227,
      lesson_id: 38,
      question_number: 2,
      question_text: "How does data augmentation improve the performance of semantic segmentation models?",
      answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
      correct_answer: 3,
      practice: false,
      points: 50
    },
    {
      id: 228,
      lesson_id: 38,
      question_number: 3,
      question_text: "What is the significance of class imbalance in semantic segmentation?",
      answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 229,
      lesson_id: 39,
      question_number: 1,
      question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
      answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 230,
      lesson_id: 39,
      question_number: 2,
      question_text: "How does skip connection architecture improve semantic segmentation performance?",
      answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
      correct_answer: 3,
      practice: true,
      points: 50
    },
    {
      id: 231,
      lesson_id: 39,
      question_number: 3,
      question_text: "What role does the softmax function play in semantic segmentation?",
      answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 232,
      lesson_id: 39,
      question_number: 1,
      question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
      answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
      correct_answer: 3,
      practice: false,
      points: 50
    },
    {
      id: 233,
      lesson_id: 39,
      question_number: 2,
      question_text: "How does data augmentation improve the performance of semantic segmentation models?",
      answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 234,
      lesson_id: 39,
      question_number: 3,
      question_text: "What is the significance of class imbalance in semantic segmentation?",
      answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 235,
      lesson_id: 40,
      question_number: 1,
      question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
      answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 236,
      lesson_id: 40,
      question_number: 2,
      question_text: "How does skip connection architecture improve semantic segmentation performance?",
      answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 237,
      lesson_id: 40,
      question_number: 3,
      question_text: "What role does the softmax function play in semantic segmentation?",
      answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 238,
      lesson_id: 40,
      question_number: 1,
      question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
      answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 239,
      lesson_id: 40,
      question_number: 2,
      question_text: "How does data augmentation improve the performance of semantic segmentation models?",
      answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 240,
      lesson_id: 40,
      question_number: 3,
      question_text: "What is the significance of class imbalance in semantic segmentation?",
      answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
      correct_answer: 3,
      practice: false,
      points: 50
    },
    {
      id: 241,
      lesson_id: 41,
      question_number: 1,
      question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
      answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 242,
      lesson_id: 41,
      question_number: 2,
      question_text: "How does skip connection architecture improve semantic segmentation performance?",
      answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
      correct_answer: 3,
      practice: true,
      points: 50
    },
    {
      id: 243,
      lesson_id: 41,
      question_number: 3,
      question_text: "What role does the softmax function play in semantic segmentation?",
      answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 244,
      lesson_id: 41,
      question_number: 1,
      question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
      answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 245,
      lesson_id: 41,
      question_number: 2,
      question_text: "How does data augmentation improve the performance of semantic segmentation models?",
      answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 246,
      lesson_id: 41,
      question_number: 3,
      question_text: "What is the significance of class imbalance in semantic segmentation?",
      answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
      correct_answer: 3,
      practice: false,
      points: 50
    },
    {
      id: 247,
      lesson_id: 42,
      question_number: 1,
      question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
      answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 248,
      lesson_id: 42,
      question_number: 2,
      question_text: "How does skip connection architecture improve semantic segmentation performance?",
      answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 249,
      lesson_id: 42,
      question_number: 3,
      question_text: "What role does the softmax function play in semantic segmentation?",
      answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 250,
      lesson_id: 42,
      question_number: 1,
      question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
      answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 251,
      lesson_id: 42,
      question_number: 2,
      question_text: "How does data augmentation improve the performance of semantic segmentation models?",
      answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 252,
      lesson_id: 42,
      question_number: 3,
      question_text: "What is the significance of class imbalance in semantic segmentation?",
      answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
      correct_answer: 3,
      practice: false,
      points: 50
    },
    {
      id: 253,
      lesson_id: 43,
      question_number: 1,
      question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
      answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 254,
      lesson_id: 43,
      question_number: 2,
      question_text: "How does skip connection architecture improve semantic segmentation performance?",
      answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 255,
      lesson_id: 43,
      question_number: 3,
      question_text: "What role does the softmax function play in semantic segmentation?",
      answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 256,
      lesson_id: 43,
      question_number: 1,
      question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
      answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
      correct_answer: 3,
      practice: false,
      points: 50
    },
    {
      id: 257,
      lesson_id: 43,
      question_number: 2,
      question_text: "How does data augmentation improve the performance of semantic segmentation models?",
      answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 258,
      lesson_id: 43,
      question_number: 3,
      question_text: "What is the significance of class imbalance in semantic segmentation?",
      answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 259,
      lesson_id: 44,
      question_number: 1,
      question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
      answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 260,
      lesson_id: 44,
      question_number: 2,
      question_text: "How does skip connection architecture improve semantic segmentation performance?",
      answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
      correct_answer: 3,
      practice: true,
      points: 50
    },
    {
      id: 261,
      lesson_id: 44,
      question_number: 3,
      question_text: "What role does the softmax function play in semantic segmentation?",
      answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 262,
      lesson_id: 44,
      question_number: 1,
      question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
      answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 263,
      lesson_id: 44,
      question_number: 2,
      question_text: "How does data augmentation improve the performance of semantic segmentation models?",
      answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 264,
      lesson_id: 44,
      question_number: 3,
      question_text: "What is the significance of class imbalance in semantic segmentation?",
      answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
      correct_answer: 3,
      practice: false,
      points: 50
    },
    {
      id: 265,
      lesson_id: 45,
      question_number: 1,
      question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
      answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
      correct_answer: 3,
      practice: true,
      points: 50
    },
    {
      id: 266,
      lesson_id: 45,
      question_number: 2,
      question_text: "How does skip connection architecture improve semantic segmentation performance?",
      answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 267,
      lesson_id: 45,
      question_number: 3,
      question_text: "What role does the softmax function play in semantic segmentation?",
      answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 268,
      lesson_id: 45,
      question_number: 1,
      question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
      answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 269,
      lesson_id: 45,
      question_number: 2,
      question_text: "How does data augmentation improve the performance of semantic segmentation models?",
      answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 270,
      lesson_id: 45,
      question_number: 3,
      question_text: "What is the significance of class imbalance in semantic segmentation?",
      answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
      correct_answer: 3,
      practice: false,
      points: 50
    },
    {
      id: 271,
      lesson_id: 46,
      question_number: 1,
      question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
      answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 272,
      lesson_id: 46,
      question_number: 2,
      question_text: "How does skip connection architecture improve semantic segmentation performance?",
      answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 273,
      lesson_id: 46,
      question_number: 3,
      question_text: "What role does the softmax function play in semantic segmentation?",
      answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 274,
      lesson_id: 46,
      question_number: 1,
      question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
      answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 275,
      lesson_id: 46,
      question_number: 2,
      question_text: "How does data augmentation improve the performance of semantic segmentation models?",
      answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 276,
      lesson_id: 46,
      question_number: 3,
      question_text: "What is the significance of class imbalance in semantic segmentation?",
      answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
      correct_answer: 3,
      practice: false,
      points: 50
    },
    {
      id: 277,
      lesson_id: 47,
      question_number: 1,
      question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
      answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
      correct_answer: 3,
      practice: true,
      points: 50
    },
    {
      id: 278,
      lesson_id: 47,
      question_number: 2,
      question_text: "How does skip connection architecture improve semantic segmentation performance?",
      answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 279,
      lesson_id: 47,
      question_number: 3,
      question_text: "What role does the softmax function play in semantic segmentation?",
      answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 280,
      lesson_id: 47,
      question_number: 1,
      question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
      answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 281,
      lesson_id: 47,
      question_number: 2,
      question_text: "How does data augmentation improve the performance of semantic segmentation models?",
      answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
      correct_answer: 3,
      practice: false,
      points: 50
    },
    {
      id: 282,
      lesson_id: 47,
      question_number: 3,
      question_text: "What is the significance of class imbalance in semantic segmentation?",
      answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 283,
      lesson_id: 48,
      question_number: 1,
      question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
      answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 284,
      lesson_id: 48,
      question_number: 2,
      question_text: "How does skip connection architecture improve semantic segmentation performance?",
      answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 285,
      lesson_id: 48,
      question_number: 3,
      question_text: "What role does the softmax function play in semantic segmentation?",
      answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
      correct_answer: 3,
      practice: true,
      points: 50
    },
    {
      id: 286,
      lesson_id: 48,
      question_number: 1,
      question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
      answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 287,
      lesson_id: 48,
      question_number: 2,
      question_text: "How does data augmentation improve the performance of semantic segmentation models?",
      answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 288,
      lesson_id: 48,
      question_number: 3,
      question_text: "What is the significance of class imbalance in semantic segmentation?",
      answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 289,
      lesson_id: 49,
      question_number: 1,
      question_text: "What is the primary objective of semantic segmentation?",
      answers: ["To classify each pixel in an image into a specific category", "To detect objects of interest in an image", "To estimate the depth of objects in an image", "To predict the pose of objects in an image"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 290,
      lesson_id: 49,
      question_number: 2,
      question_text: "Which neural network architecture is commonly used for semantic segmentation?",
      answers: ["Fully Connected Networks (FCNs)", "Convolutional Neural Networks (CNNs)", "Recurrent Neural Networks (RNNs)", "Generative Adversarial Networks (GANs)"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 291,
      lesson_id: 49,
      question_number: 3,
      question_text: "What is the role of upsampling in semantic segmentation?",
      answers: ["To decrease the spatial resolution of feature maps", "To increase the spatial resolution of feature maps", "To remove noise from feature maps", "To introduce non-linearity into the model"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 292,
      lesson_id: 49,
      question_number: 1,
      question_text: "What is the main advantage of using dilated convolutions in semantic segmentation?",
      answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
      correct_answer: 3,
      practice: false,
      points: 50
    },
    {
      id: 293,
      lesson_id: 49,
      question_number: 2,
      question_text: "How does skip connection architecture improve semantic segmentation performance?",
      answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 294,
      lesson_id: 49,
      question_number: 3,
      question_text: "What role does the softmax function play in semantic segmentation?",
      answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 295,
      lesson_id: 50,
      question_number: 1,
      question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
      answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 296,
      lesson_id: 50,
      question_number: 2,
      question_text: "How does skip connection architecture improve semantic segmentation performance?",
      answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
      correct_answer: 3,
      practice: true,
      points: 50
    },
    {
      id: 297,
      lesson_id: 50,
      question_number: 3,
      question_text: "What role does the softmax function play in semantic segmentation?",
      answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 298,
      lesson_id: 50,
      question_number: 1,
      question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
      answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 299,
      lesson_id: 50,
      question_number: 2,
      question_text: "How does data augmentation improve the performance of semantic segmentation models?",
      answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 300,
      lesson_id: 50,
      question_number: 3,
      question_text: "What is the significance of class imbalance in semantic segmentation?",
      answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
      correct_answer: 3,
      practice: false,
      points: 50
    },
    {
      id: 301,
      lesson_id: 51,
      question_number: 1,
      question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
      answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 302,
      lesson_id: 51,
      question_number: 2,
      question_text: "How does skip connection architecture improve semantic segmentation performance?",
      answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 303,
      lesson_id: 51,
      question_number: 3,
      question_text: "What role does the softmax function play in semantic segmentation?",
      answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 304,
      lesson_id: 51,
      question_number: 1,
      question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
      answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 305,
      lesson_id: 51,
      question_number: 2,
      question_text: "How does data augmentation improve the performance of semantic segmentation models?",
      answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 306,
      lesson_id: 51,
      question_number: 3,
      question_text: "What is the significance of class imbalance in semantic segmentation?",
      answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 307,
      lesson_id: 52,
      question_number: 1,
      question_text: "What is the primary objective of semantic segmentation?",
      answers: ["To classify each pixel in an image into a specific category", "To detect objects of interest in an image", "To estimate the depth of objects in an image", "To predict the pose of objects in an image"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 308,
      lesson_id: 52,
      question_number: 2,
      question_text: "Which neural network architecture is commonly used for semantic segmentation?",
      answers: ["Fully Connected Networks (FCNs)", "Convolutional Neural Networks (CNNs)", "Recurrent Neural Networks (RNNs)", "Generative Adversarial Networks (GANs)"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 309,
      lesson_id: 52,
      question_number: 3,
      question_text: "What is the role of upsampling in semantic segmentation?",
      answers: ["To decrease the spatial resolution of feature maps", "To increase the spatial resolution of feature maps", "To remove noise from feature maps", "To introduce non-linearity into the model"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 310,
      lesson_id: 52,
      question_number: 1,
      question_text: "What is the main advantage of using dilated convolutions in semantic segmentation?",
      answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
      correct_answer: 3,
      practice: false,
      points: 50
    },
    {
      id: 311,
      lesson_id: 52,
      question_number: 2,
      question_text: "How does skip connection architecture improve semantic segmentation performance?",
      answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 312,
      lesson_id: 52,
      question_number: 3,
      question_text: "What role does the softmax function play in semantic segmentation?",
      answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 313,
      lesson_id: 53,
      question_number: 1,
      question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
      answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 314,
      lesson_id: 53,
      question_number: 2,
      question_text: "How does skip connection architecture improve semantic segmentation performance?",
      answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
      correct_answer: 3,
      practice: true,
      points: 50
    },
    {
      id: 315,
      lesson_id: 53,
      question_number: 3,
      question_text: "What role does the softmax function play in semantic segmentation?",
      answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 316,
      lesson_id: 53,
      question_number: 1,
      question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
      answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 317,
      lesson_id: 53,
      question_number: 2,
      question_text: "How does data augmentation improve the performance of semantic segmentation models?",
      answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 318,
      lesson_id: 53,
      question_number: 3,
      question_text: "What is the significance of class imbalance in semantic segmentation?",
      answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
      correct_answer: 3,
      practice: false,
      points: 50
    },
    {
      id: 319,
      lesson_id: 54,
      question_number: 1,
      question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
      answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 320,
      lesson_id: 54,
      question_number: 2,
      question_text: "How does skip connection architecture improve semantic segmentation performance?",
      answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 321,
      lesson_id: 54,
      question_number: 3,
      question_text: "What role does the softmax function play in semantic segmentation?",
      answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 322,
      lesson_id: 54,
      question_number: 1,
      question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
      answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 323,
      lesson_id: 54,
      question_number: 2,
      question_text: "How does data augmentation improve the performance of semantic segmentation models?",
      answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 324,
      lesson_id: 54,
      question_number: 3,
      question_text: "What is the significance of class imbalance in semantic segmentation?",
      answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
      correct_answer: 3,
      practice: false,
      points: 50
    },
    {
      id: 325,
      lesson_id: 55,
      question_number: 1,
      question_text: "In polygon annotation, what does each vertex represent?",
      answers: ["The center of the object", "A point on the object's boundary", "The object's area", "The object's class"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 326,
      lesson_id: 55,
      question_number: 2,
      question_text: "What is the purpose of using polygons for annotation?",
      answers: ["To simplify the annotation process", "To provide precise boundaries for objects", "To reduce the file size of annotations", "To increase the speed of object detection models"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 327,
      lesson_id: 55,
      question_number: 3,
      question_text: "Which file formats are commonly used for storing polygon annotations?",
      answers: ["JSON and XML", "PNG and JPEG", "PDF and DOCX", "CSV and TXT"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 328,
      lesson_id: 55,
      question_number: 1,
      question_text: "What is the purpose of the bounding box that encloses a polygon annotation?",
      answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 329,
      lesson_id: 55,
      question_number: 2,
      question_text: "How does the number of vertices affect the accuracy of a polygon annotation?",
      answers: ["More vertices improve accuracy", "Fewer vertices improve accuracy", "The number of vertices is unrelated to accuracy", "Vertices have no impact on accuracy"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 330,
      lesson_id: 55,
      question_number: 3,
      question_text: "What challenges are associated with polygon annotation?",
      answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 331,
      lesson_id: 56,
      question_number: 1,
      question_text: "What is the main advantage of using polygons for object annotation?",
      answers: ["They are computationally efficient", "They provide precise object boundaries", "They require less storage space", "They are easier to implement in annotation tools"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 332,
      lesson_id: 56,
      question_number: 2,
      question_text: "Which tool is commonly used for manually annotating polygons?",
      answers: ["Adobe Photoshop", "Microsoft Excel", "LabelImg", "Notepad"],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 333,
      lesson_id: 56,
      question_number: 3,
      question_text: "What is the primary challenge of polygon annotation?",
      answers: ["Inaccuracy in defining object boundaries", "Lack of support in annotation software", "Difficulty in visualizing annotations", "High computational cost"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 334,
      lesson_id: 56,
      question_number: 1,
      question_text: "What is the purpose of the bounding box that encloses a polygon annotation?",
      answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 335,
      lesson_id: 56,
      question_number: 2,
      question_text: "How does the number of vertices affect the accuracy of a polygon annotation?",
      answers: ["More vertices improve accuracy", "Fewer vertices improve accuracy", "The number of vertices is unrelated to accuracy", "Vertices have no impact on accuracy"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 336,
      lesson_id: 56,
      question_number: 3,
      question_text: "What challenges are associated with polygon annotation?",
      answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 337,
      lesson_id: 57,
      question_number: 1,
      question_text: "What is the main advantage of using polygons for object annotation?",
      answers: ["They are computationally efficient", "They provide precise object boundaries", "They require less storage space", "They are easier to implement in annotation tools"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 338,
      lesson_id: 57,
      question_number: 2,
      question_text: "Which tool is commonly used for manually annotating polygons?",
      answers: ["Adobe Photoshop", "Microsoft Excel", "LabelImg", "Notepad"],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 339,
      lesson_id: 57,
      question_number: 3,
      question_text: "What is the primary challenge of polygon annotation?",
      answers: ["Inaccuracy in defining object boundaries", "Lack of support in annotation software", "Difficulty in visualizing annotations", "High computational cost"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 340,
      lesson_id: 57,
      question_number: 1,
      question_text: "What is the purpose of the bounding box that encloses a polygon annotation?",
      answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 341,
      lesson_id: 57,
      question_number: 2,
      question_text: "How does the number of vertices affect the accuracy of a polygon annotation?",
      answers: ["More vertices improve accuracy", "Fewer vertices improve accuracy", "The number of vertices is unrelated to accuracy", "Vertices have no impact on accuracy"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 342,
      lesson_id: 57,
      question_number: 3,
      question_text: "What challenges are associated with polygon annotation?",
      answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 343,
      lesson_id: 58,
      question_number: 1,
      question_text: "In polygon annotation, what is the significance of the order of vertices?",
      answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
      correct_answer: 2,
      practice: true,
      points: 50
    },
    {
      id: 344,
      lesson_id: 58,
      question_number: 2,
      question_text: "What is the advantage of using polygons over bounding boxes for annotation?",
      answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 345,
      lesson_id: 58,
      question_number: 3,
      question_text: "Which software tool is commonly used for editing polygon annotations?",
      answers: ["Photoshop", "Excel", "Notepad", "PowerPoint"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 346,
      lesson_id: 58,
      question_number: 1,
      question_text: "How does the complexity of object shapes impact the use of polygons for annotation?",
      answers: ["Complex shapes are easier to annotate with polygons", "Simple shapes require more vertices in polygons", "Polygons are unsuitable for complex shapes", "Polygons are preferred for simple shapes"],
      correct_answer: 0,
      practice: false,
      points: 50
    },
    {
      id: 347,
      lesson_id: 58,
      question_number: 2,
      question_text: "What is the role of the bounding box in polygon annotation?",
      answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 348,
      lesson_id: 58,
      question_number: 3,
      question_text: "What challenges do polygons pose in terms of computational complexity?",
      answers: ["They require more storage space", "They increase the inference time of models", "They are difficult to implement in deep learning frameworks", "They impose no additional computational burden"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 349,
      lesson_id: 59,
      question_number: 1,
      question_text: "What is the primary purpose of the bounding box in polygon annotation?",
      answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 350,
      lesson_id: 59,
      question_number: 2,
      question_text: "How does the number of vertices affect the precision of polygon annotations?",
      answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 351,
      lesson_id: 59,
      question_number: 3,
      question_text: "What challenges are associated with editing polygon annotations?",
      answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 352,
      lesson_id: 59,
      question_number: 1,
      question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
      answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 353,
      lesson_id: 59,
      question_number: 2,
      question_text: "What role do polygons play in object detection tasks?",
      answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 354,
      lesson_id: 59,
      question_number: 3,
      question_text: "What are the advantages of using polygons over bounding boxes?",
      answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 355,
      lesson_id: 60,
      question_number: 1,
      question_text: "What is the primary purpose of the bounding box in polygon annotation?",
      answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 356,
      lesson_id: 60,
      question_number: 2,
      question_text: "How does the number of vertices affect the precision of polygon annotations?",
      answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 357,
      lesson_id: 60,
      question_number: 3,
      question_text: "What challenges are associated with editing polygon annotations?",
      answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 358,
      lesson_id: 60,
      question_number: 1,
      question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
      answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 359,
      lesson_id: 60,
      question_number: 2,
      question_text: "What role do polygons play in object detection tasks?",
      answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 360,
      lesson_id: 60,
      question_number: 3,
      question_text: "What are the advantages of using polygons over bounding boxes?",
      answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 361,
      lesson_id: 61,
      question_number: 1,
      question_text: "What is the primary purpose of the bounding box in polygon annotation?",
      answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 362,
      lesson_id: 61,
      question_number: 2,
      question_text: "How does the number of vertices affect the precision of polygon annotations?",
      answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 363,
      lesson_id: 61,
      question_number: 3,
      question_text: "What challenges are associated with editing polygon annotations?",
      answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 364,
      lesson_id: 61,
      question_number: 1,
      question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
      answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 365,
      lesson_id: 61,
      question_number: 2,
      question_text: "What role do polygons play in object detection tasks?",
      answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 366,
      lesson_id: 61,
      question_number: 3,
      question_text: "What are the advantages of using polygons over bounding boxes?",
      answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 367,
      lesson_id: 62,
      question_number: 1,
      question_text: "What is the primary purpose of the bounding box in polygon annotation?",
      answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 368,
      lesson_id: 62,
      question_number: 2,
      question_text: "How does the number of vertices affect the precision of polygon annotations?",
      answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 369,
      lesson_id: 62,
      question_number: 3,
      question_text: "What challenges are associated with editing polygon annotations?",
      answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 370,
      lesson_id: 62,
      question_number: 1,
      question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
      answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 371,
      lesson_id: 62,
      question_number: 2,
      question_text: "What role do polygons play in object detection tasks?",
      answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 372,
      lesson_id: 62,
      question_number: 3,
      question_text: "What are the advantages of using polygons over bounding boxes?",
      answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 373,
      lesson_id: 63,
      question_number: 1,
      question_text: "What is the primary purpose of the bounding box in polygon annotation?",
      answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 374,
      lesson_id: 63,
      question_number: 2,
      question_text: "How does the number of vertices affect the precision of polygon annotations?",
      answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 375,
      lesson_id: 63,
      question_number: 3,
      question_text: "What challenges are associated with editing polygon annotations?",
      answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 376,
      lesson_id: 63,
      question_number: 1,
      question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
      answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 377,
      lesson_id: 63,
      question_number: 2,
      question_text: "What role do polygons play in object detection tasks?",
      answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 378,
      lesson_id: 63,
      question_number: 3,
      question_text: "What are the advantages of using polygons over bounding boxes?",
      answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 379,
      lesson_id: 64,
      question_number: 1,
      question_text: "What is the primary purpose of the bounding box in polygon annotation?",
      answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 380,
      lesson_id: 64,
      question_number: 2,
      question_text: "How does the number of vertices affect the precision of polygon annotations?",
      answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 381,
      lesson_id: 64,
      question_number: 3,
      question_text: "What challenges are associated with editing polygon annotations?",
      answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 382,
      lesson_id: 64,
      question_number: 1,
      question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
      answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 383,
      lesson_id: 64,
      question_number: 2,
      question_text: "What role do polygons play in object detection tasks?",
      answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 384,
      lesson_id: 64,
      question_number: 3,
      question_text: "What are the advantages of using polygons over bounding boxes?",
      answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 385,
      lesson_id: 65,
      question_number: 1,
      question_text: "What is the primary purpose of the bounding box in polygon annotation?",
      answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 386,
      lesson_id: 65,
      question_number: 2,
      question_text: "How does the number of vertices affect the precision of polygon annotations?",
      answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 387,
      lesson_id: 65,
      question_number: 3,
      question_text: "What challenges are associated with editing polygon annotations?",
      answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 388,
      lesson_id: 65,
      question_number: 1,
      question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
      answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 389,
      lesson_id: 65,
      question_number: 2,
      question_text: "What role do polygons play in object detection tasks?",
      answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 390,
      lesson_id: 65,
      question_number: 3,
      question_text: "What are the advantages of using polygons over bounding boxes?",
      answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 391,
      lesson_id: 66,
      question_number: 1,
      question_text: "What is the primary purpose of the bounding box in polygon annotation?",
      answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 392,
      lesson_id: 66,
      question_number: 2,
      question_text: "How does the number of vertices affect the precision of polygon annotations?",
      answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 393,
      lesson_id: 66,
      question_number: 3,
      question_text: "What challenges are associated with editing polygon annotations?",
      answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 394,
      lesson_id: 66,
      question_number: 1,
      question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
      answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 395,
      lesson_id: 66,
      question_number: 2,
      question_text: "What role do polygons play in object detection tasks?",
      answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 396,
      lesson_id: 66,
      question_number: 3,
      question_text: "What are the advantages of using polygons over bounding boxes?",
      answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 397,
      lesson_id: 67,
      question_number: 1,
      question_text: "What is the primary purpose of the bounding box in polygon annotation?",
      answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 398,
      lesson_id: 67,
      question_number: 2,
      question_text: "How does the number of vertices affect the precision of polygon annotations?",
      answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 399,
      lesson_id: 67,
      question_number: 3,
      question_text: "What challenges are associated with editing polygon annotations?",
      answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 400,
      lesson_id: 67,
      question_number: 1,
      question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
      answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 401,
      lesson_id: 67,
      question_number: 2,
      question_text: "What role do polygons play in object detection tasks?",
      answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 402,
      lesson_id: 67,
      question_number: 3,
      question_text: "What are the advantages of using polygons over bounding boxes?",
      answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 403,
      lesson_id: 68,
      question_number: 1,
      question_text: "What is the primary purpose of the bounding box in polygon annotation?",
      answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 404,
      lesson_id: 68,
      question_number: 2,
      question_text: "How does the number of vertices affect the precision of polygon annotations?",
      answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 405,
      lesson_id: 68,
      question_number: 3,
      question_text: "What challenges are associated with editing polygon annotations?",
      answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 406,
      lesson_id: 68,
      question_number: 1,
      question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
      answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 407,
      lesson_id: 68,
      question_number: 2,
      question_text: "What role do polygons play in object detection tasks?",
      answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 408,
      lesson_id: 68,
      question_number: 3,
      question_text: "What are the advantages of using polygons over bounding boxes?",
      answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 409,
      lesson_id: 69,
      question_number: 1,
      question_text: "What is the primary purpose of the bounding box in polygon annotation?",
      answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 410,
      lesson_id: 69,
      question_number: 2,
      question_text: "How does the number of vertices affect the precision of polygon annotations?",
      answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 411,
      lesson_id: 69,
      question_number: 3,
      question_text: "What challenges are associated with editing polygon annotations?",
      answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 412,
      lesson_id: 69,
      question_number: 1,
      question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
      answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 413,
      lesson_id: 69,
      question_number: 2,
      question_text: "What role do polygons play in object detection tasks?",
      answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 414,
      lesson_id: 69,
      question_number: 3,
      question_text: "What are the advantages of using polygons over bounding boxes?",
      answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 415,
      lesson_id: 70,
      question_number: 1,
      question_text: "What is the primary purpose of the bounding box in polygon annotation?",
      answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 416,
      lesson_id: 70,
      question_number: 2,
      question_text: "How does the number of vertices affect the precision of polygon annotations?",
      answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 417,
      lesson_id: 70,
      question_number: 3,
      question_text: "What challenges are associated with editing polygon annotations?",
      answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 418,
      lesson_id: 70,
      question_number: 1,
      question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
      answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 419,
      lesson_id: 70,
      question_number: 2,
      question_text: "What role do polygons play in object detection tasks?",
      answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 420,
      lesson_id: 70,
      question_number: 3,
      question_text: "What are the advantages of using polygons over bounding boxes?",
      answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 421,
      lesson_id: 71,
      question_number: 1,
      question_text: "What is the primary purpose of the bounding box in polygon annotation?",
      answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 422,
      lesson_id: 71,
      question_number: 2,
      question_text: "How does the number of vertices affect the precision of polygon annotations?",
      answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 423,
      lesson_id: 71,
      question_number: 3,
      question_text: "What challenges are associated with editing polygon annotations?",
      answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 424,
      lesson_id: 71,
      question_number: 1,
      question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
      answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 425,
      lesson_id: 71,
      question_number: 2,
      question_text: "What role do polygons play in object detection tasks?",
      answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 426,
      lesson_id: 71,
      question_number: 3,
      question_text: "What are the advantages of using polygons over bounding boxes?",
      answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 427,
      lesson_id: 72,
      question_number: 1,
      question_text: "What is the primary purpose of the bounding box in polygon annotation?",
      answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 428,
      lesson_id: 72,
      question_number: 2,
      question_text: "How does the number of vertices affect the precision of polygon annotations?",
      answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 429,
      lesson_id: 72,
      question_number: 3,
      question_text: "What challenges are associated with editing polygon annotations?",
      answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 430,
      lesson_id: 72,
      question_number: 1,
      question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
      answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 431,
      lesson_id: 72,
      question_number: 2,
      question_text: "What role do polygons play in object detection tasks?",
      answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 432,
      lesson_id: 72,
      question_number: 3,
      question_text: "What are the advantages of using polygons over bounding boxes?",
      answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 433,
      lesson_id: 73,
      question_number: 1,
      question_text: "What is the primary purpose of the bounding box in polygon annotation?",
      answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 434,
      lesson_id: 73,
      question_number: 2,
      question_text: "How does the number of vertices affect the precision of polygon annotations?",
      answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 435,
      lesson_id: 73,
      question_number: 3,
      question_text: "What challenges are associated with editing polygon annotations?",
      answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 436,
      lesson_id: 73,
      question_number: 1,
      question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
      answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 437,
      lesson_id: 73,
      question_number: 2,
      question_text: "What role do polygons play in object detection tasks?",
      answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 438,
      lesson_id: 73,
      question_number: 3,
      question_text: "What are the advantages of using polygons over bounding boxes?",
      answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 439,
      lesson_id: 74,
      question_number: 1,
      question_text: "What is the primary purpose of the bounding box in polygon annotation?",
      answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 440,
      lesson_id: 74,
      question_number: 2,
      question_text: "How does the number of vertices affect the precision of polygon annotations?",
      answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 441,
      lesson_id: 74,
      question_number: 3,
      question_text: "What challenges are associated with editing polygon annotations?",
      answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 442,
      lesson_id: 74,
      question_number: 1,
      question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
      answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 443,
      lesson_id: 74,
      question_number: 2,
      question_text: "What role do polygons play in object detection tasks?",
      answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 444,
      lesson_id: 74,
      question_number: 3,
      question_text: "What are the advantages of using polygons over bounding boxes?",
      answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 445,
      lesson_id: 75,
      question_number: 1,
      question_text: "What is the primary purpose of the bounding box in polygon annotation?",
      answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 446,
      lesson_id: 75,
      question_number: 2,
      question_text: "How does the number of vertices affect the precision of polygon annotations?",
      answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 447,
      lesson_id: 75,
      question_number: 3,
      question_text: "What challenges are associated with editing polygon annotations?",
      answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 448,
      lesson_id: 75,
      question_number: 1,
      question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
      answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 449,
      lesson_id: 75,
      question_number: 2,
      question_text: "What role do polygons play in object detection tasks?",
      answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 450,
      lesson_id: 75,
      question_number: 3,
      question_text: "What are the advantages of using polygons over bounding boxes?",
      answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 451,
      lesson_id: 76,
      question_number: 1,
      question_text: "What is the primary purpose of the bounding box in polygon annotation?",
      answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 452,
      lesson_id: 76,
      question_number: 2,
      question_text: "How does the number of vertices affect the precision of polygon annotations?",
      answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 453,
      lesson_id: 76,
      question_number: 3,
      question_text: "What challenges are associated with editing polygon annotations?",
      answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 454,
      lesson_id: 76,
      question_number: 1,
      question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
      answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 455,
      lesson_id: 76,
      question_number: 2,
      question_text: "What role do polygons play in object detection tasks?",
      answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 456,
      lesson_id: 76,
      question_number: 3,
      question_text: "What are the advantages of using polygons over bounding boxes?",
      answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 457,
      lesson_id: 77,
      question_number: 1,
      question_text: "What is the primary purpose of the bounding box in polygon annotation?",
      answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 458,
      lesson_id: 77,
      question_number: 2,
      question_text: "How does the number of vertices affect the precision of polygon annotations?",
      answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 459,
      lesson_id: 77,
      question_number: 3,
      question_text: "What challenges are associated with editing polygon annotations?",
      answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 460,
      lesson_id: 77,
      question_number: 1,
      question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
      answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 461,
      lesson_id: 77,
      question_number: 2,
      question_text: "What role do polygons play in object detection tasks?",
      answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 462,
      lesson_id: 77,
      question_number: 3,
      question_text: "What are the advantages of using polygons over bounding boxes?",
      answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 463,
      lesson_id: 78,
      question_number: 1,
      question_text: "What is the primary purpose of the bounding box in polygon annotation?",
      answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 464,
      lesson_id: 78,
      question_number: 2,
      question_text: "How does the number of vertices affect the precision of polygon annotations?",
      answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 465,
      lesson_id: 78,
      question_number: 3,
      question_text: "What challenges are associated with editing polygon annotations?",
      answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 466,
      lesson_id: 78,
      question_number: 1,
      question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
      answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
      correct_answer: 2,
      practice: false,
      points: 50
      },
    {
      id: 467,
      lesson_id: 78,
      question_number: 2,
      question_text: "What role do polygons play in object detection tasks?",
      answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 468,
      lesson_id: 78,
      question_number: 3,
      question_text: "What are the advantages of using polygons over bounding boxes?",
      answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 469,
      lesson_id: 79,
      question_number: 1,
      question_text: "What is the primary purpose of the bounding box in polygon annotation?",
      answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 470,
      lesson_id: 79,
      question_number: 2,
      question_text: "How does the number of vertices affect the precision of polygon annotations?",
      answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 471,
      lesson_id: 79,
      question_number: 3,
      question_text: "What challenges are associated with editing polygon annotations?",
      answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 472,
      lesson_id: 79,
      question_number: 1,
      question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
      answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 473,
      lesson_id: 79,
      question_number: 2,
      question_text: "What role do polygons play in object detection tasks?",
      answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 474,
      lesson_id: 79,
      question_number: 3,
      question_text: "What are the advantages of using polygons over bounding boxes?",
      answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 475,
      lesson_id: 80,
      question_number: 1,
      question_text: "What is the primary purpose of the bounding box in polygon annotation?",
      answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 476,
      lesson_id: 80,
      question_number: 2,
      question_text: "How does the number of vertices affect the precision of polygon annotations?",
      answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 477,
      lesson_id: 80,
      question_number: 3,
      question_text: "What challenges are associated with editing polygon annotations?",
      answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 478,
      lesson_id: 80,
      question_number: 1,
      question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
      answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 479,
      lesson_id: 80,
      question_number: 2,
      question_text: "What role do polygons play in object detection tasks?",
      answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 480,
      lesson_id: 80,
      question_number: 3,
      question_text: "What are the advantages of using polygons over bounding boxes?",
      answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 481,
      lesson_id: 81,
      question_number: 1,
      question_text: "What is the primary purpose of the bounding box in polygon annotation?",
      answers: ["To represent the object's center", "To provide an initial estimate of the object's size", "To simplify the annotation process", "To adjust the object's orientation"],
      correct_answer: 1,
      practice: true,
      points: 50
    },
    {
      id: 482,
      lesson_id: 81,
      question_number: 2,
      question_text: "How does the number of vertices affect the precision of polygon annotations?",
      answers: ["More vertices increase precision", "Fewer vertices increase precision", "The number of vertices is unrelated to precision", "Vertices have no impact on precision"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 483,
      lesson_id: 81,
      question_number: 3,
      question_text: "What challenges are associated with editing polygon annotations?",
      answers: ["Difficulty in defining precise object boundaries", "Increased file size of annotations", "Incompatibility with object detection models", "Limited support in annotation tools"],
      correct_answer: 0,
      practice: true,
      points: 50
    },
    {
      id: 484,
      lesson_id: 81,
      question_number: 1,
      question_text: "How does the order of vertices affect the interpretation of polygon annotations?",
      answers: ["It determines the object's color", "It defines the object's class", "It establishes the object's boundary", "It specifies the object's area"],
      correct_answer: 2,
      practice: false,
      points: 50
    },
    {
      id: 485,
      lesson_id: 81,
      question_number: 2,
      question_text: "What role do polygons play in object detection tasks?",
      answers: ["They define object classes", "They provide precise object boundaries", "They generate heatmaps for object detection", "They are used for semantic segmentation"],
      correct_answer: 1,
      practice: false,
      points: 50
    },
    {
      id: 486,
      lesson_id: 81,
      question_number: 3,
      question_text: "What are the advantages of using polygons over bounding boxes?",
      answers: ["Polygons are faster to annotate", "Polygons provide more accurate object boundaries", "Polygons require less computational resources", "Polygons are easier to implement in models"],
      correct_answer: 1,
      practice: false,
      points: 50
    }
  ]);
};
