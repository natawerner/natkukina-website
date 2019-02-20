function setup() {
  loadJSON("http://api.are.na/v2/channels/silent-video-upir_69b-we/contents", gotData)
}

function gotData(data) {
  info = data;
}

function useData() {
  if (info){
    console.log(data);
    console.log(info);
  }
}
