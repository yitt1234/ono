import pygame
import random

pygame.init()
def print_text(string, y):

                text = font.render(string, True, 'BLACK')#입력값을 바탕으로 string을 랜더링
                text_rect = text.get_rect()
                text_rect.centerx = screen.get_rect().centerx #화면 x좌표 중앙의 위치 설정
                text_rect.y = y #화면 y좌표 위치 설정
                screen.blit(text, text_rect)

#1: 게임 화면 설정 
Window_Size = (800, 600)
name = "pingpong game" 
screen = pygame.display.set_mode(Window_Size)
pygame.display.set_caption(name)


#배경음악
toast_sound = pygame.mixer.Sound("C:/Users/user/Downloads/h.mp3")
#효과음
test_sound = pygame.mixer.Sound("C:/Users/user/Downloads/Mo.mp3")
test_sound.play()

#2. 전역변수 선언
x = 0; y = 0;
paddlex = 325; paddley = 550;
paddlew = 150; paddleh = 25;
points = 0 #
bug = "1000"
goals = "100000000000" #~~/11추가 
#5  byeonsuseoljeong 변수설정 
a = 50; b = 50;#
x = (Window_Size[0] - a) / 2;  y = 1;
vel_x = 5
vel_y = 5

#3. 프레임 관련 설정
clock = pygame. time.Clock()


#4. 텍스트 관련 변수 설정
font = pygame.font.SysFont("Times", 24)
scroce_font =  pygame.font.SysFont("Times", 100)

#1. 창 x누르면 while문 빠져나가 창닫음.
keep_going = True
while keep_going:
                for event in pygame.event.get():
                                if event.type == pygame.QUIT:
                                                keep_going = False

                #3. 이벤트 추가[변수 추가] + 프레임 추가
                if pygame.key.get_pressed()[pygame.K_LEFT]:
                                paddlex -= 9
                elif pygame.key.get_pressed()[pygame.K_RIGHT]:
                                paddlex += 9
                if  pygame.key.get_pressed()[pygame.K_SPACE]:
                              points += 1
                

#5. 공이 자동으로 튕기면서 움직이기
                x += vel_x
                y += vel_y

                if y >= (Window_Size[1] - b) or y <= 0:
                                vel_y = -vel_y
                                #points += 1
                if x >= (Window_Size[0] - a) or x <= 0:
                                vel_x = -vel_x




                                #패들로 공 받아내기
                if y+b >= paddley and y+b <= paddley+paddleh and vel_y > 0:
                                if x + a/2 >= paddlex and x + a/2 <= paddlex + paddlew:
                                    #공을 받아낼때마다 속도가 빨라지는 코드
                                                vel_x *= 1.05
                                                vel_y *= -1.05
                                                
                                                points += 1 #점수 1씩증가
                                                toast_sound.play()
                                               
                                        
                                                
                                                
                                                

                                                
                #2: 도형 그리기
                background = pygame.image.load("C:/Users/user/Pictures/snow.jpg")
                screen.blit(background, (0 ,0))
                pygame.draw.circle(screen, 'YELLOW',(x, y), 30, 0) 
                pygame.draw.rect(screen, 'RED', (paddlex, paddley, paddlew, paddleh), 0)
                pygame.display.update()
                
                


                #4.텍스트 렌더링
                draw_string = "Point: " + str(points)
             
                #6. 특정조건을 만족하면 글씨(함수) & 게임종료하도록(Win/게임진행 중/lose)
                #6.1 상황에 따라 다르게, 글씨 렌더링
                if points == int(goals): #Win
                                print_text("You win", 240)
                                print_text("Press F1 to restart", 265)
                                print_text("press ESC to Quit", 290)
                                pygame.display.update()
                                

                else:
                                print_text(draw_string, 10)
                                pygame.display.update()

                if y>= 600-b:
                                print_text("You lose", 240)
                                print_text("Press F1 to restart.", 265)
                                print_text("Press ESC to Quit.", 290)
                                test_sound.stop()
                                pygame.display.update()
                                
                if points == int(bug):
                    print_text("I think you used bug", 240)
                    print_text("Press F1 to restart.", 265)
                    
                    test_sound.stop()
                    pygame.display.update()
                else:
                    print_text(draw_string, 10)
                    pygame.display.update()
                                #추가 ㅁ;ㅣ나얼;민아ㅓㄹ;ㅁㄴ이ㅏㅓㄹ;미
                
                while points == int(bug):
                                event = pygame.event.wait()
                                if pygame.key.get_pressed()[pygame.K_F1]:
                                                test_sound.play()
                                                x=0; y=0; points=0; vel_x=5; vel_y=5;
                                elif pygame.key.get_pressed()[pygame.K_ESCAPE]:
                                                y = 0
                                                keep_going = False
                                               

                


                                #6.2 상황에 따라 게임 진행&게임 종료.
                while points == int(goals):
                                event = pygame.event.wait()
                                if pygame.key.get_pressed()[pygame.K_F1]:
                                                x=0; y=0; points=0; vel_x=5; vel_y=5;
                                               

                                elif pygame.key.get_pressed()[pygame.K_ESCAPE]:
                                                y = 0
                                                keep_going = False
                while y >= 600-b:
                                event = pygame.event.wait()

                                if pygame.key.get_pressed()[pygame.K_F1]:
                                                x=0; y=0; points=0; vel_x=5; vel_y=5;
                                                test_sound.play()
                                elif pygame.key.get_pressed()[pygame.K_ESCAPE]:
                                                y = 0
                                                keep_going = False

   #lose
                
                #3. 프레임 추가
                clock.tick(60) 

pygame.quit()                                       

                
