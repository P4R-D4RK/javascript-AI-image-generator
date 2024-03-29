const API_KEY = 'YOUR_OPENAI_API_KEY';
const submitIcon = document.querySelector('#submit-icon');
const inputElement = document.querySelector('input');
const imageSection = document.querySelector('.images-section');

const getImages = async () => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: inputElement.value,
      size: "1024x1024",
    }),
  };
  try {
    const response = await fetch('https://api.openai.com/v1/images/generations', options);
    const data = await response.json();
    // console.log(data);
    if(data) {
        const ImageContainer = document.createElement('div');
        ImageContainer.classList.add('image-container');
        const imageElement = document.createElement('img');
        imageElement.setAttribute('src', data.data[0].url)
        ImageContainer.append(imageElement);
        imageSection.append(ImageContainer);
    }
  } catch (error) {
    console.log(error);
  }
};

submitIcon.addEventListener('click', getImages);
