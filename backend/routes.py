from flask import Blueprint, jsonify, request

bp = Blueprint('api', __name__)

@bp.route('/auth/signup', methods=['POST'])
def signup():
    return jsonify({'message': 'signup'}), 201

@bp.route('/auth/login', methods=['POST'])
def login():
    return jsonify({'message': 'login'})

@bp.route('/users/me', methods=['GET'])
def get_me():
    return jsonify({})

@bp.route('/users/me', methods=['PUT'])
def update_me():
    return jsonify({})

@bp.route('/players', methods=['GET'])
def get_players():
    return jsonify([])

@bp.route('/players/<int:player_id>', methods=['GET'])
def get_player(player_id):
    return jsonify({'player_id': player_id})

@bp.route('/matches', methods=['POST'])
def create_match():
    data = request.get_json(force=True)
    return jsonify({'status': 'requested', 'target_player_id': data.get('target_player_id')}), 201

@bp.route('/matches', methods=['GET'])
def list_matches():
    return jsonify([])

@bp.route('/matches/<int:match_id>/accept', methods=['POST'])
def accept_match(match_id):
    return jsonify({'status': 'accepted', 'match_id': match_id})

@bp.route('/chats/<int:player_id>/messages', methods=['GET'])
def get_messages(player_id):
    return jsonify([])

@bp.route('/chats/<int:player_id>/messages', methods=['POST'])
def post_message(player_id):
    data = request.get_json(force=True)
    return jsonify({'message': data.get('message'), 'player_id': player_id}), 201
