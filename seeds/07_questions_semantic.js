/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('questions').del()
  // await knex('questions').insert([
    // {
    //   id: 163,
    //   lesson_id: 28,
    //   question_number: 1,
    //   question_text: "What is the primary goal of semantic segmentation?",
    //   answers: ["To classify each pixel in an image into a predefined set of categories", "To detect and localize objects of interest", "To generate precise bounding boxes around objects", "To estimate the pose and orientation of objects"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 164,
    //   lesson_id: 28,
    //   question_number: 2,
    //   question_text: "What is the primary challenge of semantic segmentation?",
    //   answers: ["Increased computational complexity", "Difficulty in defining object boundaries", "Dependency on large-scale training datasets", "Inability to handle object occlusions"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 165,
    //   lesson_id: 28,
    //   question_number: 3,
    //   question_text: "How do fully convolutional networks (FCNs) differ from traditional CNNs?",
    //   answers: ["They include more layers for deeper feature extraction", "They replace fully connected layers with convolutional layers", "They utilize recurrent connections for feedback", "They apply pooling operations more aggressively"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 166,
    //   lesson_id: 28,
    //   question_number: 1,
    //   question_text: "What is the main purpose of the softmax function in semantic segmentation?",
    //   answers: ["To improve the convergence rate of the training process", "To regularize the model during training", "To generate pixel-wise probability distributions over classes", "To facilitate multi-label classification tasks"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 167,
    //   lesson_id: 28,
    //   question_number: 2,
    //   question_text: "How do conditional random fields (CRFs) improve the spatial consistency of semantic segmentation?",
    //   answers: ["By integrating contextual information into the segmentation process", "By reducing the computational complexity of the model", "By enforcing spatial constraints on predictions", "By increasing the diversity of training samples"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 168,
    //   lesson_id: 28,
    //   question_number: 3,
    //   question_text: "What role does dilated convolutions play in semantic segmentation?",
    //   answers: ["To increase the receptive field without loss of resolution", "To remove high-frequency noise from the input image", "To improve the robustness of the model to variations in lighting conditions", "To accelerate the training process by reducing computational overhead"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 169,
    //   lesson_id: 29,
    //   question_number: 1,
    //   question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
    //   answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 170,
    //   lesson_id: 29,
    //   question_number: 2,
    //   question_text: "How does skip connection architecture improve semantic segmentation performance?",
    //   answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
    //   correct_answer: 2,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 171,
    //   lesson_id: 29,
    //   question_number: 3,
    //   question_text: "What role does the softmax function play in semantic segmentation?",
    //   answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 172,
    //   lesson_id: 29,
    //   question_number: 1,
    //   question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
    //   answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 173,
    //   lesson_id: 29,
    //   question_number: 2,
    //   question_text: "How does data augmentation improve the performance of semantic segmentation models?",
    //   answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 174,
    //   lesson_id: 29,
    //   question_number: 3,
    //   question_text: "What is the significance of class imbalance in semantic segmentation?",
    //   answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 175,
    //   lesson_id: 30,
    //   question_number: 1,
    //   question_text: "What is the primary advantage of using conditional random fields (CRFs) in semantic segmentation?",
    //   answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 176,
    //   lesson_id: 30,
    //   question_number: 2,
    //   question_text: "How does data augmentation improve the performance of semantic segmentation models?",
    //   answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 177,
    //   lesson_id: 30,
    //   question_number: 3,
    //   question_text: "What is the significance of class imbalance in semantic segmentation?",
    //   answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 178,
    //   lesson_id: 30,
    //   question_number: 1,
    //   question_text: "What is the primary advantage of using conditional random fields (CRFs) in semantic segmentation?",
    //   answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 179,
    //   lesson_id: 30,
    //   question_number: 2,
    //   question_text: "How does data augmentation improve the performance of semantic segmentation models?",
    //   answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 180,
    //   lesson_id: 30,
    //   question_number: 3,
    //   question_text: "What is the significance of class imbalance in semantic segmentation?",
    //   answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 181,
    //   lesson_id: 31,
    //   question_number: 1,
    //   question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
    //   answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 182,
    //   lesson_id: 31,
    //   question_number: 2,
    //   question_text: "How does skip connection architecture improve semantic segmentation performance?",
    //   answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
    //   correct_answer: 2,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 183,
    //   lesson_id: 31,
    //   question_number: 3,
    //   question_text: "What role does the softmax function play in semantic segmentation?",
    //   answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 184,
    //   lesson_id: 31,
    //   question_number: 1,
    //   question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
    //   answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 185,
    //   lesson_id: 31,
    //   question_number: 2,
    //   question_text: "How does data augmentation improve the performance of semantic segmentation models?",
    //   answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 186,
    //   lesson_id: 31,
    //   question_number: 3,
    //   question_text: "What is the significance of class imbalance in semantic segmentation?",
    //   answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 187,
    //   lesson_id: 32,
    //   question_number: 1,
    //   question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
    //   answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 188,
    //   lesson_id: 32,
    //   question_number: 2,
    //   question_text: "How does skip connection architecture improve semantic segmentation performance?",
    //   answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
    //   correct_answer: 2,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 189,
    //   lesson_id: 32,
    //   question_number: 3,
    //   question_text: "What role does the softmax function play in semantic segmentation?",
    //   answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 190,
    //   lesson_id: 32,
    //   question_number: 1,
    //   question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
    //   answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 191,
    //   lesson_id: 32,
    //   question_number: 2,
    //   question_text: "How does data augmentation improve the performance of semantic segmentation models?",
    //   answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 192,
    //   lesson_id: 32,
    //   question_number: 3,
    //   question_text: "What is the significance of class imbalance in semantic segmentation?",
    //   answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 193,
    //   lesson_id: 33,
    //   question_number: 1,
    //   question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
    //   answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 194,
    //   lesson_id: 33,
    //   question_number: 2,
    //   question_text: "How does skip connection architecture improve semantic segmentation performance?",
    //   answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
    //   correct_answer: 2,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 195,
    //   lesson_id: 33,
    //   question_number: 3,
    //   question_text: "What role does the softmax function play in semantic segmentation?",
    //   answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 196,
    //   lesson_id: 33,
    //   question_number: 1,
    //   question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
    //   answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 197,
    //   lesson_id: 33,
    //   question_number: 2,
    //   question_text: "How does data augmentation improve the performance of semantic segmentation models?",
    //   answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 198,
    //   lesson_id: 33,
    //   question_number: 3,
    //   question_text: "What is the significance of class imbalance in semantic segmentation?",
    //   answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 199,
    //   lesson_id: 34,
    //   question_number: 1,
    //   question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
    //   answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 200,
    //   lesson_id: 34,
    //   question_number: 2,
    //   question_text: "How does skip connection architecture improve semantic segmentation performance?",
    //   answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
    //   correct_answer: 2,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 201,
    //   lesson_id: 34,
    //   question_number: 3,
    //   question_text: "What role does the softmax function play in semantic segmentation?",
    //   answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 202,
    //   lesson_id: 34,
    //   question_number: 1,
    //   question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
    //   answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 203,
    //   lesson_id: 34,
    //   question_number: 2,
    //   question_text: "How does data augmentation improve the performance of semantic segmentation models?",
    //   answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 204,
    //   lesson_id: 34,
    //   question_number: 3,
    //   question_text: "What is the significance of class imbalance in semantic segmentation?",
    //   answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 205,
    //   lesson_id: 35,
    //   question_number: 1,
    //   question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
    //   answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 206,
    //   lesson_id: 35,
    //   question_number: 2,
    //   question_text: "How does skip connection architecture improve semantic segmentation performance?",
    //   answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
    //   correct_answer: 2,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 207,
    //   lesson_id: 35,
    //   question_number: 3,
    //   question_text: "What role does the softmax function play in semantic segmentation?",
    //   answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 208,
    //   lesson_id: 35,
    //   question_number: 1,
    //   question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
    //   answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 209,
    //   lesson_id: 35,
    //   question_number: 2,
    //   question_text: "How does data augmentation improve the performance of semantic segmentation models?",
    //   answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 210,
    //   lesson_id: 35,
    //   question_number: 3,
    //   question_text: "What is the significance of class imbalance in semantic segmentation?",
    //   answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 211,
    //   lesson_id: 36,
    //   question_number: 1,
    //   question_text: "What is the primary advantage of using dilated convolutions in Semantic segmentation?",
    //   answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 212,
    //   lesson_id: 36,
    //   question_number: 2,
    //   question_text: "How does skip connection architecture improve semantic segmentation performance?",
    //   answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
    //   correct_answer: 2,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 213,
    //   lesson_id: 36,
    //   question_number: 3,
    //   question_text: "What role does the softmax function play in semantic segmentation?",
    //   answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 214,
    //   lesson_id: 36,
    //   question_number: 1,
    //   question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
    //   answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 215,
    //   lesson_id: 36,
    //   question_number: 2,
    //   question_text: "How does data augmentation improve the performance of semantic segmentation models?",
    //   answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 216,
    //   lesson_id: 36,
    //   question_number: 3,
    //   question_text: "What is the significance of class imbalance in semantic segmentation?",
    //   answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 217,
    //   lesson_id: 37,
    //   question_number: 1,
    //   question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
    //   answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
    //   correct_answer: 3,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 218,
    //   lesson_id: 37,
    //   question_number: 2,
    //   question_text: "How does skip connection architecture improve semantic segmentation performance?",
    //   answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
    //   correct_answer: 2,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 219,
    //   lesson_id: 37,
    //   question_number: 3,
    //   question_text: "What role does the softmax function play in semantic segmentation?",
    //   answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 220,
    //   lesson_id: 37,
    //   question_number: 1,
    //   question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
    //   answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 221,
    //   lesson_id: 37,
    //   question_number: 2,
    //   question_text: "How does data augmentation improve the performance of semantic segmentation models?",
    //   answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 222,
    //   lesson_id: 37,
    //   question_number: 3,
    //   question_text: "What is the significance of class imbalance in semantic segmentation?",
    //   answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 223,
    //   lesson_id: 38,
    //   question_number: 1,
    //   question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
    //   answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
    //   correct_answer: 2,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 224,
    //   lesson_id: 38,
    //   question_number: 2,
    //   question_text: "How does skip connection architecture improve semantic segmentation performance?",
    //   answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
    //   correct_answer: 3,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 225,
    //   lesson_id: 38,
    //   question_number: 3,
    //   question_text: "What role does the softmax function play in semantic segmentation?",
    //   answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 226,
    //   lesson_id: 38,
    //   question_number: 1,
    //   question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
    //   answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 227,
    //   lesson_id: 38,
    //   question_number: 2,
    //   question_text: "How does data augmentation improve the performance of semantic segmentation models?",
    //   answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
    //   correct_answer: 3,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 228,
    //   lesson_id: 38,
    //   question_number: 3,
    //   question_text: "What is the significance of class imbalance in semantic segmentation?",
    //   answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 229,
    //   lesson_id: 39,
    //   question_number: 1,
    //   question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
    //   answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 230,
    //   lesson_id: 39,
    //   question_number: 2,
    //   question_text: "How does skip connection architecture improve semantic segmentation performance?",
    //   answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
    //   correct_answer: 3,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 231,
    //   lesson_id: 39,
    //   question_number: 3,
    //   question_text: "What role does the softmax function play in semantic segmentation?",
    //   answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
    //   correct_answer: 2,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 232,
    //   lesson_id: 39,
    //   question_number: 1,
    //   question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
    //   answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
    //   correct_answer: 3,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 233,
    //   lesson_id: 39,
    //   question_number: 2,
    //   question_text: "How does data augmentation improve the performance of semantic segmentation models?",
    //   answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 234,
    //   lesson_id: 39,
    //   question_number: 3,
    //   question_text: "What is the significance of class imbalance in semantic segmentation?",
    //   answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 235,
    //   lesson_id: 40,
    //   question_number: 1,
    //   question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
    //   answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
    //   correct_answer: 2,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 236,
    //   lesson_id: 40,
    //   question_number: 2,
    //   question_text: "How does skip connection architecture improve semantic segmentation performance?",
    //   answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 237,
    //   lesson_id: 40,
    //   question_number: 3,
    //   question_text: "What role does the softmax function play in semantic segmentation?",
    //   answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 238,
    //   lesson_id: 40,
    //   question_number: 1,
    //   question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
    //   answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 239,
    //   lesson_id: 40,
    //   question_number: 2,
    //   question_text: "How does data augmentation improve the performance of semantic segmentation models?",
    //   answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 240,
    //   lesson_id: 40,
    //   question_number: 3,
    //   question_text: "What is the significance of class imbalance in semantic segmentation?",
    //   answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
    //   correct_answer: 3,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 241,
    //   lesson_id: 41,
    //   question_number: 1,
    //   question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
    //   answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 242,
    //   lesson_id: 41,
    //   question_number: 2,
    //   question_text: "How does skip connection architecture improve semantic segmentation performance?",
    //   answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
    //   correct_answer: 3,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 243,
    //   lesson_id: 41,
    //   question_number: 3,
    //   question_text: "What role does the softmax function play in semantic segmentation?",
    //   answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 244,
    //   lesson_id: 41,
    //   question_number: 1,
    //   question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
    //   answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 245,
    //   lesson_id: 41,
    //   question_number: 2,
    //   question_text: "How does data augmentation improve the performance of semantic segmentation models?",
    //   answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 246,
    //   lesson_id: 41,
    //   question_number: 3,
    //   question_text: "What is the significance of class imbalance in semantic segmentation?",
    //   answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
    //   correct_answer: 3,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 247,
    //   lesson_id: 42,
    //   question_number: 1,
    //   question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
    //   answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 248,
    //   lesson_id: 42,
    //   question_number: 2,
    //   question_text: "How does skip connection architecture improve semantic segmentation performance?",
    //   answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 249,
    //   lesson_id: 42,
    //   question_number: 3,
    //   question_text: "What role does the softmax function play in semantic segmentation?",
    //   answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
    //   correct_answer: 2,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 250,
    //   lesson_id: 42,
    //   question_number: 1,
    //   question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
    //   answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 251,
    //   lesson_id: 42,
    //   question_number: 2,
    //   question_text: "How does data augmentation improve the performance of semantic segmentation models?",
    //   answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 252,
    //   lesson_id: 42,
    //   question_number: 3,
    //   question_text: "What is the significance of class imbalance in semantic segmentation?",
    //   answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
    //   correct_answer: 3,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 253,
    //   lesson_id: 43,
    //   question_number: 1,
    //   question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
    //   answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 254,
    //   lesson_id: 43,
    //   question_number: 2,
    //   question_text: "How does skip connection architecture improve semantic segmentation performance?",
    //   answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 255,
    //   lesson_id: 43,
    //   question_number: 3,
    //   question_text: "What role does the softmax function play in semantic segmentation?",
    //   answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
    //   correct_answer: 2,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 256,
    //   lesson_id: 43,
    //   question_number: 1,
    //   question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
    //   answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
    //   correct_answer: 3,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 257,
    //   lesson_id: 43,
    //   question_number: 2,
    //   question_text: "How does data augmentation improve the performance of semantic segmentation models?",
    //   answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 258,
    //   lesson_id: 43,
    //   question_number: 3,
    //   question_text: "What is the significance of class imbalance in semantic segmentation?",
    //   answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 259,
    //   lesson_id: 44,
    //   question_number: 1,
    //   question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
    //   answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 260,
    //   lesson_id: 44,
    //   question_number: 2,
    //   question_text: "How does skip connection architecture improve semantic segmentation performance?",
    //   answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
    //   correct_answer: 3,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 261,
    //   lesson_id: 44,
    //   question_number: 3,
    //   question_text: "What role does the softmax function play in semantic segmentation?",
    //   answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 262,
    //   lesson_id: 44,
    //   question_number: 1,
    //   question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
    //   answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 263,
    //   lesson_id: 44,
    //   question_number: 2,
    //   question_text: "How does data augmentation improve the performance of semantic segmentation models?",
    //   answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 264,
    //   lesson_id: 44,
    //   question_number: 3,
    //   question_text: "What is the significance of class imbalance in semantic segmentation?",
    //   answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
    //   correct_answer: 3,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 265,
    //   lesson_id: 45,
    //   question_number: 1,
    //   question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
    //   answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
    //   correct_answer: 3,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 266,
    //   lesson_id: 45,
    //   question_number: 2,
    //   question_text: "How does skip connection architecture improve semantic segmentation performance?",
    //   answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 267,
    //   lesson_id: 45,
    //   question_number: 3,
    //   question_text: "What role does the softmax function play in semantic segmentation?",
    //   answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 268,
    //   lesson_id: 45,
    //   question_number: 1,
    //   question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
    //   answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 269,
    //   lesson_id: 45,
    //   question_number: 2,
    //   question_text: "How does data augmentation improve the performance of semantic segmentation models?",
    //   answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 270,
    //   lesson_id: 45,
    //   question_number: 3,
    //   question_text: "What is the significance of class imbalance in semantic segmentation?",
    //   answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
    //   correct_answer: 3,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 271,
    //   lesson_id: 46,
    //   question_number: 1,
    //   question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
    //   answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
    //   correct_answer: 2,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 272,
    //   lesson_id: 46,
    //   question_number: 2,
    //   question_text: "How does skip connection architecture improve semantic segmentation performance?",
    //   answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 273,
    //   lesson_id: 46,
    //   question_number: 3,
    //   question_text: "What role does the softmax function play in semantic segmentation?",
    //   answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 274,
    //   lesson_id: 46,
    //   question_number: 1,
    //   question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
    //   answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 275,
    //   lesson_id: 46,
    //   question_number: 2,
    //   question_text: "How does data augmentation improve the performance of semantic segmentation models?",
    //   answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 276,
    //   lesson_id: 46,
    //   question_number: 3,
    //   question_text: "What is the significance of class imbalance in semantic segmentation?",
    //   answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
    //   correct_answer: 3,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 277,
    //   lesson_id: 47,
    //   question_number: 1,
    //   question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
    //   answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
    //   correct_answer: 3,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 278,
    //   lesson_id: 47,
    //   question_number: 2,
    //   question_text: "How does skip connection architecture improve semantic segmentation performance?",
    //   answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 279,
    //   lesson_id: 47,
    //   question_number: 3,
    //   question_text: "What role does the softmax function play in semantic segmentation?",
    //   answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 280,
    //   lesson_id: 47,
    //   question_number: 1,
    //   question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
    //   answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 281,
    //   lesson_id: 47,
    //   question_number: 2,
    //   question_text: "How does data augmentation improve the performance of semantic segmentation models?",
    //   answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
    //   correct_answer: 3,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 282,
    //   lesson_id: 47,
    //   question_number: 3,
    //   question_text: "What is the significance of class imbalance in semantic segmentation?",
    //   answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 283,
    //   lesson_id: 48,
    //   question_number: 1,
    //   question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
    //   answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 284,
    //   lesson_id: 48,
    //   question_number: 2,
    //   question_text: "How does skip connection architecture improve semantic segmentation performance?",
    //   answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
    //   correct_answer: 2,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 285,
    //   lesson_id: 48,
    //   question_number: 3,
    //   question_text: "What role does the softmax function play in semantic segmentation?",
    //   answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
    //   correct_answer: 3,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 286,
    //   lesson_id: 48,
    //   question_number: 1,
    //   question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
    //   answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 287,
    //   lesson_id: 48,
    //   question_number: 2,
    //   question_text: "How does data augmentation improve the performance of semantic segmentation models?",
    //   answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 288,
    //   lesson_id: 48,
    //   question_number: 3,
    //   question_text: "What is the significance of class imbalance in semantic segmentation?",
    //   answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 289,
    //   lesson_id: 49,
    //   question_number: 1,
    //   question_text: "What is the primary objective of semantic segmentation?",
    //   answers: ["To classify each pixel in an image into a specific category", "To detect objects of interest in an image", "To estimate the depth of objects in an image", "To predict the pose of objects in an image"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 290,
    //   lesson_id: 49,
    //   question_number: 2,
    //   question_text: "Which neural network architecture is commonly used for semantic segmentation?",
    //   answers: ["Fully Connected Networks (FCNs)", "Convolutional Neural Networks (CNNs)", "Recurrent Neural Networks (RNNs)", "Generative Adversarial Networks (GANs)"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 291,
    //   lesson_id: 49,
    //   question_number: 3,
    //   question_text: "What is the role of upsampling in semantic segmentation?",
    //   answers: ["To decrease the spatial resolution of feature maps", "To increase the spatial resolution of feature maps", "To remove noise from feature maps", "To introduce non-linearity into the model"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 292,
    //   lesson_id: 49,
    //   question_number: 1,
    //   question_text: "What is the main advantage of using dilated convolutions in semantic segmentation?",
    //   answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
    //   correct_answer: 3,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 293,
    //   lesson_id: 49,
    //   question_number: 2,
    //   question_text: "How does skip connection architecture improve semantic segmentation performance?",
    //   answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 294,
    //   lesson_id: 49,
    //   question_number: 3,
    //   question_text: "What role does the softmax function play in semantic segmentation?",
    //   answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 295,
    //   lesson_id: 50,
    //   question_number: 1,
    //   question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
    //   answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 296,
    //   lesson_id: 50,
    //   question_number: 2,
    //   question_text: "How does skip connection architecture improve semantic segmentation performance?",
    //   answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
    //   correct_answer: 3,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 297,
    //   lesson_id: 50,
    //   question_number: 3,
    //   question_text: "What role does the softmax function play in semantic segmentation?",
    //   answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
    //   correct_answer: 2,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 298,
    //   lesson_id: 50,
    //   question_number: 1,
    //   question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
    //   answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 299,
    //   lesson_id: 50,
    //   question_number: 2,
    //   question_text: "How does data augmentation improve the performance of semantic segmentation models?",
    //   answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 300,
    //   lesson_id: 50,
    //   question_number: 3,
    //   question_text: "What is the significance of class imbalance in semantic segmentation?",
    //   answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
    //   correct_answer: 3,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 301,
    //   lesson_id: 51,
    //   question_number: 1,
    //   question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
    //   answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
    //   correct_answer: 2,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 302,
    //   lesson_id: 51,
    //   question_number: 2,
    //   question_text: "How does skip connection architecture improve semantic segmentation performance?",
    //   answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 303,
    //   lesson_id: 51,
    //   question_number: 3,
    //   question_text: "What role does the softmax function play in semantic segmentation?",
    //   answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 304,
    //   lesson_id: 51,
    //   question_number: 1,
    //   question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
    //   answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 305,
    //   lesson_id: 51,
    //   question_number: 2,
    //   question_text: "How does data augmentation improve the performance of semantic segmentation models?",
    //   answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 306,
    //   lesson_id: 51,
    //   question_number: 3,
    //   question_text: "What is the significance of class imbalance in semantic segmentation?",
    //   answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 307,
    //   lesson_id: 52,
    //   question_number: 1,
    //   question_text: "What is the primary objective of semantic segmentation?",
    //   answers: ["To classify each pixel in an image into a specific category", "To detect objects of interest in an image", "To estimate the depth of objects in an image", "To predict the pose of objects in an image"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 308,
    //   lesson_id: 52,
    //   question_number: 2,
    //   question_text: "Which neural network architecture is commonly used for semantic segmentation?",
    //   answers: ["Fully Connected Networks (FCNs)", "Convolutional Neural Networks (CNNs)", "Recurrent Neural Networks (RNNs)", "Generative Adversarial Networks (GANs)"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 309,
    //   lesson_id: 52,
    //   question_number: 3,
    //   question_text: "What is the role of upsampling in semantic segmentation?",
    //   answers: ["To decrease the spatial resolution of feature maps", "To increase the spatial resolution of feature maps", "To remove noise from feature maps", "To introduce non-linearity into the model"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 310,
    //   lesson_id: 52,
    //   question_number: 1,
    //   question_text: "What is the main advantage of using dilated convolutions in semantic segmentation?",
    //   answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
    //   correct_answer: 3,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 311,
    //   lesson_id: 52,
    //   question_number: 2,
    //   question_text: "How does skip connection architecture improve semantic segmentation performance?",
    //   answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 312,
    //   lesson_id: 52,
    //   question_number: 3,
    //   question_text: "What role does the softmax function play in semantic segmentation?",
    //   answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 313,
    //   lesson_id: 53,
    //   question_number: 1,
    //   question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
    //   answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 314,
    //   lesson_id: 53,
    //   question_number: 2,
    //   question_text: "How does skip connection architecture improve semantic segmentation performance?",
    //   answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
    //   correct_answer: 3,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 315,
    //   lesson_id: 53,
    //   question_number: 3,
    //   question_text: "What role does the softmax function play in semantic segmentation?",
    //   answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
    //   correct_answer: 2,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 316,
    //   lesson_id: 53,
    //   question_number: 1,
    //   question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
    //   answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
    //   correct_answer: 0,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 317,
    //   lesson_id: 53,
    //   question_number: 2,
    //   question_text: "How does data augmentation improve the performance of semantic segmentation models?",
    //   answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 318,
    //   lesson_id: 53,
    //   question_number: 3,
    //   question_text: "What is the significance of class imbalance in semantic segmentation?",
    //   answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
    //   correct_answer: 3,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 319,
    //   lesson_id: 54,
    //   question_number: 1,
    //   question_text: "What is the primary advantage of using dilated convolutions in semantic segmentation?",
    //   answers: ["Increased receptive field without loss of resolution", "Improved robustness to noise and artifacts", "Faster convergence during training", "Enhanced feature representation for object recognition"],
    //   correct_answer: 2,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 320,
    //   lesson_id: 54,
    //   question_number: 2,
    //   question_text: "How does skip connection architecture improve semantic segmentation performance?",
    //   answers: ["By reducing the computational complexity of the model", "By facilitating the training of deeper networks", "By enabling the fusion of low-level and high-level features", "By enforcing spatial constraints on predictions"],
    //   correct_answer: 0,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 321,
    //   lesson_id: 54,
    //   question_number: 3,
    //   question_text: "What role does the softmax function play in semantic segmentation?",
    //   answers: ["To generate pixel-wise probability distributions over classes", "To regularize the model during training", "To adjust the learning rate of the network", "To enforce spatial consistency in predictions"],
    //   correct_answer: 1,
    //   practice: true,
    //   points: 50
    // },
    // {
    //   id: 322,
    //   lesson_id: 54,
    //   question_number: 1,
    //   question_text: "What is the main advantage of using conditional random fields (CRFs) in semantic segmentation?",
    //   answers: ["Improved feature representation for object recognition", "Enhanced spatial consistency in predictions", "Reduced computational complexity of the model", "Faster convergence during training"],
    //   correct_answer: 2,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 323,
    //   lesson_id: 54,
    //   question_number: 2,
    //   question_text: "How does data augmentation improve the performance of semantic segmentation models?",
    //   answers: ["By increasing the diversity of training samples", "By reducing the amount of labeled data required", "By enforcing spatial constraints on predictions", "By accelerating the inference speed of the model"],
    //   correct_answer: 1,
    //   practice: false,
    //   points: 50
    // },
    // {
    //   id: 324,
    //   lesson_id: 54,
    //   question_number: 3,
    //   question_text: "What is the significance of class imbalance in semantic segmentation?",
    //   answers: ["It leads to biases in model predictions", "It affects the convergence rate of the training process", "It impacts the accuracy of object localization", "It influences the distribution of object categories in the dataset"],
    //   correct_answer: 3,
    //   practice: false,
    //   points: 50
    // }
  // ]);
};
