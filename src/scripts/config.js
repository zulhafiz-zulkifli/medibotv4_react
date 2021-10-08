const Config = {
	ROSBRIDGE_SERVER_IP : window.location.hostname,
	ROSBRIDGE_SERVER_PORT : "9090",
	RECONNECTION_TIMER : 200,
	CMD_VEL_TOPIC : "/cmd_vel",
	ODOM_TOPIC : "/odom",
	PWM_TOPIC : "/pwm",
	PWM_TURN_TOPIC : "/pwm_turn",
	PWM_CONTROL_TOPIC : "/pwm_control",
	ENCODER_LEFT_TOPIC : "/lwheel",
	ENCODER_RIGHT_TOPIC : "/rwheel",
	FRONT_CAM_SRC : "http://"+window.location.hostname+":8080/stream?topic=/usb_cam/image_raw",
	ERROR_CAM_SRC : "images/novideo.jpg"
};

export default Config;