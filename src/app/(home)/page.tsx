import Image from "next/image";

export default function Home() {
  return (
    <>
      <section
        id="Services"
        className="container max-w-[1130px] mx-auto flex flex-col pt-[100px] gap-[30px]"
      >
        <h2 className="font-bold text-[32px] leading-[48px] text-center">
          We Ensure You <br />
          Fly With Us Forever
        </h2>
        <div className="flex justify-between">
          <div className="flex flex-col gap-[30px] w-[220px]">
            <div className="flex shrink-0 w-[70px] h-[70px] rounded-full items-center justify-center bg-flysha-light-purple">
              <Image
                width={35}
                height={35}
                src="/assets/images/icons/profile-2user.svg"
                alt="icon"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-2xl leading-[36px]">Talented Crew</p>
              <p className="leading-[30px] text-flysha-off-purple">
                Our jets protected by metal that can’t be destroyed.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] w-[220px]">
            <div className="flex shrink-0 w-[70px] h-[70px] rounded-full items-center justify-center bg-flysha-light-purple">
              <Image
                width={35}
                height={35}
                src="/assets/images/icons/shield-tick.svg"
                alt="icon"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-2xl leading-[36px]">Safe Guard</p>
              <p className="leading-[30px] text-flysha-off-purple">
                Our jets protected by metal that can’t be destroyed.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] w-[220px]">
            <div className="flex shrink-0 w-[70px] h-[70px] rounded-full items-center justify-center bg-flysha-light-purple">
              <Image
                width={35}
                height={35}
                src="/assets/images/icons/crown.svg"
                alt="icon"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-2xl leading-[36px]">Best Awards</p>
              <p className="leading-[30px] text-flysha-off-purple">
                Our jets protected by metal that can’t be destroyed.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] w-[220px]">
            <div className="flex shrink-0 w-[70px] h-[70px] rounded-full items-center justify-center bg-flysha-light-purple">
              <Image
                width={35}
                height={35}
                src="/assets/images/icons/building-3.svg"
                alt="icon"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-2xl leading-[36px]">
                Pickup at Home
              </p>
              <p className="leading-[30px] text-flysha-off-purple">
                Our jets protected by metal that can’t be destroyed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="Selected"
        className="container max-w-[1130px] mx-auto flex flex-col pt-[100px] gap-[30px]"
      >
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-[32px] leading-[48px] text-center">
            Best Selective
          </h2>
          <div className="flex gap-[10px]">
            <button className="flex shrink-0 w-10 h-10 items-center justify-center bg-white rounded-full">
              <Image
                width={25}
                height={25}
                src="/assets/images/icons/arrow-right.svg"
                className="rotate-180"
                alt="icon"
              />
            </button>
            <button className="flex shrink-0 w-10 h-10 items-center justify-center bg-white rounded-full">
              <Image
                width={25}
                height={25}
                src="/assets/images/icons/arrow-right.svg"
                alt="icon"
              />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-[30px]">
          <div className="flex flex-col gap-5">
            <div className="rounded-[30px] h-[310px] overflow-hidden">
              <Image
                width={100}
                height={100}
                src="/assets/images/thumbnail/thumbnail1.png"
                className="w-full h-[310px] object-cover"
                alt="thumbnail"
              />
            </div>
            <div className="flex gap-[14px] items-center">
              <div className="flex shrink-0 w-8 h-8">
                <Image
                  width={100}
                  height={100}
                  src="/assets/images/icons/crown-white.svg"
                  className="w-8 h-8"
                  alt="icon"
                />
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg">First Lounge</p>
                <p className="text-flysha-off-purple">Manhanggattan</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="rounded-[30px] h-[310px] overflow-hidden">
              <Image
                width={100}
                height={100}
                src="/assets/images/thumbnail/thumbnail2.png"
                className="w-full h-[310px] object-cover"
                alt="thumbnail"
              />
            </div>
            <div className="flex gap-[14px] items-center">
              <div className="flex shrink-0 w-8 h-8">
                <Image
                  width={100}
                  height={100}
                  src="/assets/images/icons/crown-white.svg"
                  className="w-8 h-8"
                  alt="icon"
                />
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg">Business First</p>
                <p className="text-flysha-off-purple">Gulfstream 109-BB</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="rounded-[30px] h-[310px] overflow-hidden">
              <Image
                width={100}
                height={100}
                src="/assets/images/thumbnail/thumbnail3.png"
                className="w-full h-[310px] object-cover"
                alt="thumbnail"
              />
            </div>
            <div className="flex gap-[14px] items-center">
              <div className="flex shrink-0 w-8 h-8">
                <Image
                  width={100}
                  height={100}
                  src="/assets/images/icons/crown-white.svg"
                  className="w-8 h-8"
                  alt="icon"
                />
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg">Pickup at Home</p>
                <p className="text-flysha-off-purple">Bentley Banta</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="rounded-[30px] h-[310px] overflow-hidden">
              <Image
                width={100}
                height={100}
                src="/assets/images/thumbnail/thumbnail4.png"
                className="w-full h-[310px] object-cover"
                alt="thumbnail"
              />
            </div>
            <div className="flex gap-[14px] items-center">
              <div className="flex shrink-0 w-8 h-8">
                <Image
                  width={100}
                  height={100}
                  src="/assets/images/icons/crown-white.svg"
                  className="w-8 h-8"
                  alt="icon"
                />
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg">Fly Roam</p>
                <p className="text-flysha-off-purple">Capung A19-22</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="Testimonials"
        className="w-full flex flex-col pt-[100px] gap-[30px]"
      >
        <div className="flex flex-col gap-[6px] items-center">
          <h2 className="font-bold text-[32px] leading-[48px] text-center">
            Best Selective
          </h2>
          <p className="font-medium text-flysha-off-purple">
            We gave them all the best experiences ever
          </p>
        </div>
        <div className="testimonial-slider w-full overflow-hidden">
          <div className="slider flex shrink-0 w-max">
            <div className="animate-[slide_15s_linear_infinite] flex gap-[30px] pl-[30px] items-center h-[228px]">
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      src="/assets/images/photos/Group 47.png"
                      height={300}
                      width={300}
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      src="/assets/images/photos/Group 47.png"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      src="/assets/images/photos/Group 47.png"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      src="/assets/images/photos/Group 47.png"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-[slide_15s_linear_infinite] flex gap-[30px] pl-[30px] items-center h-[228px]">
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      src="/assets/images/photos/Group 47.png"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      width={300}
                      height={300}
                      src="/assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      src="/assets/images/photos/Group 47.png"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      src="/assets/images/photos/Group 47.png"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-[slide_15s_linear_infinite] flex gap-[30px] pl-[30px] items-center h-[228px]">
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      src="/assets/images/photos/Group 47.png"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      src="/assets/images/photos/Group 47.png"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      src="/assets/images/photos/Group 47.png"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                  <Image
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    width={300}
                    height={300}
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      src="/assets/images/photos/Group 47.png"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="flex flex-col justify-between mt-[150px] border-t-[6px] border-flysha-light-purple p-[100px_10px_30px]">
        <div className="container max-w-[1130px] mx-auto flex justify-between relative">
          <Image
            width={300}
            height={3000}
            src="/assets/images/icons/Ellipse 4.png"
            className="absolute h-[300px] -top-[45px] -left-[20px] z-0"
            alt="icon"
          />
          <div className="flex shrink-0 h-fit z-10">
            <Image
              width={150}
              height={150}
              src="/assets/images/logos/logo.svg"
              alt=""
            />
          </div>
          <div className="flex gap-[100px] z-10">
            <div className="flex flex-col gap-5">
              <p className="font-bold text-lg">Explore</p>
              <a
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                Services
              </a>
              <a
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                Testimonials
              </a>
              <a
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                Pricing
              </a>
              <a
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                About
              </a>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-bold text-lg">Services</p>
              <a
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                Pickup at Home
              </a>
              <a
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                First Lounge Plus
              </a>
              <a
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                Business Room
              </a>
              <a
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                Bentley Power
              </a>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-bold text-lg">About</p>
              <a
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                Company Profile
              </a>
              <a
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                Our Investors
              </a>
              <a
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                Media Press
              </a>
              <a
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                Careers
              </a>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-bold text-lg">Connect</p>
              <a
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300 flex items-center gap-[6px]"
              >
                <Image
                  width={25}
                  height={25}
                  src="/assets/images/icons/call.svg"
                  alt="icon"
                />
                +1 2208 1996
              </a>
              <a
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300 flex items-center gap-[6px]"
              >
                <Image
                  width={25}
                  height={25}
                  src="/assets/images/icons/dribbble.svg"
                  alt="icon"
                />
                buildwithangga
              </a>
              <a
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300 flex items-center gap-[6px]"
              >
                <Image
                  width={25}
                  height={25}
                  src="/assets/images/icons/sms.svg"
                  alt="icon"
                />
                team@bwa.com
              </a>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-[60px] text-[#A0A0AC] text-sm z-10">
          All Rights Reserved. Copyright BuildWithAngga 2024.
        </p>
      </footer>
    </>
  );
}
