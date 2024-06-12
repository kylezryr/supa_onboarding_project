/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("challenge_questions").del();
  await knex("challenge_questions").insert([
    {
      id: 1,
      rank_id: 1,
      question_number: 1,
      question_text:
        "What is the primary purpose of a bounding box in object detection?",
      answers: [
        "To define the object's class",
        "To specify the object's area",
        "To outline the object's boundary",
        "To represent the object's center",
      ],
      correct_answer: 2,
    },
    {
      id: 2,
      rank_id: 1,
      question_number: 2,
      question_text:
        "Which type of object annotation is commonly used for bounding boxes?",
      answers: [
        "Semantic segmentation",
        "Instance segmentation",
        "Bounding box annotation",
        "Polygon annotation",
      ],
      correct_answer: 2,
    },
    {
      id: 3,
      rank_id: 1,
      question_number: 3,
      question_text:
        "How does the aspect ratio of a bounding box affect object detection performance?",
      answers: [
        "It has no effect",
        "Affects the model's ability to generalize",
        "Improves object localization",
        "Reduces computational complexity",
      ],
      correct_answer: 1,
    },
    {
      id: 4,
      rank_id: 2,
      question_number: 1,
      question_text:
        "What is non-maximum suppression (NMS) used for in object detection?",
      answers: [
        "To remove duplicate bounding boxes",
        "To increase model accuracy",
        "To adjust bounding box coordinates",
        "To improve object classification",
      ],
      correct_answer: 0,
    },
    {
      id: 5,
      rank_id: 2,
      question_number: 2,
      question_text:
        "Which metric is commonly used to evaluate object detection models?",
      answers: [
        "Accuracy",
        "Mean Intersection over Union (mIoU)",
        "F1 Score",
        "Precision-Recall Curve",
      ],
      correct_answer: 1,
    },
    {
      id: 6,
      rank_id: 2,
      question_number: 3,
      question_text: "What is anchor-based object detection?",
      answers: [
        "A technique to improve bounding box precision",
        "A method for multi-class classification",
        "A strategy to initialize bounding box coordinates",
        "A method to generate region proposals",
      ],
      correct_answer: 3,
    },
    {
      id: 7,
      rank_id: 3,
      question_number: 1,
      question_text: "What is the purpose of anchor boxes in object detection?",
      answers: [
        "To adjust bounding box coordinates",
        "To define object classes",
        "To generate region proposals",
        "To reduce false positives",
      ],
      correct_answer: 2,
    },
    {
      id: 8,
      rank_id: 3,
      question_number: 2,
      question_text: "What is the drawback of using fixed-size anchor boxes?",
      answers: [
        "Reduced computational complexity",
        "Inability to detect objects of various sizes",
        "Increased model robustness",
        "Improved object localization",
      ],
      correct_answer: 1,
    },
    {
      id: 9,
      rank_id: 3,
      question_number: 3,
      question_text:
        "Which stage of the object detection pipeline involves anchor box adjustment?",
      answers: [
        "Feature extraction",
        "Region proposal",
        "Object classification",
        "Bounding box regression",
      ],
      correct_answer: 3,
    },
    {
      id: 10,
      rank_id: 4,
      question_number: 1,
      question_text:
        "What is the Intersection over Union (IoU) metric used for in object detection?",
      answers: [
        "To measure object class accuracy",
        "To evaluate model precision",
        "To calculate the overlap between predicted and ground-truth bounding boxes",
        "To compute the area of detected objects",
      ],
      correct_answer: 2,
    },
    {
      id: 11,
      rank_id: 4,
      question_number: 2,
      question_text: "What is the significance of a high IoU value?",
      answers: [
        "Indicates high model confidence",
        "Implies accurate object localization",
        "Leads to lower false positives",
        "Suggests correct object classification",
      ],
      correct_answer: 1,
    },
    {
      id: 12,
      rank_id: 4,
      question_number: 3,
      question_text:
        "How does data augmentation contribute to bounding box annotation?",
      answers: [
        "Increases the number of object instances",
        "Enhances model generalization",
        "Reduces annotation time",
        "Improves object classification accuracy",
      ],
      correct_answer: 1,
    },
    {
      id: 13,
      rank_id: 4,
      question_number: 4,
      question_text:
        "What are some challenges of using bounding boxes for object detection?",
      answers: [
        "Difficulty in handling occlusions",
        "Limited scalability to large datasets",
        "Incompatibility with deep learning frameworks",
        "Lack of support in annotation tools",
      ],
      correct_answer: 0,
    },
    {
      id: 14,
      rank_id: 5,
      question_number: 1,
      question_text: "What are anchor boxes used for in object detection?",
      answers: [
        "To define object classes",
        "To adjust bounding box coordinates",
        "To generate region proposals",
        "To improve model convergence",
      ],
      correct_answer: 2,
    },
    {
      id: 15,
      rank_id: 5,
      question_number: 2,
      question_text:
        "What is the purpose of the Region Proposal Network (RPN) in Faster R-CNN?",
      answers: [
        "To generate region proposals",
        "To classify object categories",
        "To refine bounding box coordinates",
        "To apply non-maximum suppression",
      ],
      correct_answer: 0,
    },
    {
      id: 16,
      rank_id: 5,
      question_number: 3,
      question_text:
        "How does the scale of anchor boxes affect object detection performance?",
      answers: [
        "Affects the size of detected objects",
        "Has no impact on model accuracy",
        "Influences model convergence speed",
        "Impacts model training time",
      ],
      correct_answer: 0,
    },
    {
      id: 17,
      rank_id: 5,
      question_number: 4,
      question_text:
        "What role do anchor boxes play in single-shot object detectors?",
      answers: [
        "To generate region proposals",
        "To classify object categories",
        "To refine bounding box coordinates",
        "To perform object detection in a single pass",
      ],
      correct_answer: 3,
    },
    {
      id: 18,
      rank_id: 6,
      question_number: 1,
      question_text: "What is the purpose of anchor boxes in object detection?",
      answers: [
        "To adjust bounding box coordinates",
        "To define object classes",
        "To generate region proposals",
        "To reduce false positives",
      ],
      correct_answer: 2,
    },
    {
      id: 19,
      rank_id: 6,
      question_number: 2,
      question_text: "What is the drawback of using fixed-size anchor boxes?",
      answers: [
        "Reduced computational complexity",
        "Inability to detect objects of various sizes",
        "Increased model robustness",
        "Improved object localization",
      ],
      correct_answer: 1,
    },
    {
      id: 20,
      rank_id: 6,
      question_number: 3,
      question_text:
        "Which stage of the object detection pipeline involves anchor box adjustment?",
      answers: [
        "Feature extraction",
        "Region proposal",
        "Object classification",
        "Bounding box regression",
      ],
      correct_answer: 3,
    },
    {
      id: 21,
      rank_id: 6,
      question_number: 4,
      question_text:
        "How does the scale of anchor boxes affect object detection performance?",
      answers: [
        "Affects the size of detected objects",
        "Has no impact on model accuracy",
        "Influences model convergence speed",
        "Impacts model training time",
      ],
      correct_answer: 0,
    },
    {
      id: 22,
      rank_id: 7,
      question_number: 1,
      question_text:
        "What is the significance of the Average Precision (AP) metric in object detection?",
      answers: [
        "Measures the overall model accuracy",
        "Evaluates the precision of positive detections",
        "Quantifies the performance across different IoU thresholds",
        "Calculates the average object area",
      ],
      correct_answer: 2,
    },
    {
      id: 23,
      rank_id: 7,
      question_number: 2,
      question_text: "What is the purpose of anchor boxes in object detection?",
      answers: [
        "To adjust bounding box coordinates",
        "To define object classes",
        "To generate region proposals",
        "To reduce false positives",
      ],
      correct_answer: 2,
    },
    {
      id: 24,
      rank_id: 7,
      question_number: 3,
      question_text:
        "What are some challenges of using anchor boxes in object detection?",
      answers: [
        "Difficulty in determining optimal scales",
        "Increased model training time",
        "Limited support in deep learning frameworks",
        "Incompatibility with object detection datasets",
      ],
      correct_answer: 0,
    },
    {
      id: 25,
      rank_id: 7,
      question_number: 4,
      question_text:
        "What role do anchor boxes play in single-shot object detectors?",
      answers: [
        "To generate region proposals",
        "To classify object categories",
        "To refine bounding box coordinates",
        "To perform object detection in a single pass",
      ],
      correct_answer: 3,
    },
    {
      id: 26,
      rank_id: 7,
      question_number: 5,
      question_text:
        "What is the purpose of non-maximum suppression (NMS) in object detection?",
      answers: [
        "To remove duplicate bounding boxes",
        "To increase model accuracy",
        "To adjust bounding box coordinates",
        "To improve object classification",
      ],
      correct_answer: 0,
    },
    {
      id: 27,
      rank_id: 8,
      question_number: 1,
      question_text:
        "What is the significance of the Average Precision (AP) metric in object detection?",
      answers: [
        "Measures the overall model accuracy",
        "Evaluates the precision of positive detections",
        "Quantifies the performance across different IoU thresholds",
        "Calculates the average object area",
      ],
      correct_answer: 2,
    },
    {
      id: 28,
      rank_id: 8,
      question_number: 2,
      question_text: "What is the purpose of anchor boxes in object detection?",
      answers: [
        "To adjust bounding box coordinates",
        "To define object classes",
        "To generate region proposals",
        "To reduce false positives",
      ],
      correct_answer: 2,
    },
    {
      id: 29,
      rank_id: 8,
      question_number: 3,
      question_text:
        "What are some challenges of using anchor boxes in object detection?",
      answers: [
        "Difficulty in determining optimal scales",
        "Increased model training time",
        "Limited support in deep learning frameworks",
        "Incompatibility with object detection datasets",
      ],
      correct_answer: 0,
    },
    {
      id: 30,
      rank_id: 8,
      question_number: 4,
      question_text:
        "What role do anchor boxes play in single-shot object detectors?",
      answers: [
        "To generate region proposals",
        "To classify object categories",
        "To refine bounding box coordinates",
        "To perform object detection in a single pass",
      ],
      correct_answer: 3,
    },
    {
      id: 31,
      rank_id: 8,
      question_number: 5,
      question_text:
        "What is the purpose of non-maximum suppression (NMS) in object detection?",
      answers: [
        "To remove duplicate bounding boxes",
        "To increase model accuracy",
        "To adjust bounding box coordinates",
        "To improve object classification",
      ],
      correct_answer: 0,
    },
    {
      id: 32,
      rank_id: 9,
      question_number: 1,
      question_text:
        "What is the significance of the Average Precision (AP) metric in object detection?",
      answers: [
        "Measures the overall model accuracy",
        "Evaluates the precision of positive detections",
        "Quantifies the performance across different IoU thresholds",
        "Calculates the average object area",
      ],
      correct_answer: 2,
    },
    {
      id: 33,
      rank_id: 9,
      question_number: 2,
      question_text: "What is the purpose of anchor boxes in object detection?",
      answers: [
        "To adjust bounding box coordinates",
        "To define object classes",
        "To generate region proposals",
        "To reduce false positives",
      ],
      correct_answer: 2,
    },
    {
      id: 34,
      rank_id: 9,
      question_number: 3,
      question_text:
        "What are some challenges of using anchor boxes in object detection?",
      answers: [
        "Difficulty in determining optimal scales",
        "Increased model training time",
        "Limited support in deep learning frameworks",
        "Incompatibility with object detection datasets",
      ],
      correct_answer: 0,
    },
    {
      id: 35,
      rank_id: 9,
      question_number: 4,
      question_text:
        "What role do anchor boxes play in single-shot object detectors?",
      answers: [
        "To generate region proposals",
        "To classify object categories",
        "To refine bounding box coordinates",
        "To perform object detection in a single pass",
      ],
      correct_answer: 3,
    },
    {
      id: 36,
      rank_id: 9,
      question_number: 5,
      question_text:
        "What is the purpose of non-maximum suppression (NMS) in object detection?",
      answers: [
        "To remove duplicate bounding boxes",
        "To increase model accuracy",
        "To adjust bounding box coordinates",
        "To improve object classification",
      ],
      correct_answer: 0,
    },
    {
      id: 37,
      rank_id: 10,
      question_number: 1,
      question_text: "What is the primary goal of semantic segmentation?",
      answers: [
        "To classify each pixel in an image",
        "To detect objects in an image",
        "To outline object boundaries",
        "To generate bounding boxes for objects",
      ],
      correct_answer: 0,
    },
    {
      id: 38,
      rank_id: 10,
      question_number: 2,
      question_text:
        "Which type of neural network architecture is commonly used for semantic segmentation?",
      answers: [
        "Feedforward neural networks",
        "Recurrent neural networks",
        "Convolutional neural networks",
        "Generative adversarial networks",
      ],
      correct_answer: 2,
    },
    {
      id: 39,
      rank_id: 10,
      question_number: 3,
      question_text:
        "What is the primary difference between semantic segmentation and instance segmentation?",
      answers: [
        "Semantic segmentation labels pixels with object classes",
        "Instance segmentation identifies individual object instances",
        "Semantic segmentation provides bounding box coordinates",
        "Instance segmentation detects object outlines",
      ],
      correct_answer: 0,
    },
    {
      id: 40,
      rank_id: 11,
      question_number: 1,
      question_text: "What is the primary goal of semantic segmentation?",
      answers: [
        "To classify each pixel in an image",
        "To detect objects in an image",
        "To outline object boundaries",
        "To generate bounding boxes for objects",
      ],
      correct_answer: 0,
    },
    {
      id: 41,
      rank_id: 11,
      question_number: 2,
      question_text:
        "Which type of neural network architecture is commonly used for semantic segmentation?",
      answers: [
        "Feedforward neural networks",
        "Recurrent neural networks",
        "Convolutional neural networks",
        "Generative adversarial networks",
      ],
      correct_answer: 2,
    },
    {
      id: 42,
      rank_id: 11,
      question_number: 3,
      question_text:
        "What is the primary difference between semantic segmentation and instance segmentation?",
      answers: [
        "Semantic segmentation labels pixels with object classes",
        "Instance segmentation identifies individual object instances",
        "Semantic segmentation provides bounding box coordinates",
        "Instance segmentation detects object outlines",
      ],
      correct_answer: 0,
    },
    {
      id: 43,
      rank_id: 12,
      question_number: 1,
      question_text: "What is the primary goal of semantic segmentation?",
      answers: [
        "To classify each pixel in an image",
        "To detect objects in an image",
        "To outline object boundaries",
        "To generate bounding boxes for objects",
      ],
      correct_answer: 0,
    },
    {
      id: 44,
      rank_id: 12,
      question_number: 2,
      question_text:
        "Which type of neural network architecture is commonly used for semantic segmentation?",
      answers: [
        "Feedforward neural networks",
        "Recurrent neural networks",
        "Convolutional neural networks",
        "Generative adversarial networks",
      ],
      correct_answer: 2,
    },
    {
      id: 45,
      rank_id: 12,
      question_number: 3,
      question_text:
        "What is the primary difference between semantic segmentation and instance segmentation?",
      answers: [
        "Semantic segmentation labels pixels with object classes",
        "Instance segmentation identifies individual object instances",
        "Semantic segmentation provides bounding box coordinates",
        "Instance segmentation detects object outlines",
      ],
      correct_answer: 0,
    },
    {
      id: 46,
      rank_id: 13,
      question_number: 1,
      question_text:
        "What is the significance of the Intersection over Union (IoU) metric in semantic segmentation?",
      answers: [
        "Measures the overall model accuracy",
        "Evaluates the precision of positive predictions",
        "Quantifies the overlap between predicted and ground-truth masks",
        "Calculates the average object area",
      ],
      correct_answer: 2,
    },
    {
      id: 47,
      rank_id: 13,
      question_number: 2,
      question_text:
        "Which type of neural network architecture is commonly used for semantic segmentation?",
      answers: [
        "Feedforward neural networks",
        "Recurrent neural networks",
        "Convolutional neural networks",
        "Generative adversarial networks",
      ],
      correct_answer: 2,
    },
    {
      id: 48,
      rank_id: 13,
      question_number: 3,
      question_text:
        "What is the primary drawback of fully convolutional networks (FCNs) in semantic segmentation?",
      answers: [
        "Inability to handle variable input sizes",
        "High computational complexity",
        "Difficulty in training deep networks",
        "Limited ability to capture long-range dependencies",
      ],
      correct_answer: 0,
    },
    {
      id: 49,
      rank_id: 13,
      question_number: 4,
      question_text:
        "How does the choice of loss function affect semantic segmentation performance?",
      answers: [
        "Has no impact on model accuracy",
        "Affects model convergence speed",
        "Influences model robustness",
        "Improves object localization",
      ],
      correct_answer: 1,
    },
    {
      id: 50,
      rank_id: 14,
      question_number: 1,
      question_text:
        "What is the significance of the Intersection over Union (IoU) metric in semantic segmentation?",
      answers: [
        "Measures the overall model accuracy",
        "Evaluates the precision of positive predictions",
        "Quantifies the overlap between predicted and ground-truth masks",
        "Calculates the average object area",
      ],
      correct_answer: 2,
    },
    {
      id: 51,
      rank_id: 14,
      question_number: 2,
      question_text:
        "Which type of neural network architecture is commonly used for semantic segmentation?",
      answers: [
        "Feedforward neural networks",
        "Recurrent neural networks",
        "Convolutional neural networks",
        "Generative adversarial networks",
      ],
      correct_answer: 2,
    },
    {
      id: 52,
      rank_id: 14,
      question_number: 3,
      question_text:
        "What is the primary drawback of fully convolutional networks (FCNs) in semantic segmentation?",
      answers: [
        "Inability to handle variable input sizes",
        "High computational complexity",
        "Difficulty in training deep networks",
        "Limited ability to capture long-range dependencies",
      ],
      correct_answer: 0,
    },
    {
      id: 53,
      rank_id: 14,
      question_number: 4,
      question_text:
        "How does the choice of loss function affect semantic segmentation performance?",
      answers: [
        "Has no impact on model accuracy",
        "Affects model convergence speed",
        "Influences model robustness",
        "Improves object localization",
      ],
      correct_answer: 1,
    },
    {
      id: 54,
      rank_id: 15,
      question_number: 1,
      question_text:
        "What is the significance of the Intersection over Union (IoU) metric in semantic segmentation?",
      answers: [
        "Measures the overall model accuracy",
        "Evaluates the precision of positive predictions",
        "Quantifies the overlap between predicted and ground-truth masks",
        "Calculates the average object area",
      ],
      correct_answer: 2,
    },
    {
      id: 55,
      rank_id: 15,
      question_number: 2,
      question_text:
        "Which type of neural network architecture is commonly used for semantic segmentation?",
      answers: [
        "Feedforward neural networks",
        "Recurrent neural networks",
        "Convolutional neural networks",
        "Generative adversarial networks",
      ],
      correct_answer: 2,
    },
    {
      id: 56,
      rank_id: 15,
      question_number: 3,
      question_text:
        "What is the primary drawback of fully convolutional networks (FCNs) in semantic segmentation?",
      answers: [
        "Inability to handle variable input sizes",
        "High computational complexity",
        "Difficulty in training deep networks",
        "Limited ability to capture long-range dependencies",
      ],
      correct_answer: 0,
    },
    {
      id: 57,
      rank_id: 15,
      question_number: 4,
      question_text:
        "How does the choice of loss function affect semantic segmentation performance?",
      answers: [
        "Has no impact on model accuracy",
        "Affects model convergence speed",
        "Influences model robustness",
        "Improves object localization",
      ],
      correct_answer: 1,
    },
    {
      id: 58,
      rank_id: 16,
      question_number: 1,
      question_text:
        "What is the significance of the Dice coefficient in semantic segmentation?",
      answers: [
        "Measures the overall model accuracy",
        "Evaluates the precision of positive predictions",
        "Quantifies the overlap between predicted and ground-truth masks",
        "Calculates the average object area",
      ],
      correct_answer: 2,
    },
    {
      id: 59,
      rank_id: 16,
      question_number: 2,
      question_text:
        "What is the primary limitation of using pixel-wise loss functions in semantic segmentation?",
      answers: [
        "Difficulty in handling class imbalance",
        "High computational complexity",
        "Limited ability to capture spatial relationships",
        "Inability to generalize to unseen data",
      ],
      correct_answer: 0,
    },
    {
      id: 60,
      rank_id: 16,
      question_number: 3,
      question_text:
        "What role do skip connections play in semantic segmentation architectures?",
      answers: [
        "Enable feature reuse across network layers",
        "Facilitate end-to-end training",
        "Reduce model complexity",
        "Enhance object localization",
      ],
      correct_answer: 0,
    },
    {
      id: 61,
      rank_id: 16,
      question_number: 4,
      question_text:
        "How does the choice of backbone network architecture affect semantic segmentation performance?",
      answers: [
        "Has no impact on model accuracy",
        "Affects model convergence speed",
        "Influences model robustness",
        "Improves object localization",
      ],
      correct_answer: 2,
    },
    {
      id: 62,
      rank_id: 16,
      question_number: 5,
      question_text:
        "What is the primary challenge of training deep semantic segmentation models?",
      answers: [
        "Difficulty in capturing fine-grained details",
        "High memory consumption",
        "Limited availability of annotated data",
        "Inability to handle real-time processing",
      ],
      correct_answer: 1,
    },
    {
      id: 63,
      rank_id: 17,
      question_number: 1,
      question_text:
        "What is the significance of the Dice coefficient in semantic segmentation?",
      answers: [
        "Measures the overall model accuracy",
        "Evaluates the precision of positive predictions",
        "Quantifies the overlap between predicted and ground-truth masks",
        "Calculates the average object area",
      ],
      correct_answer: 2,
    },
    {
      id: 64,
      rank_id: 17,
      question_number: 2,
      question_text:
        "What is the primary limitation of using pixel-wise loss functions in semantic segmentation?",
      answers: [
        "Difficulty in handling class imbalance",
        "High computational complexity",
        "Limited ability to capture spatial relationships",
        "Inability to generalize to unseen data",
      ],
      correct_answer: 0,
    },
    {
      id: 65,
      rank_id: 17,
      question_number: 3,
      question_text:
        "What role do skip connections play in semantic segmentation architectures?",
      answers: [
        "Enable feature reuse across network layers",
        "Facilitate end-to-end training",
        "Reduce model complexity",
        "Enhance object localization",
      ],
      correct_answer: 0,
    },
    {
      id: 66,
      rank_id: 17,
      question_number: 4,
      question_text:
        "How does the choice of backbone network architecture affect semantic segmentation performance?",
      answers: [
        "Has no impact on model accuracy",
        "Affects model convergence speed",
        "Influences model robustness",
        "Improves object localization",
      ],
      correct_answer: 2,
    },
    {
      id: 67,
      rank_id: 17,
      question_number: 5,
      question_text:
        "What is the primary challenge of training deep semantic segmentation models?",
      answers: [
        "Difficulty in capturing fine-grained details",
        "High memory consumption",
        "Limited availability of annotated data",
        "Inability to handle real-time processing",
      ],
      correct_answer: 1,
    },
    {
      id: 68,
      rank_id: 18,
      question_number: 1,
      question_text:
        "What is the significance of the Dice coefficient in semantic segmentation?",
      answers: [
        "Measures the overall model accuracy",
        "Evaluates the precision of positive predictions",
        "Quantifies the overlap between predicted and ground-truth masks",
        "Calculates the average object area",
      ],
      correct_answer: 2,
    },
    {
      id: 69,
      rank_id: 18,
      question_number: 2,
      question_text:
        "What is the primary limitation of using pixel-wise loss functions in semantic segmentation?",
      answers: [
        "Difficulty in handling class imbalance",
        "High computational complexity",
        "Limited ability to capture spatial relationships",
        "Inability to generalize to unseen data",
      ],
      correct_answer: 0,
    },
    {
      id: 70,
      rank_id: 18,
      question_number: 3,
      question_text:
        "What role do skip connections play in semantic segmentation architectures?",
      answers: [
        "Enable feature reuse across network layers",
        "Facilitate end-to-end training",
        "Reduce model complexity",
        "Enhance object localization",
      ],
      correct_answer: 0,
    },
    {
      id: 71,
      rank_id: 18,
      question_number: 4,
      question_text:
        "How does the choice of backbone network architecture affect semantic segmentation performance?",
      answers: [
        "Has no impact on model accuracy",
        "Affects model convergence speed",
        "Influences model robustness",
        "Improves object localization",
      ],
      correct_answer: 2,
    },
    {
      id: 72,
      rank_id: 18,
      question_number: 5,
      question_text:
        "What is the primary challenge of training deep semantic segmentation models?",
      answers: [
        "Difficulty in capturing fine-grained details",
        "High memory consumption",
        "Limited availability of annotated data",
        "Inability to handle real-time processing",
      ],
      correct_answer: 1,
    },
    {
      id: 73,
      rank_id: 19,
      question_number: 1,
      question_text:
        "What is the primary advantage of using polygons over bounding boxes for object detection?",
      answers: [
        "More precise object localization",
        "Faster inference speed",
        "Easier implementation",
        "Reduced computational complexity",
      ],
      correct_answer: 0,
    },
    {
      id: 74,
      rank_id: 19,
      question_number: 2,
      question_text:
        "How are polygonal annotations typically represented in object detection datasets?",
      answers: [
        "As a set of bounding box coordinates",
        "As a binary mask",
        "As a series of connected vertices",
        "As a semantic segmentation map",
      ],
      correct_answer: 2,
    },
    {
      id: 75,
      rank_id: 19,
      question_number: 3,
      question_text:
        "What is the main challenge of using polygons for object detection?",
      answers: [
        "Increased annotation complexity",
        "Limited support in deep learning frameworks",
        "Difficulty in handling occluded objects",
        "Incompatibility with image augmentation techniques",
      ],
      correct_answer: 0,
    },
    {
      id: 76,
      rank_id: 20,
      question_number: 1,
      question_text:
        "What is the primary advantage of using polygons over bounding boxes for object detection?",
      answers: [
        "More precise object localization",
        "Faster inference speed",
        "Easier implementation",
        "Reduced computational complexity",
      ],
      correct_answer: 0,
    },
    {
      id: 77,
      rank_id: 20,
      question_number: 2,
      question_text:
        "How are polygonal annotations typically represented in object detection datasets?",
      answers: [
        "As a set of bounding box coordinates",
        "As a binary mask",
        "As a series of connected vertices",
        "As a semantic segmentation map",
      ],
      correct_answer: 2,
    },
    {
      id: 78,
      rank_id: 20,
      question_number: 3,
      question_text:
        "What is the main challenge of using polygons for object detection?",
      answers: [
        "Increased annotation complexity",
        "Limited support in deep learning frameworks",
        "Difficulty in handling occluded objects",
        "Incompatibility with image augmentation techniques",
      ],
      correct_answer: 0,
    },
    {
      id: 79,
      rank_id: 21,
      question_number: 1,
      question_text:
        "What is the primary advantage of using polygons over bounding boxes for object detection?",
      answers: [
        "More precise object localization",
        "Faster inference speed",
        "Easier implementation",
        "Reduced computational complexity",
      ],
      correct_answer: 0,
    },
    {
      id: 80,
      rank_id: 21,
      question_number: 2,
      question_text:
        "How are polygonal annotations typically represented in object detection datasets?",
      answers: [
        "As a set of bounding box coordinates",
        "As a binary mask",
        "As a series of connected vertices",
        "As a semantic segmentation map",
      ],
      correct_answer: 2,
    },
    {
      id: 81,
      rank_id: 21,
      question_number: 3,
      question_text:
        "What is the main challenge of using polygons for object detection?",
      answers: [
        "Increased annotation complexity",
        "Limited support in deep learning frameworks",
        "Difficulty in handling occluded objects",
        "Incompatibility with image augmentation techniques",
      ],
      correct_answer: 0,
    },
    {
      id: 82,
      rank_id: 22,
      question_number: 1,
      question_text:
        "What is the primary challenge of using polygons for object detection?",
      answers: [
        "Increased annotation complexity",
        "Limited support in deep learning frameworks",
        "Difficulty in handling occluded objects",
        "Incompatibility with image augmentation techniques",
      ],
      correct_answer: 0,
    },
    {
      id: 83,
      rank_id: 22,
      question_number: 2,
      question_text:
        "Which technique is commonly used to represent polygonal annotations?",
      answers: ["R-CNN", "YOLO", "Mask R-CNN", "Polygon-RNN"],
      correct_answer: 2,
    },
    {
      id: 84,
      rank_id: 22,
      question_number: 3,
      question_text:
        "What is the primary benefit of using polygonal annotations in semantic segmentation tasks?",
      answers: [
        "Improved object localization",
        "Reduced annotation time",
        "Better handling of object occlusion",
        "Enhanced model generalization",
      ],
      correct_answer: 0,
    },
    {
      id: 85,
      rank_id: 22,
      question_number: 4,
      question_text:
        "What is the primary advantage of using polygons over bounding boxes for object detection?",
      answers: [
        "More precise object localization",
        "Faster inference speed",
        "Easier implementation",
        "Reduced computational complexity",
      ],
      correct_answer: 0,
    },
    {
      id: 86,
      rank_id: 23,
      question_number: 1,
      question_text:
        "What is the primary challenge of using polygons for object detection?",
      answers: [
        "Increased annotation complexity",
        "Limited support in deep learning frameworks",
        "Difficulty in handling occluded objects",
        "Incompatibility with image augmentation techniques",
      ],
      correct_answer: 0,
    },
    {
      id: 87,
      rank_id: 23,
      question_number: 2,
      question_text:
        "Which technique is commonly used to represent polygonal annotations?",
      answers: ["R-CNN", "YOLO", "Mask R-CNN", "Polygon-RNN"],
      correct_answer: 2,
    },
    {
      id: 88,
      rank_id: 23,
      question_number: 3,
      question_text:
        "What is the primary benefit of using polygonal annotations in semantic segmentation tasks?",
      answers: [
        "Improved object localization",
        "Reduced annotation time",
        "Better handling of object occlusion",
        "Enhanced model generalization",
      ],
      correct_answer: 0,
    },
    {
      id: 89,
      rank_id: 23,
      question_number: 4,
      question_text:
        "What is the primary advantage of using polygons over bounding boxes for object detection?",
      answers: [
        "More precise object localization",
        "Faster inference speed",
        "Easier implementation",
        "Reduced computational complexity",
      ],
      correct_answer: 0,
    },
    {
      id: 90,
      rank_id: 24,
      question_number: 1,
      question_text:
        "What is the primary challenge of using polygons for object detection?",
      answers: [
        "Increased annotation complexity",
        "Limited support in deep learning frameworks",
        "Difficulty in handling occluded objects",
        "Incompatibility with image augmentation techniques",
      ],
      correct_answer: 0,
    },
    {
      id: 91,
      rank_id: 24,
      question_number: 2,
      question_text:
        "Which technique is commonly used to represent polygonal annotations?",
      answers: ["R-CNN", "YOLO", "Mask R-CNN", "Polygon-RNN"],
      correct_answer: 2,
    },
    {
      id: 92,
      rank_id: 24,
      question_number: 3,
      question_text:
        "What is the primary benefit of using polygonal annotations in semantic segmentation tasks?",
      answers: [
        "Improved object localization",
        "Reduced annotation time",
        "Better handling of object occlusion",
        "Enhanced model generalization",
      ],
      correct_answer: 0,
    },
    {
      id: 93,
      rank_id: 24,
      question_number: 4,
      question_text:
        "What is the primary advantage of using polygons over bounding boxes for object detection?",
      answers: [
        "More precise object localization",
        "Faster inference speed",
        "Easier implementation",
        "Reduced computational complexity",
      ],
      correct_answer: 0,
    },
    {
      id: 94,
      rank_id: 25,
      question_number: 1,
      question_text:
        "What is the primary drawback of using polygons for object detection?",
      answers: [
        "Increased annotation complexity",
        "Limited support in deep learning frameworks",
        "Difficulty in handling occluded objects",
        "Incompatibility with image augmentation techniques",
      ],
      correct_answer: 0,
    },
    {
      id: 95,
      rank_id: 25,
      question_number: 2,
      question_text:
        "Which technique is commonly used to represent polygonal annotations?",
      answers: ["R-CNN", "YOLO", "Mask R-CNN", "Polygon-RNN"],
      correct_answer: 2,
    },
    {
      id: 96,
      rank_id: 25,
      question_number: 3,
      question_text:
        "What is the primary benefit of using polygonal annotations in semantic segmentation tasks?",
      answers: [
        "Improved object localization",
        "Reduced annotation time",
        "Better handling of object occlusion",
        "Enhanced model generalization",
      ],
      correct_answer: 0,
    },
    {
      id: 97,
      rank_id: 25,
      question_number: 4,
      question_text:
        "What is the primary advantage of using polygons over bounding boxes for object detection?",
      answers: [
        "More precise object localization",
        "Faster inference speed",
        "Easier implementation",
        "Reduced computational complexity",
      ],
      correct_answer: 0,
    },
    {
      id: 98,
      rank_id: 25,
      question_number: 5,
      question_text:
        "What is the primary challenge of using polygonal annotations in object detection datasets?",
      answers: [
        "Increased annotation complexity",
        "Difficulty in handling occluded objects",
        "Limited availability of annotated data",
        "Incompatibility with image augmentation techniques",
      ],
      correct_answer: 0,
    },
    {
      id: 99,
      rank_id: 26,
      question_number: 1,
      question_text:
        "What is the primary drawback of using polygons for object detection?",
      answers: [
        "Increased annotation complexity",
        "Limited support in deep learning frameworks",
        "Difficulty in handling occluded objects",
        "Incompatibility with image augmentation techniques",
      ],
      correct_answer: 0,
    },
    {
      id: 100,
      rank_id: 26,
      question_number: 2,
      question_text:
        "Which technique is commonly used to represent polygonal annotations?",
      answers: ["R-CNN", "YOLO", "Mask R-CNN", "Polygon-RNN"],
      correct_answer: 2,
    },
    {
      id: 101,
      rank_id: 26,
      question_number: 3,
      question_text:
        "What is the primary benefit of using polygonal annotations in semantic segmentation tasks?",
      answers: [
        "Improved object localization",
        "Reduced annotation time",
        "Better handling of object occlusion",
        "Enhanced model generalization",
      ],
      correct_answer: 0,
    },
    {
      id: 102,
      rank_id: 26,
      question_number: 4,
      question_text:
        "What is the primary advantage of using polygons over bounding boxes for object detection?",
      answers: [
        "More precise object localization",
        "Faster inference speed",
        "Easier implementation",
        "Reduced computational complexity",
      ],
      correct_answer: 0,
    },
    {
      id: 103,
      rank_id: 26,
      question_number: 5,
      question_text:
        "What is the primary challenge of using polygonal annotations in object detection datasets?",
      answers: [
        "Increased annotation complexity",
        "Difficulty in handling occluded objects",
        "Limited availability of annotated data",
        "Incompatibility with image augmentation techniques",
      ],
      correct_answer: 0,
    },
    {
      id: 104,
      rank_id: 27,
      question_number: 1,
      question_text:
        "What is the primary drawback of using polygons for object detection?",
      answers: [
        "Increased annotation complexity",
        "Limited support in deep learning frameworks",
        "Difficulty in handling occluded objects",
        "Incompatibility with image augmentation techniques",
      ],
      correct_answer: 0,
    },
    {
      id: 105,
      rank_id: 27,
      question_number: 2,
      question_text:
        "Which technique is commonly used to represent polygonal annotations?",
      answers: ["R-CNN", "YOLO", "Mask R-CNN", "Polygon-RNN"],
      correct_answer: 2,
    },
    {
      id: 106,
      rank_id: 27,
      question_number: 3,
      question_text:
        "What is the primary benefit of using polygonal annotations in semantic segmentation tasks?",
      answers: [
        "Improved object localization",
        "Reduced annotation time",
        "Better handling of object occlusion",
        "Enhanced model generalization",
      ],
      correct_answer: 0,
    },
    {
      id: 107,
      rank_id: 27,
      question_number: 4,
      question_text:
        "What is the primary advantage of using polygons over bounding boxes for object detection?",
      answers: [
        "More precise object localization",
        "Faster inference speed",
        "Easier implementation",
        "Reduced computational complexity",
      ],
      correct_answer: 0,
    },
    {
      id: 108,
      rank_id: 27,
      question_number: 5,
      question_text:
        "What is the primary challenge of using polygonal annotations in object detection datasets?",
      answers: [
        "Increased annotation complexity",
        "Difficulty in handling occluded objects",
        "Limited availability of annotated data",
        "Incompatibility with image augmentation techniques",
      ],
      correct_answer: 0,
    },
  ]);
};
