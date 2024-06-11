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
  ]);
};
